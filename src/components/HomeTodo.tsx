import { useState } from "react";
import TodoListView from "./TodoListView";
import FormTodo from "./form/Form";
import Stats from "./Stats";

const HomeTodo = () => {
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [showStat, setShowStat] = useState(false);
    
     if (showStat) {
            return <Stats onclose={()=>setShowStat(false)}/>;
        }else if (showForm){
            return <FormTodo onCancel={() => setShowForm(false)} onSuccess={() => setShowForm(false)} />;
        }else{
            return <TodoListView 
                search={search} 
                setSearch={setSearch} 
                onAdd={() => setShowForm(true)} 
                viewStats={() => setShowStat(true)}
            />; 
        };
}
 
export default HomeTodo;