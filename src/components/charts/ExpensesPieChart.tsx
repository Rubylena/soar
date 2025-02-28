import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../reusables/Skeleton";
import { Expenses } from "../../utils/types";

export default function ExpensePieChart() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/expenses`
      );

      if (typeof result?.data === "object") {
        setExpenses(result.data);
      }
    } catch (err) {
      console.log("Error fetching Data:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={350} height={400}>
        <Pie
          data={expenses}
          cx="50%"
          cy="50%"
          outerRadius={145}
          innerRadius={1}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ cx, cy, midAngle, outerRadius, percent, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = outerRadius * 0.7; // Keep text inside the section
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <g>
                <text
                  x={x}
                  y={y - 10}
                  fill="#fff"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={13}
                  fontWeight="bold"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
                <text
                  x={x}
                  y={y + 10}
                  fill="#fff"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={13}
                  fontWeight="bold"
                >
                  {expenses[index].name}
                </text>
              </g>
            );
          }}
          labelLine={false}
        >
          {expenses.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
