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

    if (startDropableArea === finishDropableArea) {
      if (startDropableArea === "upcoming") {
        const newArrayOfUpcomingTask = [...upcomingItems];
        newArrayOfUpcomingTask.splice(indexOfDragableItemFromStarting, 1);
        const itemWhichIsDeleted =
          upcomingItems[indexOfDragableItemFromStarting];

        newArrayOfUpcomingTask.splice(
          indexOfDragableItemAtEnd,
          0,
          itemWhichIsDeleted
        );
        setUpcomingItems(newArrayOfUpcomingTask);
      }

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
      }

      if (startDropableArea === "deleted") {
        const newArrayOfUpcomingTask = [...deletedItems];
        newArrayOfUpcomingTask.splice(indexOfDragableItemFromStarting, 1);
        const itemWhichIsDeleted =
          deletedItems[indexOfDragableItemFromStarting];

        newArrayOfUpcomingTask.splice(
          indexOfDragableItemAtEnd,
          0,
          itemWhichIsDeleted
        );
        setDeletedItems(newArrayOfUpcomingTask);
      }
    }
    if (startDropableArea !== finishDropableArea) {
      if (finishDropableArea === "deleted") {
        if (startDropableArea === "upcoming") {
          const newArrayOfUpcomingTask = [...upcomingItems];
          const arrDeleted = [...deletedItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "deleted";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setUpcomingItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setDeletedItems($arrDeleted);
        }
        if (startDropableArea === "completed") {
          const newArrayOfUpcomingTask = [...completedItems];
          const arrDeleted = [...deletedItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "deleted";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setCompletedItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setDeletedItems($arrDeleted);
        }
      }

      if (finishDropableArea === "completed") {
        if (startDropableArea === "upcoming") {
          const newArrayOfUpcomingTask = [...upcomingItems];
          const arrDeleted = [...completedItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "completed";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setUpcomingItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setCompletedItems($arrDeleted);
        }
        if (startDropableArea === "deleted") {
          const newArrayOfUpcomingTask = [...deletedItems];
          const arrDeleted = [...completedItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "completed";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setDeletedItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setCompletedItems($arrDeleted);
        }
      }

      if (finishDropableArea === "upcoming") {
        if (startDropableArea === "completed") {
          const newArrayOfUpcomingTask = [...completedItems];
          const arrDeleted = [...upcomingItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "upcoming";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setCompletedItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setUpcomingItems($arrDeleted);
        }
        if (startDropableArea === "deleted") {
          const newArrayOfUpcomingTask = [...deletedItems];
          const arrDeleted = [...upcomingItems];
          const [itemFirstDelete] = newArrayOfUpcomingTask.splice(
            indexOfDragableItemFromStarting,
            1
          );
          itemFirstDelete.whatsTheStatus = "upcoming";
          console.log("itemFirstDelete", itemFirstDelete);
          const $newArrayOfUpcomingTask = newArrayOfUpcomingTask;
          setDeletedItems($newArrayOfUpcomingTask);
          const $arrDeleted = [...arrDeleted, itemFirstDelete];
          setUpcomingItems($arrDeleted);
        }
      }
    }
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
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="areaOfDrropable"
                    >
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
