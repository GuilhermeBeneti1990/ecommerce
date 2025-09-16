import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Success from "./pages/Success";

function MainRoutes() {
    return (
        <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Cart />} path="/cart"></Route>
            <Route element={<Product />} path="/product/:id"></Route>
            <Route element={<Success />} path="/success"></Route>
        </Routes>
    )
}

export default MainRoutes;