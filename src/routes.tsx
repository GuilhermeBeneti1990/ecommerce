import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Success from "./pages/Success";
import MainLayout from "./layouts/MainLayout";

function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route element={<Home />} path="/"></Route>
                <Route element={<Cart />} path="/cart"></Route>
                <Route element={<Product />} path="/product/:id"></Route>
                <Route element={<Success />} path="/success"></Route>
            </Route>
        </Routes>
    )
}

export default MainRoutes;