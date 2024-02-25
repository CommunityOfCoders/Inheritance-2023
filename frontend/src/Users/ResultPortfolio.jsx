import React from "react";
import { Typography, Grid } from "@mui/material";

function PortfolioResult({ totalHolding, profitLossPercent }) {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ color: "#00B4D8" }}>
          Portfolio Result
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Total Holdings: {totalHolding.toFixed(2)} USD
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Profit/Loss Percent: {profitLossPercent.toFixed(2)}%
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PortfolioResult;
