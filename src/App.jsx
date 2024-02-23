import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Newsletter from "./Components/Footer/Newsletter/Newslette.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import { AppContext } from "./utils/Context.jsx";

const App = () => {
  return (
    <>
      <AppContext value={[]}>
        <div>
          <Header />
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>

      </AppContext>
    </>

  );
};

export default App;
