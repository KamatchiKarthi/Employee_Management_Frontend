import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, message } from 'antd';
import { getEmployee, DeleteEmployee } from '../api/employee';
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from 'react-router';
import { IoMdEye } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function EmployeeList() {
  const [loading, setloading] = useState(false);
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        setloading(true);
        const response = await getEmployee();
        setEmployee(response.data);
        console.log('ALL EMPLOYEE', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchEmployee();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleDelete = async id => {
    try {
      await DeleteEmployee(id);
      message.success('deleted successfully');
      setEmployee(prevemplyee => prevemplyee.filter(emp => emp.ID !== id));
    } catch (error) {
      console.log(error);
      message.error('something wrong deleting employee data');
    }
  };

  const columns = [
    {
      title: 'Employee Name',
      dataIndex: 'NAME',
      key: 'name',
    },
    {
      title: 'Employee Id',
      dataIndex: 'ID',
      key: 'ID',
    },
    {
      title: 'Department',
      dataIndex: 'DEPARTMENT',
      key: 'Department',
    },
    {
      title: 'Designation',
      dataIndex: 'DESIGNATION',
      key: 'Designation',
    },
    {
      title: 'Project',
      dataIndex: 'PROJECT',
      key: 'Project',
    },
    {
      title: 'Type',
      dataIndex: 'EMPLOYEE_TYPE',
      key: 'Type',
    },
    {
      title: 'Status',
      dataIndex: 'EMPLOYEE_STATUS',
      key: 'Status',
    },

    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="actioncell !text-black">
          <Button
            type="link"
            onClick={() => navigate(`/employee/${record.ID} `)}
          >
            <IoMdEye />
          </Button>
          <Button type="link" onClick={() => navigate(`/edit/${record.ID}`)}>
            <CiEdit />
          </Button>

          <Button
            type="link"
            danger
            onClick={() =>
              Modal.confirm({
                title: 'Are you sure you want to delete this?',
                onOk: () => handleDelete(record.ID),
              })
            }
          >
            <RiDeleteBin5Line />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-5 mx-5">
      <Table
        className="border-gray-200 border rounded-lg "
        rowKey="ID"
        dataSource={employee}
        columns={columns}
        
        pagination={{ pageSize: 5 }}
      />
      ;
    </div>
  );
}
