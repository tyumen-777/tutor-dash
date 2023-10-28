import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Layout } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content } from "antd/es/layout/layout"


export const MainLayout = () => {

  // Render
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout hasSider>
        <Sider><Sidebar /></Sider>
        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}