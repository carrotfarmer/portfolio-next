const path = require("path");

module.exports = {
  experimental: {
    runtime: "experimental-edge",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.hashnode.com", "i.scdn.co"],
  },
};
