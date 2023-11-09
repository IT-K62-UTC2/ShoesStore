import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Grid, Container, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import catogoryApi from "../../../api/categorys";
import ProductSke from "../components/ProductSke";
import ProductSkeList from "../components/ProductSkeList";
ListPage.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
}));
function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await catogoryApi.getAll();
        console.log(data);
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={1}>L</Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={1}>
              {loading ? <ProductSke /> : <ProductSkeList data={productList} />}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
