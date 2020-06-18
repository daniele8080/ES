using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;
using EasySortGestioneFermiWebApi.Models;

namespace EasySortGestioneFermiWebApi.Controllers
{
    //    [Route("api/[controller]")]
    [Route("[controller]/[action]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public NotificationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //[Route("SendNotification")]
        [HttpPost]
        public async Task PostMessage([FromBody] Fermo fermo)
        {
            var webAppUrl = _configuration.GetSection("WebAppUrl").Value;
            var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;   
            var email4Sitma = _configuration.GetSection("Email4Sitma").Value;
            var email4Poste = _configuration.GetSection("Email4Poste").Value;


            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("dcarafoli@sitma.it", "Easy sort");
            var subject = "Easy Sort CMP Brescia";
            var htmlContent = "";

            List<EmailAddress> tos = new List<EmailAddress>();

            //fermo creato da poste, sitma deve compilare
            if (fermo.Status == 1)
            {
                htmlContent = "<strong>" +
               "Buongiorno, si prega di completare le informazioni per il fermo: " +
               webAppUrl +
               "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
               "</strong>";


                EmailAddress s = new EmailAddress(email4Sitma);
                tos.Add(s); 
            }
            //fermo aggiornato da sitma, poste deve compilare
            if (fermo.Status == 2)
            {
                htmlContent = "<strong>" +
              "Buongiorno, si prega di completare le informazioni per il fermo: " +
              webAppUrl +
              "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
              "</strong>";

                EmailAddress s = new EmailAddress(email4Poste);
                tos.Add(s);
            }
            //fermo aggiornato da poste, sitma deve validare e chiudere
            if (fermo.Status == 3)
            {
                htmlContent = "<strong>" +
              "Buongiorno, si prega di completare le informazioni per il fermo: " +
              webAppUrl +
              "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
              "</strong>";

                EmailAddress s = new EmailAddress(email4Sitma);
                tos.Add(s);
            }
            //fermo chiuso
            if (fermo.Status == 4)
            {
                htmlContent = "<strong>" +
              "Buongiorno, il fermo: " +
              webAppUrl +
              "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
              " è stato validato e chiuso" +
              "</strong>";

                EmailAddress s = new EmailAddress(email4Sitma);
                EmailAddress s1 = new EmailAddress(email4Poste);

                tos.Add(s);
                tos.Add(s1);
            }

                                                   
           
            var displayRecipients = false; // set this to true if you want recipients to see each others mail id 
            var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, tos, subject, "", htmlContent, false);
            var response = await client.SendEmailAsync(msg);
        }
    }
}