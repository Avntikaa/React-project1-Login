import React from 'react'
import Meal from './Meal'
import './ShowMeal.css'

const ShowMeals = (props) => {
    const meals=[{
        dish:'sushi',desc:'Finiest fish and veggies',price:22.99,count:1
    },{
 dish:'biryani',desc:'chicken and mutton',price:50.99,count:1
    }
    ,{
     dish:'veg fry',desc:'veggies',price:15,count:1
    }
]
  return (
    <>
    <div className='meallist'>
        {
            meals.map((meal)=>{
            return <Meal meal={meal}/>
            }
            )
        }
    </div>
          </>

  )
}

export default ShowMeals