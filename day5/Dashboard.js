import TaskList from "../components/TaskList";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(addTask({ id: Date.now(), name: "New Task" }))}>
        Add Task
      </button>
      <TaskList />
    </div>
  );
};

export default Dashboard;
