import starRatingComponent from './star-rating.component';

const starRating = angular
  .module('common.star-rating', [])
  .component('starRating', starRatingComponent)
  .name;

export default starRating;
