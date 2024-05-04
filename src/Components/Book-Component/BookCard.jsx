import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Book from '../../Images/Book.png';
import './BookCard.css';
import StarIcon from '@mui/icons-material/Star';
import am5 from '../../Images/5am.jpg' ;
import indianStory from '../../Images/The-India-story-book-cover.webp';
import fear from '../../Images/fearNotStrong.jpg';
import lordOfRing from '../../Images/LoardofRing1.jpg';
import IronMan1 from '../../Images/ironManExtream.jpg';
import spiderMan from '../../Images/spiderman.jpg';
import gropDiscc from '../../Images/GroupDiscussion.jpg';
import hobit2 from '../../Images/hobit2.jpg'
import { connect, useDispatch, useSelector } from 'react-redux';
import hobbit3 from '../../Images/hobit3.jpg';
import hobit4 from '../../Images/hobit4.jpg';
import tablebook from '../../Images/table.jpg';
import chair from '../../Images/chair.jpg';
import cheez from '../../Images/cheez.webp';
import plastictable from '../../Images/plasticbook.jpg';
import hatCotton from '../../Images/cottonhat.jpg';
import justThing from '../../Images/just thing.jpg';





function BookCard({item,index ,currentPage}) {
 
let imgArr=[am5,indianStory,fear,lordOfRing,IronMan1,spiderMan,gropDiscc,hobit2,hobbit3,hobit4,hobit2,hobbit3,tablebook,chair,cheez,plastictable,hatCotton,justThing];
const dispatch=useDispatch()
const [bookIndex, setBookIndex] = useState(0);

useEffect(()=>{
  if(currentPage==1){
   setBookIndex(index)
  }else if(currentPage==2){
   
   setBookIndex(index+8)
  }else if(currentPage==3){
    
    setBookIndex(index+16)
  }else{
    setBookIndex(index)
  }
  
},[currentPage])
console.log(bookIndex)





 
const contValue=useSelector(state=>state.CounterReducer.StartCounter)

   
    return (
        <Card sx={{ minWidth:235,maxWidth: 235}} >
            <CardActionArea>
            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                <CardMedia
                    component="img"
                    height="135px"
                    src={imgArr[bookIndex]}
                    alt="Book"
                    sx={{objectFit:'contain',backgroundColor:'#F5F5F5'}}
                />
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="span" component="div" sx={{fontSize:'14px'}}>
                   
                    {item.bookName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
                   
                    {item.author}
                </Typography>
                <Typography variant="span" color="text.secondary" component="div" sx={{display:'flex',alignItems:'flex-start',my:1}}>
                    <span className='rating'>
                        4.5
                        <StarIcon fontSize='sm'/>
                    </span>
                    <span className='rating-number'>
                        (20)
                    </span>
                </Typography>
                <Typography variant="span" color="text.secondary" component="div" sx={{display:'flex',alignItems:'flex-start',my:1}}>
                    <span className='price'>
                       Rs. {item.discountPrice}
                      
                    </span>
                    <span className='discount-price'>
                        Rs. {item.price}
                       
                    </span>
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default BookCard