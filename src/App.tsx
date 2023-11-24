import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Greeting from "./components/pages/greeting";
import Main from "./components/pages/mainPage";

const App = () => {
  document.title = "Welcome to my portfolio | Home ";
  return (
    <>
      <Navbar />
      <div className="pt-16 text-main-dark   max-w-xl mx-auto space-y-5 px-5 text-md text-center ">
        <Greeting />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default App;
