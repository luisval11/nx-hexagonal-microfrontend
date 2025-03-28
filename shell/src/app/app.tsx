import { EuroOutlined, HomeOutlined, MenuOutlined, BulbOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

const { Sider, Content } = Layout;
const Financials = React.lazy(() => import('financials/Module'));
const Consumption = React.lazy(() => import('consumption/Module'));

enum MODULES_KEYS {
  SHELL = 'shell',
  FINANCIALS = 'financials',
  CONSUMPTION = 'consumption',
}

const TITLES: { [key: string]: string } = {
  [MODULES_KEYS.SHELL]: 'Home',
  [MODULES_KEYS.FINANCIALS]: 'Financials',
  [MODULES_KEYS.CONSUMPTION]: 'Consumption',
};
const getTitle = (module: string) => TITLES[module] || 'Home';
const items = [
  {
    key: MODULES_KEYS.SHELL,
    icon: <HomeOutlined />,
    label: <Link to="/">Home</Link>,
  }, {
    key: MODULES_KEYS.FINANCIALS,
    icon: <EuroOutlined />,
    label: <Link to="/financials">Financials</Link>,
  }, {
    key: MODULES_KEYS.CONSUMPTION,
    icon: <BulbOutlined />,
    label: <Link to="/consumption">Consumption</Link>,
  },
]

export function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [module, setModule] = useState(MODULES_KEYS.SHELL as string);
  return (
    <React.Suspense fallback={null}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color: '#fff',
              width: '100%',
              height: 32,
              margin: '8px 0 0',
            }}
          />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[module]}
            items={items}
            onClick={({ key }) => setModule(key)}
          />
        </Sider>
        <Layout>
          <Card style={{ margin: '1rem 1rem 0' }}>
            <x-header title={getTitle(module)}></x-header>
          </Card>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <React.Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<NxWelcome title="shell" />} />
                <Route path="/financials" element={<Financials />} />
                <Route path="/consumption" element={<Consumption />} />
              </Routes>
            </React.Suspense>
          </Content>
          <x-footer></x-footer>
        </Layout>
      </Layout>
    </React.Suspense>
  );
}

export default App;
