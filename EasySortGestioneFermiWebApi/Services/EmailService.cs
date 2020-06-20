using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
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
                    <td colspan='3' > " + message + @" </td>  
                </tr>      
               <tr>                    
                    <td>  
                      <b>After sales</b>
                    </td>  
                    <td width='550px' colspan='2'></<td>
                </tr>
                <tr>                     
                    <td>  
                       <a href='mailto:service@sitma.it'>service@sitma.it</a>
                    </td>  
                    <td  colspan='2'></<td>
                </tr>
                <tr>                    
                    <td>    
                       +39 059 780 311 
                    </td>  
                    <td>  
                      <img src='cid:" + Img.ContentId + @"' id ='img' alt='https://www.sitma.it/' width='90px' height='30px'/>   
                    </td>  
                    <td></<td>
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

