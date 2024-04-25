import React, { useState,useEffect } from 'react'
import { Grid, Typography,Box,Button, Skeleton } from '@mui/material'

import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router-dom';

import BookCard from '../Components/Book-Component/BookCard';
import { getBooks } from '../Services/DataServices';

function Home() {
  const [data,setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter,setFilter] = useState('relevance');
  const [loading,setLoading] = useState(true);
  const booksPerPage = 8;
  const location = window.location.href;
//   useEffect(() => {
//     getAllBooks()
//   }, [])

//   const getAllBooks = async() => {
//     let response = await getBooks();
//     let bookData = response.data.result;
//      console.log(response);
//     if(filter === 'low') {
//       setData(bookData.sort((a,b) => a.discountPrice - b.discountPrice))
//     } else if (filter === 'high') {
//       setData(bookData.sort((a,b) => a.discountPrice + b.discountPrice))
//     } else if (filter === 'new') {
//       setData(bookData.sort((a,b) => a.createdAt - b.createdAt))
//     } else {
//       setData(response.data.result)
//     }
//   }
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = data.slice(indexOfFirstBook, indexOfLastBook);
  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    // console.log('filter',filter)
  }

  useEffect(() => {
    // getAllBooks();
    // console.log('filter',filter)
      // Set loading to true before fetching data
    setLoading(true);
    // getAllBooks().then(() => {
    //   // Set loading to false after data is fetched
    //   setLoading(false);
    // });
  }, [filter]);

  return (
    <div>
      <Grid container sx={{width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Grid item sx={{display:'flex',justifyContent:'center',width:'80%'}}>
          <Box sx={{flex:'0 1 3vw'}}/>
          <Typography variant="body1" color="initial" component={'div'} sx={{fontSize:25,display:'flex',alignItems:'center'}}>
            Books
            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D'}}>
              ({data.length})
            </Typography>
          </Typography>
          <Box sx={{flex:'0 1 80%'}}/>
          <FormControl sx={{ m: 1, minWidth: 200}}>
            <select style={{padding:5,backgroundColor:'white',border:'1px solid #E2E2E2',textAlign:'center'}} value={filter} onChange={handleFilterChange}>
              <option value="relevance">Sort By Relevance</option>
              <option value='low'>Price:Low to High</option>
              <option value='high'>Price:High to Low</option>
              <option value='new'>New Arrivals</option>
            </select>
          </FormControl>
          <Box sx={{flex:'0 1 2vw'}}/>
        </Grid>
        <Grid item sx={{display:'flex',width:'80%',flexDirection:'column',alignItems:'center'}}>
          <Grid container sx={{gap:3,flexWrap:'wrap',justifyContent:'center'}}>
            {/* {currentBooks.map((item,index) => (
              <Link to={location.includes('admin')?`/admin/book-details/${item._id}`:`/book-details/${item._id}`} style={{ textDecoration: 'none' }} key={item._id}> */}
                <Grid item>
                   
                    <BookCard />
            
                </Grid>
              {/* </Link>
            ))} */}
          </Grid>
          <Pagination
            count={Math.ceil(data.length / booksPerPage)} 
            page={currentPage}
            variant="outlined"
            shape="rounded"
            sx={{ my: 5 ,
            '& .Mui-selected': {
              backgroundColor: '#8F2B2F',
            }}}
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home