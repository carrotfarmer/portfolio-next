const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.hashnode.com", "i.scdn.co"],
    unoptimized: true,
  },
};
