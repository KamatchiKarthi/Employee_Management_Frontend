import React from 'react';
import { Upload } from "antd";
import { CiSettings } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

export default function Navbar() {
  return (
    <div className="flex justify-end items-center pr-10 h-full text-4xl text-black gap-5">
      <CiSettings  className='rounded-2xl border p-1 border-gray-200 bg-gray-300'/>
      <IoMdNotificationsOutline className='rounded-2xl border p-1 border-gray-200 bg-gray-300' />
      <CgProfile />
    </div>
  );
}
