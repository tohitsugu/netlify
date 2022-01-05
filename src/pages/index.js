/* Core */
import React from "react";
/* Components */
import BrowserOnly from "../components/CommonComponents/BrowserOnly";

export default function Home() {
  return (
    <BrowserOnly>
      {() => {
        const Layout = require("../hoc/Layout").default;
        const HomePage = require("../components/Home").HomePage;
        return (
          <Layout>
            <HomePage />
          </Layout>
        );
      }}
    </BrowserOnly>
  );
}
