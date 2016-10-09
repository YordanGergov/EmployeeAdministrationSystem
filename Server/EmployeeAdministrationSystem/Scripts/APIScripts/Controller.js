app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var empCall = APIService.getEmployees();
        empCall.then(function (d) {
            $scope.employee = d.data;
        }, function (error) {
            $log.error('Something went wrong while fetching the data.')
        })
    }

    $scope.addEmployees = function () {
        var emp = {
            FirstName: $scope.FirstName,
            LastName: $scope.LastName,
            Email: $scope.Email          
        };
        var addEmployees = APIService.addEmployee(emp);
        addEmployees.then(function (d) {
            getAll();
        }, function (error) {
            console.log('Something went wrong while saving the data.')
        })
    };

    $scope.updEmployee = function (employee, event) {
        employee.FirstName = event.currentTarget.innerText;
        var update = APIService.updateEmployee(employee);
        update.then(function (d) {
            getAll();
        }, function (error) {
            console.log('Something went wrong while updating the data.')
        })
    };

    $scope.deleteEmployee = function (subID) {
        var del = APIService.deleteEmployee(subID);
        del.then(function (d) {
            getAll();
        }, function (error) {
            console.log('Something went wrong while deleting the data.')
        })
    };

    $scope.makeEditable = function (obj) {
        obj.target.setAttribute("contenteditable", true);
        obj.target.focus();
    };

})
