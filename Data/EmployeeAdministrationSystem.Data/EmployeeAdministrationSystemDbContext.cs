using EmployeeAdministrationSystem.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeAdministrationSystem.Data
{
    public class EmployeeAdministrationSystemDbContext : IdentityDbContext<ApplicationUser>
    {
        public EmployeeAdministrationSystemDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static EmployeeAdministrationSystemDbContext Create()
        {
            return new EmployeeAdministrationSystemDbContext();
        }
    }
}
