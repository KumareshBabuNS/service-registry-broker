var $ = require('jquery');

(function () {

    //var baseURL = "http://localhost:8080";
    var baseURL = "";

    var user   = "testuser";
    var passwd = "testuser";
    
    
    function make_base_auth(user, password) {
	  var tok = user + ':' + password;
	  var hash = btoa(tok);
	  return "Basic " + hash;
	}


    // The public API
    var RegistryService = {
        findAllServices: function() {
           return $.ajax( baseURL + "/services");            
        },
        findServiceById: function(serviceId) {
            return $.ajax(baseURL + "/services/" + serviceId);
        },
        findServiceByName: function(searchKey) {
            return $.ajax({url: baseURL + "/searchService?", data: {name: searchKey}});
        },        
        findServiceByProviderName: function(searchKey) {
            return $.ajax({url: baseURL + "/searchServiceByProvider?", data: {name: searchKey}});
        },
        getPlansForService: function(serviceId) {
            return $.ajax({url: baseURL + "/services/" + serviceId + "/plans"});
        },
        findPlanById: function(planId) {
            return $.ajax(baseURL + "/plans/" + planId);
        },
        getCredentialsForPlans: function(planId) {
            return $.ajax({url: baseURL + "/credentialsForPlan",  data: {planId: planId}});
        },
        findCredentialsById: function(credId) {
            return $.ajax(baseURL + "/credentials/" + credId);
        }
    };
    
    module.exports = RegistryService;

}());

