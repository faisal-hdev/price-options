import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const subjectMarks = [
    {
      id: 1,
      name: "Alice",
      math_mark: 85,
      physics_mark: 78,
      chemistry_mark: 90,
    },
    { id: 2, name: "Bob", math_mark: 78, physics_mark: 82, chemistry_mark: 85 },
    {
      id: 3,
      name: "Charlie",
      math_mark: 92,
      physics_mark: 88,
      chemistry_mark: 93,
    },
    {
      id: 4,
      name: "David",
      math_mark: 67,
      physics_mark: 70,
      chemistry_mark: 75,
    },
    { id: 5, name: "Eve", math_mark: 88, physics_mark: 85, chemistry_mark: 89 },
    {
      id: 6,
      name: "Frank",
      math_mark: 75,
      physics_mark: 72,
      chemistry_mark: 80,
    },
    {
      id: 7,
      name: "Grace",
      math_mark: 91,
      physics_mark: 90,
      chemistry_mark: 94,
    },
    {
      id: 8,
      name: "Hannah",
      math_mark: 83,
      physics_mark: 80,
      chemistry_mark: 85,
    },
    { id: 9, name: "Ian", math_mark: 79, physics_mark: 75, chemistry_mark: 82 },
    {
      id: 10,
      name: "Jane",
      math_mark: 95,
      physics_mark: 92,
      chemistry_mark: 97,
    },
  ];

  return (
    <div>
      <LChart width={650} height={400} data={subjectMarks}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math_mark" stroke="red"></Line>
        <Line dataKey="physics_mark" stroke="orange"></Line>
        <Line dataKey="chemistry_mark" stroke="green"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
