import { Box, Typography, styled } from "@mui/material"
import { css } from '@emotion/react'
import { Icon } from '../utils/Icon/Icon'

export const Header = () => {
    return (
        <StyledHeader>
            <Typography css={styles.user}>Пудовкин Артемий</Typography>
            <Box display='flex' alignItems='center' ml={2}>
                <Icon name='exit' />
            </Box>
        </StyledHeader>
    )
}

const StyledHeader = styled('header')(({ theme }) => ({
    height: 64,
    padding: theme.spacing(1, 2),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
}))


const styles = {
    user: css({
        marginLeft: 'auto',
    })
}