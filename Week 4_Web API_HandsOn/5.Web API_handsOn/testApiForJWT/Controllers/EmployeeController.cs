using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using testApiForJWT.Models;

namespace testApiForJWT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize(Roles = "Admin,POC")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "John Doe",
                Salary = 50000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "HR" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "C#" },
                    new Skill { Id = 2, Name = "SQL" }
                },
                DateOfBirth = new DateTime(1990, 5, 10)
            }
        };

        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(_employees);
        }
    }
}
