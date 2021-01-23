import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Card, Button, CardGroup } from "react-bootstrap";

const Others = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  const [show, setShow] = useState(true);

  const changeWhatsTheStatus = (todoListItemIndex) => {
    const objComing = todoStateInUpComing.task[todoListItemIndex];
    objComing.whatsTheStatus = "cleaned";
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

  console.log("todoStateInUpComing", todoStateInUpComing);
  return (
    <div className="itemsInAllTodosComponent">
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
                {todoListItem.whatsTheStatus === "deleted" && (
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
                            Remove
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
export default Others;
