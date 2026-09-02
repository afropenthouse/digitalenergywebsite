import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wrench, ShoppingCart, HardHat, Settings, Users, UserCheck, CheckCircle, Fuel, Shield, Anchor } from 'lucide-react'

const services = [
  {
    id: 'engineering',
    title: 'Engineering Services',
    icon: Wrench,
    path: '/services/engineering'
  },
  {
    id: 'procurement',
    title: 'Procurement Services',
    icon: ShoppingCart,
    path: '/services/procurement'
  },
  {
    id: 'fabrication-octg',
    title: 'Fabrication and Machining of OCTG Pipes and Joints',
    icon: HardHat,
    path: '/services/fabrication'
  },
  {
    id: 'commissioning',
    title: 'Construction, Installation and Site/Offshore Hookups',
    icon: CheckCircle,
    path: '/services/commissioning'
  },
  {
    id: 'fabrication',
    title: 'Fabrication & Construction Services',
    icon: HardHat,
    path: '/services/fabrication-construction'
  },
  {
    id: 'operations',
    title: 'Operations & Maintenance',
    icon: Settings,
    path: '/services/operations'
  },
  {
    id: 'asset-integrity',
    title: 'Assets Integrity, Inspections & Corrosion Management',
    icon: Shield,
    path: '/services/asset-integrity'
  },
  {
    id: 'manpower',
    title: 'Technical Manpower Supply',
    icon: Users,
    path: '/services/manpower'
  },
  {
    id: 'trading',
    title: 'Marketing, Supply & Trading of Petroleum Products',
    icon: Fuel,
    path: '/services/trading'
  },
  {
    id: 'marine',
    title: 'Offshore & Marine Support',
    icon: Anchor,
    path: '/services/marine'
  }
]

const ServicesNav = () => {
  const location = useLocation()
  const activeService = services.find(service => location.pathname === service.path)

  return (
    <div className="hidden md:block">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3">
        <div className="flex flex-col space-y-1">
          {services.map((service) => {
            const isActive = location.pathname === service.path
            const Icon = service.icon

            return (
              <Link
                key={service.id}
                to={service.path}
                className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute left-0 w-1 h-full bg-blue-600 rounded-r-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServicesNav 