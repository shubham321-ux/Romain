import React from 'react'
import "./css/Blogsection.css"
import Title4 from './Title4'
import Blogcard from './Blogcard'

const Blogsection = ({ titleData, blogData }) => {
  return (
    <div className='blog-section-main-div'>
      <div className='title-div-blog-section'>
        <Title4 
          title={titleData.title} 
          subTitle={titleData.subTitle}
        />
      </div>
      <div className='blog-cards-container'>
        {blogData.map((blog, index) => (
          <Blogcard
            key={index}
            title={blog.title}
            img={blog.img}
            date={blog.date}
            month={blog.month}
            place={blog.place}
            author={blog.author}
            description={blog.description}
            buttonText={blog.buttonText}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogsection
