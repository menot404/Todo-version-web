import TableStats from "./layouts/TableStats";
import PieTodoChart from "./layouts/PieTodoChart";
import ButtonCusto from "./ui/buttonCusto";
import { X } from "lucide-react";

interface StatsProps {
  // onClose: () => void; --- IGNORE ---
  onclose: () => void;
}
const Stats = ({onclose}: StatsProps ) => {
  return (
    <div className="w-full ">
      {/* Component TableStats */}
      <div>
        <TableStats/>
      </div>
      {/* Pie chart */}
      <div>
        <PieTodoChart/>
      </div>
      <div className="w-full flex justify-center mt-6 mb-10">
        <ButtonCusto
          icone={<X className="w-6 h-6"/>}
          text="Fermer"
          onClick={onclose}
        />
      </div>
    </div>
  );
};

export default Stats;