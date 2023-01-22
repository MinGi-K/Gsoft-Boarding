import Header from "./components/Header";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import status from '../../src/images/Status.png'
import IconButton from '@mui/material/IconButton';
import { Form } from "react-router-dom";
import { Label } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
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
      backgroundColor: '#E49E7A',
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

const Status = () => {
    return (
        <>
        <Header props={{color: '#E49E7A'}}>{{backgroundColor: '#E49E7A'}}</Header>
        <Box sx={{backgroundColor:'#E49E7A'}}>
            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, backgroundColor: '#E49E7A', borderBottom: 2, color: 'black'}}>
                <MenuItem sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}}>04. Your Status</Typography> 
                    <ListItemIcon>
                        <FavoriteBorderOutlinedIcon sx = {{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}} />
                    </ListItemIcon>
                </MenuItem>
                <img src={status} alt="status" width={"100%"} alignItems='center' />
                <Typography sx={{paddingTop: 3, color: 'black'}}>
                    Get to know and inform your community how happy you are working with other softers.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', paddingTop: 3,
            paddingLeft: 15, paddingRight: 15, backgroundColor: '#E49E7A', }}>
                <Typography sx={{color: 'black', fontSize: 'xxx-large'}}>Thank you for sharing your status today !</Typography>
            </Box>
            {/* <Box sx={{display: 'grid', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(3, 1fr)',
                    paddingTop: 3, borderBottom: 10, paddingBottom: 3, marginLeft: 15, marginRight: 15,
                    borderColor: 'black'}}> */}
                    {/* <Box sx={{width: 400}}>
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
                    </Box> */}

                {/* </Box> */}
        </Box>

        


        {/* <div style={{backgroundColor:'#E39183', height:'100vh', color: 'black'}}>05. Feedback</div> */}
        
{/* 
        <div>
          <img src={Tut} alt="Tut" width={390}/>
        </div> */}


        </>
        
    
    )
    
}

export default Status;