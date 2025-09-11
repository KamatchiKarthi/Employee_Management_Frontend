import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoArrowBackSharp } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import { Row, Col } from 'antd';
import { useParams } from 'react-router';
import { getEmployeeById } from '../api/employee';
import LoadingSpinner from './LoadingSpinner';

export default function EmployeeDetails() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        setEmployee(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <LoadingSpinner />;
  }

  console.log('Employee Details:', employee);
  return (
    <div className="mt-5 p-5">
      <div className="flex items-center backhead !font-bold gap-5 ">
        <button onClick={() => navigate('/')}>
          <IoArrowBackSharp />
        </button>
        <h1 className="!mb-0">View Employee Details</h1>
      </div>
      <div className="flex gap-3 mt-7 ml-3 items-center font-bold  text-sky-500 text-xl border-b-2 border-sky-500 pb-2 w-fit">
        <IoPersonSharp />
        <h1 className="!mb-0">Personal Information</h1>
      </div>
      <div className="mt-5">
        <img />

        <div className="mt-3 ml-3">
          {employee ? (
            <div className="listing mr-4">
              <Row gutter={[24, 24]} className="mb-5">
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Name</h3>
                    <p>{employee.NAME}</p>
                  </div>
                </Col>
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">EmployeeId</h3>
                    <p>{employee.ID}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[24, 24]} className="mb-5">
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Department</h3>
                    <p>{employee.DEPARTMENT}</p>
                  </div>
                </Col>
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Designation</h3>
                    <p>{employee.DESIGNATION}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[24, 24]} className="mb-5">
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Project</h3>
                    <p>{employee.PROJECT}</p>
                  </div>
                </Col>
                <Col span={12} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Type</h3>
                    <p>{employee.EMPLOYEE_TYPE}</p>
                  </div>
                </Col>
              </Row>
              <Row gutter={[24, 24]} className="mb-5">
                <Col span={24} className=" border-b-2 border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-gray-500">Status</h3>
                    <p>{employee.EMPLOYEE_STATUS}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ) : (
            <p>No employee data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
