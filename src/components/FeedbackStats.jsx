import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate rating avg
  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((accumulator, current) => {
          return accumulator + current.rating;
        }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  );
}

export default FeedbackStats;
