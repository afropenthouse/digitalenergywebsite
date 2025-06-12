import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wrench, ShoppingCart, HardHat, Settings, Users, UserCheck, CheckCircle, Fuel } from 'lucide-react'

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
    id: 'fabrication',
    title: 'Fabrication & Construction Services',
    icon: HardHat,
    path: '/services/fabrication'
  },
  {
    id: 'commissioning',
    title: 'Commissioning & Start-up',
    icon: CheckCircle,
    path: '/services/commissioning'
  },
  {
    id: 'operations',
    title: 'Operations & Maintenance',
    icon: Settings,
    path: '/services/operations'
  },
  {
    id: 'manpower',
    title: 'Technical Manpower Supply',
    icon: Users,
    path: '/services/manpower'
  },
  {
    id: 'trading',
    title: 'Marketing, Supply & Trading',
    icon: Fuel,
    path: '/services/trading'
  }
]

const ServicesNav = () => {
  const location = useLocation()
  const activeService = services.find(service => location.pathname === service.path)

  return (
    <div className="hidden md:block">
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
  )
}

export default ServicesNav 