import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import {Button} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            Copyright ©
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>&nbsp;
            {new Date().getFullYear()}
            .
        </Typography>
    );
}

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                   Lottery
                </Typography>
                <Typography>
                    Win a price by submitting your personal data and beating a simple game
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection: "row-reverse", mb: 5}}>
                <Button variant="contained" component={RouterLink} to="/form">
                    start
                </Button>
            </Box>
            <Copyright/>
        </Container>
    );
}