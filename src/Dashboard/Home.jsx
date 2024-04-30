import React, { useState } from 'react'
import { Grid, Typography,Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination'
import { Link } from 'react-router-dom';

import BookCard from '../Components/Book-Component/BookCard';


function Home() {
  
  const [currentPage, setCurrentPage] = useState(1);
 
  const booksPerPage = 8;
  
  let assumingBooks=[
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
    {name:'nitesh'},
  ]

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = assumingBooks.slice(indexOfFirstBook, indexOfLastBook);
 
  const handleChangePage = (event,page) => {
    setCurrentPage(page);
    
  };
  

  

  

  return (
    <div>
      <Grid container sx={{width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Grid item sx={{display:'flex',justifyContent:'center',width:'80%'}}>
          <Box sx={{flex:'0 1 3vw'}}/>
          <Typography variant="body1" color="initial" component={'div'} sx={{fontSize:25,display:'flex',alignItems:'center'}}>
            Books
            <Typography variant="body1" color="initial" sx={{fontSize:12,color:'#9D9D9D'}}>
              ({assumingBooks.length})
            </Typography>
          </Typography>
          <Box sx={{flex:'0 1 80%'}}/>
          <FormControl sx={{ m: 1, minWidth: 200}}>
            <select style={{padding:5,backgroundColor:'white',border:'1px solid #E2E2E2',textAlign:'center'}}  >
              <option value="relevance">Sort By Relevance</option>
              <option value='low'>Price:Low to High</option>
              <option value='high'>Price:High to Low</option>
              <option value='new'>New Arrivals</option>
            </select>
          </FormControl>
          <Box sx={{flex:'0 1 2vw'}}/>
        </Grid>
        <Grid item sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
          <Grid container sx={{gap:3,flexWrap:'wrap',justifyContent:'center'}}>
              {currentBooks.map((index) => ( 
              <Link to='/about'>
                <Grid item>
                   
                    <BookCard key={index} />
            
                </Grid>
               </Link>
             ))}  
          </Grid>
          <Pagination
            count={Math.ceil(assumingBooks.length / booksPerPage)} 
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