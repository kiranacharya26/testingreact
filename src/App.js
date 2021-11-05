import "./styles.css";
import Employee from "./Employee";
import Counter from "./Counter";
import About from "./About";
//import Home from "./Home";
//import Contact from "./Contact";
import { Switch, Route } from "react-router-dom";
//import Todos from "./todos";

export default function App() {
  // const employeeDetails = [
  //   {
  //     fname: "Kiran",
  //     Lname: "Acharya",
  //     age: 20
  //   },
  //   {
  //     fname: "Naruto",
  //     Lname: "Acharya",
  //     age: 23
  //   },
  //   {
  //     fname: "Itachi",
  //     Lname: "Acharya",
  //     age: 24
  //   }
  // ];
  return (
    <div className="App">
      <button>About</button>
      <button>Contact</button>
      <button>Home</button>
      {/* <Todos /> */}
      {/* <Counter /> */}
      {/* <h1>Company Directory</h1>
      {employeeDetails.map((emp) => {
        return <Employee key={emp.age} {...emp} />;
      })} */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
      <div>main page</div>
    </div>
  );
}
