import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import { CATEGORIES } from "../constants";
import useNews from "../hooks/useNews";

const FormNews = () => {
  const { category, handleChangeCategory } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="category" onChange={handleChangeCategory} value={category}>
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained" color="primary">
            Buscar Noticias
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default FormNews;
