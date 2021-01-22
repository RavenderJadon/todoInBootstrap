import { Card,Button } from "react-bootstrap";


const TaskItem = () => {
  return(
    <div className="taskItemDiv">
    <Card border="dark" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Done</Card.Title>
      <Card.Text>
       breads for preferably breakfast
      </Card.Text>
      <Card.Text>
        21 April, 2018
      </Card.Text>
  <Button variant="outline-danger" className="taskBtn">Mark as done</Button>
    </Card.Body>
  </Card>
    </div>
  );
}

export default TaskItem;
