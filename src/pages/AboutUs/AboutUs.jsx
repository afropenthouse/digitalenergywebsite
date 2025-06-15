import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import WhoWeAre from "./WhoWeAre"
import Management from "./Management"
import OurHistory from "./OurHistory"
import OurCertifications from "./OurCertifications"
import EventGallery from "./EventGallery"
import Clients from "./Clients"

const AboutUs = () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState("who-we-are")

  useEffect(() => {
    // Extract section from URL path
    const path = location.pathname.split("/").pop()
    if (path && path !== "about-us") {
      setActiveSection(path)
    }
  }, [location])

  const renderSection = () => {
    switch (activeSection) {
      case "who-we-are":
        return <WhoWeAre />
      case "management":
        return <Management />
      case "our-history":
        return <OurHistory />
      case "our-certifications":
        return <OurCertifications />
      case "event-gallery":
        return <EventGallery />
      case "clients":
        return <Clients />
      default:
        return <WhoWeAre />
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {renderSection()}
    </div>
  )
}

export default AboutUs
