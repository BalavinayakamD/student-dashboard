import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { Typography, Box } from "@mui/material";

const cgpaData = [
  { name: "Semester 1", CGPA: 7.5 },
  { name: "Semester 2", CGPA: 8.0 },
];

const attendanceData = [
  { name: "Present", value: 79.84 },
  { name: "Absent", value: 20.159 },
];

const arrearsData = [
  { name: "Pass", value: 8 },
  { name: "Fail", value: 0 },
];

const gradesData = [
  { name: "O", value: 4 },
  { name: "A+", value: 4 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF19A3", "#19FFB3", "#FF1919"];

function Details() {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Student Performance
      </Typography>

      <Typography variant="h6" gutterBottom>
        CGPA
      </Typography>
      <BarChart
        width={500}
        height={300}
        data={cgpaData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="CGPA" fill="#8884d8" />
      </BarChart>

      <Typography variant="h6" gutterBottom>
        Attendance
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={attendanceData}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {attendanceData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <Typography variant="h6" gutterBottom>
        Arrears
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={arrearsData}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {arrearsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <Typography variant="h6" gutterBottom>
        Grades
      </Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={gradesData}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {gradesData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Box>
  );
}

export default Details;
