'use client';

import { useEffect, useState } from "react";

import BreadcrumbComponent from "./components/breadcrumb";
import { ModeToggle } from "./components/mode-toggle";
import { TableUser } from "./components/table-user";

const homePage = () => {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
      // Fetching product data
      const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const json = await res.json()
      setProducts(json)
      }
      fetchData()
  }, [])
  
  const columns = [
    {
      "id": "1",
      "Header": "title",
      "accessor": "id"
    },
    {
      "id": "2",
      "Header": "price",
      "accessor": "name"
    },
    {
      "id": "3",
      "Header": "category",
      "accessor": "email"
    }
  ];

  return (
    <div>
      <BreadcrumbComponent />
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <ModeToggle />
      <TableUser columns={columns} data={products} />
    </div>
  );
}

export default homePage;