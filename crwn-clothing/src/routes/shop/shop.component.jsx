import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from "../categories-preview/categories-preview.component";

import './shop.styless.scss.css';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  )
}

export default Shop;
