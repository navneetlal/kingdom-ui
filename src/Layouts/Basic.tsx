import { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Dropdown, Typography, Button, Col, Row } from 'antd';
import { GroupOutlined, UserOutlined, SettingOutlined, DownOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';

import { createUseStyles } from 'react-jss';
import RouterComponent from '../routes';

const { Header, Content, Sider } = Layout;

const useStyles = createUseStyles({
  logo: {
    float: "left",
    width: 120,
    height: 31,
    margin: "16px 24px 16px 0px",
    background: "rgba(255, 255, 255, 0.3)",
  },
  siteLayoutBackground: {
    background: "#fff"
  },
  kingdomSelector: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
})

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Button type="text" icon={<PlusOutlined />}>New Kingdom</Button>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">Consignment</Menu.Item>
    <Menu.Item key="2">IntuParcel</Menu.Item>
  </Menu>
);

export default function BasicLayout() {
  const classes = useStyles();
  return (
    <Layout>
      <Header>
        <Typography.Text strong style={{ color: 'white', fontSize: 20 }}>
          Kingdom
        </Typography.Text>
      </Header>
      <Layout>
        <Sider width={200} className={classes.siteLayoutBackground}>
          <Row justify="center" align="middle">
            <Col span={24}>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button block type="primary" size="large" className={classes.kingdomSelector} onClick={e => e.preventDefault()}>
                  Master <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<GroupOutlined />}>
              <NavLink to="/clans">Clans</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>Nobles</Menu.Item>
            <Menu.Item key="3" icon={<UnorderedListOutlined />}>Responsibilities</Menu.Item>
            <Menu.SubMenu key="sub" icon={<SettingOutlined />} title="Settings">
              <Menu.Item key="4">Clans</Menu.Item>
              <Menu.Item key="5">Nobles</Menu.Item>
              <Menu.Item key="6">Responsibilities</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className={classes.siteLayoutBackground}
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <RouterComponent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}