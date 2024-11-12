// GrowthChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// Register components to ChartJS (required for ChartJS v3+)
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const GrowthChart = () => {
  // Sample data for the chart (replace with actual data if available)
  const data = {
    labels: ["May 04", "May 09", "May 14", "May 18", "May 26"],
    datasets: [
      {
        label: "Net Growth",
        data: [100, 175, 120, 250, 200], // Replace with dynamic data if needed
        backgroundColor: "rgba(34, 197, 94, 0.2)", // Tailwind color with transparency
        borderColor: "rgba(34, 197, 94, 1)", // Tailwind green color
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend for a cleaner look
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
      },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="w-32 h-24">
      <Line data={data} options={options} />
    </div>
  );
};

export default GrowthChart;
