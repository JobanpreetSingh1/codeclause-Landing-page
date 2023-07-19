import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeleiveryMeals from '../Assets/delivery-image.png'
const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text:"You can choose according to your taste"
            
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: " there are different options given to user for choose meals",
            
        },
        {
            image: DeleiveryMeals,
            title: "Fast Deleveries",
            text: " There is a fast delievery provided by by this site",
            
        }
    ]
  return (
    < div className='work-section-container'>
          <div className='work-section-top'>
              <p className='primary-subheading'>
                 Work 
              </p>
          
              <h1 className='next-heading'>How it Works</h1>
              <p className='primay-text'> It works like swiggy app or other<br></br> food delievery apps and also provide many discounts to the users </p>
          </div>
          <div className='work-section-bottom'>
              
                  {workInfoData.map((data) => (
              <div className='work-section-info' key={data.title}>
                  <div className=" info-boxes-img-container">
                      <img src={data.image} alt=""/>
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
              </div>
                    )  )
                  }
              
          </div>
    </div>
  )
}

export default Work







