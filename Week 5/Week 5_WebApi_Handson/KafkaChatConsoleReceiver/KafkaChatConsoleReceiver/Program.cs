using System;
using Confluent.Kafka;

namespace KafkaChatConsoleReceiver
{
    class Program
    {
        static void Main(string[] args)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = "localhost:9092",
                GroupId = "chat-console-group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe("new-chat-topic");

            Console.WriteLine("Listening for messages on 'new-chat-topic'...");

            while (true)
            {
                try
                {
                    var cr = consumer.Consume();
                    Console.WriteLine($"Received: {cr.Message.Value}");
                }
                catch (ConsumeException e)
                {
                    Console.WriteLine($"Error: {e.Error.Reason}");
                }
            }
        }
    }
}
