import template from './star-rating.html';
import './star-rating.css';

const starRatingComponent = {
  bindings: {
    rating: '<',
  },
  template
};

export default starRatingComponent;