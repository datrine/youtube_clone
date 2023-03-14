import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat, index) => (
        <Button
          onClick={(e) => setSelectedCategory(cat.name)}
          key={index}
          className="category-btn"
          style={{
            background: cat.name === selectedCategory && `#fc1503`,
            color: "white",
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
          >
            {cat.name}
          </span>
        </Button>
      ))}
    </Stack>
  );
};

export default Sidebar;
