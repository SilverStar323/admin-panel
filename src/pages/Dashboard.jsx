import { useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
import { ProductForm, ProductTable } from "../components";

export const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // const updateProduct = (product) => {
  //   setProducts(
  //     products.mape((item) => (item.id === product.id ? product : item))
  //   );
  // };
  return (
    <main>
      <Container>
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <ProductForm addProduct={addProduct} />
          <ProductTable products={products} deleteProduct={deleteProduct} />
        </Box>
      </Container>
    </main>
  );
};
