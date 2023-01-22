import Header from "./components/Header";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MarkChatReadOutlinedIcon from '@mui/icons-material/MarkChatReadOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import feedback from '../../src/images/feedback.png'
import IconButton from '@mui/material/IconButton';
import { Form } from "react-router-dom";
import { Label } from "@mui/icons-material";
import CallMadeIcon from '@mui/icons-material/CallMade';


const Feedback = () => {
    return (
        <>
        <Header props={{color: '#E39183'}}>{{backgroundColor: '#E39183'}}</Header>
        <Box sx={{backgroundColor:'#E39183'}}>
            <Box sx={{ display: 'grid', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, backgroundColor: '#E39183', height: '100%', borderBottom: 2, color: 'black'}}>
                <MenuItem sx={{justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}}>05. FEEDBACK</Typography> 
                    <ListItemIcon>
                        <MarkChatReadOutlinedIcon sx = {{color: 'black', fontSize: 'xxx-large', fontWeight: 'bold'}} />
                    </ListItemIcon>
                </MenuItem>
                <img src={feedback} alt="feedback" width={"100%"} alignItems='center' />
                <Typography sx={{paddingTop: 3, color: 'black'}}>
                    Anonymous Feedback evaluates the work environment, which makes it easier for the employers to reflect on their onboarding service they are providing.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'left', paddingTop: 3, paddingBottom: 3,
            marginLeft: 15, marginRight: 15, backgroundColor: '#E39183', height: '100%', borderBottom: 2, color: 'black', justifyContent: 'space-between'}}>
                <Box sx={{width: 600, marginLeft: 3}}>
                    <Typography sx={{color: 'black', fontSize: 'xx-large', paddingBottom: 2, fontWeight: 'bold'}}>Feedback for Softers</Typography>
                    <Typography sx={{display: 'flex'}}>Send in a form where you could include both text and picture to reflect on the work environment. This helps us improve and create a positive community in the future.</Typography>
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


            <Box sx={{ alignItems: 'center', textAlign: 'center', paddingTop: 3, paddingBottom: 20,
            paddingLeft: 15, paddingRight: 15, backgroundColor: '#E39183', height: '100%', color: 'black', display: 'grid',justifyContent: 'center'}}>
                <Typography sx={{color: 'black', fontSize: 'xxx-large', paddingBottom: 2}}>Feel free to drop us your feedback.</Typography>
                <Box sx={{borderRadius: 5, backgroundColor: 'white', textAlign: 'left', alignItems: 'center', width: '80%', justifyContent: 'center',
                paddingBottom: 3, paddingLeft: 10, paddingRight: 10, marginLeft: '10%'}}>
                    <Typography sx={{paddingTop: 5, paddingBottom: 1, fontSize: 'large', fontWeight: 200}}>Email</Typography>
                    <form>
                        <input type="text" name="Email Address" placeholder="Your Email Address" style={{width: '100%', 
                        height: 30, paddingLeft: 5, paddingBottom: 1, borderRadius: 10, backgroundColor: '#F3F3F3'}}/>
                    </form>
                    <Typography sx={{paddingTop: 3, paddingBottom: 1, fontSize: 'large', fontWeight: 200}}>Subject (Optional)</Typography>
                    <form>
                        <input type="text" name="subject" placeholder="Summary of your observation..." style={{width: '100%', 
                        height: 30, paddingLeft: 5, paddingBottom: 1, borderRadius: 10, backgroundColor: '#F3F3F3'}}/>
                    </form>
                    <Typography sx={{paddingTop: 3, paddingBottom: 1, fontSize: 'large', fontWeight: 200}}>Message</Typography>
                    <form>
                        <input type="text" name="message" placeholder="Give as many details as possible..." style={{width: '100%', 
                        height: 70, paddingLeft: 5, paddingBottom: 1, borderRadius: 10, backgroundColor: '#F3F3F3'}}/>
                    </form>
                    <form>
                        <Typography sx={{paddingTop: 3, fontSize: 'small', fontWeight: 200}}>*Upload your attachments</Typography>
                        <input type="file" name="files" style={{backgroundColor: '#F3F3F3', width: '100%'}}/>
                    </form>
                    {/* <Typography sx={{paddingTop: 3, fontSize: 'small', fontWeight: 200, paddingBottom: 2}}>*Upload your attachments</Typography> */}

                    <IconButton sx={{alignItems: 'center', fontSize: 'large', color: 'white', backgroundColor: 'black', borderRadius: 0, width: '100%', marginTop: 3}}>SEND FEEDBACK</IconButton>



                </Box>
            </Box>
        </Box>

        


        {/* <div style={{backgroundColor:'#E39183', height:'100vh', color: 'black'}}>05. Feedback</div> */}
        
{/* 
        <div>
          <img src={Tut} alt="Tut" width={390}/>
        </div> */}


        </>
        
    
    )
    
}

export default Feedback;