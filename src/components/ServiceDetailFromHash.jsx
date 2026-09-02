import { useLocation } from "react-router-dom";

export function formatHeroTitle(title) {
  if (!title) return title;
  let result = null;
  const trySplit = (sep) => {
    if (title.includes(sep)) {
      const idx = title.lastIndexOf(sep);
      const whitePart = title.slice(0, idx + sep.length);
      const orangePart = title.slice(idx + sep.length);
      result = (
        <>
          {whitePart}
          <span className="text-orange-400">{orangePart}</span>
        </>
      );
      return true;
    }
    return false;
  };
  if (trySplit(" of ")) return result;
  if (trySplit(" and ")) return result;
  if (trySplit(" & ")) return result;
  if (trySplit(", ")) return result;
  const words = title.split(" ");
  if (words.length >= 2) {
    const lastWord = words.pop();
    const whitePart = words.join(" ") + " ";
    return (
      <>
        {whitePart}
        <span className="text-orange-400">{lastWord}</span>
      </>
    );
  }
  return title;
}

const SLUGS = {
  "services/operations": {
    "operations": {
      title: "Operations & Maintenance",
      subtitle: "Keep Your Assets Running. At Peak Performance.",
      description: "We provide full-scope O&M services ensuring safety, reliability, optimal asset performance, reduced downtime, Spare parts management, Shutdowns and extended infrastructure life cycle from daily operations to predictive, preventive and corrective maintenance services.",
    },
    "assets-integrity": {
      title: "Assets Integrity, Inspections & Corrosion Management",
      subtitle: "Asset Integrity Management (AIM) is essential for ensuring the safety, reliability, and performance of critical assets in the oil and gas industry.",
      description: "Safety. Compliance. Uptime. Proactive asset integrity management, planned routine inspections and corrosion management services designed to protect your assets, meet regulatory requirements, sustain operational efficiency both offshore and onshore, extend asset life, prevent failures, and keep your operations running safely and optimally.",
    },
  },
  "services/commissioning": {
    "construction-installation": {
      title: "Construction, Installation and Site/Offshore Hookups",
      subtitle: "Built Right. Installed Safe. Hooked Up Right.",
      description: "We deliver full-scope construction and installation services across power and oil & gas facilities, we execute civil, structural, mechanical, piping, and E&I works, plus site and offshore hookups for greenfield projects and brownfield facility upgrades.",
    },
    "pre-commissioning": {
      title: "Pre-commissioning, Commissioning & Start-up",
      subtitle: "From Testing to First Oil / First Power.",
      description: "We manage pre-commissioning, commissioning, and start-up activities to de-risk your project and ensure systems perform safely from day one.",
    },
  },
  "services/engineering": {
    "engineering": {
      title: "Engineering Services",
      subtitle: "Full-cycle engineering capability.",
      description: "FEED, Detailed Design, and Fabrication/Installation Engineering. Supported by HAZOP, HAZID, and Constructability reviews across Process, Piping, Mechanical, Civil, Structural, Electrical, and Instrumentation disciplines.",
    },
  },
  "services/procurement": {
    "procurement": {
      title: "Procurement Services",
      subtitle: "The right materials at the right price and at the right time.",
      description: "End-to-end procurement with global reach and local expertise. From global vendors to Nigerian suppliers, we manage sourcing to meet your project's cost, quality, and Local Content requirements compliance.",
    },
  },
  "services/fabrication": {
    "fabrication": {
      title: "Fabrication & Machining of OCTG Pipes and Joints",
      subtitle: "Built in Our Shop. Built to Spec. Machined to Last. Ready for Site.",
      description: "We provide fabrication, threading, and repair of OCTG pipes and joints for drilling and production operations ensuring reliability downhole and on surface. We fabricate piping spools and structural steel assemblies in a controlled workshop environment to ensure quality, accuracy, and faster site installation.",
    },
  },
  "services/manpower": {
    "manpower": {
      title: "Technical Manpower Supply",
      subtitle: "The Right People. Right on Time.",
      description: "Project staffing solutions with certified and experienced personnel. From IRATA and NDT to supervision and specialized trades fully compliant and ready to work.",
    },
  },
  "services": {
    "project-management": {
      title: "Project Management",
      subtitle: "Your Project. Our Accountability.",
      description: "We plan, coordinate, and execute complex projects with disciplined project controls to deliver safely, on schedule, and to specification.",
    },
  },
  "services/marine": {
    "marine": {
      title: "Offshore & Marine Support",
      subtitle: "Marine support services tailored for oil, gas, and maritime industries.",
      description: "Our Marine support services include vessel chartering, offshore logistics, subsea inspection, and environmental pollution control tailored for the oil, gas, and maritime industries.",
    },
  },
};

export function getServiceFromHash(pathname, hash) {
  const path = (pathname || "").replace(/^\//, "");
  const slug = (hash || "").replace(/^#/, "");
  if (!slug) return null;
  const map = SLUGS[path];
  if (!map) return null;
  return map[slug] || null;
}

export default function ServiceDetailFromHash() {
  const location = useLocation();
  const data = getServiceFromHash(location.pathname, location.hash);
  if (!data) return null;
  return null;
}
