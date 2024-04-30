import React from "react";
import { Grid, Typography } from "@mui/material";
import Book from "../../Images/Book.png";

import DeleteIcon from "@mui/icons-material/Delete";
import { deleteWishList, removeCartItem } from "../../Services/DataServices";
import QuantityComponent from "../QualityComp/QualityAdd";

function CartItem({ data, getCartItem, myRef }) {
  
  const removeItem = async () => {
    if (data.quantityToBuy) {
      await removeCartItem(data._id);
      getCartItem();
    } else {
      await deleteWishList(data.product_id._id)
      getCartItem();
    }
  };
  return (
    <Grid container sx={{ my: 1, justifyContent: "space-between" }}>
      <Grid item sx={{ display: "flex", alignItems: "flex-start" }} xs={12}>
        <Grid item>
          <img
            src={Book}
            alt="book"
            style={{ height: 85, objectFit: "contain" }}
          />
        </Grid>
        <Grid item sx={{ marginLeft: 5 }} xs={10}>
          <Grid item>
            <Typography
              variant="h6"
              color="initial"
              sx={{ fontWeight: "bold", lineHeight: 1, display: "flex" }}
            >
              {data?.product_id?.bookName}{" "}
              {myRef && data?.product_id?.quantityToBuy && (
                <div style={{ margin: "0 0 0 10px" }}>
                  {" "}
                  x{data?.product_id?.quantityToBuy}
                </div>
              )}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontSize: 12,
                color: "#9D9D9D",
                marginTop: 2,
                marginBottom: 1,
              }}
            >
              {data?.product_id?.author}
            </Typography>
            {!data?.product_id?.quantityToBuy ? (
              <Typography
                variant="body1"
                color="initial"
                component={"div"}
                sx={{
                  display: "flex",
                  fontSize: 15,
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                Rs. {data?.product_id?.discountPrice}
                <Typography
                  sx={{
                    fontSize: 12,
                    textDecoration: "line-through",
                    color: "#9D9D9D",
                    mx: 2,
                  }}
                >
                  Rs.{data?.product_id?.price}
                </Typography>
              </Typography>
            ) : (
              <Typography
                variant="body1"
                color="initial"
                component={"div"}
                sx={{
                  display: "flex",
                  fontSize: 15,
                  alignItems: "center",
                  fontWeight: "bold",
                  flexWrap: "nowrap",
                }}
              >
                Rs.{" "}
                {data?.product_id?.discountPrice *
                  data?.product_id?.quantityToBuy}
                <Typography
                  sx={{
                    fontSize: 12,
                    textDecoration: "line-through",
                    color: "#9D9D9D",
                    mx: 2,
                  }}
                >
                  Rs.{data?.product_id?.price * data?.product_id?.quantityToBuy}
                </Typography>
              </Typography>
            )}
          </Grid>
          {!myRef && (
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: 1,
                flexWrap: "nowrap",
              }}
            >
              <QuantityComponent item={data} getCartItem={getCartItem} />
              <Typography
                variant="body1"
                color="initial"
                sx={{ mx: { xs: 1, sm: 2 }, cursor: "pointer" }}
                onClick={removeItem}
              >
                Remove
              </Typography>
            </Grid>
          )}
        </Grid>
        {!data.quantityToBuy && (
          <Grid item>
            <DeleteIcon sx={{ cursor: "pointer" }} onClick={removeItem} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default CartItem;
