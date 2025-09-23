import * as React from "react";
import SearchTask from "./form/SearchTask";
import ButtonCusto from "./ui/buttonCusto";
import TodoTable from "./table/TodoTable";

interface TodoListViewProps {
  search: string;
  setSearch: (v: string) => void;
  onAdd: () => void;
}

/**
 * Vue liste des tâches Todo (recherche, tableau, bouton)
 */
const TodoListView = ({ search, setSearch, onAdd }: TodoListViewProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-8 my-5">
      <div className="w-full flex justify-center">
        <SearchTask value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      </div>
      <TodoTable search={search} />
      <div className="w-full flex justify-center mt-6">
        <ButtonCusto onClick={onAdd} />
      </div>
    </div>
  );
};

export default TodoListView;
