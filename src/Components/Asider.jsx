import React from 'react';
import { Menu } from 'antd';
import { RxDashboard } from 'react-icons/rx';
import { MdPeople } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { BiSolidMessageAltDetail } from 'react-icons/bi';

export default function Asider() {
  const items = [
    {
      key: '1',
      label: 'Dashboard',
      icon: <RxDashboard />,
      navidate: '/dashboard',
    },
    {
      key: '2',
      label: 'Employee',
      icon: <MdPeople />,
      navidate: '/dashboard',
    },
    {
      key: '3',
      label: 'Calender',
      icon: <SlCalender />,
      navidate: '/dashboard',
    },
    {
      key: '4',
      label: 'Message',
      icon: <BiSolidMessageAltDetail />,
      navidate: '/dashboard',
    },
  ];
  return (
    <div>
      <div className="mt-10 ">
        <Menu
          className=" !bg-gray-100 flex flex-col items-center !mr-6 !border-none "
          defaultSelectedKeys={['2']}
          items={items}
        />
      </div>
    </div>
  );
}
