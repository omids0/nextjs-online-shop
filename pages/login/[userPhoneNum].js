import React from "react";
import Users from "../../models/Users";
import db from "../../utils/db/mongoose";

export default function userLoged({ userPhoneNum, users }) {
  console.log(users);
  return (
    <div>
      {users.length > 0 ? (
        <div>user{userPhoneNum}</div>
      ) : (
        <div>user not found</div>
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
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
