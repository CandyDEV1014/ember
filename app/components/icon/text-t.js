import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNameBindings: [':rs-icon', ':icon-text-t']
});
