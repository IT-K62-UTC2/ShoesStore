import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

import Product from "./Product";

ProductSkeList.propTypes = {
  data: PropTypes.array,
};
ProductSkeList.defaultProps = {
  data: [],
};
function ProductSkeList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Box padding={1}>
              <Product product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeList;
