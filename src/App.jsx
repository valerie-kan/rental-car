import { Suspense, useState } from "react";

import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="catalog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="catalog/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CarDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
