'use strict';

/* Filters */

var sandalyFilters = angular.module('sandalyFilters', []);

sandalyFilters.filter('checkmark', function() {
  return function(input) {
    return input.replace("130xauto","510x300");
  };
});


sandalyFilters.filter('searchFilter', function() {
	return function(input) {
		return input;
	};
});