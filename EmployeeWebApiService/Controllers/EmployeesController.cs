using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (EmployeeEntities entities = new EmployeeEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (EmployeeEntities entities = new EmployeeEntities())
            {
                return entities.Employees.Where(q => q.code == code).FirstOrDefault();
            }
        }
    }
}
