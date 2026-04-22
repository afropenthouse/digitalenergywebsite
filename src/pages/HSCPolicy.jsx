import { motion } from "framer-motion"

const policyPdf = "/DEISL-HSE%20POLICY%20STATEMENT.pdf"

export default function HSCPolicy() {
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
            HSC Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quality Policy Statement
          </h1>
          <p className="text-lg text-gray-700 max-w">
            Digital Energy & Integrated Services Limited is dedicated to delivering safe, reliable, and high-quality services across engineering, procurement, construction/fabrication, commissioning, project management, and more within the Oil & Gas and allied industries. We are committed to meeting and exceeding customer expectations by understanding client requirements and maintaining the highest standards of quality, safety, and environmental responsibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed"
        >
          <p>
            Our policy is built on continual improvement, compliance with ISO 9001 and API Q1 standards, and a commitment to statutory, regulatory, and customer requirements. We empower our workforce, set measurable quality objectives, and promote innovation and operational excellence throughout our services.
          </p>
          <p>
            For the complete Quality Policy Statement and details on our commitments, responsibilities, and expectations, please download and read the full PDF below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href={policyPdf}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-colors duration-200"
          >
            <span>Download HSC Policy Statement (PDF)</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
