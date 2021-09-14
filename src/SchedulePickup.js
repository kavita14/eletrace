import { Grid, Typography, Button, Box, Radio } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AccessTime, CalendarToday } from '@material-ui/icons';
import clsx from  'clsx';
import box from './box-image1.png';

//import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import './App.css';

const styles = {
  firstSectionH: {
    fontFamily: 'Poppins',
    fontSize: 24,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFEFE',
  },
  firstSectionSH: {
    fontFamily: 'Poppins',
    fontSize: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#FFFEFE',
  },
  firstSectionRSH: {
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#FFFEFE',
  },
  firstSection: {
    backgroundColor: '#79C440',
    fontFamily: 'Poppins',
    boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft:40,
    marginTop:5,
  },
  mainContainer: {
   margin:'20px 20px 20px 20px',
   marginRight: 20,
  },
  secondSection: {
   marginTop:10,
   alignItems: 'center',
   textAlign: 'center',
  },
  secondSectionBox1: {
    height: 400,
    background: '#79C440',
    boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: 15,
  },
  arrowBox: {
    position: 'relative',
    marginTop:250,
    marginLeft:300,
  },
  secondSectionBox2: {
    height: 400,
    background: '#79C440',
    boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px 15px 250px 15px',
    marginLeft: 10,
  },
  timeSlotBtn: {
    background: '#FFFFFF',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
  },
  SecondSectionH: {
    fontFamily:'Poppins',
    fontSize: 24,
    color: '#515151',
    marginTop:70,
  },
  dropBox: {
    borderRadius: '7px 7px 15px 15px',
    height: '100%',
    background: `url(${box})`,
    positive: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop:5,
  },
  redText: {
    color: '#FF0000',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  rightContainer: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
  }
};

const WhiteRadio = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const SchedulePickup = (props) => {
  const { classes } = props;
  return(<Grid className={classes.mainContainer}><Box className={classes.SecondSectionH}><Typography variant='p' className={classes.SecondSectionH}>
  Schedule your pick up...
  </Typography></Box><Grid container className={classes.firstSection}>
    <Grid item xs={8} md={8}>
    <Typography variant='p' className={classes.firstSectionH}>
              Schedule Now
    </Typography>
            <Typography variant='p' className={classes.firstSectionSH}>
            Pickup within one hour
      </Typography>
    </Grid>
    <Grid item xs={4} md={4} className={classes.rightContainer}>
    <AccessTime fontSize="large"  />
    <Typography variant='p' className={classes.firstSectionRSH}>
            Choose Time
      </Typography>
    </Grid>
    </Grid>
    <Grid container className={classes.firstSection}>
    <Grid item xs={8} md={8}>
    <Typography variant='p' className={classes.firstSectionH}>
    Schedule Later
    </Typography>
           <Button className={classes.timeSlotBtn}>Select time slot</Button>
    </Grid>
    <Grid item xs={4} md={4} className={classes.rightContainer}>
    <CalendarToday fontSize="large"  />
    <Typography variant='p' className={classes.firstSectionRSH}>
            Choose Date
      </Typography>
    </Grid>
    </Grid>
    <Grid container className={classes.firstSection}>
    <Grid item xs={8} md={8}>
    <Typography variant='p' className={classes.firstSectionH}>
    What do you wish to send...
    </Typography>
           <Button className={clsx(classes.timeSlotBtn, classes.marginBottom10)}>Product Category</Button>
    </Grid>
    </Grid>
    <Box className={classes.SecondSectionH}><Typography variant='p' className={classes.SecondSectionH}>
    Confirm the following...
    </Typography></Box>
    <Grid container direction="row" className={classes.secondSection}>
    
   
    <Grid item xs={6} md={6} className={classes.secondSectionBox1}>
    <Typography variant='p' className={classes.firstSectionSH}>
    <WhiteRadio checked />Upload Image
    </Typography>
    <Box className={classes.dropBox}></Box>
    </Grid>
    <Grid item xs={5} md={5} className={classes.secondSectionBox2}>
    <Typography variant='p' className={classes.firstSectionSH}>
    <WhiteRadio checked />Package is securely sealed
    </Typography>
    <Typography variant='p' className={classes.firstSectionSH}>
    <WhiteRadio checked />Package weight is > 2 Kgs
    </Typography>
    <Typography variant='p' className={classes.firstSectionSH}>
    <WhiteRadio checked />Package size does not exceed 1.5 feet on any side
    </Typography>
    <Typography variant='p' className={clsx(classes.firstSectionSH, classes.redText)}>
    <WhiteRadio checked />No Restricted Items
    </Typography>
    {/* <Box className={classes.arrowBox}><img src={arrow} /></Box> */}
    </Grid>
    </Grid>
    </Grid>);
}

export default withStyles(styles)(SchedulePickup);