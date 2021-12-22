import React from 'react'
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

export default function Product() {
    const [search, setSearch] = React.useState('');
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value.toLocaleLowerCase());
    }

    return (
        <div>
            <ProductForm handleSearch={handleSearch} />
            <ProductTable productSearch={search} />
        </div>
    )
}
