using System;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatClient
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private async void btnSend_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Inside click");
            var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
            var producer = new ProducerBuilder<Null, string>(config).Build();

            try
            {
                string message = txtMessage.Text.Trim();

                if (string.IsNullOrWhiteSpace(message))
                {
                    MessageBox.Show("Please enter a message before sending.");
                    return;
                }

                await producer.ProduceAsync("new-chat-topic", new Message<Null, string> { Value = message });

                MessageBox.Show("Message Sent Successfully.");
                txtMessage.Clear();
            }
            catch (ProduceException<Null, string> ex)
            {
                MessageBox.Show("Kafka Error: " + ex.Message);
            }
            finally
            {
                producer.Dispose();
            }
        }


        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
