import Ember from 'ember';

export function decimals(params/*, hash*/) {
  if (typeof params[0] === 'number') {
    return params[0].toFixed(params[1]);
  } else {
    return params[0];
  }
}

export default Ember.Helper.helper(decimals);
