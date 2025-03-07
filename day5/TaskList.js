import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.name}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
