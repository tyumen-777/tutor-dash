import { Typography, styled } from "@mui/material"
import { SideBarMenu } from "../sidebar.interface"
import { Icon } from "../../../utils/Icon/Icon"
import { MenuItem } from '@mui/material'

export const SidebarItem = ({ name, icon }: SideBarMenu) => {
  return (

    <StyledWrapper>
      <Icon name={icon} />
      <Typography>{name}</Typography>
    </StyledWrapper>
  )
}

const StyledWrapper = styled(MenuItem)(({ theme }) => ({
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  borderRadius: theme.shape.borderRadius
}))