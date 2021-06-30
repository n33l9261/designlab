import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1000,
    minHeight: 400,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 180,
  },

  pos: {
    marginBottom: 12,
  },
  span: {
    paddingLeft: 100,
  },
  note: {
    color: "red",
  },
});

function CreateSession(props) {
  const classes = useStyles();
  const [sessionName, setsessionName] = useState("");
  const [DateInfo, setDateInfo] = useState(new Date());

  const [Price, setPrice] = useState("");
  const [Referral, setReferral] = useState("");
  const [Test, setTest] = useState("");
  const [Interview, setInterview] = useState("");
  const [multipleOrganizers, setmultipleOrganizers] = useState("");
  const [multipleStudents, setmultipleStudents] = useState("");

  const [Testlink, setTestlink] = useState("");

  const [Organizers, setOrganizers] = useState("");
  const [Participants, setParticipants] = useState("");

  //   const userSignin = useSelector((state) => state.userSignin);
  //   const { userInfo } = userSignin;

  //   const user = userInfo._id;

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      sessionName,
      DateInfo,
      Price,
      Referral,
      Test,
      Interview,
      multipleOrganizers,
      multipleStudents,
      Testlink,
      Organizers,
      Participants,
    };
    try {
      const resp = await axios.post(
        `http://localhost:5000/api/users/session/organize-session`,
        data
      );

      props.history.push(`/findsession`);
      console.log(resp.data._id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-topview">
      <div className="form-maindiv">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Create Session
            </Typography>

            <div className="form-midview">
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="sessionName">Session Name</label>
                  <input
                    type="text"
                    id="sessionName"
                    value={sessionName}
                    placeholder="Enter Session name"
                    required
                    onChange={(e) => setsessionName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="Date">Session Date </label>
                  <DatePicker
                    selected={DateInfo}
                    onChange={(date) => setDateInfo(date)}
                  />
                </div>
                <div>
                  <label htmlFor="Price">Price</label>
                  <input
                    type="text"
                    id="Price"
                    value={Price}
                    placeholder="Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </div>
                <div>
                  <div>
                    <label htmlFor="Referral">Referral</label>
                    <input
                      id="Referral"
                      type="checkbox"
                      checked={Referral}
                      onChange={(e) => setReferral(e.target.checked)}
                    />
                  </div>
                  <div>
                    <label htmlFor="Test">Test</label>
                    <input
                      id="Test"
                      type="checkbox"
                      checked={Test}
                      onChange={(e) => setTest(e.target.checked)}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="Interview">Interview</label>
                    <input
                      id="Interview"
                      type="checkbox"
                      checked={Interview}
                      onChange={(e) => setInterview(e.target.checked)}
                    />
                  </div>
                  <div>
                    <label htmlFor="multipleOrganizers">
                      MultipleOrganizers
                    </label>
                    <input
                      id="multipleOrganizers"
                      type="checkbox"
                      checked={multipleOrganizers}
                      onChange={(e) => setmultipleOrganizers(e.target.checked)}
                    />
                  </div>
                  <div>
                    <label htmlFor="multipleStudents">MultipleStudents</label>
                    <input
                      id="multipleStudents"
                      type="checkbox"
                      checked={multipleStudents}
                      onChange={(e) => setmultipleStudents(e.target.checked)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Testlink">Testlink</label>
                  <input
                    type="text"
                    id="Testlink"
                    value={Testlink}
                    placeholder="Testlink"
                    required
                    onChange={(e) => setTestlink(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="Organizers">Organizers</label>
                  <input
                    type="text"
                    id="Organizers"
                    value={Organizers}
                    placeholder="Organizers"
                    required
                    onChange={(e) => setOrganizers(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="Participants">Participants</label>
                  <input
                    type="text"
                    id="Participants"
                    value={Participants}
                    placeholder="Participants"
                    required
                    onChange={(e) => setParticipants(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label />
                  <button className="primary" type="submit">
                    Create Session
                  </button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CreateSession;
