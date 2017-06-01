var Q = require('q');
 
var deferred = Q.defer();
var promise = deferred.promise;
 
promise.then(function (val) {
   console.log('Got : '+val);
});

promise.catch(function(err){
   console.error("Error : "+err)
})
 
//deferred.resolve('Awesome');
deferred.reject('Something bad happen');