import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '/Users/ashley.oh/Desktop/ConUHacks/Gsoft-Boarding/src/images/gsbLogo.png'


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(10, 1fr)',
    paddingTop: 3, borderBottom: 2, paddingBottom: 3, paddingLeft: 15, paddingRight: 15, backgroundColor: 'white',
    borderColor: 'black', height: '10%' }}>
        <IconButton>
          <img src={Logo} alt="GSB Logo" width={100} />
        </IconButton>
        <IconButton></IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Mainpage</IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Tutorial</IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Resource</IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Community</IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Status</IconButton>
        <IconButton sx={{ minWidth: 100, fontSize: 'large', color: 'black' }}>Feedback</IconButton>
        <IconButton></IconButton>


        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 , color: 'black'}}
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
            <AccountCircleOutlinedIcon sx = {{color: 'black'}} fontSize='small'/>
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleOutlinedIcon sx = {{color: 'black'}} fontSize='small'/>
          </ListItemIcon>
          My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAddOutlinedIcon sx = {{color: 'black'}} fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon sx = {{color: 'black'}} fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout sx = {{color: 'black'}} fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}