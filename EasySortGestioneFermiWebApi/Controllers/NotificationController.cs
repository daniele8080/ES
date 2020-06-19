using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;
using EasySortGestioneFermiWebApi.Models;
using System;
using EasySortGestioneFermiWebApi.Services;
using System.Net.Mail;

namespace EasySortGestioneFermiWebApi.Controllers
{
    //    [Route("api/[controller]")]
    [Route("[controller]/[action]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IEmailService _emailService;

        public NotificationController(IEmailService emailService, IConfiguration configuration)
        {
            _configuration = configuration;
            _emailService = emailService;
        }


        

        //[Route("SendNotification")]
        [HttpPost]
        public async Task<ActionResult> PostMessage([FromBody] Fermo fermo)
        {

            try
            {
                var webAppUrl = _configuration.GetSection("WebAppUrl").Value;
                var email4Sitma = _configuration.GetSection("Email:Email4Sitma").Value;
                var email4Poste = _configuration.GetSection("Email:Email4Poste").Value;
                var subject = "Easy Sort CMP Brescia";
                var htmlContent = "";

                string tos = "";

                string url = webAppUrl + "#/fermo-management?action=view&idfermo=" + fermo.IdFermo;
                //fermo creato da poste, sitma deve compilare
                if (fermo.Status == 1)
                {
                    htmlContent = "Buongiorno, si prega di completare le informazioni per il fermo <a style=\"font-weight:bold\" href=\"" + url + "\" > qui</a>";
                    tos = email4Sitma;
                }
                //fermo aggiornato da sitma, poste deve compilare
                if (fermo.Status == 2)
                {
                    htmlContent = "Buongiorno, si prega di completare le informazioni per il fermo <a style=\"font-weight:bold\" href=\"" + url + "\" > qui</a>";

                    tos = email4Poste;

                }
                //fermo aggiornato da poste, sitma deve validare e chiudere
                if (fermo.Status == 3)
                {
                    htmlContent = "Buongiorno, si prega di completare le informazioni per il fermo <a style=\"font-weight:bold\" href=\"" + url + "\" > qui</a>";

                    tos = email4Sitma;
                }
                //fermo chiuso
                if (fermo.Status == 4)
                {
                    htmlContent = "Buongiorno, il <a style=\"font-weight:bold\" href=\"" + url + "\" > fermo</a> è stato validato e chiuso";


                    tos = email4Poste + ";" + email4Sitma;                   
                }


                await _emailService.SendEmail(tos, subject, htmlContent);
                return Ok();


            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }    
        }

        //[Route("SendNotification")]
        [HttpPost]
        public async Task<ActionResult> PostMessageOld([FromBody] Fermo fermo)
        {
            
            try
            {
                var webAppUrl = _configuration.GetSection("WebAppUrl").Value;
                var apiKey = _configuration.GetSection("SENDGRID_API_KEY").Value;
                var email4Sitma = _configuration.GetSection("Email:Email4Sitma").Value;
                var email4Poste = _configuration.GetSection("Email:Email4Poste").Value;


                var client = new SendGridClient(apiKey);
                var from = new EmailAddress("dcarafoli@sitma.it", "Easy sort");
                var subject = "Easy Sort CMP Brescia";
                var htmlContent = "";

                List<EmailAddress> tos = new List<EmailAddress>();

                //fermo creato da poste, sitma deve compilare
                if (fermo.Status == 1)
                {
                    htmlContent = "" +
                   "Buongiorno, si prega di completare le informazioni per il fermo: " +
                   webAppUrl +
                   "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
                   "";


                    EmailAddress s = new EmailAddress(email4Sitma);
                    tos.Add(s);
                }
                //fermo aggiornato da sitma, poste deve compilare
                if (fermo.Status == 2)
                {
                    htmlContent = "" +
                  "Buongiorno, si prega di completare le informazioni per il fermo: " +
                  webAppUrl +
                  "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
                  "";

                    EmailAddress s = new EmailAddress(email4Poste);
                    tos.Add(s);
                }
                //fermo aggiornato da poste, sitma deve validare e chiudere
                if (fermo.Status == 3)
                {
                    htmlContent = "" +
                  "Buongiorno, si prega di completare le informazioni per il fermo: " +
                  webAppUrl +
                  "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
                  "";

                    EmailAddress s = new EmailAddress(email4Sitma);
                    tos.Add(s);
                }
                //fermo chiuso
                if (fermo.Status == 4)
                {
                    htmlContent = "" +
                  "Buongiorno, il fermo: " +
                  webAppUrl +
                  "#/fermo-management?action=view&idfermo=" + fermo.IdFermo +
                  " è stato validato e chiuso" +
                  "";

                    EmailAddress s = new EmailAddress(email4Sitma);
                    EmailAddress s1 = new EmailAddress(email4Poste);

                    tos.Add(s);
                    tos.Add(s1);
                }



                var displayRecipients = false; // set this to true if you want recipients to see each others mail id 
                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, tos, subject, "", htmlContent, false);
                var response = await client.SendEmailAsync(msg);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return CreatedAtAction("PostMessage", new { id = fermo.IdFermo }, fermo);
        }
    }
}