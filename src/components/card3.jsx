import React from 'react'
import './components.css'

const Card3 = ({img,name,image1,des}) => {
  return (
    <div>
        <div className="cartclient">
            <img style={{'marginTop' : '150px'}} src={img} alt="" />
            <div className="textclientcart">
                <h2 style={{'fontWeight' : 'bold','fontSize' : '28px'}}>{name}</h2>
                <div className="imagestar">
                    <img src={image1} alt="" />
                    <img src={image1} alt="" />
                    <img src={image1} alt="" />
                    <img src={image1} alt="" />
                    <img src={image1} alt="" />
                </div>
                <p style={{'fontWeight' : 'bold'}}>{des}</p>
            </div>
        </div>
    </div>
  )
}

export default Card3