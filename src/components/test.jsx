import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Card, Button, CardGroup } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Test = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  console.log("todoStateInUpComing", todoStateInUpComing);
  const [todoArrState, setTodoArrState] = useState(todoStateInUpComing.task);

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

  const handleOnDragEnd = (result) => {
    console.log("result", result);
    if (!result.destination) return;
    const items = Array.from(todoArrState);
    // const items = [...todoArrState];
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);
    setTodoArrState(items);
  };

  return (
    <div className="itemsInAllTodosComponent">
      <CardGroup>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todoITems">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoArrState.map((todoListItem, todoListItemIndex) => {
                  return (
                    <Draggable
                      key={todoListItem.id}
                      draggableId={"" + todoListItem.id}
                      index={todoListItemIndex}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {todoListItem.whatsTheStatus === "upcoming" && (
                            <div>
                              <div className="taskItemDiv">
                                <Card border="dark" style={{ width: "18rem" }}>
                                  <Card.Body>
                                    <Card.Title>
                                      {todoListItem.whatsTheStatus}
                                    </Card.Title>
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
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardGroup>
    </div>
  );
};
export default Test;
