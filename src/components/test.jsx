import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Test = () => {
  const [todoStateInUpComing, setTodoStateInUpComing] = useContext(DataContext);
  console.log(todoStateInUpComing);

  let upcoming = todoStateInUpComing.task.filter(
    (tsk) => tsk.whatsTheStatus === "upcoming"
  );
  console.log("upcoming:", upcoming);
  let completed = todoStateInUpComing.task.filter(
    (tsk) => tsk.whatsTheStatus === "completed"
  );
  console.log("completed:", completed);
  let deleted = todoStateInUpComing.task.filter(
    (tsk) => tsk.whatsTheStatus === "deleted"
  );
  console.log("deleted:", deleted);

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

    const start = source.droppableId;
    console.log("start:",start)
    const finish = destination.droppableId;
    console.log("finish:",finish)
    if(start===finish){
      console.log("same")
      
    }else{
      console.log("not same")
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
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {todoStateInUpComing.task
                        .filter((tsk) => tsk.whatsTheStatus === status)
                        .map((itms, i) => (
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
