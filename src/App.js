import './App.css';
import About from './components/about';
import { Home } from './components/Home';
import Menu from './components/Menu';
import { NotFoundPage } from './components/NotFoundPage';
import Privacy from './components/Privacy';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Schools from './components/Schools';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  FileDoneOutlined,
  LoginOutlined,
  HomeOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Login from './components/Login';
const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:
                <Link to="/">
                  {React.createElement(HomeOutlined)}
                </Link>,
              label: 'Home',
            },
            {
              key: '2',
              icon:
                <Link to="/about">
                  {React.createElement(InfoCircleOutlined)}
                </Link>,
              label: 'About',
            },
            {
              key: '3',
              icon:
                <Link to="/privacy">
                  {React.createElement(FileDoneOutlined)}
                </Link>,
              label: 'Privacy',
            },
            {
              key: '4',
              icon:
                <Link to="/login">
                  {React.createElement(LoginOutlined)}
                </Link>,
              label: 'login',
            },
            {
              key: '5',
              icon:
                <Link to="/schools">
                  {React.createElement(ReadOutlined)}
                </Link>,
              label: 'Schools',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/privacy' element={<Privacy />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/schools' element={<Schools />}></Route>
            <Route path='*' element={<NotFoundPage />}> </Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;


