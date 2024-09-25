/** @type {import('next').NextConfig} */
const nextConfig = {
  // I don't understand
  images: {
    domains: [
      "uploadthing.com",
      "utfs.io",
      "img.clerk.com",
      "subdomain",
      "files.stripe.com",
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
