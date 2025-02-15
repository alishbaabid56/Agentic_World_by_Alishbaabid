"use client";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", AI_Growth: 40 },
  { name: "Feb", AI_Growth: 55 },
  { name: "Mar", AI_Growth: 70 },
  { name: "Apr", AI_Growth: 90 },
  { name: "May", AI_Growth: 110 },
  { name: "Jun", AI_Growth: 130 },
];

export default function AnalysisChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-white text-center mb-4">
        AI Growth Analysis
      </h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="AI_Growth" stroke="#a855f7" strokeWidth={3} dot={{ r: 5, fill: "#a855f7" }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
