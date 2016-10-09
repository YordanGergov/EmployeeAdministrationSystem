namespace EmployeeAdministrationSystem.Data.Migrations
{
    using System.Data.Entity.Migrations;

    public sealed class Configuration : DbMigrationsConfiguration<EmployeeAdministrationSystemDbContext>
    {
        public Configuration()
        {
            this.AutomaticMigrationsEnabled = true;
            this.AutomaticMigrationDataLossAllowed = true;
        }

      // protected override void Seed(EmployeeAdministrationSystemDbContext context)
      // {
      //     //  This method will be called after migrating to the latest version.
      //
      //     //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
      //     //  to avoid creating duplicate seed data. E.g.
      //     //
      //     //    context.People.AddOrUpdate(
      //     //      p => p.FullName,
      //     //      new Person { FullName = "Andrew Peters" },
      //     //      new Person { FullName = "Brice Lambson" },
      //     //      new Person { FullName = "Rowan Miller" }
      //     //    );
      //     //
      // }
    }
}
