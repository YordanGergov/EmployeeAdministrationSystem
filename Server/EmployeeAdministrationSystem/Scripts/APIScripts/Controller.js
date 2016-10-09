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

    $scope.addEmps = function () {
        var emp = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            Email: $scope.Email          
        };
        var addEmps = APIService.addEmployee(emp);
        addEmps.then(function (d) {
            getAll();
        }, function (error) {
            console.log('Oops! Something went wrong while saving the data.')
        })
    };

    $scope.updEmployee = function (emp, eve) {
        emp.FirstName = eve.currentTarget.innerText;
        var upd = APIService.updateEmployee(emp);
        upd.then(function (d) {
            getAll();
        }, function (error) {
            console.log('Oops! Something went wrong while updating the data.')
        })
    };

    $scope.makeEditable = function (obj) {
        obj.target.setAttribute("contenteditable", true);
        obj.target.focus();
    };

})
