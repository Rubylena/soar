import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { balanceHistory } from "../../utils/data";

export default function BalanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={730}
        height={250}
        data={balanceHistory}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="amount" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="rgba(45, 96, 255, 0.25)"
              stopOpacity={1}
            />
            <stop offset="100%" stopColor="#2D60FF00" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <XAxis stroke="#718EBF" tick={{ fontSize: 14 }} dataKey="month" />
        <YAxis stroke="#718EBF" tick={{ fontSize: 14 }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount"
          strokeWidth={3}
          stroke="#2D60FF"
          fill="url(#amount)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
