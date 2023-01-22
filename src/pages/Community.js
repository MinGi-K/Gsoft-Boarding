import Header from "./components/Header";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import community from '../../src/images/community.png'
import sport from '../../src/images/sport.png'
import jam from '../../src/images/jam.png'
import art from '../../src/images/art.png'
import IconButton from '@mui/material/IconButton';
import { Form } from "react-router-dom";
import { Label } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


const Community = () => {
    return (
        <>
        <Header props={{color: '#EECD86'}}>{{backgroundColor: '#EECD86'}}</Header>
        <Box sx={{backgroundColor:'#EECD86'}}>
            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, height: '100%', borderBottom: 2, color: 'black'}}>
                <MenuItem sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}}>03. COMMUNITY</Typography> 
                    <ListItemIcon>
                        <PeopleOutlineIcon sx = {{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}} />
                    </ListItemIcon>
                </MenuItem>
                <img src={community} alt="community" width={"100%"} alignItems='center' />
                <Typography sx={{paddingTop: 3, color: 'black'}}>
                Build strong bonds between coworkers by participating in our socializing functions. Find a softer who has the same hobby as you.                
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', paddingTop: 7, paddingBottom: 7,
            marginLeft: 15, marginRight: 15, height: '100%', borderBottom: 2, color: 'black', justifyContent: 'space-between'}}>
                <Box sx={{width: 600, marginLeft: 3}}>
                    <Typography sx={{color: 'black', fontSize: 'xx-large', paddingBottom: 2, fontWeight: 'bold'}}>Community for Softer</Typography>
                    <Typography sx={{display: 'flex'}}>Reducing the rates of turnover could be achieved by building a stronger bond between coworkers. 
                    We provide the space to let people engage in social activity which will destress and help softers become closer to one another.
                    </Typography>
                </Box>
                <Box sx={{width: 500, color: 'black'}}>
                    <MenuItem sx={{justifyContent: 'space-between', borderBottom: 2}}>
                        <Typography sx={{color: 'black', fontSize: 'large'}}>Category A</Typography> 
                        <ListItemIcon>
                            <CallMadeIcon sx = {{color: 'black', fontSize: 'large'}} />
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem sx={{justifyContent: 'space-between', borderBottom: 2}}>
                        <Typography sx={{color: 'black', fontSize: 'large'}}>Category B</Typography> 
                        <ListItemIcon>
                            <CallMadeIcon sx = {{color: 'black', fontSize: 'large'}} />
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem sx={{justifyContent: 'space-between', borderBottom: 2}}>
                        <Typography sx={{color: 'black', fontSize: 'large'}}>Category C</Typography> 
                        <ListItemIcon>
                            <CallMadeIcon sx = {{color: 'black', fontSize: 'large'}} />
                        </ListItemIcon>
                    </MenuItem>

                </Box>

            </Box>


            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3,
            paddingLeft: 15, paddingRight: 15 }}>
                <Typography sx={{color: 'black', fontSize: 'xxx-large'}}>Find Your Softmates</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(3, 1fr)',
                    paddingTop: 3,  paddingBottom: 20, paddingLeft: 15, paddingRight: 15, borderColor: 'black', justifyContent: 'space-between'}}>
                    <MenuItem sx={{width: 350, textAlign: 'left'}}>
                        <img src={sport} alt="sport" width={"100%"} alignItems='center' />
                    </MenuItem>
                    
                    <MenuItem sx={{width: 350, textAlign: 'center'}}>
                        <img src={jam} alt="jam" width={"100%"} alignItems='center' />
                    </MenuItem>

                    <MenuItem sx={{width: 350, textAlign: 'center'}}>
                        <img src={art} alt="art" width={"100%"} alignItems='center' />
                    </MenuItem>
            </Box>
            
        </Box>

        </>
        
    
    )
    
}

export default Community;