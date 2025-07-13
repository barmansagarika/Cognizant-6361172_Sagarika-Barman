using Microsoft.AspNetCore.Mvc;
using SwaggerDemoAPI.Filters;
using SwaggerDemoAPI.Models;

namespace SwaggerDemoAPI.Controllers
{
    [ApiController]
    [Route("Emp")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = new();

        public EmployeeController()
        {
            if (!employees.Any())
            {
                employees = GetStandardEmployeeList();
            }
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Employee>), 200)]
        [ProducesResponseType(500)]
        public ActionResult<List<Employee>> Get()
        {
            // To trigger exception 
            throw new Exception("Test exception");
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            employees.Add(emp);
            return Ok(emp);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Employee updated)
        {
            var existing = employees.FirstOrDefault(e => e.Id == id);
            if (existing == null) return NotFound();

            existing.Name = updated.Name;
            existing.Salary = updated.Salary;
            existing.Permanent = updated.Permanent;
            existing.Department = updated.Department;
            existing.Skills = updated.Skills;
            existing.DateOfBirth = updated.DateOfBirth;

            return Ok(existing);
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "Alice",
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
        }
    }
}
