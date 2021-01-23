import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Button, Row, Col, Collapse } from "react-bootstrap";
import Amit from "../components/Amit";
import CategoryModal from "../components/modal/categoryModal";
import SubCategoryModal from "../components/modal/subCategoryModal";
import { BsChevronDown } from "react-icons/bs";

const CategoryNavBar = () => {
  const [todoState, setTodoState] = useContext(DataContext);
  const [modalShow, setModalShow] = useState(false);
  const [modalsubShow, setModalsubShow] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [open, setOpen] = useState(0);

  const [inputCatState, setInputCatState] = useState({
    category_name: "",
    category_id: todoState.category.length,
  });

  const [inputSubCatState, setInputSubCatState] = useState({
    category_id: selectedCategoryId,
    sub_category_id: todoState.sub_category.length,
    sub_category_name: "",
  });

  const toggleCollapsable = (index) => {
    setOpen(open === index ? -1 : index);
  };

  const setModalAndIndex = (catId) => {
    setModalsubShow(true);
    setSelectedCategoryId(catId);
  };
  console.log("indxCatState", selectedCategoryId);
  const onHide = () => {
    const newCat = {
      category_name: inputCatState.category_name,
      category_id: todoState.category.length + 1,
    };

    setTodoState({
      ...todoState,
      category: [...todoState.category, newCat],
    });
    setInputCatState({
      ...inputCatState,
      category_name: "",
    });
    setModalShow(false);
  };

  const onHideSub = () => {
    console.log({ inputCatState });
    const newSubCat = {
      category_id: selectedCategoryId,
      sub_category_id: inputSubCatState.sub_category_id,
      sub_category_name: inputSubCatState.sub_category_name,
    };
    setTodoState({
      ...todoState,
      sub_category: [...todoState.sub_category, newSubCat],
    });
    setInputSubCatState({
      ...inputSubCatState,
      sub_category_name: "",
    });
    setModalsubShow(false);
  };

  return (
    <div className="categoryNavBody">
      <div className="buttonDiv">
        <Button
          variant="danger"
          className="plus-btn"
          onClick={() => setModalShow(true)}
        >
          +
        </Button>

        <CategoryModal
          show={modalShow}
          onHide={onHide}
          inputCatState={inputCatState}
          setInputCatState={setInputCatState}
        />
      </div>

      {todoState.category.map((category, categoryIndex) => {
        return (
          <div key={category.category_id}>
            <div className="khatkar">
              <div>
                <Row>
                  <Col xs={7} md={5}>
                    <h3 className="hoverCategory">{category.category_name}</h3>
                  </Col>
                  <Col xs={6} md={4}>
                    <Button
                      variant="light"
                      size="sm"
                      className="addSubCatBtn"
                      onClick={() => setModalAndIndex(category.category_id)}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => toggleCollapsable(categoryIndex)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      variant="light"
                      size="sm"
                      className="testTest"
                    >
                      {/* button to show sub category */}
                      <BsChevronDown />
                    </Button>

                    <SubCategoryModal
                      show={modalsubShow}
                      onHideSub={onHideSub}
                      inputSubCatState={inputSubCatState}
                      setInputSubCatState={setInputSubCatState}
                      categoryIndex={categoryIndex}
                    />
                  </Col>
                </Row>
              </div>

              <>
                <Collapse in={open === categoryIndex}>
                  <div id="example-collapse-text">
                    {todoState.sub_category
                      .filter((it) => it.category_id == category.category_id)
                      .map((subCatName) => {
                        return (
                          <div>
                            <div key={subCatName.sub_category_id}>
                              <p>{subCatName.sub_category_name}</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </Collapse>
              </>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryNavBar;
