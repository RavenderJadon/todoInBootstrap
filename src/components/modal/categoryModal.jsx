import { Button, Modal, Row, Col, Container } from "react-bootstrap";

const CategoryModal = (props) => {
  return(
    <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Category
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <label for="fname">Category:</label>
                </Col>
                <Col xs={12} md={8}>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="add new Category"
                    value={props.inputCatState.category_name}
                    onChange={(e) => {
                      console.log(e.target);
                      props.setInputCatState({
                        category_name: e.target.value,
                        category_id: 4,
                      });
                    }}
                  ></input>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Add</Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default CategoryModal;
