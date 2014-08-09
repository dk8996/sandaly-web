'use strict';

/* Filters */

angular.module('sandalyFilters', []).filter('checkmark', function() {
  return function(input) {
    return input.replace("130xauto","510x300");
  };
});