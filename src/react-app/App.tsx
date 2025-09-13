import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import WorkPage from "./pages/Work";
import TeamPage from "./pages/Team";
import DonatePage from "./pages/Donate";
import VolunteerPage from "./pages/Volunteer";
import ContactPage from "./pages/Contact";
import ScrolltoTop from "./ScrolltoTop";
export default function App() {
  return (
    <Router>
      <ScrolltoTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
