import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { weeklyStatistics } from "../../utils/data";

export default function WeeklyActivity() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={weeklyStatistics}
        margin={{
          top: 20,
          right: 30,
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
