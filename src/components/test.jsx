import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Test = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [deletedItems, setDeletedItems] = useState([]);
  // const [obj, setObj] = useState({});

  useEffect(() => {
    const upcoming = todoStateInUpComing.task.filter(
      (tsk) => tsk.whatsTheStatus === "upcoming"
    );
    setUpcomingItems(upcoming);

    const completed = todoStateInUpComing.task.filter(
      (tsk) => tsk.whatsTheStatus === "completed"
    );
    setCompletedItems(completed);

    const deleted = todoStateInUpComing.task.filter(
      (tsk) => tsk.whatsTheStatus === "deleted"
    );
    setDeletedItems(deleted);
  }, [todoStateInUpComing]);

  const dragEnd = (result) => {
    console.log("result :", result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startDropableArea = source.droppableId;
    const finishDropableArea = destination.droppableId;
    console.log("finishDropableArea", finishDropableArea);
    const indexOfDragableItemFromStarting = source.index;
    const indexOfDragableItemAtEnd = destination.index;

    if (startDropableArea === "upcoming") {
      const newArrayOfUpcomingTask = [...upcomingItems];
      newArrayOfUpcomingTask.splice(indexOfDragableItemFromStarting, 1);
      const itemWhichIsDeleted = upcomingItems[indexOfDragableItemFromStarting];

      newArrayOfUpcomingTask.splice(
        indexOfDragableItemAtEnd,
        0,
        itemWhichIsDeleted
      );
      setUpcomingItems(newArrayOfUpcomingTask);
    };

    if (startDropableArea === "completed") {
      const newArrayOfUpcomingTask = [...completedItems];
      newArrayOfUpcomingTask.splice(indexOfDragableItemFromStarting, 1);
      const itemWhichIsDeleted =
        completedItems[indexOfDragableItemFromStarting];

      newArrayOfUpcomingTask.splice(
        indexOfDragableItemAtEnd,
        0,
        itemWhichIsDeleted
      );
      setCompletedItems(newArrayOfUpcomingTask);
    };

    if (startDropableArea === "deleted") {
      const newArrayOfUpcomingTask = [...deletedItems];
      newArrayOfUpcomingTask.splice(indexOfDragableItemFromStarting, 1);
      const itemWhichIsDeleted = deletedItems[indexOfDragableItemFromStarting];

      newArrayOfUpcomingTask.splice(
        indexOfDragableItemAtEnd,
        0,
        itemWhichIsDeleted
      );
      setDeletedItems(newArrayOfUpcomingTask);
    };
  };

  return (
    <div className="itemsInAllTodosComponentUpComing">
      <DragDropContext onDragEnd={dragEnd}>
        <div className="columsDiv">
          {todoStateInUpComing.typeOfStatus.map((status, index) => {
            return (
              <div className="coloumnDiv" key={status}>
                <div className="coloumnDivHeading">
                  <h4>{status}</h4>
                </div>
                <Droppable droppableId={status}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {upcomingItems.map((itms, i) => (
                        <div>
                          {itms.whatsTheStatus === status && (
                            <div>
                              <Draggable
                                draggableId={itms.id.toString()}
                                key={itms.id}
                                index={i}
                              >
                                {(provided) => (
                                  <div
                                    key={itms.id}
                                    className="coloumnDivListItms"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                  >
                                    <p>{itms.title}</p>
                                  </div>
                                )}
                              </Draggable>
                            </div>
                          )}
                        </div>
                      ))}
                      {completedItems.map((itms, i) => (
                        <div>
                          {itms.whatsTheStatus === status && (
                            <div>
                              <Draggable
                                draggableId={itms.id}
                                key={itms.id}
                                index={i}
                              >
                                {(provided) => (
                                  <div
                                    key={itms.id}
                                    className="coloumnDivListItms"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                  >
                                    <p>{itms.title}</p>
                                  </div>
                                )}
                              </Draggable>
                            </div>
                          )}
                        </div>
                      ))}
                      {deletedItems.map((itms, i) => (
                        <div>
                          {itms.whatsTheStatus === status && (
                            <div>
                              <Draggable
                                draggableId={itms.id.toString()}
                                key={itms.id}
                                index={i}
                              >
                                {(provided) => (
                                  <div
                                    key={itms.id}
                                    className="coloumnDivListItms"
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                  >
                                    <p>{itms.title}</p>
                                  </div>
                                )}
                              </Draggable>
                            </div>
                          )}
                        </div>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};
export default Test;
