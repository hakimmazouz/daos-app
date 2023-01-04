import { RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import router from "./lib/router";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
