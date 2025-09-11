import React from 'react';
import Asider from './Asider';
import Navbar from './Navbar';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router';
import Employee from './Employee';

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  const layoutStyle = {
    overflow: 'hidden',
    width: '100vw',
  };

  return (
    <div>
      <Layout style={layoutStyle} className="!h-screen ">
        <Sider className="!bg-gray-100  border-r-1  border-gray-300 ">
          <div className="border-b border-gray-300">
            <div className="h-25  text-3xl font-semibold text-blue-500 flex items-center pl-10">
              RS-TECH
            </div>
          </div>
          <Asider />
        </Sider>
        <Layout>
          <Header className=" !bg-gray-100 border-gray-300 !h-25 !p-0">
            <Navbar />
          </Header>
          <Content className="bg-white !overflow-y-auto !overflow-x-hidden  ">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
