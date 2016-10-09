namespace SourceControlSystem.Api
{
    using System.Data.Entity;
    using EmployeeAdministrationSystem.Data;
    using EmployeeAdministrationSystem.Data.Migrations;

    public static class DatabaseConfig
    {
        public static void Initialize()
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<EmployeeAdministrationSystemDbContext, Configuration>());
            EmployeeAdministrationSystemDbContext.Create().Database.Initialize(true);
        }
    }
}
