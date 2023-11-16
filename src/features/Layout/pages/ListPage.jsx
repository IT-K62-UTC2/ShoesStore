import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Container,
  Paper,
  Typography,
  Pagination,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import ProductSke from "../components/ProductSke";
import ProductSkeList from "../components/ProductSkeList";
import AddItemButton from "../../../components/AddItemButton/AddItemButton";
import productApi from "./../../../api/products";

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
  ulPa: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    marginTop: "10px",
  },
}));
function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 12,
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 10,
  });
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        console.log(data, pagination);
        setProductList(data, pagination);

        setPagination(pagination);
        console.log(pagination);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [filter]);
  const handlePaginationOnChange = (e, page) => {
    setFilter((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };
  return (
    <Box className={classes.root}>
      <AddItemButton />
      <Container>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <Paper elevation={1}>L</Paper>
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={1}>
              {loading ? <ProductSke /> : <ProductSkeList data={productList} />}
              <Box className={classes.ulPa}>
                {" "}
                <Pagination
                  className={classes.ulPa}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePaginationOnChange}
                  color="primary"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
