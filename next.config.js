const path = require("path");

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.hashnode.com", "i.scdn.co"],
    disableStaticImages: true,
    unoptimized: true,
  },
});
