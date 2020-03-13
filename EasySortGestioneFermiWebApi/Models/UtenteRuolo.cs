using System;
using System.Collections.Generic;

namespace EasySortGestioneFermiWebApi.Models
{
    public partial class UtenteRuolo
    {
        public Guid IdUtente { get; set; }
        public Guid IdRuolo { get; set; }

        public virtual Ruolo IdRuoloNavigation { get; set; }
        public virtual Utente IdUtenteNavigation { get; set; }
    }
}
