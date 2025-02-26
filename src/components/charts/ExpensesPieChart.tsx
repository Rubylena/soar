import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { expenses } from "../../utils/data";


export default function ExpensePieChart() {
  const radiusMapping = [150, 130, 170, 140];
  return (
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
          label={({
            cx,
            cy,
            midAngle,

            outerRadius,
            percent,
            index,
          }) => {
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
            <Cell
              key={`cell-${index}`}
            
              fill={entry.color}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}