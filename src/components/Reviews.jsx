import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createReviewUrl } from './constants/Constants';

function Reviews() {

  let [reviews, setReviews] = useState([])
  let [error, setError] = useState()
  let [isError, setIsError] = useState(false)
  const navigator = useNavigate();
  let location = useLocation();
  let [reviewComp, setReviewComp]= useState();
  console.log("location state " + JSON.stringify(location.state))

  useEffect(() => {
    let renderComp ;
    if (location.state == null && location.state == undefined) {
      console.log("undefined location " + location)
      renderComp = <h3>Please first select menuitem for reviews, automatically redirecting to the menuitems ...</h3>
      setReviewComp(renderComp)
      setTimeout(() => {
        navigator("/")
      }, 2000);
    } else {
      let reviewUrl = createReviewUrl(location.state.menuItem, null)
      console.log(" reviewUrl " + reviewUrl)
      axios.get(reviewUrl).then(r => { console.log("rev ", r); setReviews(r.data);
      console.log(" reviews " ,reviews)
      renderComp = reviews.map(review => {
        return (<div key={review.id} ><h3 key={review.id}> {review.title}</h3>
          <p>{review.description}</p>
          <p>rate {review.rate}</p>
        </div>)
      })
      setReviewComp(renderComp)})
        .catch(e => { console.error("error rev ", e); setError(e.response.data); setIsError(true) })
        .finally(() => setError(false))


    }
  }, [])

  return (
    <>
      <div>Reviews</div>
      {reviewComp}
    </>
  )
}

export default Reviews