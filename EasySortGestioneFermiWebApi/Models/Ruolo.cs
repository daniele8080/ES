using System;
using System.Collections.Generic;

namespace EasySortGestioneFermiWebApi.Models
{
    public partial class Ruolo
    {
        public Ruolo()
        {
            UtenteRuolo = new HashSet<UtenteRuolo>();
        }

        public Guid IdRuolo { get; set; }
        public string NomeRuolo { get; set; }

        public virtual ICollection<UtenteRuolo> UtenteRuolo { get; set; }
    }
}
