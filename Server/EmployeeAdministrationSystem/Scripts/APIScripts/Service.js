app.service("APIService", function ($http) {
    this.getEmployees = function () {
        return $http.get("api/Employee")
    }

    this.addEmployee = function (emp) {
        return $http(
        {
            method: 'post',
            data: emp,
            url: 'api/Employee'
        });
    }

    this.updateEmployee = function (emp) {
        return $http(
        {
            method: 'put',
            data: emp,
            url: 'api/Employee'
        });
    }

    this.deleteEmployee = function (empID) {
        var url = 'api/Employee/' + empID;
        return $http(
        {
            method: 'delete',
            data: empID,
            url: url
        });
    }

});
