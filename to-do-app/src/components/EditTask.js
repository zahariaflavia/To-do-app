import { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DatePicker from "react-datepicker";
import moment from "moment";

const EditTask = () => {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState("");
  const [editText, setEditText] = useState("");
  const [dateEdit, setDateEdit] = useState(new Date());
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  let today = new Date();
  let currentDate = today.toJSON().slice(0, 10);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      setTasks(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const compareDates = (t1, t2) => t1.date.localeCompare(t2.date);
  const handleSave = (id) => {
    let auxDate;
    if (!dateEdit) {
      setDateError("The date is not valid!");
      console.log(dateEdit);
      setTimeout(() => {
        setDateError("");
        setDateEdit(new Date());
      }, 3000);
      console.log(dateEdit);
    } else {
      auxDate = dateEdit.toJSON();
      if (auxDate.localeCompare(currentDate) < 0) {
        setDateError("The date cannot be in the past!");
        setTimeout(() => {
          setDateError("");
          setDateEdit(new Date());
        }, 3000);
      }

      if (editText && auxDate.localeCompare(currentDate) >= 0) {
        let aux = [...tasks];
        let elementIndex = tasks.findIndex((task) => task.id === id);
        aux[elementIndex] = {
          ...aux[elementIndex],
          name: editText,
          date: dateEdit.toJSON(),
        };
        setTasks(aux);
        setEditText("");
        setEdit("");
        setDateEdit(new Date());
      } else if (!editText) {
        setNameError("The name input cannot be empty!");
        setTimeout(() => {
          setNameError("");
        }, 3000);
      }
    }
  };
  const handleEdit = (name, id, date) => {
    setEditText(name);
    setEdit(id);
    let d = moment.utc(date).toDate();
    setDateEdit(d);
  };

  return (
    <div>
      <div className="items">
        {nameError && <h5>{nameError}</h5>}
        {dateError && <h5>{dateError}</h5>}
        {tasks.filter((task) => task.status === "incomplete").length === 0 ? (
          <h2>There are no incomplete activities to be displayed</h2>
        ) : (
          <table className="table">
            <tbody>
              {tasks
                .filter((task) => task.status === "incomplete")
                .sort(compareDates)
                .map((task) => {
                  const { id, name, date } = task;
                  return (
                    <tr key={id}>
                      <td>
                        {edit === id ? (
                          <DatePicker
                            selected={dateEdit}
                            onChange={(d) => setDateEdit(d)}
                          />
                        ) : (
                          <>{date.slice(0, 10)}</>
                        )}
                      </td>
                      <td>
                        {edit === id ? (
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            required
                          />
                        ) : (
                          <>{name}</>
                        )}
                      </td>
                      <td>
                        {edit === id ? (
                          <button
                            className="button"
                            onClick={() => handleSave(id)}
                          >
                            Save
                          </button>
                        ) : (
                          <EditIcon
                            onClick={() => handleEdit(name, id, date)}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EditTask;
