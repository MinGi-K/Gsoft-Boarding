import Header from "./components/Header";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import tutorial from '../../src/images/tutorial.png'
import tutorial1 from '../../src/images/tutorial1.png'

import sport from '../../src/images/sport.png'
import jam from '../../src/images/jam.png'
import art from '../../src/images/art.png'
import IconButton from '@mui/material/IconButton';
import { Form } from "react-router-dom";
import { Label } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';


const Resource = () => {
    return (
        <>
        <Header props={{color: '#6195C5'}}>{{backgroundColor: '#6195C5'}}</Header>
        <Box sx={{backgroundColor:'#6195C5'}}>
            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, height: '100%', borderBottom: 2, color: 'black'}}>
                <MenuItem sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}}>01. RESOURCE</Typography> 
                    <ListItemIcon>
                        <NoteAltOutlinedIcon sx = {{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}} />
                    </ListItemIcon>
                </MenuItem>
                <img src={tutorial} alt="tutorial" width={"100%"} alignItems='center' />
                <Typography sx={{paddingTop: 3, color: 'black'}}>Introducing vital law to assist and protect our softers from work hazards and incidents, as well as the records of duties from former softers to guide our new softers.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', paddingTop: 7, paddingBottom: 7,
            marginLeft: 15, marginRight: 15, height: '100%', borderBottom: 2, color: 'black', justifyContent: 'space-between'}}>
                <Box sx={{width: 600, marginLeft: 3}}>
                    <Typography sx={{color: 'black', fontSize: 'xx-large', paddingBottom: 2, fontWeight: 'bold'}}>Resources for Softer</Typography>
                    <Typography sx={{display: 'flex'}}>Incidents and assaults could happen to anyone, anytime in the workplace. Use these resources to learn how you can protect yourself and reach out when needed. Our aim is to support our softers 24/7 and prioritize their mental and physical health.
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
                        <img src={tutorial1} alt="tutorial1" width={"100%"} alignItems='center' />
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

export default Resource;