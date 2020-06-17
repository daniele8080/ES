using System;
using System.Collections.Generic;

namespace EasySortGestioneFermiWebApi.Models
{
    public partial class Fermo
    {
        public Guid IdFermo { get; set; }
        public string Linea { get; set; }
        public Guid? IdUtenteSitma { get; set; }
        public Guid? IdUtentePoste { get; set; }
        public string Anomalia { get; set; }
        public string Grado { get; set; }
        public DateTime? DataInizio { get; set; }
        public string Turno { get; set; }
        public string TipoTurno { get; set; }
        public string Modulo { get; set; }
        public string Sottoassieme { get; set; }
        public DateTime? DataFine { get; set; }
        public string ImpattoDegrado { get; set; }
        public string ImpactFactor { get; set; }
        public string DurataReale { get; set; }
        public double? Durata { get; set; }
        public string ClasseGuasto { get; set; }
        public string TipoGuasto { get; set; }
        public string CausaGuasto { get; set; }
        public string Imputabilita { get; set; }
        public string Soluzione { get; set; }
        public string DescrSoluzione { get; set; }
        public DateTime? DataValidazione { get; set; }
        public string RefPoste { get; set; }
        public string RefAssistenza { get; set; }
        public bool? Deleted { get; set; }
        public bool? Closed { get; set; }
        public int? Status { get; set; }

        public virtual Utente IdUtentePosteNavigation { get; set; }
        public virtual Utente IdUtenteSitmaNavigation { get; set; }
    }
}
