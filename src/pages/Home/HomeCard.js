import { Box, Typography, Grow } from "@mui/material";
import tutorialLogo from './tutorial.png'
import heartLogo from './heart.png'
import teamLogo from './team.png'
import feedbackLogo from './feedback.png'
import resourcesLogo from './resources.png'
import * as React from 'react';

const HomeCard = ({ props }) => {
    const color = props.color;
    const logos = [tutorialLogo, resourcesLogo, teamLogo, heartLogo, feedbackLogo]

    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        alert("wtf");
    };

    console.log(props);
    console.log("work");
    return (
        <>
            <div>
                <Box onClick={handleChange}>
                    <Box sx={{ borderRadius: 3, backgroundColor: color, height: '50vh', padding: '5%' }}>
                        <Box sx={{ height: '60%', paddingTop: '20%', paddingLeft: '5%' }}>
                            <img src={logos[props.logo]}></img>
                        </Box>
                        <Box>
                            <Typography sx={{ color: 'black', fontWeight: '530', fontSize: '1.5rem' }}>
                                {props.header}
                            </Typography>
                            <Box sx={{ backgroundColor: 'black', width: '100%', height: 2 }}></Box>
                            <Typography sx={{ color: 'black', fontSize: '0.8rem', marginTop: '8%' }}> {props.description}</Typography>
                        </Box>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default HomeCard;