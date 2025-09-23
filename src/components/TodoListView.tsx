import * as React from "react";
import SearchTask from "./form/SearchTask";
import ButtonCusto from "./ui/buttonCusto";
import TodoTable from "./table/TodoTable";
import { FilePlus } from "lucide-react";
import { BarChart3 } from "lucide-react"

interface TodoListViewProps {
  search: string;
  setSearch: (v: string) => void;
  onAdd: () => void;
  viewStats: () => void;
}

/**
 * Vue liste des tâches Todo (recherche, tableau, bouton)
 */
const TodoListView = ({ search, setSearch, onAdd, viewStats }: TodoListViewProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-8 my-5">
      <div className="w-full flex justify-center">
        <SearchTask value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      </div>
      <TodoTable search={search} />
      <div className="w-full flex justify-around mt-6">
        <ButtonCusto 
          onClick={viewStats}
          icone={<BarChart3 className="w-6 h-6"/>}
          text="Consulter les stats"
        />
        <ButtonCusto
          onClick={onAdd}
          icone={<FilePlus className="w-6 h-6"/>}
          text="Ajouter une tâche"
        />
      </div>
    </div>
  );
};

export default TodoListView;
