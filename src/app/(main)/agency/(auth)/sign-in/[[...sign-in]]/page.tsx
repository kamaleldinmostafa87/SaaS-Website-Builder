import React from "react";
import { SignIn } from "@clerk/nextjs";

function page() {
  return (
    <>
      <h1>Kamal</h1>
      <SignIn />
    </>
  );
}

export default page;
