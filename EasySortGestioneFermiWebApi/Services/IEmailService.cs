using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace EasySortGestioneFermiWebApi.Services
{
    public interface IEmailService
    {
        Task SendEmail(string emails, string subject, string message);
    }
}
