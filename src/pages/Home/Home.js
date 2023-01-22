import "./Home.css"
import { Box, Typography, Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import HomeCard from "./HomeCard";
import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <Header/>
      <Grid container sx={{ paddingLeft: '7vw', paddingRight: '7vw', backgroundColor: 'white' }}>
        <Grid xs={12} sx={{ height: '35vh' }}>
          <Box sx={{ alignContent: 'center', alignItems: 'center', height: '100%', display: 'flex' }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ color: 'black', fontWeight:'500', fontSize: '3rem' }}> We are here to support you, </Typography>
              </Grid>
              <Grid container xs={12}>

                <Typography item xs={2}  sx={{ color: 'black', fontWeight:'900', fontSize: '3rem' }}> John</Typography>
                <Typography item xs={2} sx={{ color: 'black', fontWeight:'500', fontSize: '3rem', marginLeft: '0.5%' }}> Soft </Typography>

              </Grid>
            </Grid>
          </Box>

        </Grid>
        <Grid xs={12} sx={{ height: '55vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={12 / 5}>
              <HomeCard props={{
                header: 'Tutorial',
                color: '#AFCBF3',
                logo: 0,
                description: "Tutorials help our softers to learn basic tools to adjust on our GSoft culture and work something."
              }}></HomeCard>
            </Grid>
            <Grid item xs={12 / 5}>
              <HomeCard props={{
                header: 'Resource',
                color: '#6195C5',
                logo: 1,
                description: "Tutorials help our softers to learn basic tools to adjust on our GSoft culture and work something."
              }}></HomeCard>
            </Grid><Grid item xs={12 / 5}>
              <HomeCard props={{
                header: 'Community',
                color: '#EECD86',
                logo: 2,
                description: "Tutorials help our softers to learn basic tools to adjust on our GSoft culture and work something."
              }}></HomeCard>
            </Grid><Grid item xs={12 / 5}>
              <HomeCard props={{
                header: 'Status',
                color: '#E49E7A',
                logo: 3,
                description: "Tutorials help our softers to learn basic tools to adjust on our GSoft culture and work something."
              }}></HomeCard>
            </Grid><Grid item xs={12 / 5}>
              <HomeCard props={{
                header: 'Feedback',
                color: '#AFCBF3',
                logo: 4,
                description: "Tutorials help our softers to learn basic tools to adjust on our GSoft culture and work something."
              }}></HomeCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;