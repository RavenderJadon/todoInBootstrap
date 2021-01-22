import { Button, Modal, Row, Col, Container } from "react-bootstrap";

const SubCategoryModal = ( props ) => {
  return (
    <div>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Add New Sub-Category
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <label for="fname">Sub-Category:</label>
          </Col>
          <Col xs={12} md={8}>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="add new Sub-Category"
              value={props.inputSubCatState.sub_category_name}
              onChange={(e) => {
                console.log(e.target.value);
                props.setInputSubCatState({
                  category_id: "",
                  sub_category_id: "",
                  category_name: "",
                  sub_category_name: e.target.value,
                });
              }}
            ></input>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHideSub}>Add</Button>
    </Modal.Footer>
  </Modal>
    </div>
  );
};

export default SubCategoryModal;
