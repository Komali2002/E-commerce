import React from 'react' 
import './Home.css'

function Home()
{
    return(
        <div>
           
    <div className="row row-cols-1 row-cols-md-3 mt-3 g-5">
      
  {/*first*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Home Furnishing</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/BAU_Kitchen.jpg" />
     
      
    </div>
    
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/LA.jpg" />
  
    
    </div>
  </div>
  <div class="row mt-5 mb-0 ">
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Furniture_BAU.jpg" />
    
    
    </div>
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Office-stationary_7th_May.jpg" />
      
    </div>
    </div>
    <a href="/More" class="btn btn-secondary mt-4">More</a>
      </div>
      
    </div>
  </div>

   {/*second*/}
   <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Accessories</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-na.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_01_sbc_v1_564x564_in-en._CB657839327_.jpg" />
      <h5 className="mt-1">Laptops</h5>
      
    </div>
    
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Tablets/December/xcm_banners_02_sbc_v1_564x564_in-en._CB650413441_.jpg" />
      <h5 className="mt-1">Alexa devices</h5>
    
    </div>
  </div>
  <div class="row mt-4 " id="first">
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-na.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_03_sbc_v1_564x564_in-en._CB657839320_.jpg" />
      <h5 >Smart watches</h5>
      <a href="/More1" class="btn btn-secondary mt-1">More</a>
    
    </div>
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-na.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_18_sbc_v1_564x564_in-en._CB657839292_.jpg" />
      <h5 >Musical Instruments</h5>
    </div>
  </div>
  
      </div>
      
    </div>
  </div>
  {/*Third*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Clothing</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Womens_ethnic.jpg" />
     

      
    </div>
    
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Mens_ethnic.jpg" />
   
     

    </div>
  </div>
  <div class="row mt-5" id="first">
    <div class="col-sm-6">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Womwns_casual.jpg" />
      <h5 ></h5>
    
    </div>
    <div class="col-sm-6">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Mwns_casual_new.jpg" />
      <h5></h5>
    </div>
    
  </div>
  <a href="/More" class="btn btn-secondary mt-3">More</a>
      </div>
      
    </div>
  </div>
  {/*fourth*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title">Happy Vibes</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Green_decor.jpg" />
      
      
    </div>
    
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Photo_frame.jpg" />
     
    </div>
  </div>
  <div class="row mt-5" id="first">
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Home_light.jpg" />
      
    
    </div>
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Handicrafts__showpieces.jpg" />
    </div>
  </div>
  <a href="/More" class="btn btn-secondary mt-3">More</a>
      </div>
      
    </div>
  </div>
  {/*fifth*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">Essentials</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Sanitizers__sprays_7th_May.jpg" />

      
    </div>
    
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Masks_7th_May_NEW.jpg" />
      
    
    </div>
  </div>
  <div class="row mt-5 " id="first">
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Cleaning-supplies_7th_May.jpg" />
      
    
    </div>
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Home-workout_7th_May.jpg" />
      
    </div>
  </div>
  <a href="/More" class="btn btn-secondary mt-3">More</a>
      </div>
      
    </div>
  </div>
  {/*Sixth*/}
  <div className="col">
    <div className="card ms-3"  style={{width:"100%", height:"100%"}}>
      <div className="card-body">
        <h1 className="card-title ms-3">More Categories</h1>
        <div class="row">
    <div class="col-sm">
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Petcare_products.jpg" />
      
      
    </div>
    
    <div class="col-sm">
    
    <img className="h-95 w-100 mt-3" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Phone_case.jpg" />
    
    </div>
  </div>
  <div class="row mt-5 " id="first">
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Antivirus_software.jpg" />
      
    
    </div>
    <div class="col-sm">
    <img className="h-95 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Auto_parts.jpg" />
      
    </div>
  </div>
  <a href="/More" class="btn btn-secondary mt-3">More</a>
      </div>
      
    </div>
    
  </div>
    </div>
  </div>


          

          

  
    )

    
}
export default Home