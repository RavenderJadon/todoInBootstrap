import { Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsGrid,
  BsStarFill,
  BsCheckBox,
  BsTrash,
  BsFillGiftFill,
} from "react-icons/bs";

const MenuNavBAr = () => {
  return (
    <div className="menuBar">
      <Nav defaultActiveKey="/" className="flex-column">
        <h1 className="menuBarText">
          <BsFillGiftFill />
        </h1>
        <Link to="/" className="menuBarText">
          <h1>
            <BsHouseDoor />
          </h1>
        </Link>
        <Link to="/Upcoming" className="menuBarText">
          <h1>
            <BsGrid />
          </h1>
        </Link>
        <Link to="/completed" className="menuBarText">
          <h1>
            <BsStarFill />
          </h1>
        </Link>
        <Link to="/other" className="menuBarText">
          <h1>
            <BsCheckBox />
          </h1>
        </Link>
        <Link to="/test" className="menuBarText">
          <h1>
            <BsTrash />
          </h1>
        </Link>
      </Nav>
    </div>
  );
};

export default MenuNavBAr;
