import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>Welcome To Shopping Store</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Index as an attribute means that index = 1 and means the route must be loaded with base component */}
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
