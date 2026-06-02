import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./routes/index";
import Contact from "./routes/contact";
import Notices from "./routes/notices";
import AboutProfile from "./routes/about.profile";
import AboutMessage from "./routes/about.message";
import AboutFaculty from "./routes/about.faculty";
import ProgramsBallb from "./routes/programs.ballb";
import ProgramsLlm from "./routes/programs.llm";
import StudentLifeMoot from "./routes/student-life.moot-court";
import StudentLifeClinic from "./routes/student-life.legal-clinic";
import StudentLifeBar from "./routes/student-life.bar-prep";
import NotFound from "./routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/about/profile" element={<AboutProfile />} />
        <Route path="/about/message" element={<AboutMessage />} />
        <Route path="/about/faculty" element={<AboutFaculty />} />
        <Route path="/programs/ballb" element={<ProgramsBallb />} />
        <Route path="/programs/llm" element={<ProgramsLlm />} />
        <Route path="/student-life/moot-court" element={<StudentLifeMoot />} />
        <Route path="/student-life/legal-clinic" element={<StudentLifeClinic />} />
        <Route path="/student-life/bar-prep" element={<StudentLifeBar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}