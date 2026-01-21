import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const History = lazy(() => import("./pages/History"));
const Branch = lazy(() => import("./pages/Branch"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/historia" element={<History />} />
            <Route path="/sucursal" element={<Branch />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
