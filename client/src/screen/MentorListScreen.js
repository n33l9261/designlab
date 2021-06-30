import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsersmentor } from "../actions/UserAction.js";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function MentorListScreen(props) {
  // userID = props.match.params.id
  const userListMentor = useSelector((state) => state.userListMentor);
  const { loading, error, usersmentor } = userListMentor;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsersmentor());
  }, [dispatch]);

  return (
    <div>
      <h1>Mentor List</h1>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>MENTOR NAME</th>
              <th>EMAIL</th>
              <th>MOBILE NUMBER</th>
              <th>COMPANY NAME</th>
              <th>EMPLOYEE ID</th>
              <th>Verified</th>

              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {usersmentor.map((mentor) => (
              <tr key={mentor._id}>
                <td>{mentor._id}</td>
                <td>{mentor.name}</td>
                <td>{mentor.email}</td>
                <td>{mentor.mobilenumber}</td>
                <td>{mentor.companyName}</td>
                <td>{mentor.employeeIDNumber}</td>
                <td>{mentor.verificationstatus ? "YES" : "NO"}</td>

                <td>
                  <button
                    type="button"
                    className="primary"
                    onClick={() => props.history.push(`/approve/${mentor._id}`)}
                  >
                    Edit User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function MentorListScreen() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/users/mentor/mentorlist")
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Booking LIst Of All The Applicant</h1>

//       {/* <div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>USER</th>

//               <th>Name</th>
//               <th>Mobile Number</th>
//               <th>ID</th>
//               <th>Age</th>
//               <th>Photo ID Proof Name</th>
//               <th>Photo ID Proof Number</th>
//               <th>Any Dieases</th>
//               <th>Vaccine Center</th>
//               <th>Vaccine Date</th>
//               <th>Vaccine Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post._id}>
//                 <td>{post._id}</td>
//                 <td>{post.name}</td>
//                 <td>{post.mobilenumber}</td>
//                 <td>{post.birthdate}</td>
//                 <td>{post.age}</td>
//                 <td>{post.photoidproof}</td>
//                 <td>{post.idproofnumber}</td>
//                 <td>{post.sideinfo}</td>
//                 <td>{post.hoslocation}</td>
//                 <td>{post.dateinfo}</td>
//                 <td>{post.timeinfo}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}

//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>
//             <td>{post._id}</td>
//             <td>{post.name}</td>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MentorListScreen;
