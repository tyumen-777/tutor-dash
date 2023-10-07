import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { css } from '@emotion/react'


export const Layout = () => {
  return (
    <>
    <Header/>
    <div css={styles.main}>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

const styles = {
  main: css({
      display: 'flex'
  })
}