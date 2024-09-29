import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import React from "react";

async function page() {
  //   const authUser = await currentUser();
  //   if (!authUser) return redirect("/sign-in");

  const agencyId = await verifyAndAcceptInvitation();

  console.log(agencyId);

  //get user details
  const user = await getAuthUserDetails();

  return <div>agency</div>;
}

export default page;
