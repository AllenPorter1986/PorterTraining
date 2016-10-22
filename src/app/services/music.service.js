(function () {

    angular
        .module('porterTraining.services')
        .service('musicService', musicService);

    function musicService($resource, $q) {
        return {
            getMusic: function (params) {
                var deferred = $q.defer();
                var music = [{ Title: "value1" }, { Title: "value2" }]
                $q.resolve(music)
                return deferred.promise;
            }
        };

        var baseUrl = "";

        return $resource(baseUrl, null, {
            getMusic: {
                method: 'GET',
                params: {},
                isArray: false,
                url: urlBase + '/Music',
                headers: { 'Content-Type': 'application/json' }
            }
        });
    }

})();