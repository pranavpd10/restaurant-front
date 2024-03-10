import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { BACK_END_PATH_URL, GET_ALL_MENU_ITEMS,REVIEWS_BUTTON } from './constants/Constants.jsx'
import { useNavigate } from 'react-router-dom';

function Home() {
  let [menuitems, setMenuItems] = useState({});
  let [isLoading, setLoading] = useState(false)
  let [isError, setError] = useState(false);
  const navigator = useNavigate();

  let menuItemRef = useRef()
  let displayComp;

  const menuItemsReviewClick = (e)=>{
    let menuItemId = e.target.getAttribute("data-item-id")
    console.log("target class name is "+e.target.className + " attribute "+menuItemId)
    if(REVIEWS_BUTTON == e.target.className ){
      console.log("in the rev button ")
      navigator("/reviews", {state:{"menuItem":menuItemId}})
    }
  }

  useEffect(() => {
    setLoading(false)
    axios.get(`${BACK_END_PATH_URL}${GET_ALL_MENU_ITEMS}`)
      // axios.get(`http://localhost:8080/getReviews/1?column=ratee`)
      .then(r => { console.log(r); setMenuItems(r) })
      .catch(e => { console.error("failed in catch " + JSON.stringify(e.response.data)); setMenuItems(e); setError(true) })
      .finally(() => setLoading(true))

    // return () => setMenuItems({})
  }, [])

  console.log("menuitems data is " + menuitems)
  if (!isLoading) {
    displayComp = <h3>Loading the data ...</h3>
  } else if (isError) {
    displayComp = <h3>Error while loading the data ...</h3>
  } else {
    console.log("the res data is " + menuitems.data)
    displayComp = menuitems.data.map(item =>
      <React.Fragment key={item.id}>
        <h3 style={{ display: 'inline-block' }}>{item.name}</h3> 
        <button data-item-id={item.id} className="reviewsButton" >reviews</button> <br />
      </React.Fragment >)
  }

  

  return (
    <>
      <div>Welocme to the Restaurant!</div>
      <div>Please have a look at the menu</div>
      <div className="" ref={menuItemRef} onClick={menuItemsReviewClick}>
        {displayComp}
      </div>
    </>
  )
}

export default Home