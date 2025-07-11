"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Users, Camera, Heart, Eye, Download } from "lucide-react"

const monthlyData = [
  { month: "Jan", views: 4000, bookings: 24, revenue: 12000 },
  { month: "Feb", views: 3000, bookings: 18, revenue: 9000 },
  { month: "Mar", views: 5000, bookings: 32, revenue: 16000 },
  { month: "Apr", views: 4500, bookings: 28, revenue: 14000 },
  { month: "May", views: 6000, bookings: 38, revenue: 19000 },
  { month: "Jun", views: 7000, bookings: 42, revenue: 21000 },
]

const portfolioData = [
  { category: "Weddings", value: 45, color: "#fbbf24" },
  { category: "Portraits", value: 25, color: "#8b5cf6" },
  { category: "Events", value: 15, color: "#06b6d4" },
  { category: "Commercial", value: 15, color: "#10b981" },
]

const stats = [
  { icon: Users, label: "Total Visitors", value: "32,450", change: "+12.5%", color: "text-blue-500" },
  { icon: Camera, label: "Portfolio Views", value: "18,230", change: "+8.3%", color: "text-purple-500" },
  { icon: Heart, label: "Inquiries", value: "1,240", change: "+15.2%", color: "text-red-500" },
  { icon: Eye, label: "Page Views", value: "89,120", change: "+6.7%", color: "text-green-500" },
]

export default function AnalyticsPage() {
  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-8">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-serif font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your photography business performance</p>
        </motion.header>

        {/* Statistics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-elegant p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color} bg-current/10`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        {/* Charts Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="card-elegant p-6"
          >
            <h3 className="text-xl font-serif font-semibold mb-6">Monthly Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#fbbf24" strokeWidth={3} />
                <Line type="monotone" dataKey="bookings" stroke="#8b5cf6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="card-elegant p-6"
          >
            <h3 className="text-xl font-serif font-semibold mb-6">Portfolio Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ category, value }) => `${category}: ${value}%`}
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        {/* Bar Chart */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="card-elegant p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif font-semibold">Revenue Trends</h3>
            <button className="btn-primary flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Bar dataKey="revenue" fill="#fbbf24" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.section>
      </div>
    </main>
  )
}
