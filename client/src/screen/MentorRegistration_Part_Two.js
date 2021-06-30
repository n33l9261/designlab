import React, { useState } from "react";
import { Link } from "react-router-dom";

function MentorRegistration_Part_Two() {
  const [employeeIDimage, setemployeeIDimage] = useState("");
  const [governmentIDimage, setgovernmentIDimage] = useState("");
  //   uploadFileHandler = () => {
  //     // put req
  //   };
  return (
    <div>
      <form action="" className="form">
        <div>
          <div>
            <input
              id="image"
              type="text"
              value={employeeIDimage}
              placeholder="Image"
              onChange={(e) => setemployeeIDimage(e.target.value)}
            ></input>

            <div>
              <label htmlFor="imageFile">Employee ID Card</label>
              <input
                type="file"
                id="imageFile"
                label="choose Image"
                //   onChange={uploadFileHandler}
              ></input>
              {/* {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )} */}
            </div>
          </div>
          <div>
            <div>
              <div>
                <input
                  id="image"
                  type="text"
                  value={governmentIDimage}
                  placeholder="Government Approved ID Card"
                  onChange={(e) => setgovernmentIDimage(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="imageFile">Government Approved ID Card</label>
                <input
                  type="file"
                  id="imageFile"
                  label="choose Image"
                  //   onChange={uploadFileHandler}
                ></input>
                {/* {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )} */}
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
                  Already have an account?{" "}
                  <Link to="/signin-mentor">Sign-In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MentorRegistration_Part_Two;
// {`/signin-mentor?redirect=${redirect}`}
