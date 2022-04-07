import React from "react";
import UserFound from "../../components/login/UserFound";
import UserNotFound from "../../components/login/UserNotFound";
import Users from "../../models/Users";
import db from "../../utils/db/mongoose";

export default function userLoged({ userPhoneNum, user }) {
  console.log(user);
  if (user.length > 0) {
    localStorage.setItem("omidshopuser", JSON.stringify(user));
  }
  return (
    <div>
      {user.length > 0 ? (
        <UserFound user={user} />
      ) : (
        <UserNotFound userPhoneNum={userPhoneNum} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { userPhoneNum } = params;

  await db.connect();
  const users = await Users.find({ phone: userPhoneNum });
  await db.disconnect();

  return {
    props: {
      userPhoneNum,
      user: JSON.parse(JSON.stringify(users)),
    },
  };
}
