import React from "react";
import { categories } from "../utilti/constant";
import { Stack } from "@mui/material";
export default function Sidbar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
      direction="row"
    >
      {categories.map((category, index) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
          }}
        >
          <span
          // style={{
          //     color: category.name === selectedCategory ? "white":'red',
          //   }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}
