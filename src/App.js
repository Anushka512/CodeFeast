import "./style.scss";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/Aboutus";
import Navbar from "./Components/Navbar/Navbar";
import CreateCourse from "./Pages/Admin/Dashboard/CreateCourse";
import AllCourse from "./Pages/Admin/Dashboard/AllCourse";
import SessionLink from "./Pages/Admin/Dashboard/SessionLink";
import Mentoship from "./Pages/Admin/Dashboard/MentorshipLink";
import Footer from "./Components/Footer/Footer";
import Demo from "./Demo";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ScrollToTop from "./Utils/ScrollToTop";
import { useSelector } from "react-redux";
import Login from "./Pages/Login/Login";
import RequireUser from "./Utils/RequireUser";

function App() {
  const { isNavFooterOpen } = useSelector((state) => state.app);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ScrollToTop />
              <About />
            </>
          }
        />
        <Route
          path="/course/:id"
          element={
            <>
              <ScrollToTop />
              <ProductDetail />
            </>
          }
        />
        <Route path="/auth" element={<Login />} />

        <Route path="/demo" element={<Demo />} />
      </Routes>

      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/course/create" element={<CreateCourse />} />
          <Route path="/admin/courses" element={<AllCourse />} />
          <Route path="/admin/sessionlink" element={<SessionLink />} />
          <Route path="/admin/mentorlink" element={<Mentoship />} />
        </Route>
      </Routes>
      {isNavFooterOpen && <Footer />}
    </div>
  );
}

export default App;
