import { Button, Typography } from 'antd'
import styles from './styles.module.css'
import { LogoutOutlined } from '@ant-design/icons'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Typography>Артемий Пудовкин</Typography>
        <Button icon={<LogoutOutlined />} />
      </div>
    </div>
  )
}


// const StyledHeader = styled('header')(({ theme }) => ({
//     height: 64,
//     padding: theme.spacing(1, 2),
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
// }))


// const styles = {
//     user: css({
//         marginLeft: 'auto',
//     }),
//     button: css({
//         color: 'black'
//     })
// }