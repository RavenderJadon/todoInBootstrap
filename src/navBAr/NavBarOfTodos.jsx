import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';


const NavBarOfTodos = () => {
  return(
    <div>
      {/*<Nav defaultActiveKey="/" className="flex-column">
        <Link to="/"><li>ALL Todos</li></Link>
        <Link to="/Upcoming"><li>Upcoming</li></Link>
        <Link to="/completed"><li>Completed</li></Link>
        <Link to="/other"><li>Other</li></Link>
  </Nav>*/}
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1"><Link to="/"><li>ALL Todos</li></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"><Link to="/Upcoming"><li>Upcoming</li></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to="/completed"><li>Completed</li></Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to="/other"><li>Other</li></Link></Nav.Link>
      </Nav.Item>
</Nav>
</div>
  )
};
export default NavBarOfTodos;
