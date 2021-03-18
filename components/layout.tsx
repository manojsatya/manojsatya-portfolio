import React from "react";
import PropTypes from "prop-types";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-body">
      <main className="max-w-screen-lg m-auto">{children}</main>
      <footer
        style={{
          position: "absolute",
          bottom: "0px",
          margin: "auto",
          textAlign: "center",
          width: "100%",
        }}
      >
        © {new Date().getFullYear()}, Built with &#10084;&#65039;
        {` `}
        <a href="https://nextjs.org/">Next.js</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
