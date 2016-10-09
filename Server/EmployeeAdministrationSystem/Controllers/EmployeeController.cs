using EmployeeAdministrationSystem.Data;
using Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeAdministrationSystem.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        private readonly EmployeeAdministrationSystemDbContext db;

        public EmployeeController()
        {
            this.db = new EmployeeAdministrationSystemDbContext();
        }

        public IEnumerable<Employee> Get()
        {
            return db.Employee.AsEnumerable();
        }

        // POST: api/Employee  
        public void Post(Employee emp)
        {
            if (ModelState.IsValid)
            {
                db.Employee.Add(emp);
                db.SaveChanges();
            }
        }

        // PUT: api/Employee/5  
        public void Put(Employee emp)
        {
            if (ModelState.IsValid)
            {
                db.Entry(emp).State = EntityState.Modified;
                try
                {
                    db.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }
    }
}
