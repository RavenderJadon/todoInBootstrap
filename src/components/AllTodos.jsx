import { useContext } from "react";
import { DataContext } from "../context/DataContext";
// import TaskItem from "./TaskItem";
import { CardGroup, Card, Button } from "react-bootstrap";

const AllTodos = () => {
  const [todoState, setTodoState] = useContext(DataContext);
  console.log("todoState :", todoState);

  const changeWhatsTheStatus = (index) => {
    const objComing = todoState.task[index];
    objComing.whatsTheStatus = "deleted";
    const taskArr = todoState.task;
    console.log("taskArr", taskArr);
    const firstArr = taskArr.slice(0, index);
    const indexUpgrade = index + 1;
    const secondArr = taskArr.slice(indexUpgrade);
    const result = [...firstArr, objComing, ...secondArr];
    setTodoState({
      ...todoState,
      task: result,
    });
  };

  const changeWhatsTheStatusOfUpComing = (index) => {
    const objComing = todoState.task[index];
    objComing.whatsTheStatus = "completed";
    const taskArr = todoState.task;
    console.log("taskArr", taskArr);
    const firstArr = taskArr.slice(0, index);
    const indexUpgrade = index + 1;
    const secondArr = taskArr.slice(indexUpgrade);
    const result = [...firstArr, objComing, ...secondArr];
    setTodoState({
      ...todoState,
      task: result,
    });
  };

  return (
    <div className="itemsInAllTodosComponent">
      <CardGroup>
        {todoState.task
          .filter((items) => {
            if (todoState.search == "") {
              return items;
            } else if (
              items.title.toLowerCase().includes(todoState.search.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items, index) => {
            return (
              <div key={items.id}>
                {items.whatsTheStatus === "completed" && (
                  <div className="taskItemDiv">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>Completed</Card.Title>
                        <Card.Text>{items.title}</Card.Text>
                        <Card.Text>
                          {items.settingForDate} {}{" "}
                          {items.setting_for_what_time}
                        </Card.Text>
                        <Button
                          variant="outline-danger"
                          className="taskBtn"
                          onClick={() => changeWhatsTheStatus(index)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                )}
                {items.whatsTheStatus === "upcoming" && (
                  <div className="taskItemDiv">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>UpComing</Card.Title>
                        <Card.Text>{items.title}</Card.Text>
                        <Card.Text>
                          <p>
                            {items.settingForDate} {}{" "}
                            {items.setting_for_what_time}
                          </p>
                        </Card.Text>
                        <Button
                          variant="outline-danger"
                          className="taskBtn"
                          onClick={() => changeWhatsTheStatusOfUpComing(index)}
                        >
                          Mark as Completed
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </div>
            );
          })}
      </CardGroup>
    </div>
  );
};
export default AllTodos;
