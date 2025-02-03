import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Product Sales",
      data: [30, 45, 60, 50, 80, 70, 90],
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ProductChart = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Product Sales Charts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bar Chart */}

        <div className="w-full bg-white p-4 rounded-lg shadow-lg h-[300px] md:h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Sales Bar Chart</h3>
          <Bar data={data} options={options} />
        </div>

        {/* Line Chart */}

        <div className="w-full bg-white p-4 rounded-lg shadow-lg h-[300px] md:h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Sales Line Chart</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ProductChart;