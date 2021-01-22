import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Card, Button, CardGroup } from "react-bootstrap";

const UpComing = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  console.log("todoStateInUpComing", todoStateInUpComing);

  const changeWhatsTheStatus = (todoListItemIndex) => {
    const objComing = todoStateInUpComing.task[todoListItemIndex];
    objComing.whatsTheStatus = "completed";
    const taskArr = todoStateInUpComing.task;
    console.log("taskArr", taskArr);
    const firstArr = taskArr.slice(0, todoListItemIndex);
    const indexUpgrade = todoListItemIndex + 1;
    const secondArr = taskArr.slice(indexUpgrade);
    const result = [...firstArr, objComing, ...secondArr];
    setTodoStateInUpComing({
      ...todoStateInUpComing,
      task: result,
    });
  };
  return (
    <div>
      <CardGroup>
        {todoStateInUpComing.task.map((todoListItem, todoListItemIndex) => {
          return (
            <div key={todoListItem.id}>
              {todoListItem.whatsTheStatus === "upcoming" && (
                <div>
                  <div className="taskItemDiv">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Body>
                        <Card.Title>{todoListItem.whatsTheStatus}</Card.Title>
                        <Card.Text>{todoListItem.title}</Card.Text>
                        <Card.Text>
                          {todoListItem.settingForDate} {}{" "}
                          {todoListItem.setting_for_what_time}
                        </Card.Text>
                        <Button
                          variant="outline-danger"
                          className="taskBtn"
                          onClick={() =>
                            changeWhatsTheStatus(todoListItemIndex)
                          }
                        >
                          Mark as Complete
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </CardGroup>
    </div>
  );
};
export default UpComing;
