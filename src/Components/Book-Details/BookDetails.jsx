
import {
    Box,
    Divider,
    Grid,
    Typography,
    Button,
    FormGroup,
    Breadcrumbs,
    Skeleton,
    Rating,
    TextareaAutosize,
    FormControl,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Book from '../../Images/Book.png';
import { AccountCircleOutlined, FavoriteBorderOutlined, FavoriteOutlined, Star, StarOutline } from "@mui/icons-material";

// import EditBook from "../edit-book/EditBook";
// import { deleteProduct } from "../../services/adminDataService";

function BookDetails() {
    const navigate = useNavigate();
    const addToWishList =  () => {
       navigate('/wishlist')
      };


    const [bookIndex, setBookIndex] = useState(1);
    let rating = 4
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ mx: "11%", my: 2 }}>
                <a href="/" sx={{ textDecoration: "none", color: "#9D9D9D" }}>
                    Home
                </a>
                <Typography color="text.primary">Books({(bookIndex < 9 ? `0${bookIndex}` : bookIndex)})</Typography>
            </Breadcrumbs>
            <Grid
                container
                sx={{ justifyContent: "center", alignItems: "flex-start" }}
            >
                <Grid item sx={{ display: "flex", flexDirection: "column", mx: 5 }}>

                    <Typography
                        component={"div"}
                        sx={{ border: "1px solid #D1D1D1", px: 3, py: 2 }}
                    >
                        <img src={Book} alt="Book" style={{ height: 367 }} />
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            my: 3,
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                flexGrow: 1,
                                marginRight: "20px",
                                backgroundColor: "#A03037",
                                "&:hover": { backgroundColor: "#A03037" },
                            }}

                        >
                            Add to bag
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                flexGrow: 1,
                                backgroundColor: "#333333",
                                "&:hover": { backgroundColor: "#333333" },
                            }}
                         onClick={addToWishList}

                        >
                            <FavoriteOutlined style={{ fontSize: 17, margin: "0px 4px", color: 'white' }} />
                            Wishlist
                        </Button>

                    </Box>

                </Grid>
                <Grid item sx={{ px: { xs: 2, sm: 5 } }} xs={12} sm={8} md={6}>
                    <Box>
                        <Typography component="div" variant="h4" color="initial">
                            bookName
                        </Typography>
                        <Typography
                            variant="h6"
                            color="initial"
                            sx={{ color: "#878787" }}
                            component="div"
                        >
                            Nitesh Yadav Auther
                        </Typography>
                        <div style={{ display: 'flex' }}>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: rating > 3.5 ? "#388E3C" : rating > 2.0 ? "orange" : rating <= 2.0 ? "lightcoral" : "",
                                    color: "white",
                                    px: 1,
                                    width: 'fit-content'
                                }}
                                component="div"
                            >
                                {rating}
                                <Star fontSize="sm" />

                            </Typography>
                            <Typography
                                sx={{ color: "#878787", fontSize: 15, px: 1 }}
                                component="div"
                            >
                                (20)
                            </Typography>

                        </div>
                        <Typography
                            variant="span"
                            component="div"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                my: 1,
                                color: "#0A0102",
                                fontWeight: "bold",
                            }}
                        >
                            <Typography sx={{ fontSize: 30 }} component="div">
                                1400
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    textDecoration: "line-through",
                                    color: "#878787",
                                    px: 1,
                                }}
                                component="div"
                            >
                                2000
                            </Typography>
                        </Typography>

                    </Box>
                    <Divider sx={{ color: "#9D9D9D" }}></Divider>
                    <Typography
                        variant="body1"
                        color="initial"
                        sx={{ fontSize: 15, color: "#878787" }}
                        component={"div"}
                    >
                        <ul style={{ padding: "15px" }}>
                            <li>Book Detail</li>
                            <Typography
                                variant="body2"
                                sx={{ color: "#373434", fontSize: 12 }}
                                component="div"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe fuga repellat nemo assumenda autem tenetur provident, nulla culpa repellendus. Tempora deleniti quibusdam suscipit culpa nesciunt excepturi debitis ea assumenda blanditiis, fuga deserunt labore atque corrupti. Dolore corporis ipsam veniam placeat, quisquam rem perferendis error alias quas consequatur praesentium? Maxime at eos facere perferendis reprehenderit, voluptatum odio reiciendis ex delectus doloremque expedita vel assumenda ut, sit officiis beatae suscipit molestias repudiandae consequatur maiores facilis. Recusandae nobis unde beatae, totam eius obcaecati. Eligendi, harum corrupti expedita doloribus dignissimos architecto accusantium, perspiciatis excepturi optio quas tempore natus, quos labore nobis sapiente similique?
                            </Typography>
                        </ul>
                    </Typography>
                    <Divider sx={{ color: "#9D9D9D" }}></Divider>
                    <>
                <Box>
                  <Typography variant="body2" sx={{ fontSize: 18, my: 2 }}>
                    Customer Feedback
                  </Typography>
                  <FormGroup sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
                    <FormControl>
                      <label
                        style={{
                          fontSize: 12,
                          color: "#0A0102",
                          margin: "5px 0",
                        }}
                      >
                        Overall rating
                      </label>
                      <Rating name="half-rating" id="rating"  />
                      <TextareaAutosize
                        id="comment"
                        minRows={3}
                        placeholder="Write Your Review"
                        style={{ border: "none", marginTop: "10px" }}
                       
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "none",
                        width: "20%",
                        alignSelf: "end",
                        my: 1,
                      }}
                     
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Box>
                <Box>
                  
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      px: 1,
                      py: 2,
                    }}
                    
                  >
                    <Grid item sx={{ display: "flex" }}>
                      <Grid item>
                         
                          <AccountCircleOutlined fontSize="large" />
                        
                      </Grid>
                      <Grid item sx={{ paddingLeft: 1 }}>
                        <Typography variant="body1" color="initial">
                          Nitesh
                        </Typography>
                       4
                      </Grid>
                    </Grid>
                    <Grid item sx={{ paddingLeft: 5 }}>
                      <Typography variant="body1" color="initial">
                       Good
                      </Typography>
                    </Grid>
                  </Grid>
                
                </Box>
              </>
                </Grid>

            </Grid>
        </Box >


    )

}

export default BookDetails;
