app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var empCall = APIService.getEmps();
        empCall.then(function (d) {
            $scope.employee = d.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
})
