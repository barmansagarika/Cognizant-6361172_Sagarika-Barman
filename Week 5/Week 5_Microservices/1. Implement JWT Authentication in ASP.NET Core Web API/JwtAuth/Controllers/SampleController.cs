using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuth.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleController : ControllerBase
    {
        [Authorize]
        [HttpGet("secure")]
        public IActionResult GetSecureData()
        {
            return Ok("This is protected data");
        }

        [HttpGet("public")]
        public IActionResult GetPublicData()
        {
            return Ok("This is public data");
        }
    }
}
