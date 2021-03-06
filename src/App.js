import React from 'react';
import { CssBaseline, Typography, AppBar, Toolbar, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles  from './styles';

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera className="classes.icon"/>
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
        </Container>
        <div className="classes.button">
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See my Photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                See my Photos
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {cards.map((card)=>{
              return(
                <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="image title"
            ></CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" gutterBottom>
Heading
              </Typography>
              <Typography >
This is a Media Card.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">View</Button>
              <Button size="small" color="primary">Edit</Button>
            </CardActions>
          </Card>
          </Grid>
              )
        })}
          
        </Grid>

      </Container>
    </main>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>Something New</Typography>
    </footer>
    </>
  );
}

export default App;
