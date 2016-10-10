app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var empCall = APIService.getEmployees();
        empCall.then(function (d) {
            $scope.employee = d.data;
            $scope.infoTextAlert = "Employees data loading successful";
            $scope.infoSuccessAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        }, function (error) {
            $scope.errorTextAlert = "Employees data loading unsuccessful! Try clicking Administration System on the navigation bar!";
            $scope.showErrorAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
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
            $scope.successTextAlert = "New employee data successfully added!";
            $scope.showSuccessAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        }, function (error) {
            $scope.errorTextAlert = "New employee data addition unsuccessful! Try clicking Administration System on the navigation bar!";
            $scope.showErrorAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        })
    };

    $scope.updEmployee = function (employee, event) {
        employee.FirstName = event.currentTarget.innerText;
        var update = APIService.updateEmployee(employee);
        update.then(function (d) {
            getAll();
            $scope.successTextAlert = "Employee data successfully edited!";
            $scope.showSuccessAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        }, function (error) {
            $scope.errorTextAlert = "Employee data editing unsuccessful!";
            $scope.showErrorAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        })
    };

    $scope.deleteEmployee = function (subID) {
        var del = APIService.deleteEmployee(subID);
        del.then(function (d) {
            getAll();
            $scope.successTextAlert = "Employee data successfully deleted!";
            $scope.showSuccessAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        }, function (error) {
            $scope.errorTextAlert = "Employee data deletion unsuccessful!";
            $scope.showErrorAlert = true;

            $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
            };
        })
    };

    $scope.makeEditable = function (obj) {
        obj.target.setAttribute("contenteditable", true);
        obj.target.focus();
    };

})
