import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { userBooking } from "../actions/BookingAction.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { BOOKING_REGISTRATION_DATA_RESET } from "../constants/BookingConstants.js";
import { useDispatch, useSelector } from "react-redux";

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

function BookingScreen(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [photoidproof, setphotoidproof] = useState("");
  const [idproofnumber, setIdproofnumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [sideinfo, setsideinfo] = useState("");

  const [hoslocation, setHoslocation] = useState("");
  const dispatch = useDispatch();
  // const userRegister = useSelector((state) => state.userRegister);
  // const { userInfo, loading, error } = userRegister;
  // if (!userInfo) {
  //   props.history.push("/signin");
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     userBooking(
  //       name,
  //       mobilenumber,
  //       birthdate,
  //       age,
  //       photoidproof,
  //       idproofnumber,
  //       sideinfo,
  //       hoslocation
  //     )
  //   );
  // };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      mobilenumber,
      birthdate,
      age,
      photoidproof,
      idproofnumber,
      sideinfo,
      hoslocation,
    };

    axios
      .post("http://localhost:5000/api/booking", data)
      .then((res) => {
        // setName("");
        // setMobilenumber("");
        // setBirthdate("");
        // setAge("");
        // setphotoidproof("");
        // setIdproofnumber("");
        // setsideinfo("");
        // setHoslocation("");
        props.history.push(`/printbooking`);
      })
      .catch((err) => {
        console.log("Error in CreateBook!");
      });
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
              Register For Vaccination
            </Typography>

            <div className="form-midview">
              <p className="pnote">
                <span className={classes.note}>Note: </span> Your Photo ID will
                be verified at the time of your vaccination appointment. Please
                provide the details <br />
                <span className={classes.span}>
                  of the Photo ID you will carry for vaccination.Otherwise you
                  will not be eligible for vaccination.
                </span>
              </p>
              {/* {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>} */}
              <form className="form" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobilenumber"
                    value={mobilenumber}
                    placeholder="Enter Mobile Number"
                    required
                    onChange={(e) => setMobilenumber(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="birthdate">Birth Date </label>
                  <input
                    type="text"
                    id="birthdate"
                    value={birthdate}
                    placeholder="DD.MM.YYYY"
                    required
                    onChange={(e) => setBirthdate(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    value={age}
                    placeholder="Enter Age"
                    required
                    onChange={(e) => setAge(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="idproof">Photo ID Proof</label>
                  <select
                    id="photoidproof"
                    value={photoidproof}
                    onChange={(e) => setphotoidproof(e.target.value)}
                  >
                    <option value="">Select Photo ID Document</option>
                    <option value="Adhar Card">Adhar Card</option>
                    <option value="Pan Card">Pan Card</option>
                    <option value="Voter ID Card">Voter ID Card</option>
                    <option value="PAssport number">
                      Passport Number (Indians)
                    </option>
                    <option value="passport">
                      Passport Number (Foreigners)
                    </option>
                  </select>
                  <input
                    type="text"
                    id="idproofnumber"
                    value={idproofnumber}
                    placeholder="Enter Photo ID Number"
                    required
                    onChange={(e) => setIdproofnumber(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sidediseases">
                    Do you have any other diseases? if yes please mention here{" "}
                  </label>
                  <input
                    type="text"
                    id="sideinfo"
                    value={sideinfo}
                    placeholder="Mention Diseses"
                    onChange={(e) => setsideinfo(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="idproof">Vaccination Centers</label>
                  <select
                    id="hoslocation"
                    value={hoslocation}
                    onChange={(e) => setHoslocation(e.target.value)}
                  >
                    <option value="">Select Vaccination Centers. </option>
                    <option value="B.M. Birla Heart Research Centre.">
                      B.M. Birla Heart Research Centre.
                    </option>
                    <option value="Desun Hospital & Heart Institute.">
                      Desun Hospital & Heart Institute.
                    </option>
                    <option value="North City Hospital & Neuro Institute Pvt.">
                      North City Hospital & Neuro Institute Pvt.
                    </option>
                    <option value=" B. P. Poddar Hospitals & Medical Research Ltd.">
                      B. P. Poddar Hospitals & Medical Research Ltd.{" "}
                    </option>
                    <option value="Narayana Superspeciality Hospital.">
                      Narayana Superspeciality Hospital.
                    </option>
                    <option value="B.M.R.C. Hospitals Ltd.">
                      B.M.R.C. Hospitals Ltd.
                    </option>

                    <option value="Peerless Hospitex Hospital And Research Center Limited.">
                      Peerless Hospitex Hospital And Research Center Limited.
                    </option>
                    <option value="Ruby General Hospital.">
                      Ruby General Hospital.
                    </option>
                  </select>
                </div>

                <div>
                  <label />
                  <button className="primary" type="submit">
                    Register
                  </button>
                </div>
                <div>
                  <label />
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BookingScreen;
