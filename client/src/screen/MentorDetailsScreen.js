import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUserMentor } from "../actions/UserAction.js";
// import LoadingBox from "../components/LoadingBox";
// import MessageBox from "../components/MessageBox";
// import "./Orderhistory.css";

export default function MentorDetailsScreen(props) {
  const userDetailsMentor = useSelector((state) => state.userDetailsMentor);
  const { mentorprofile } = userDetailsMentor;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUserMentor());
  }, [dispatch]);
  return (
    <div>
      <h1>Order History</h1>
      {/* {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            mentorprofile.map((mentor) => (
            <tr key={mentor._id}>
              <td>{mentor._id}</td>

              <td>
                <button
                  type="button"
                  className="small"
                  onClick={() => {
                    props.history.push(`/order/${order._id}`);
                  }}
                >
                  Details
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      )} */}

      <ul>
        {mentorprofile.map((mentor) => (
          <li key={mentor._id}>
            <h1>{mentor._id}</h1>
            <h1>{mentor.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
