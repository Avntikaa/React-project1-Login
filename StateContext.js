import React, { useContext, useState, createContext} from "react";
const Context = createContext();
export const StateContext = ({ children }) => {
 const[totalCount,setTotalCount]=useState(0);
 const[itemaddedtocart,setItemaddedtocart]=useState([]);
 const [totalprice,setTotalprice]=useState(0);
  const cartcount=()=>{
    setTotalCount(()=>totalCount+1);
  }

  const cartitem=(item)=>{
    let flag=false;
    if(itemaddedtocart.length>0){
    itemaddedtocart.forEach((i)=>{
      if(i.dish===item.dish)
      flag=true;
    })

      if(flag===false)
      {
        setItemaddedtocart((prev)=>[...prev,item]);
      }
  }
  else{
          setItemaddedtocart((prev)=>[...prev,item]);
  }
    setTotalprice((prev)=>prev+item.price);
  }


  // eslint-disable-next-line no-unused-vars
  
  return (
    <Context.Provider
      value={{
    cartitem,cartcount,itemaddedtocart,totalprice,totalCount
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);