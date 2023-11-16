import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

import { Skeleton } from "@mui/lab";
import { Typography } from "@mui/material";
Product.propTypes = {
  Product: PropTypes.object,
};

function Product({ product }) {
  return (
    <Box padding={1}>
      <Box padding={1} minHeight={215}>
        <img src={product.thumbnail} alt="" width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">{product.salePrice}</Typography>
    </Box>
  );
}

export default Product;
