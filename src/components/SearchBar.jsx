import { useContext, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Col,
  Modal,
  Row,
  Container,
} from "react-bootstrap";
import { DataContext } from "../context/DataContext";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <label for="fname"> Add ToDo:</label>
            </Col>
            <Col xs={12} md={8}>
              <input
                type="text"
                name="text"
                placeholder="add todo"
                value={props.inputState.title}
                onChange={(e) =>
                  props.setInputState({
                    ...props.inputState,
                    title: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label for="fname"> Date:</label>
            </Col>
            <Col xs={12} md={8}>
              <input
                type="date"
                name="text"
                placeholder="date"
                value={props.inputState.settingForDate}
                onChange={(e) =>
                  props.setInputState({
                    ...props.inputState,
                    settingForDate: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label for="fname"> Time:</label>
            </Col>
            <Col xs={12} md={8}>
              <input
                type="time"
                name="text"
                placeholder="time"
                value={props.inputState.setting_for_what_time}
                onChange={(e) =>
                  props.setInputState({
                    ...props.inputState,
                    setting_for_what_time: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label for="fname">Choose Category</label>
            </Col>
            <Col xs={12} md={8}>
              <select
                name="category"
                id="category"
                value={props.inputState.category_id}
                onChange={(e) => {
                  props.setSelectedCategoryValue(e.target.value);
                  props.setInputState({
                    ...props.inputState,
                    category_id: e.target.value,
                  });
                }}
              >
                {props?.todoState?.category?.map((category, categoryIndex) => {
                  return (
                    <option value={category.category_id} key={category.category_id}>
                      {category.category_name}
                    </option>
                  );
                })}
              </select>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              <label for="fname">Choose Sub-Category</label>
            </Col>
            <Col xs={12} md={8}>
              <select
                name="sub_category"
                id="sub_category"
                value={props.inputState.sub_category_id}
                onChange={(e) => {
                  props.setInputState({
                    ...props.inputState,
                    sub_category_id: e.target.value,
                  });
                }}
              >
                {props.todoState.sub_category
                  .filter((it) => it.category_id == props.selectedCategoryValue)
                  .map((subCatName) => {
                    return (
                      <option value={subCatName.sub_category_id} key={subCatName.sub_category_id}>
                        {subCatName.sub_category_name}
                      </option>
                    );
                  })}
              </select>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const SearchBar = () => {
  const [todoState, setTodoState] = useContext(DataContext);
  const [searchState, setSearchState] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState(1);
  const uniqueKey = Date.now();
  const todayDateTime = new Date();
  const date =
    todayDateTime.getFullYear() +
    "-" +
    (todayDateTime.getMonth() + 1) +
    "-" +
    todayDateTime.getDate();
  const time =
    todayDateTime.getHours() +
    ":" +
    todayDateTime.getMinutes() +
    ":" +
    todayDateTime.getSeconds();
  const [inputState, setInputState] = useState({
    id: uniqueKey,
    category_id: "1",
    sub_category_id: "",
    category: "",
    subCategory: "",
    title: "",
    settingForDate: "",
    setting_on_what_time: date + " " + time,
    setting_for_what_time: "",
    whatsTheStatus: "upcoming",
  });

  const addingTodoOnClickBtn = () => {
    const newTodo = {
      id: inputState.id,
      category_id: inputState.category_id,
      sub_category_id: inputState.sub_category_id,
      category: inputState.category,
      subCategory: inputState.subCategory,
      title: inputState.title,
      settingForDate: inputState.settingForDate,
      setting_on_what_time: inputState.setting_on_what_time,
      setting_for_what_time: inputState.setting_for_what_time,
      whatsTheStatus: inputState.whatsTheStatus,
    };
    setTodoState({
      ...todoState,
      task: [...todoState.task, newTodo],
    });
    setModalShow(false);
  };

  console.log(
    selectedCategoryValue,
    todoState.sub_category,
    "selectedCategoryValue"
  );

  return (
    <div style={{ marginTop: "5vh" }}>
      <Col xs={10} md={12}>
        <Form inline>
          <Col xs={7} md={8}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 searchBar"
              value={searchState}
              onChange={(event) => {
                setSearchState(event.target.value);
                setTodoState({
                  ...todoState,
                  search: searchState,
                });
              }}
            />
          </Col>
          <Button
            variant="danger"
            className="searchBtn"
            onClick={() => setModalShow(true)}
          >
            + Add New Todo
          </Button>
        </Form>
      </Col>

      <MyVerticallyCenteredModal
        show={modalShow}
        onAdd={addingTodoOnClickBtn}
        // onAdd={() => setModalShow(false)}
        setSelectedCategoryValue={setSelectedCategoryValue}
        selectedCategoryValue={selectedCategoryValue}
        todoState={todoState}
        inputState={inputState}
        setInputState={setInputState}
      />
    </div>
  );
};

export default SearchBar;
