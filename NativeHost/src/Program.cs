using System;
using System.Threading.Tasks;
using Lyre;

namespace dotnet_console_test
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var host = new NativeMessagingHost();
            try
            {
                await host.Read<dynamic>();
                await host.Write(new { hostName =  $"{Environment.MachineName}"});
            }
            catch (Exception exception)
            {
                await host.Write(new { error = $"{exception}"});
            }
        }
    }
}
