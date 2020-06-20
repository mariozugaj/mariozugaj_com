const React = require("react");
const Layout = require("./src/components/Layout").default;
require("./src/styles/global.css");

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
