import React from 'react'
import Typography from "@mui/material/Typography";
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Contact() {
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box sx={{ height: '300px', width: '400px' }} >
          <Typography variant="h4">Best Coirs and Exports</Typography>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
              <Typography variant="body2">146/A2A Illupunagaram village, 
                Udumalpet Tk, Tiruppur,
                Tamil Nadu - 642202 INDIA
              </Typography>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ContactPhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <Typography variant="body2">Phone: +9865428094</Typography>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
            </ListItemAvatar>
            <Typography variant="body2">Email: bestcoirsandexports@gmail.com</Typography>
          </ListItem>
        </Box>
      </Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.0336264056646!2d77.25154051462063!3d10.576541592457406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cd7d1c1ee2e9%3A0x4676d9fa232f10fc!2sBest%20coirs%20and%20exports!5e0!3m2!1sen!2sin!4v1673966817336!5m2!1sen!2sin" className='Location' referrerpolicy="no-referrer-when-downgrade">
          </iframe>
    </React.Fragment>
  )
}

export default Contact