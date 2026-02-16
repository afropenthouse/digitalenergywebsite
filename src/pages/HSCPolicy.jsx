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
            Health, Safety and Environment (HSC) Policy
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Digital Energy & Integrated Services Limited is committed to providing a safe,
            healthy and environmentally responsible workplace for our employees, clients,
            contractors and the communities where we operate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 space-y-4 text-gray-700 text-base md:text-lg leading-relaxed"
        >
          <p>
            We integrate health, safety and environmental considerations into all aspects
            of our operations and decision-making. Our goal is to prevent incidents,
            protect people, safeguard the environment and ensure compliance with
            applicable laws, regulations and industry standards.
          </p>
          <p>
            Every employee and contractor is empowered to stop any activity that may pose
            an unacceptable risk and is encouraged to proactively identify and report
            hazards. Through continuous improvement, training and leadership commitment,
            we strive to achieve zero harm in everything we do.
          </p>
          <p>
            The full HSC Policy Statement provides detailed guidance on our commitments,
            responsibilities and expectations for all stakeholders.
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
          <p className="mt-3 text-sm text-gray-500">
            The document will open or download in your browser depending on your settings.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

