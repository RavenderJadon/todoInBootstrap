import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Card, Button, CardGroup } from "react-bootstrap";

const Completed = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  console.log("todoStateInUpComing", todoStateInUpComing);

  const changeWhatsTheStatus = (index) => {
    const objComing = todoStateInUpComing.task[index];
    objComing.whatsTheStatus = "deleted";
    const taskArr = todoStateInUpComing.task;
    console.log("taskArr", taskArr);
    const firstArr = taskArr.slice(0, index);
    const indexUpgrade = index + 1;
    const secondArr = taskArr.slice(indexUpgrade);
    const result = [...firstArr, objComing, ...secondArr];
    setTodoStateInUpComing({
      ...todoStateInUpComing,
      task: result,
    });
  };

  return (
    <div className="itemsInAllTodosComponentUpComing">
      <CardGroup>
        {todoStateInUpComing.task
          .filter((todoListItem) => {
            if (todoStateInUpComing.search == "") {
              return todoListItem;
            } else if (
              todoListItem.title
                .toLowerCase()
                .includes(todoStateInUpComing.search.toLowerCase())
            ) {
              return todoListItem;
            }
          })
          .map((todoListItem, todoListItemIndex) => {
            return (
              <div key={todoListItem.id}>
                {todoListItem.whatsTheStatus === "completed" && (
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
                            Delete
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
export default Completed;
