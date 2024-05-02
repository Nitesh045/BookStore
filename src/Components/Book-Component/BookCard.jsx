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

function BookCard({item,index,StartCounter}) {
const [counter,setCounter]= useState(0)  
let imgArr=[am5,indianStory,fear,lordOfRing,IronMan1,spiderMan,gropDiscc,hobit2];
const dispatch=useDispatch()

useEffect(()=>{
    setCounter(counter+1)
   dispatch({type:'updateCounter', payload:counter })
},[index])
console.log(counter);
const contValue=useSelector(state=>state.CounterReducer.StartCounter)
console.log(contValue)
   
    return (
        <Card sx={{ minWidth:235,maxWidth: 235}} >
            <CardActionArea>
            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                <CardMedia
                    component="img"
                    height="135px"
                    src={imgArr[index]}
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