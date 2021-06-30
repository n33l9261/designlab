import React, { useEffect, useState } from "react";
import axios from "axios";

function MenteeDetailsScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/users/mentor/menteedetailsemail")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Booking LIst Of All The Applicant</h1>

      {/* <div>
        <table className="table">
          <thead>
            <tr>
              <th>USER</th>

              <th>Name</th>
              <th>Mobile Number</th>
              <th>ID</th>
              <th>Age</th>
              <th>Photo ID Proof Name</th>
              <th>Photo ID Proof Number</th>
              <th>Any Dieases</th>
              <th>Vaccine Center</th>
              <th>Vaccine Date</th>
              <th>Vaccine Time</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.name}</td>
                <td>{post.mobilenumber}</td>
                <td>{post.birthdate}</td>
                <td>{post.age}</td>
                <td>{post.photoidproof}</td>
                <td>{post.idproofnumber}</td>
                <td>{post.sideinfo}</td>
                <td>{post.hoslocation}</td>
                <td>{post.dateinfo}</td>
                <td>{post.timeinfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <td>{post._id}</td>
            <td>{post.name}</td>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenteeDetailsScreen;
