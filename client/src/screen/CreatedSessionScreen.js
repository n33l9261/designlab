import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Helmet } from "react-helmet";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

export default function CreatedSessionScreen() {
  const classes = useStyles();

  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/getsessions2?id=` + localStorage.userInfoMentor
      )
      .then((res) => {
        console.log(res);
        setposts(res.data);
      });
  }, []);

  async function Handlestart(id2) {
    var haha2 = await axios.get(`http://localhost:5000/startsessions?id=` + id2);
    console.log(haha2.data);
  
      window.location.href = "http://localhost:4000/room.html?room="+haha2.data;
   

  }

  return (
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Typography
    //       className={classes.title}
    //       color="textSecondary"
    //       gutterBottom
    //     >
    //       Session Name
    //     </Typography>

    //     {posts.map((post) => (
    //       <li key={post._id}>
    //         <Typography>{post._id}</Typography>
    //         <td>{post.sessionName}</td>
    //       </li>
    //     ))}
    //   </CardContent>
    //   <CardActions>
    //     <Button size="large">Book Session</Button>
    //   </CardActions>

    //   {/* <ul>
    //     {posts.map((post) => (
    //       <li key={post._id}>
    //         <td>{post._id}</td>
    //         <td>{post.sessionName}</td>
    //       </li>
    //     ))}
    //   </ul> */}
    // </Card>
    <div>
      <Helmet>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      </Helmet>
      <Container>
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h2"
          align="center"
        >
         Created Sessions
        </Typography>
        <Grid container spacing={3}>
          {posts.map((character) => (
            <Grid item xs={12} sm={4} key={character.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography color="primary" variant="h5">
                    Session Name: {character.sessionName}
                  </Typography>
                  <Typography color="primary" variant="h5">
                    Session Date: {character.Date}
                  </Typography>

                  <Typography color="primary" variant="h5">
                    {character.multipleOrganizers}
                  </Typography>
                  <Typography color="primary" variant="h5">
                    Booking Charge: {character.Price}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {character.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    className="primary"
                    onClick={() => Handlestart(character._id)}
                  >
                    Start Session
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
