using NUnit.Framework;
using CalcLibrary; 

namespace CalcLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private SimpleCalculator calculator;

        [SetUp]
        public void Init()
        {
            calculator = new SimpleCalculator();
        }

        [TearDown]
        public void Cleanup()
        {
            calculator.AllClear(); 
        }

        [Test]
        [TestCase(10, 20, 30)]
        [TestCase(-5.5, 5.5, 0)]
        [TestCase(0, 0, 0)]
        [TestCase(-10, -10, -20)]
        [TestCase(100.25, 200.75, 301)]
        public void Add_WhenCalled_ReturnsExpectedSum(double a, double b, double expectedResult)
        {
            
            double result = calculator.Addition(a, b);

            
            Assert.That(result, Is.EqualTo(expectedResult).Within(0.001));
        }

        [Test]
        [Ignore("Subtraction test will be added in next iteration")]
        public void Subtract_SampleTest()
        {
            
        }
    }
}
