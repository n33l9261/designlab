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

// // function MentorRegistrationStep_1(props) {
// //   const classes = useStyles();
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [mobilenumber, setMobilenumber] = useState("");
// //   const [companyName, setcompanyName] = useState("");
// //   const [employeeIDNumber, setemployeeIDNumber] = useState("");
// //   const [address, setaddress] = useState("");
// //   const [passsword, setpassword] = useState("");
// //   const [confirmpasssword, setconfirmpassword] = useState("");
// //   const [EmployeeIdimage, setEmployeeIdimage] = useState("");
// //   const [GovtApprovedimage, setGovtApprovedimage] = useState("");

// //   // const userRegister = useSelector((state) => state.userRegister);
// //   // const { userInfo, loading, error } = userRegister;
// //   // if (!userInfo) {
// //   //   props.history.push("/signin");
// //   // }

// //   // const submitHandler = (e) => {
// //   //   e.preventDefault();
// //   //   dispatch(
// //   //     userBooking(
// //   //       name,
// //   //       mobilenumber,
// //   //       birthdate,
// //   //       age,
// //   //       photoidproof,
// //   //       idproofnumber,
// //   //       sideinfo,
// //   //       hoslocation
// //   //     )
// //   //   );
// //   // };
// //   const uploadFileHandler = () => {};

// //   const submitHandler = (e) => {
// //     e.preventDefault();

// //     if (passsword !== confirmpasssword) {
// //       alert("Password and Confirm Password are not match");
// //     } else {
// //       const data = {
// //         name,
// //         email,
// //         mobilenumber,
// //         companyName,
// //         employeeIDNumber,
// //         address,
// //         passsword,
// //         EmployeeIdimage,
// //         GovtApprovedimage,
// //       };

// //       axios
// //         .post("http://localhost:5000/api/register-mentor", data)
// //         .then((res) => {
// //           // setName("");
// //           // setMobilenumber("");
// //           // setBirthdate("");
// //           // setAge("");
// //           // setphotoidproof("");
// //           // setIdproofnumber("");
// //           // setsideinfo("");
// //           // setHoslocation("");
// //           //   props.history.push(`/register-mentor-2`);
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
// //               Mentor Registration
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
// //                   <label htmlFor="companyName">Company Name</label>
// //                   <input
// //                     type="text"
// //                     id="companyName"
// //                     value={companyName}
// //                     placeholder="Enter Company Name"
// //                     required
// //                     onChange={(e) => setcompanyName(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <label htmlFor="employeeIDNumber">Employee ID</label>
// //                   <input
// //                     type="text"
// //                     id="enrollmentNumber"
// //                     value={employeeIDNumber}
// //                     placeholder="Enter Entrollment Number"
// //                     required
// //                     onChange={(e) => setemployeeIDNumber(e.target.value)}
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
// //                     type="password"
// //                     id="confirmpassword"
// //                     value={confirmpasssword}
// //                     placeholder="Enter  Confirm Passsword"
// //                     required
// //                     onChange={(e) => setconfirmpassword(e.target.value)}
// //                   ></input>
// //                 </div>
// //                 <div>
// //                   <div>
// //                     <label htmlFor="imageFile">Employee ID Card</label>
// //                     <input
// //                       type="file"
// //                       id="imageFile"
// //                       label="choose Image"
// //                       value={EmployeeIdimage}
// //                       onChange={uploadFileHandler}
// //                     ></input>
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <div>
// //                     <label htmlFor="imageFile">
// //                       Govt. Approved Identity Card
// //                     </label>
// //                     <input
// //                       type="file"
// //                       id="imageFile"
// //                       label="choose Image"
// //                       onChange={uploadFileHandler}
// //                     ></input>
// //                   </div>
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

// // export default MentorRegistrationStep_1;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registermentor } from "../actions/UserAction.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Axios from "axios";

export default function RegisterScreen(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [employeeIDNumber, setemployeeIDNumber] = useState("");
  const [address, setaddress] = useState("");
  // const [employeeIDimage, setemployeeIDimage] = useState();
  // const [governmentIDimage, setgovernmentIDimage] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userMentorRegister = useSelector((state) => state.userMentorRegister);
  const { userInfoMentor, loading, error } = userMentorRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else {
      dispatch(
        registermentor(
          name,
          email,
          password,
          mobilenumber,
          companyName,
          employeeIDNumber,
          address
          // employeeIDimage,
          // governmentIDimage
        )
      );
    }
  };
  useEffect(() => {
    if (userInfoMentor) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfoMentor]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account For Mentor</h1>
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
          <label htmlFor="mobile">Mobile Number</label>{" "}
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
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            placeholder="Enter Company Name"
            required
            onChange={(e) => setcompanyName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="employeeIDNumber">Employee ID</label>
          <input
            type="text"
            id="enrollmentNumber"
            value={employeeIDNumber}
            placeholder="Enter Entrollment Number"
            required
            onChange={(e) => setemployeeIDNumber(e.target.value)}
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
            Continue
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{" "}
            <Link to={`/signin-mentor?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
