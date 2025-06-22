//Submitted by:Superset ID: 6361172
//Exercise 1: Implementing the Singleton Pattern

using System;

namespace Singleton_Pattern
{
    public sealed class Logger
    {
        private static Logger _instance = null;
        private static readonly object _lock = new object();

        private Logger()
        {
            Console.WriteLine("Logger Initialized");
        }

        public static Logger GetInstance()
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new Logger();
                    }
                }
            }
            return _instance;
        }

        public void Log(string message)
        {
            Console.WriteLine($"[LOG]: {message}");
        }
    }
}