import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNews from "../hooks/useNews";
import News from "./News";

const NewsList = () => {
  const { news, totalNews, page, handleChangePage } = useNews();

  const totalPages = Math.ceil(totalNews / 20); // 20 noticias por páginas

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Últimas noticias
      </Typography>

      <Grid container spacing={2}>
        {news.map((item) => (
          <News key={item.url} news={item} />
        ))}
      </Grid>

      <Stack
        sx={{
          marginY: 5,
        }}
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default NewsList;
