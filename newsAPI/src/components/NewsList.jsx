import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNews from "../hooks/useNews";
import News from "./News";

const NewsList = () => {
  const { news } = useNews();

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
    </>
  );
};

export default NewsList;
