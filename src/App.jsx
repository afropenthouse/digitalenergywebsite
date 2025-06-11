"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import WhoWeAre from "./pages/AboutUs/WhoWeAre"
import OurGovernance from "./pages/AboutUs/OurGovernance"
import OurHistory from "./pages/AboutUs/OurHistory"
import OurCertifications from "./pages/AboutUs/OurCertifications"
import EventGallery from "./pages/AboutUs/EventGallery"
import Clients from "./pages/AboutUs/Clients"
import ContactForm from "./pages/ContactUs/ContactForm"
import RequestQuote from "./pages/ContactUs/RequestQuote"
import VendorRegistration from "./pages/ContactUs/VendorRegistration"
import BecomePartner from "./pages/ContactUs/BecomePartner"
import Services from "./pages/Services/Services"
import Projects from "./pages/Projects"
import OEM from "./pages/OEM"
import Career from "./pages/Career"
import Loader from "./pages/Loader/Loader"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <Loader />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about">
                <Route path="who-we-are" element={<WhoWeAre />} />
                <Route path="governance" element={<OurGovernance />} />
                <Route path="history" element={<OurHistory />} />
                <Route path="certifications" element={<OurCertifications />} />
                <Route path="gallery" element={<EventGallery />} />
                <Route path="clients" element={<Clients />} />
              </Route>
              <Route path="/contact">
                <Route index element={<ContactForm />} />
                <Route path="quote" element={<RequestQuote />} />
                <Route path="vendor" element={<VendorRegistration />} />
                <Route path="partner" element={<BecomePartner />} />
              </Route>
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/oem" element={<OEM />} />
              <Route path="/careers" element={<Career />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
