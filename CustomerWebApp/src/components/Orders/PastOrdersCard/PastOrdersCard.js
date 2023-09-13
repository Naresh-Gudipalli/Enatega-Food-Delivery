import { Box, Paper, Typography, useTheme } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import PlaceHolder from "../../../assets/images/placeholder.png";
import ConfigurationContext from "../../../context/Configuration";
import useStyles from "./styles";

function PastOrdersCard(props) {
  const theme = useTheme();
  const classes = useStyles();
  const configuration = useContext(ConfigurationContext);

  const orderImage = props?.items?.[0].food?.img_url ?? PlaceHolder;

  return (
    <RouterLink to={{ pathname: `/OrderDetail/${props._id}` }} className={classes.link}>
      <Paper
        elevation={7}
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: 15,
          height: 80,
          borderRadius: 20,
        }}
        className={classes.mv2}
      >
        <object style={{ width: "30%", borderRadius: 10, height: "100%" }} data={orderImage} type="image/png">
          <img style={{ width: "auto", height: "100%" }} src={PlaceHolder} alt="No Pic" />
        </object>
        <Box>
          <Typography className={classes.smallText} color="textSecondary">
            {`Order ID: ${props.order_id}`}
          </Typography>
          <Typography className={classes.subText} color="primary">
            {configuration.currency_symbol} {props.order_amount}
          </Typography>
        </Box>
        <Box style={{ height: "100%", width: "2px", backgroundColor: theme.palette.grey[100] }} />
        <Box justifyContent="center" alignItems="center" style={{ textAlign: "center" }}>
          <CachedIcon style={{ fontSize: "35px" }} />
          <Typography className={classes.subText} color="textPrimary">
            {"Re-Order"}
          </Typography>
        </Box>
      </Paper>
    </RouterLink>
  );
}

export default React.memo(PastOrdersCard);