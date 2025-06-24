import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WhoWeAre from "./pages/AboutUs/WhoWeAre";
import OurHistory from "./pages/AboutUs/OurHistory";
import OurCertifications from "./pages/AboutUs/OurCertifications";
import EventGallery from "./pages/AboutUs/EventGallery";
import Clients from "./pages/AboutUs/Clients";
import ContactForm from "./pages/ContactUs/ContactForm";
import RequestQuote from "./pages/ContactUs/RequestQuote";
import VendorRegistration from "./pages/ContactUs/VendorRegistration";
import BecomePartner from "./pages/ContactUs/BecomePartner";
import Services from "./pages/Services/Services";
import EngineeringServices from "./pages/Services/EngineeringServices";
import ProcurementServices from "./pages/Services/ProcurementServices";
import CommissioningStartup from "./pages/Services/CommissioningStartup";
import OperationsMaintenance from "./pages/Services/OperationsMaintenance";
import TechnicalManpower from "./pages/Services/TechnicalManpower";
import Projects from "./pages/Projects";
import OEM from "./pages/OEM";
import Career from "./pages/Career";
import ScrollUP from "./components/Scroll/ScrollUP";
import FabricationConstruction from './pages/Services/FabricationConstruction';
import TradingServices from "./pages/Services/TradingServices";
import Management from "./pages/AboutUs/Management";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import "./index.css";

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about">
              <Route path="who-we-are" element={<WhoWeAre />} />
              <Route path="management" element={<Management />} />
              <Route path="history" element={<OurHistory />} />
              <Route path="certifications" element={<OurCertifications />} />
              <Route path="gallery" element={<EventGallery />} />
              <Route path="clients" element={<Clients />} />
            </Route>
            <Route path="contact">
              <Route index element={<ContactForm />} />
              <Route path="quote" element={<RequestQuote />} />
              <Route path="vendor" element={<VendorRegistration />} />
              <Route path="partner" element={<BecomePartner />} />
            </Route>
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="engineering" element={<EngineeringServices />} />
              <Route path="procurement" element={<ProcurementServices />} />
              <Route path="commissioning" element={<CommissioningStartup />} />
              <Route path="operations" element={<OperationsMaintenance />} />
              <Route path="manpower" element={<TechnicalManpower />} />
              <Route path="fabrication" element={<FabricationConstruction />} />
              <Route path="trading" element={<TradingServices />} />
            </Route>
            <Route path="projects" element={<Projects />} />
            <Route path="oem" element={<OEM />} />
            <Route path="careers" element={<Career />} />
          </Route>
        </Routes>
      </main>
      <ScrollUP />
    </div>
  );
}

export default AppRoutes; 