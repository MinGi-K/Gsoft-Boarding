import Header from "./components/Header";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import tutorial from '../../src/images/tutorial.png'
import tutorial1 from '../../src/images/tutorial1.png'
import Group7 from '../../src/images/Group7.png'
import sport from '../../src/images/sport.png'
import jam from '../../src/images/jam.png'
import art from '../../src/images/art.png'
import tutorialgroup1 from '../../src/images/tutorialgroup1.png'
import tutorialgroup2 from '../../src/images/tutorialgroup2.png'
import tutorialgroup3 from '../../src/images/tutorialgroup3.png'
import IconButton from '@mui/material/IconButton';
import { Form } from "react-router-dom";
import { Label } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';


const Tutorial = () => {
    return (
        <>
        <Header props={{color: '#AFCBF3'}}>{{backgroundColor: '#AFCBF3'}}</Header>
        <Box sx={{backgroundColor:'#AFCBF3'}}>
            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, height: '100%', borderBottom: 2, color: 'black'}}>
                <MenuItem sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}}>01. TUTORIAL</Typography> 
                    <ListItemIcon>
                        <NoteAltOutlinedIcon sx = {{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}} />
                    </ListItemIcon>
                </MenuItem>
                <img src={tutorial} alt="tutorial" width={"100%"} alignItems='center' />
                <Typography sx={{paddingTop: 3, color: 'black'}}>Tutorials help our softers learn the basic tools to smooth transition into our GSoft culture and work ethic.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', paddingTop: 7, paddingBottom: 7,
            marginLeft: 15, marginRight: 15, height: '100%', color: 'black', justifyContent: 'space-between'}}>
                <Box sx={{width: 600, marginLeft: 3}}>
                    <Typography sx={{color: 'black', fontSize: 'xx-large', paddingBottom: 2, fontWeight: 'bold'}}>Tutorial for Softers</Typography>
                    <Typography sx={{display: 'flex'}}>GSoft kindly prepared everything you need to be our Softer members.  Following the categories, you might start exploring yourself, and also you can be one of the gentle providers to help your members as they do. 
                    Yes, GSofters pursue the value of “Helping each other” to make better company culture. 
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

            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(2, 1fr)',
                    paddingTop: 3, paddingBottom:1, paddingLeft: 15, paddingRight: 15, borderColor: 'black', justifyContent: 'space-between'}}>
                    <MenuItem sx={{width: 390, textAlign: 'left'}}>
                        <img src={tutorial1} alt="tutorial1" width={"100%"} alignItems='center' />
                    </MenuItem>
                    
                    <MenuItem sx={{width: 770, textAlign: 'center'}}>
                        <img src={Group7} alt="Group7" width={"100%"} alignItems='center' />
                    </MenuItem>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', gridTemplateColumns: 'repeat(3, 1fr)',
                    paddingTop: 3,  paddingBottom: 20, paddingLeft: 15, paddingRight: 15, borderColor: 'black', justifyContent: 'space-between'}}>
                    <MenuItem sx={{width: 380, textAlign: 'left'}}>
                        <img src={tutorialgroup1} alt="tutorialgroup1" width={"100%"} alignItems='center' />
                    </MenuItem>
                    
                    <MenuItem sx={{width: 380, textAlign: 'center'}}>
                        <img src={tutorialgroup2} alt="tutorialgroup2" width={"100%"} alignItems='center' />
                    </MenuItem>

                    <MenuItem sx={{width: 380, textAlign: 'center'}}>
                        <img src={tutorialgroup3} alt="tutorialgroup3" width={"100%"} alignItems='center' />
                    </MenuItem>
            </Box>
            
        </Box>

        </>
        
    
    )
    
}

export default Tutorial;