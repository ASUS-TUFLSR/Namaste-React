import React from "react";

const ItemList = ({ items }) => {
   console.log(items)
   
    return <div>
       {/* <h1>Hello World</h1> */}
       {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left" >
            <div className="p-2" >
                <span className="font-extrabold">• {item.card.info.name}</span>
                <span>- ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs" >{item.card.info.description}</p><br></br>
        </div>
       ))}
    </div>
    
    
}

export default ItemList;