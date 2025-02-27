import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../reusables/Skeleton";

export default function WeeklyActivity() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const result = await axios.get("http://localhost:8000/weeklyStats");
      setWeeklyData(result.data);
    } catch (err) {
      console.log("Error fetching Data:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={weeklyData}
        margin={{
          top: 20,
          right: 10,
          left: 0,
          bottom: 20,
        }}
        barGap={13}
      >
        <CartesianGrid stroke="#F3F3F5" vertical={false} />
        <XAxis
          axisLine={false}
          dataKey="day"
          tickLine={false}
          stroke="#718EBF"
          tick={{ fontSize: 13 }}
        />
        <YAxis
          axisLine={false}
          tick={{ fontSize: 13 }}
          stroke="#718EBF"
          tickLine={false}
        />
        <Tooltip />
        {/* Bar with width 15px and rounded top/bottom */}
        <Bar
          dataKey="withdraw"
          fill="#232323"
          barSize={15}
          radius={30} // Top left, top right, bottom right, bottom left
        />
        <Bar dataKey="deposit" fill="#396AFF" barSize={15} radius={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}
