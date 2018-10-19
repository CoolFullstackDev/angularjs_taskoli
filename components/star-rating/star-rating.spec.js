import starRating from './star-rating.module'
// import starRatingController from './star-rating.controller';
import starRatingComponent from './star-rating.component';
import starRatingTemplate from './star-rating.html';

describe('starRating', () => {
  let $rootScope, makeController;

  beforeEach(window.module(starRating));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new starRatingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(starRatingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = starRatingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(starRatingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(starRatingController);
      });
  });
});
