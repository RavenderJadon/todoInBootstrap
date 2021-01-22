import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { DataProvider } from "./context/DataContext";
import AllTodos from "./components/AllTodos";
import UpComing from "./components/UpComing";
import Completed from "./components/Completed";
import Others from "./components/Others";
import NavBarOfTodos from "./navBAr/NavBarOfTodos";
import MenuNavBAr from "./navBAr/MenuNavBAr";
import CategoryNavBar from "./navBAr/CategoryNavBar";
import SearchBar from "./components/SearchBar";
import SubCatInHeading from "./components/SubCatInHeading";
import Test from "./components/test";

function App() {
  return (
    <Router>
      <DataProvider>
        <div className="appBody">
          <Container fluid>
            <Row>
              <Col xs={4} md={1} style={{ padding: 0 }}>
                <MenuNavBAr />
              </Col>
              <Col xs={6} md={3} style={{ padding: 0 }}>
                <CategoryNavBar />
              </Col>
              <Col xs={10} md={8} style={{ padding: 0 }}>
                <SearchBar />
                <SubCatInHeading />
                <NavBarOfTodos />
                <Switch>
                  <div>
                    <Route path="/" component={AllTodos} exact />
                    <Route path="/upcoming" component={UpComing} exact />
                    <Route path="/completed" component={Completed} exact />
                    <Route path="/other" component={Others} exact />
                    <Route path="/test" component={Test} exact />
                  </div>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </DataProvider>
    </Router>
  );
}

export default App;
