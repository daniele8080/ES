using System;
using System.Collections.Generic;

namespace EasySortGestioneFermiWebApi.Models
{
    public partial class Utente
    {
        public Utente()
        {
            FermoIdUtentePosteNavigation = new HashSet<Fermo>();
            FermoIdUtenteSitmaNavigation = new HashSet<Fermo>();
            UtenteRuolo = new HashSet<UtenteRuolo>();
        }

        public Guid IdUtente { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        public virtual ICollection<Fermo> FermoIdUtentePosteNavigation { get; set; }
        public virtual ICollection<Fermo> FermoIdUtenteSitmaNavigation { get; set; }
        public virtual ICollection<UtenteRuolo> UtenteRuolo { get; set; }
    }
}
