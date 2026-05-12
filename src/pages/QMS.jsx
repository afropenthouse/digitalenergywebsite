import { motion } from "framer-motion";

const policyPdf = "/DEISL-HSE%20POLICY%20STATEMENT.pdf";

export default function QMS() {
  return (
    <div className="pt-40 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-800 bg-blue-50 rounded-full">
            Quality management
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality management (QMS)
          </h1>
          <p className="text-gray-700 mb-6">
            Digital Energy & Integrated Services Limited is dedicated to delivering safe, reliable, and high-quality services across engineering, procurement, construction/fabrication, commissioning, project management, and more within the Oil & Gas and allied industries. We are committed to meeting and exceeding customer expectations by understanding client requirements and maintaining the highest standards of quality, safety, and environmental responsibility.
          </p>
          <p className="text-gray-700 mb-6">
            Our policy is built on continual improvement, compliance with ISO 9001 and API Q1 standards, and a commitment to statutory, regulatory, and customer requirements. We empower our workforce, set measurable quality objectives, and promote innovation and operational excellence throughout our services.
          </p>
          <p className="text-gray-700 mb-8">
            For the complete Quality management and details on our commitments, responsibilities, and expectations, please download and read the full PDF below.
          </p>
          <a
            href={policyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-500 transition-colors"
          >
            Download Quality management (PDF)
          </a>
        </motion.div>
      </div>
    </div>
  );
}
