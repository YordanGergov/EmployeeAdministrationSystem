app.service("APIService", function ($http) {
    this.getEmps = function () {
        return $http.get("api/Employee")
    }
});
