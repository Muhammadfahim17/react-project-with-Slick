import React from 'react'
import './components.css'

const Card2 = ({image,name,price,price1,image1,}) => {
  return (
    <div>
        <div className="cartobuv">
            <img style={{'width' : '380px','height' : '280px'}} src={image} alt="" />
            <div className="textpricecart">
            <h3>{name}</h3>
            <div className="pricecart">
                <p style={{'fontSize' : '22px'}}>{price}</p>
                <p style={{'fontWeight' : 'bold'}}>{price1}</p>
                <img src={image1} alt="" />
            </div>
            </div>
        </div>
        <p className='new'>NEW</p>
    </div>
  )
}

export default Card2