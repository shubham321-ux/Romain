import React from 'react'
import "./css/Blogcard.css"
import blogimg from "../assets/blogimg.png"
import Smallline from './Smallline'
import { MdArrowForward } from "react-icons/md";

const Blogcard = ({
  title = "Home is where RV is",
  img = blogimg,
  date = "1",
  month = "jun",
  place = "place",
  author = "Melissa Burton",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard ...",
  buttonText = "SEE ALL PACKAGES"
}) => {
  return (
    <div className='blog-card-main-div'>
      <div className='image-div-blog-card'>
        <img src={img} alt="blogimg" />
        <div className='blog-card-date-div'>
          <h2>{date}</h2>
          <p>{month}</p>
        </div>
      </div>
      <div className='blog-author-div'>
        <div className='by-autor-div'>
          <p>{place}</p>
          <Smallline/>
          <p>by {author}</p>
        </div>
        <h1 className='h1-blog-card'>{title}</h1>
      </div>
      <p style={{textAlign:"left"}} className='para-normal'>{description}</p>
      <div className='blog-card-btn-div'>
        <button className="arrow-btn-div">
          <p className="arrow-btn-text">{buttonText}</p>
          <MdArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Blogcard
