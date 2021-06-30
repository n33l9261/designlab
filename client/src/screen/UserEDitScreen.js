import React, { useEffect, useState } from "react";
import axios from "axios";

function UserEDitScreen(props) {
  const userId = props.match.params.id;
  const [verificationstatus, setverificationstatus] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [employeeIDNumber, setemployeeIDNumber] = useState("");
  const [isAdmin, setisAdmin] = useState("");
  const [address, setaddress] = useState("");

  // useEffect(() => {
  //   const fetchapi = axios
  //     .get(`http://localhost:5000/api/users/mentor/mentorlist/${userId}`)
  //     .then((res) => {
  //       setposts(res.data);
  //       console.log(res.data);
  //     }, []);
  // });
  useEffect(() => {
    async function fetchdata() {
      const response = await axios.get(
        `http://localhost:5000/api/users/mentor/mentorlist/${userId}`
      );

      setname(response.data.name);
      setemail(response.data.email);
      setmobilenumber(response.data.mobilenumber);
      setcompanyName(response.data.companyName);
      setemployeeIDNumber(response.data.employeeIDNumber);
      setaddress(response.data.address);
      setverificationstatus(response.data.verificationstatus);
      setisAdmin(response.data.isAdmin);
      console.log(response);
      return response;
    }
    fetchdata();
  }, [userId]);
  const approveHandler = async (e) => {
    // e.preventDefault();
    // const data = {
    //   verificationstatus,
    // };
    // axios
    //   .put(`http://localhost:5000/api/users/mentor/mentorlist/${userId}` + data)
    //   .then(props.history.push("/mentorlist"));
    e.preventDefault();

    const data = {
      name,
      email,
      mobilenumber,
      companyName,
      employeeIDNumber,
      address,
      verificationstatus,
      isAdmin,
    };
    try {
      const resp = await axios.put(
        `http://localhost:5000/api/users/mentor/mentorlist/${userId}`,
        data
      );
      console.log(resp);
      props.history.push(`/mentorlist`);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <div>
      <form className="form">
        <div>
          <h1>Edit Mentor {name}</h1>
        </div>
        <>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"> Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mobilenumber">Contact Number</label>
            <input
              id="mobilenumber"
              type="text"
              placeholder="Enter Contact Number"
              value={mobilenumber}
              onChange={(e) => setmobilenumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              id="companyName"
              type="text"
              placeholder="Enter Company Name"
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="employeeIDNumber"> Employee ID Number</label>
            <input
              id="employeeIDNumber"
              type="text"
              placeholder="Enter Employee ID"
              value={employeeIDNumber}
              onChange={(e) => setemployeeIDNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="verificationstatus">Approve User</label>
            <input
              id="verificationstatus"
              type="checkbox"
              checked={verificationstatus}
              onChange={(e) => setverificationstatus(e.target.checked)}
            />
          </div>
          <div>
            <label htmlFor="isAdmin">Make This Mentor Admin</label>
            <input
              id="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={(e) => setisAdmin(e.target.checked)}
            />
          </div>
          <div>
            <button type="submit" onClick={approveHandler} className="primary">
              Update
            </button>
          </div>
        </>
      </form>
    </div>
  );
}

export default UserEDitScreen;
