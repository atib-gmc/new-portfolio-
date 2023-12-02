import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Greeting from "./components/pages/greeting";
import Main from "./components/pages/mainPage";
// import { useEffect, useState } from "react";
import OtherProject from "./components/pages/otherProjects";

const App = () => {
  // const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setLoad(true);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16 text-main-dark   max-w-xl mx-auto space-y-5 px-5 text-md text-center ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Greeting />
                <Main />
              </>
            }
          />
          <Route path="projects" element={<OtherProject />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
