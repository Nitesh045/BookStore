import { Box, IconButton, TextField } from "@mui/material";
import React, { useState,useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


function QuantityComponent({item,setAddCart,getCartItem}) {
 
  const [cartItem, setCartItem] = useState(item);
//   const handleCount = async(string) => {
//     try {
//       if (string === "plus") {
//         setCartItem((prev) => ({
//           ...prev,
//           quantityToBuy: prev.quantityToBuy + 1,
//         }),
//         await modifyCartItem(cartItem._id, { quantityToBuy: cartItem.quantityToBuy + 1}));
//         getCartItem()
//         // console.log('cartItemid',cartItem._id)
//       } else if (string === "minus") {
//         if(cartItem.quantityToBuy === 1) {
//           setAddCart(false)
//           // console.log('cartItemid',cartItem._id)
//           await removeCartItem(item._id)
//           return getCartItem();
//         }
//         setCartItem((prev) => ({
//           ...prev,
//           quantityToBuy: prev.quantityToBuy - 1,
//         }),
//         await modifyCartItem(cartItem._id, { quantityToBuy: cartItem.quantityToBuy -1 }));
//         getCartItem()
//       }
//     }
//     catch(err) {
//       console.error("Error updating cart item:", err);
//     }
//   };


  return (
    <Box sx={{display:'flex'}}>
      <IconButton
        size="small"
        sx={{ backgroundColor: "#FAFAFA", border: "1px solid #DBDBDB" }}
        
      >
        <RemoveIcon fontSize="sm" />
      </IconButton>
      <TextField
        sx={{ width: "50px", mx: 1 }}
        inputProps={{
          style: {
            padding: 4,
            textAlign: "center",
          },
        }}
        // value={cartItem.quantityToBuy}
        // onChange={handleCount}
        value='0'
      />
      <IconButton
        size="small"
        sx={{ backgroundColor: "#FAFAFA", border: "1px solid #DBDBDB"}}
        
        
      >
        <AddIcon fontSize="sm" />
      </IconButton>
    </Box>
  );
}

export default QuantityComponent;
