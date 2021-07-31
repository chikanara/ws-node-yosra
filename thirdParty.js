/******third party module ****************** */
var _ = require('lodash');
var array = [1,0,false,"","test"]
var truthyArray = _.compact(array)
console.log(truthyArray)
