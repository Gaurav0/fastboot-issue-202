import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { id: 1 };
  },
  afterModel(model) {
    return new Ember.RSVP.Promise(resolve => {
      resolve(model);
    }).then(m2 => {
      return this.transitionTo('main', m2.id);
    });
  }
});
