import { useState, useEffect } from "react";
const UpcomingActivities = () => {
  let today = new Date();
  let currentDate = today.toJSON().slice(0, 10);
  const [tasks, setTasks] = useState([]);
  const compareDates = (t1, t2) => t1.date.localeCompare(t2.date);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (Array.isArray(data)) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <main className="items">
      <table className="table">
        <tbody>
          {tasks
            .filter((task) => task.date.slice(0, 10) !== currentDate)
            .sort(compareDates)
            .map((task) => {
              const { id, name, date } = task;
              return (
                <tr key={id}>
                  <td>{date.slice(0, 10)}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </main>
  );
};

export default UpcomingActivities;
