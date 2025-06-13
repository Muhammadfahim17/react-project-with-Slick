import React from 'react'
import './components.css'
// import image1 from '../assets/react.svg'
// import image1 from '../assets/Untitled design(114).png'
// import image2 from '../assets/Untitled design(111).png'
// import image3 from '../assets/Untitled design(110).png'
// import image4 from '../assets/Exclude.png'

const Card = ({img,name,des,img2}) => {
  return (
    <div>
        <div className="cart">
          <img style={{'width' : '300px','height' : '300px'}} src={img} alt="" />
          <div className="textcart">
          <h2>{name}</h2>
          <div className="pricediv">
          <p>{des}</p>
          <img src={img2} alt="" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Card