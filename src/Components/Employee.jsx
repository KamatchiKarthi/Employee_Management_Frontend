import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { CiSearch } from 'react-icons/ci';
import { CiCirclePlus } from 'react-icons/ci';
import EmployeeList from './EmployeeList';
import { useNavigate } from 'react-router';

export default function Employee() {
  const navigate = useNavigate();
  
  return (
    <div>
      <Row
        gutter={[24, 24]}
        align="middle"
        justify="space-between"
        className="mt-7  flex items-center"
      >
        <Col span={12} className="flex   !items-center">
          <h2 className="!text-4xl ml-10 !font-bold !mb-0">Employee</h2>
        </Col>
        <Col span={6} className="!p-0">
          <Form>
            <Form.Item className="!mb-0">
              <Input
                className="flex !items-center py-2 !text-xl !text-black !h-10 w-4/5 "
                placeholder="search"
                prefix={<CiSearch className="text-gray-500 text-2xl mr-3" />}
                size="large"
              />
            </Form.Item>
          </Form>
        </Col>
        <Col span={6} className="!flex items-center">
          <Button
            className=" !text-sm !mr-3 !flex !h-11 align-middle !bg-blue-500 !text-white w-4/5 "
            onClick={() => navigate('/form')}
          >
            <CiCirclePlus />
            <span>Add New Employee</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <EmployeeList />
        </Col>
      </Row>
    </div>
  );
}
