// // import React, { useState } from "react";
// // import { makeStyles } from "@material-ui/core/styles";
// // import Card from "@material-ui/core/Card";
// // import axios from "axios";

// // import CardContent from "@material-ui/core/CardContent";

// // import Typography from "@material-ui/core/Typography";

// // const useStyles = makeStyles({
// //   root: {
// //     minWidth: 275,
// //     maxWidth: 1000,
// //     minHeight: 400,
// //   },

// //   title: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     paddingLeft: 180,
// //   },

// //   pos: {
// //     marginBottom: 12,
// //   },
// //   span: {
// //     paddingLeft: 100,
// //   },
// //   note: {
// //     color: "red",
// //   },
// // });

// // function HomeScreen(props) {
// //   const classes = useStyles();
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [mobilenumber, setMobilenumber] = useState("");
// //   const [instituteName, setinstituteName] = useState("");
// //   const [enrollmentNumber, setenrollmentNumber] = useState("");
// //   const [passsword, setpassword] = useState("");
// //   const [confirmpasssword, setconfirmpassword] = useState("");

// //   const [address, setaddress] = useState("");

// // const userRegister = useSelector((state) => state.userRegister);
// // const { userInfo, loading, error } = userRegister;
// // if (!userInfo) {
// //   props.history.push("/signin");
// // }

// // const submitHandler = (e) => {
// //   e.preventDefault();
// //   dispatch(
// //     userBooking(
// //       name,
// //       mobilenumber,
// //       birthdate,
// //       age,
// //       photoidproof,
// //       idproofnumber,
// //       sideinfo,
// //       hoslocation
// //     )
// //   );
// // };

// //   const submitHandler = (e) => {
// //     e.preventDefault();

// //     if (passsword !== confirmpasssword) {
// //       alert("Password and Confirm Password are not match");
// //     } else {
// //       const data = {
// //         name,
// //         email,
// //         mobilenumber,
// //         instituteName,
// //         enrollmentNumber,
// //         address,
// //         passsword,
// //       };

// //       axios
// //         .post("http://localhost:5000/api/register-mentee", data)
// //         .then((res) => {
// //           setName("");
// //           setMobilenumber("");
// //           setBirthdate("");
// //           setAge("");
// //           setphotoidproof("");
// //           setIdproofnumber("");
// //           setsideinfo("");
// //           setHoslocation("");
// //           props.history.push(`/printbooking`);
// //         })
// //         .catch((err) => {
// //           console.log("Error in CreateBook!");
// //         });
// //     }
// //   };

// //   return (
// //     <div className="form-topview">
// //       <div className="form-maindiv">
// //         <Card className={classes.root}>
// //           <CardContent>
// //             <Typography
// //               className={classes.title}
// //               color="textSecondary"
// //               gutterBottom
// //             >
// //               Mentee Registration
// //             </Typography>

// //             <div className="form-midview">
// //               <form className="form" onSubmit={submitHandler}>
// //                 <div>
// //                   <label htmlFor="name">Name</label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     value={name}
// //                     placeholder="Enter name"
// //                     required
// //                     onChange={(e) => setName(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="email">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     value={email}
// //                     placeholder="Enter Email"
// //                     required
// //                     onChange={(e) => setEmail(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="mobile">Mobile Number</label>
// //                   <input
// //                     type="text"
// //                     id="mobilenumber"
// //                     value={mobilenumber}
// //                     placeholder="Enter Mobile Number"
// //                     required
// //                     onChange={(e) => setMobilenumber(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="instituteName">
// //                     Institute Name (if any){" "}
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="instituteName"
// //                     value={instituteName}
// //                     placeholder="Enter Institute Name"
// //                     required
// //                     onChange={(e) => setinstituteName(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="enrollmentNumber">
// //                     Enrollment Number (if any)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="enrollmentNumber"
// //                     value={enrollmentNumber}
// //                     placeholder="Enter Entrollment Number"
// //                     required
// //                     onChange={(e) => setenrollmentNumber(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="address">Address</label>
// //                   <input
// //                     type="text"
// //                     id="address"
// //                     value={address}
// //                     placeholder="Enter Entrollment Number"
// //                     required
// //                     onChange={(e) => setaddress(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="password">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     value={passsword}
// //                     placeholder="Enter Passsword"
// //                     required
// //                     onChange={(e) => setpassword(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="confirmpassword">Confirm Password</label>
// //                   <input
// //                     type="confirmpassword"
// //                     id="confirmpassword"
// //                     value={confirmpasssword}
// //                     placeholder="Enter  Confirm Passsword"
// //                     required
// //                     onChange={(e) => setconfirmpassword(e.target.value)}
// //                   ></input>
// //                 </div>

// //                 <div>
// //                   <label />
// //                   <button className="primary" type="submit">
// //                     Register
// //                   </button>
// //                 </div>
// //                 <div>
// //                   <label />
// //                 </div>
// //               </form>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomeScreen;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registermentee } from "../actions/UserAction.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function MenteeRegistration(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [instituteName, setinstituteName] = useState("");
  const [enrollmentNumber, setenrollmentNumber] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userMenteeRegister = useSelector((state) => state.userMenteeRegister);
  const { userInfoMentee, loading, error } = userMenteeRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(
        registermentee(
          name,
          email,
          password,
          mobilenumber,
          instituteName,
          enrollmentNumber,
          address
        )
      );
    }
  };
  useEffect(() => {
    if (userInfoMentee) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfoMentee]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account For Mentee</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
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
          <label htmlFor="instituteName">Institute Name </label>
          <input
            type="text"
            id="instituteName"
            value={instituteName}
            placeholder="Enter Institute Name"
            required
            onChange={(e) => setinstituteName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="enrollmentNumber">Enrollment Number</label>
          <input
            type="text"
            id="enrollmentNumber"
            value={enrollmentNumber}
            placeholder="Enter Entrollment Number"
            required
            onChange={(e) => setenrollmentNumber(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            placeholder="Enter Entrollment Number"
            required
            onChange={(e) => setaddress(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account? <Link to="/signin-mentee">Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
// {`/signin-mentee?redirect=${redirect}`}
