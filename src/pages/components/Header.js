import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Logout from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '../../images/gsbLogo.png'


export default function Header({ props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [headerColor, setHeaderColor] = useState(props.color);
  if (!headerColor) {
    setHeaderColor('white')
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{backgroundColor:headerColor}}>
        <Box sx={{
          display: 'grid', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(10, 1fr)',
          paddingTop: 3, borderBottom: 2, paddingBottom: 3, marginLeft: 15, marginRight: 15,
          borderColor: 'black', height: '10%', backgroundColor: headerColor
        }}>
          <IconButton>
            <img src={Logo} alt="GSB Logo" width={100} />
          </IconButton>
          <Typography></Typography>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Mainpage</IconButton>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Tutorial</IconButton>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Resource</IconButton>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Community</IconButton>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Status</IconButton>
          <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Feedback</IconButton>
          <Typography></Typography>


          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, color: 'black' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleOutlinedIcon sx={{ width: 32, height: 32 }}></AccountCircleOutlinedIcon>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon sx={{ color: 'black' }} fontSize='small' />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon sx={{ color: 'black' }} fontSize='small' />
            </ListItemIcon>
            My account
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <PersonAddOutlinedIcon sx={{ color: 'black' }} fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsOutlinedIcon sx={{ color: 'black' }} fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout sx={{ color: 'black' }} fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
}