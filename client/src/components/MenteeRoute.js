import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function MenteeRoute({ component: Component, ...rest }) {
  const userSigninMentee = useSelector((state) => state.userSigninMentee);
  const { userInfoMentee } = userSigninMentee;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfoMentee ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}

export default MenteeRoute;
