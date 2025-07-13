using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;

namespace SwaggerDemoAPI.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            string logPath = "logs.txt";
            string message = $"[{DateTime.Now}] Exception: {context.Exception.Message}{Environment.NewLine}";

            File.AppendAllText(logPath, message);

            context.Result = new ObjectResult("An unexpected error occurred.")
            {
                StatusCode = 500
            };
        }
    }
}
