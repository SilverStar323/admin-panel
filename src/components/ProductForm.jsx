import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product);
  };

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
      >
        <Typography variant="h6">Add New Products</Typography>
        <TextField
          label="ID"
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
        <TextField
          label="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained">
          Add Product
        </Button>
      </Box>
    </section>
  );
};
