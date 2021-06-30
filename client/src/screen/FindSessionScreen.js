import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Container from "@material-ui/core/Container";
import {Helmet} from "react-helmet";
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

export default function FindSessionScreen() {
  const classes = useStyles();

  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/users/session/findsession`)
      .then((res) => {
        console.log(res);
        setposts(res.data);
      });
  }, []);

  async function handlepay(id2){
    var haha = await axios.get(`http://localhost:5000/orders?id=`+id2);
    console.log(haha);
    console.log(localStorage.userInfoMentee);
    var options = {
      "key": "rzp_test_N4U00sH9WvgsG6", // Enter the Key ID generated from the Dashboard
      "amount": haha.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Design Lab",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": haha.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "/success?id="+localStorage.userInfoMentee+"&id2="+id2,
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    }
      var rzp1 = new window.Razorpay(options);

      rzp1.open();




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
          Find Sessions
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
                  <Button size="large" className="primary" onClick={()=> handlepay
                  (character._id)}>
                    Book Session
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
