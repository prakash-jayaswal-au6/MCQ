import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css'

function Home() {
    
    return (
        <div className='home'>
            <Card className='root' variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Welcome to the MCQ (Attend the Question without Login ,For Create MCQ Have to Login First) 
                    </Typography>
                    
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Home
