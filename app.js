import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header -
 *- Logo
 *- Nav Items
 * Body -
 * - Search
 * - Restaurant Container-
 *    : Restaurant Card
 *      - Img - Name - Rating - Cuisines - delivery
 *      
 * Footer -
 * - Copyright
 * - Links
 * - Address
 * - Contact
 * 
 */

 const RestaurantCard = (props) => {
    const { resData } = props
    return (
        <div className="res-card">
            <img className="res-logo" 
           alt="res-logo"
           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/15b8594f12b5fa9713624e5635625cc1"
            />
            <h3>{resData.info.name}</h3>
            <h3>{resData.info.cuisines}</h3>
            <h3>{resData.info.avgRating}</h3>
            <h3>{resData.info.costForTwo}</h3>
            
          </div> 
     )
}

const resObj = {
    info: {
       id: "772299",
     name: "McDonald's",
     cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/49774730-6b2a-4bee-ac6e-aa98dc47a584_772299.jpg",
     locality: "W Biz",
     areaName: "Wakad",
     costForTwo: "₹400 for two",
     cuisines: [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
       totalRatingsString: "500+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-04-22 23:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            
          },
          textBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      }
    },
    analytics: {
      
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-w-biz-wakad-pune-772299",
      type: "WEBLINK"
    }
  }




const Header = () => {
    return (
        <div className="header">
             <div className="logo-container" >
                <img className="logo"
                 src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
                 />
                 </div>

           <div className="nav-items">
               <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Contact Us</li>
                 <li>Cart</li>
               </ul>
             </div>
        
        </div>
    )
}



const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
             <div className="res-container">
                 <RestaurantCard resData={ resObj } />
                 
             
             </div>
        </div>
    )
}



const Footer = () => {
    return (
        <div style={{textAlign:"center"}}>
            CopyRight &copy; 
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app" >
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(<AppLayout/>)