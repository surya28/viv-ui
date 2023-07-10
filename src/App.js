import React from "react";
import Banner from "./components/Banner/Banner";
import FilterDropDown from "./components/FilterDropDown";
import Header from "./components/Header/Header";
import ProductList from "./components/Products/ProductList";
import './App.css';

export default function App() {
  const [category, setCategory] = React.useState('');
  const [search, setSearch] = React.useState('')
  return (
    <div>
      <Header setSearch={setSearch} />
      <Banner />
      <FilterDropDown setCategory={setCategory} />
      <ProductList category={category} search={search} />
    </div>
  )
}