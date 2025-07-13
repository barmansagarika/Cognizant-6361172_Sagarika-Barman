using Microsoft.AspNetCore.Mvc;
using SwaggerDemoAPI.Models; 
using System;
using System.Collections.Generic;
using System.Linq;

namespace SwaggerDemoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> _employees;

        public EmployeeController()
        {
            if (_employees == null)
            {
                _employees = GetStandardEmployeeList();
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee updatedEmp)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
            {
                return BadRequest("Invalid employee id");
            }

            existing.Name = updatedEmp.Name;
            existing.Salary = updatedEmp.Salary;
            existing.Permanent = updatedEmp.Permanent;
            existing.Department = updatedEmp.Department;
            existing.Skills = updatedEmp.Skills;
            existing.DateOfBirth = updatedEmp.DateOfBirth;

            return Ok(existing);
        }

        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            return Ok(_employees);
        }

        [HttpGet("standard")]
        public ActionResult<Employee> GetStandard()
        {
            return Ok(GetStandardEmployeeList().FirstOrDefault());
        }

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            _employees.Add(emp);
            return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = _employees.FirstOrDefault(e => e.Id == id);
            if (emp == null)
                return NotFound();

            _employees.Remove(emp);
            return NoContent();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
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
                },
                new Employee
                {
                    Id = 2,
                    Name = "Jane Smith",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department { Id = 2, Name = "IT" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "Angular" }
                    },
                    DateOfBirth = new DateTime(1992, 3, 15)
                }
            };
        }
    }
}
