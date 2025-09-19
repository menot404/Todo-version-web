import TableStats from "./layouts/TableStats";
import PieTodoChart from "./layouts/PieTodoChart";

const Stats = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center gap-10 my-5">
      {/* Component TableStats */}
      <div>
        <TableStats/>
      </div>
      {/* Pie chart */}
      <div>
        <PieTodoChart/>
      </div>
    </div>
  );
};

export default Stats;