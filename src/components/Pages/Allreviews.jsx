import React, { useState } from 'react'
import ReviewList from "../ReviewList";
import ReviewStats from "../ReviewStats";
import data from "../../data/reviewData"


const Allreviews = () => {

    const [review, setReview] = useState(data)

    // function to delete a review
    const deleteReview = (id) => {
      if (window.confirm('Are you sure, you want to delete this review?')) {
        setReview(review.filter((item) => item.id !== id))
      }
    }

    return (
        <div className="container">
            <ReviewStats reviews={review} />
            <ReviewList reviews={review} deleteReview={deleteReview} />
        </div>
    )
}

export default Allreviews