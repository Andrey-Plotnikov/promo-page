const path = require("path");

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/promo-page/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@c": path.join(__dirname, "src/components"),
        "@css": path.join(__dirname, "src/assets/css"),
        "@img": path.join(__dirname, "src/assets/img"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
