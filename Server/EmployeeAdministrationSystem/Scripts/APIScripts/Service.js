app.service("APIService", function ($http) {
    this.getEmps = function () {
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
});
