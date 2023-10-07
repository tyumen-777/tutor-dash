import { css } from '@emotion/react'
import { theme } from '../../styles/theme'
import { SIDEBAR_MENU } from './sidebar.constants'
import { SidebarItem } from './components/SidebarItem'
import { MenuList } from '@mui/material'


export const Sidebar = () => {
  return (
    <MenuList css={styles.sidebar}>
      {SIDEBAR_MENU.map(item => <SidebarItem {...item} key={item.link} />)}
    </MenuList>
  )
}

const styles = {
  sidebar: css({
    width: 250,
    height: 'calc(100vh - 64px)',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 2),
    borderInlineEnd: '1px solid rgba(72, 48, 24, 0.04)'
  })
}
