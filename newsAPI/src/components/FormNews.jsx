import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { CATEGORIES } from "../constants";
import useNews from "../hooks/useNews";

const FormNews = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="category"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};

export default FormNews;
