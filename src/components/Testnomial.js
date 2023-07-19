import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";
const Testnomial = () => {
  return (
      <div className='testnomial-container'>
          < p className='Heading'>Testnomial</p>
          <h1 className='subheading'>What They Are Saying</h1>
          <p className='primy-text'>
              Lorem ipsum dolor sit amet consector.<br></br>Non tincidunt
              magnanon et elit.<br></br>Dolor turpis molestie duimagnis facilisis at fringilla quam
              
              </p>
              
        
          <div className='bottom-container'>
              <img src={ProfilePic} alt="" />
              <p>
                    He is  famous for his best cooking. He awarded with various with different awards due to his work
       
              </p>
              <div className='testnomials-star-container'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                   <AiFillStar/>
                  <AiFillStar />
                  
              </div>
              <h2>John Doe</h2>
         </div>
    </div>
  )
}

export default Testnomial
