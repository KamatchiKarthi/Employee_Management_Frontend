import React, { useEffect } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import { Form, Input, Upload, message, Select, Button, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { IoPersonSharp } from 'react-icons/io5';
import { useState } from 'react';
import {
  CreateEmpolyee,
  getEmployeeById,
  updateEmployee,
} from '../api/employee';
import { useNavigate, useParams } from 'react-router';
// import { useForm } from 'antd/es/form/Form';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
export default function EmployeeForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
    navigate('/');
  };
  const handleCancel = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchEmployee = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const response = await getEmployeeById(id);
        setEmployee(response.data[0]);
        console.log('employe old', response.data[0]);
        form.setFieldsValue(response.data[0]);
        console.log('employee id', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id, form]);

  const onFinish = async values => {
    try {
      if (id) {
        await updateEmployee(id, values);
        message.success('updated successfully');
      } else {
        console.log('sucess ', values);
        await CreateEmpolyee(values);
        message.success('created successfully');
      }
      navigate('/');
    } catch (error) {
      console.log(error);
      message.error('something wrong while saving employee data');
    }
  };

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  if (!employee) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-5 p-5 ">
      <div className="flex items-center backhead !font-bold gap-5 ">
        <button onClick={() => navigate(`/`)}>
          <IoArrowBackSharp />
        </button>
        <h1 className="!mb-0">
          {employee?.ID ? 'Edit Employee' : 'Add New Employee'}
        </h1>
      </div>
      <div className="flex gap-3 mt-7 items-center font-bold  text-sky-500 text-xl border-b-2 border-sky-500 pb-2 w-fit">
        <IoPersonSharp />
        <h1 className="!mb-0">Personal Information</h1>
      </div>
      <Form
        className="!mt-5 !ml-2"
        layout="vertical"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Form.Item
            label="Name"
            name={'NAME'}
            rules={[{ required: true, message: 'Please input  name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Employee ID"
            name={'ID'}
            rules={[{ required: true, message: 'Please input ID' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Department"
            name={'DEPARTMENT'}
            rules={[{ required: true, message: 'Please Department' }]}
          >
            <Select>
              <Select.Option value="design">Design</Select.Option>
              <Select.Option value="development">Development</Select.Option>
              <Select.Option value="testing">Testing</Select.Option>
              <Select.Option value="hr">Hr</Select.Option>
              <Select.Option value="finance">Finance</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Designation"
            name={'DESIGNATION'}
            rules={[{ required: true, message: 'Please input Designation' }]}
          >
            <Select>
              <Select.Option value="designlead">Design Lead</Select.Option>
              <Select.Option value="developer">Developer</Select.Option>
              <Select.Option value="tester">Tester</Select.Option>
              <Select.Option value="manager">Manager</Select.Option>
              <Select.Option value="seniordeveloper">
                Senior Developer
              </Select.Option>
              <Select.Option value="intern">Intern</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Project" name={'PROJECT'}>
            <Select>
              <Select.Option value="car rental">Car Rental</Select.Option>
              <Select.Option value="ecommerce">E Commerce</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Type"
            name={'EMPLOYEE_TYPE'}
            rules={[{ required: true, message: 'Please input Designation' }]}
          >
            <Select>
              <Select.Option value="office">Office</Select.Option>
              <Select.Option value="remote">Remote</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Status"
            name={'EMPLOYEE_STATUS'}
            rules={[{ required: true, message: 'Please input Designation' }]}
          >
            <Select>
              <Select.Option value="permanent">Permanent</Select.Option>
              <Select.Option value="part-time">Part-time</Select.Option>
              <Select.Option value="interns">Intership</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item>
          <div className="flex justify-end  gap-3 mt-5 pr-5">
            <div className="">
              <Button className="!p-5 !font-bold" onClick={showModal}>
                Cancel
              </Button>
              <Modal
                title="Modal"
                open={open}
                onOk={hideModal}
                onCancel={handleCancel}
                okText="Ok"
                cancelText="Cancel"
              >
                Are You Sure
              </Modal>
            </div>
            <Button
              type="primary"
              className="!p-5 !font-bold"
              htmlType="submit"
            >
              {employee?.ID ? 'Update' : 'Confirm'}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
