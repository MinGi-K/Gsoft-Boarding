import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '/Users/ashley.oh/Desktop/ConUHacks/Gsoft-Boarding/src/images/gsbLogo.png'
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
    color: '#404040',
    height: 8,
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 12,
      background: 'unset',
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: '#52af77',
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(45deg)',
      },
    },
  });


// const theme = createTheme({
//     palette: {
//       secondary: {
//         main: 'black'
//       }
//     }
//   });
  

export default function HomeHeader() {
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
    paddingTop: 3, paddingLeft: 15, paddingRight: 15, backgroundColor: 'white',
    borderColor: 'black' }}>
        <div>
          <img src={Logo} alt="GSB Logo" width={100} />
        </div>
        <Typography></Typography>
        <Typography sx={{ minWidth: 125, fontSize: 'large', color: 'black' }}></Typography>
        <Typography sx={{ minWidth: 125, fontSize: 'large', color: 'black' }}></Typography>
        <Typography sx={{ minWidth: 120, fontSize: 'large', color: 'black' }}></Typography>
        <Typography sx={{ minWidth: 120, fontSize: 'large', color: 'black' }}></Typography>
        <Typography sx={{ minWidth: 120, fontSize: 'large', color: 'black' }}></Typography>
        <Typography sx={{  fontSize: 'large', color: 'black' }}>How are you, </Typography>
        <Typography sx={{ fontSize: 'large', color: 'black', fontWeight: 'bold' }}>John? </Typography>



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
      <Box sx={{ paddingLeft: 15, paddingRight: 15, backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{width: 400}}>
            <Typography sx = {{color: 'black'}} gutterBottom>Feeling</Typography>
                
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={20}
                />
            <Typography sx = {{color: 'black'}} gutterBottom>Goal</Typography>
                <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={80}
                />
            <Typography sx = {{color: 'black', display: 'flex', justifyContent: 'flex-end'}} gutterBottom>Keep up the good work!</Typography>
        </Box>
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