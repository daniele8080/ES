using Microsoft.Extensions.Configuration;
using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading.Tasks;

namespace EasySortGestioneFermiWebApi.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }



        public async Task SendEmail(string emails, string subject, string message)
        {

            using (var client = new SmtpClient())
            {
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(_configuration["Email:Email"], _configuration["Email:Password"]);
                client.Host = _configuration["Email:Host"];
                client.Port = int.Parse(_configuration["Email:Port"]);
                client.EnableSsl = bool.Parse(_configuration["Email:EnableSSL"]);


                MailMessage emailMessage = new MailMessage();

                emailMessage.To.Add(emails.Replace(";", ","));
                emailMessage.From = new MailAddress(_configuration["Email:Email"], "no-reply@easysort.com");
                emailMessage.Subject = subject;
                emailMessage.IsBodyHtml = true;
                //emailMessage.AlternateViews.Add(getEmbeddedImage("./assets/images/sitma.png"));
                emailMessage.AlternateViews.Add(Mail_Body(_configuration["Email:ImagePath"], message));
                client.Send(emailMessage);

            }
            await Task.CompletedTask;
        }


        private AlternateView Mail_Body(string filePath, string message)
        {      

            LinkedResource Img = new LinkedResource(filePath);
            Img.ContentId = Guid.NewGuid().ToString();
            string str = @"  
       

            <table  width='800px'>  
                 <tr>
                    <td colspan='3'>Questa email è generata automaticamente dal sistema di Sitma, per cortesia non rispondere a questo messaggio perché non ci giungerebbe.
                                   Puoi contattare l'Assistenza clienti utilizzando i riferimenti in calce alla presente. <br><br></td>
                </tr>
                <tr>  
                    <td colspan='3'> " + message + @" </td>  
                </tr>      
               <tr>        
                    <td>
                        <div style='display: flex; flex-direction:row;'>                      
                            <div style='flex: 1 1 0px;'><b>After sales</b><br><a href='mailto:service@sitma.it'>service@sitma.it</a><br>+39 059780311</div>
                            <div cstyle='flex: 1 1 0px;'>&nbsp;&nbsp;</div>      
                            <div style='flex: 1 1 0px;'><br><img src='cid:" + Img.ContentId + @"' id ='img' alt='https://www.sitma.it/' width='100px' height='30px'/><br></div>
                        </div>
                    <td/>                    
                    <td colspan='2' width='50%'></td>
                </tr>               
            </table>  
            ";
            AlternateView AV =
            AlternateView.CreateAlternateViewFromString(str, null, MediaTypeNames.Text.Html);
            AV.LinkedResources.Add(Img);
            return AV;
        }
    }
}

