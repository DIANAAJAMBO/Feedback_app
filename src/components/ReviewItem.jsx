import { FaTimes } from "react-icons/fa"

function ReviewItem({ review, deleteReview }) {



  return (
    <>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        <div className="card">
          <div className="num-display">{review.rating}</div>
          <div>{review.text}</div>
          <button className="close" onClick={() => deleteReview(review.id)}>
            <FaTimes />
          </button>
        </div>
      </div>

    </>
  )
}

export default ReviewItem
