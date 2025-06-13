import React from 'react'
import './App.css'
import Card from './components/card'
import image1 from './assets/Exclude.png'
import image2 from './assets/search-interface-symbol.png'
import image3 from './assets/trolley.png'
import image4 from './assets/Group 2.png'
import image5 from './assets/Untitled design(109) 1.png'
import image6 from './assets/Ultimate.png'
import image7 from './assets/Vector 3.png'
import image8 from './assets/Ellipse 5.png'
import image9 from './assets/Ellipse 6.png'
import image10 from './assets/Ellipse 2.png'
import image11 from './assets/symbols.png'
import image12 from './assets/shopping.png'
import image13 from './assets/AJIO.png'
import image14 from './assets/symbols (1).png'
import image15 from './assets/shopping (1).png'
import image16 from './assets/AJIO (1).png'
import image17 from './assets/Untitled design(114).png'
import image18 from './assets/Untitled design(111).png'
import image19 from './assets/Untitled design(110).png'
import image20 from './assets/Exclude (1).png'
import image21 from './assets/imageloading.png'
import image22 from './assets/man-brown-suede-sneakers 1.png'
import image23 from './assets/Slick.png'
import image24 from './assets/Group 13.png'
import image25 from './assets/Untitled design(108) 1.png'
import image26 from './assets/Untitled design(108) 1 (1).png'
import image27 from './assets/Untitled design(108) 1 (2).png'
import image28 from './assets/Untitled design(108) 1 (3).png'
import image29 from './assets/Untitled design(108) 1 (4).png'
import image30 from './assets/Untitled design(108) 1 (5).png'
import image31 from './assets/unsplash_rZC98_IKxCU.png'
import image32 from './assets/Star 1.png'
import image33 from './assets/instagram.png'
import image34 from './assets/facebook.png'
import Card2 from './components/card2';
import Card3 from './components/card3'

const App = () => {

  return (
    <div className='body'>

      <div className="header">
        <img src={image1} alt="" />
        <div className="headermenu">
          <p>Home</p>
          <p>Shop</p>
          <p>Collection</p>
          <p>Customize</p>
        </div>
        <div className="headerbtn">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>


    <div className="navbar">
      <div className="textnavbar">
        <h1>Find Your Sole Mate with Us</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod </p>
        <button>Shop Now</button>
      </div>
      <div className="imagenavabar">
      <img className='krosofka' src={image5} alt="" />
      <h2>Trendy slick pro</h2>
      <p>₹ 3999.00</p>
      </div>
    </div>
    <img className='ultimate' src={image6} alt="" />
    <img className='vector1' src={image7} alt="" />
    <img className='krug1' src={image8} alt="" />
    <img className='krug2' src={image9} alt="" />
    <img className='krug3' src={image10} alt="" />


    <div className="brend">
    <img src={image11} alt="" />
    <img src={image12} alt="" />
    <img src={image13} alt="" />
    <img src={image14} alt="" />
    <img src={image15} alt="" />
    <img src={image16} alt="" />
    </div>


    <div className="cartshop">
      <div className="carttext">
        <h3>- Our Trending Shoes</h3>
        <h1>Most popular 
        products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button>Explore</button>
      </div>
      <div className="totalcart">
        <Card img2={image20} des="Rs. 2999.00" name="Running canvas shoes" img={image17}/>
        <Card img2={image20} des="Rs. 2999.00" name="Running canvas shoes" img={image18}/>
        <Card img2={image20} des="Rs. 2999.00" name="Running canvas shoes" img={image19}/>
      </div>
    </div>
    <img className='loading' src={image21} alt="" />


    <div className="slick">
      <img className='foot' style={{'width' : '550px'}} src={image22} alt="" />
      <div className="textslick">
        <h1>Are you ready to
        lead the way</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <button>Explore</button>
        <img className='m1' src={image24} alt="" />
      </div>
    </div>
    <img className='cartslick' src={image23} alt="" />


    <div className="box">
      <h1>- Best Selling - </h1>
      <div className="btnbox">
        <button style={{'backgroundColor' : '#000000','color' : 'white','fontWeight' : 'bold','fontSize' : '19px','marginTop' : "50px"}}>Man</button>
        <button style={{'backgroundColor' : '#FFFFFF','color' : 'black','fontWeight' : 'bold','fontSize' : '19px','marginTop' : "50px"}}>Woman</button>
        <button style={{'backgroundColor' : '#FFFFFF','color' : 'black','fontWeight' : 'bold','fontSize' : '19px','marginTop' : "50px"}}>Boy</button>
        <button style={{'backgroundColor' : '#FFFFFF','color' : 'black','fontWeight' : 'bold','fontSize' : '19px','marginTop' : "50px"}}>Chid</button>
      </div>
      <div className="cartbox">
        <Card2  price="₹2999.00" price1="₹4999.00" image1={image20} image={image25}  name="Formal canvas shoe for man"/>
        <Card2  price="₹2999.00" price1="₹4999.00" image1={image20} image={image26}  name="Sneakers shoe for man"/>
        <Card2  price="₹2999.00" price1="₹4999.00" image1={image20} image={image27}  name="Slick Sneakers shoe "/>
        <Card2   price="₹2999.00" price1="₹4999.00" image1={image20} image={image28}  name="Slick running shoes"/>
        <Card2  price="₹2999.00" price1="₹4999.00" image1={image20} image={image29}  name="Formal canvas shoe for man"/>
        <Card2  price="₹2999.00" price1="₹4999.00" image1={image20} image={image30}  name="Formal Slick shoe for man"/>
      </div>
    </div>


    <div className="client">
      <h1 style={{'textAlign' : 'center'}}>- Client Testimonial -</h1>
      <div className="clentbox">
      <Card3 des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image1={image32} name="Meythli odex" img={image31}/>
      <Card3 des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image1={image32} name="Meythli odex" img={image31}/>
      </div>
    </div>
    <img className='loading1' src={image21} alt="" />


    <div className="footer">
      <div className="footerleft">
        <h1>Slick </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="imagefooter">
          <img src={image34} alt="" />
          <img src={image33} alt="" />
        </div>
      </div>
      <div className="footercenter">
        <h2>Subscribe to our news latter</h2>
        <input style={{'color' : 'gray','fontWeight' : 'bold'}} type="text" placeholder='Enter Email...' />
      </div>
      <div className="footerright">
        <h2>Quick Link’s</h2>
        <p>Home</p>
        <p>Shop</p>
        <p>Collection</p>
        <p>Contact</p>
        <p>Privacy</p>
      </div>
    </div>
    <p style={{'backgroundColor' : 'black','color' : 'white','textAlign' : 'center','padding' : '50px 0px','fontWeight' : 'bold','fontSize' : '20px',}}>slick.com©allrightreserve</p>
    </div>
  )
}

export default App