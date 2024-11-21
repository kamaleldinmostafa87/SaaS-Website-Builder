import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])
const isPublicRoute = createRouteMatcher([
  "/",
  "/site",
  "/api/uploadthing",
  "/agency/sign-in(.*)",
  "/agency/sign-up(.*)",
]);
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
  //rewrite for domains
  const url = req.nextUrl; //baseurl
  console.log("url", url);

  const searchParams = url.searchParams.toString(); //id=2
  const hostname = req.headers;
  console.log("pathname", url.pathname);

  const pathWithSearchPrams = `${url.pathname}${
    searchParams.length > 0 ? `${searchParams}` : ""
  }`;

  // if subdomain exist
  // subdomain.localhost
  const customSubDomain = hostname
    .get("host")
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0]; // un defined if not exist subdomain

  console.log("domain", customSubDomain);
  console.log("host", hostname.get("host"));

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchPrams}`, req.url)
    );
  }

  if (url.pathname === "/sign-in" || url.pathname === "/sign-up") {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

  // i don't know why host written // /  /site    /subdomain.localhost.com/site
  if (
    url.pathname === "/" ||
    (url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    //rewrite, show the route and not change it, //refirect, change the route to the redirected route
    return NextResponse.rewrite(new URL(`/site`, req.url));
  }

  if (
    url.pathname.startsWith("/agency") ||
    url.pathname.startsWith("/subaccount")
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchPrams}`, req.url));
  }
});
//

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
