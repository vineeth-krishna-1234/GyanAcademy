import { Route, Routes } from "react-router-dom";

import CoursePage from "./GyanAcademyPages/coursePage/CoursePage";
import CourseVideoPage from "./GyanAcademyPages/courseVideoPage/CourseVideoPage";
import CourseLibrary from "./GyanAcademyPages/courseLibraryPage/courseLibrary";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CourseLibrary />} exact></Route>
        <Route path="/coursevideo" element={<CourseVideoPage />}></Route>
        <Route path="/Courses" element={<CoursePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
