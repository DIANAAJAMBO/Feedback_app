import { useState } from "react"
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import data from "../../data/reviewData"
import ReviewForm from "../ReviewForm";
import { FaHouseDamage } from "react-icons/fa";
import Button from "../layout/Button";


function Review() {
  const [review, setReview] = useState(data)

  // function to delete a review
  const deleteReview = (id) => {
    if (window.confirm('Are you sure, you want to delete this review?')) {
      setReview(review.filter((item) => item.id !== id))
    }
  }

  //  function to add a review
  const AddReview = (newReview) => {
    newReview.id = uuid()
    setReview([newReview, ...review])
  }

  return (
    <>
      <ReviewForm handleAdd={AddReview} />
      <Link to='/allreviews' style={{textDecoration:'none'}}>
        <div className='allReviewbtn'>
          <Button variant='secondary'>See Reviews</Button>
        </div>
      </Link>
      <div className="about-link">
        <Link to="/">
          <FaHouseDamage size={40} />
        </Link>
      </div>
    </>
  )
}

export default Review
