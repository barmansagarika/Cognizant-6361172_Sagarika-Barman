using Microsoft.AspNetCore.Mvc;

namespace SwaggerDemoAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Route("Emp")]

    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var employees = new[]
            {
                new { Id = 1, Name = "Alice" },
                new { Id = 2, Name = "Bob" }
            };

            return Ok(employees);
        }
    }
}
