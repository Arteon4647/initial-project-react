import { Link } from "react-router-dom";
import { router } from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      {router.routes.map((route) => (
        <Link key={route.path} to={route.path || "/"}>
          {route.path === "/" ? "app" : route.path?.replace("/", "")}
        </Link>
      ))}
    </div>
  );
}

export default App;
