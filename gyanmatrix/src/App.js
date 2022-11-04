import { Route, Routes } from "react-router-dom";

import CoursePage from "./GyanAcademyPages/coursePage/CoursePage";
import CourseVideoPage from "./GyanAcademyPages/courseVideoPage/CourseVideoPage";
import CourseLibrary from "./GyanAcademyPages/courseLibraryPage/courseLibrary";
import HomePage from "./GyanAcademyPages/HomePage/HomePage";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} exact></Route>
        <Route path="/coursevideo" element={<CourseVideoPage />}></Route>
        <Route path="/Courses" element={<CoursePage />}></Route>
        <Route path="/courselibrary" element={<CourseLibrary />} exact></Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
