using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FirstWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        private static List<string> values = new List<string> { "value1", "value2" };

        // GET: /values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(values); 
        }

        // GET: /values/1
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            if (id < 0 || id >= values.Count)
                return NotFound(); 
            return Ok(values[id]);
        }

        // POST
        [HttpPost]
        public IActionResult Post([FromBody] string value)
        {
            values.Add(value);
            return Ok(values); 
        }

        // PUT
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] string value)
        {
            if (id < 0 || id >= values.Count)
                return BadRequest(); 
            values[id] = value;
            return Ok(values);
        }

        // DELETE
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id < 0 || id >= values.Count)
                return BadRequest(); 
            values.RemoveAt(id);
            return Ok(values);
        }
    }
}
