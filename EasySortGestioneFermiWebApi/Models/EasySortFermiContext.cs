using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EasySortGestioneFermiWebApi.Models
{
    public partial class EasySortFermiContext : DbContext
    {
        public EasySortFermiContext()
        {
        }

        public EasySortFermiContext(DbContextOptions<EasySortFermiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Fermo> Fermo { get; set; }
        public virtual DbSet<Ruolo> Ruolo { get; set; }
        public virtual DbSet<Utente> Utente { get; set; }
        public virtual DbSet<UtenteRuolo> UtenteRuolo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                //optionsBuilder.UseSqlServer("Server=DCARAFOLI;Database=EasySortFermi;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Fermo>(entity =>
            {
                entity.HasKey(e => e.IdFermo)
                    .HasName("PK__tblFERMI__8EAFC45B44E2E163");

                entity.Property(e => e.IdFermo)
                    .HasColumnName("ID_FERMO")
                    .ValueGeneratedNever();

                entity.Property(e => e.Anomalia)
                    .HasColumnName("ANOMALIA")
                    .HasMaxLength(250);

                entity.Property(e => e.CausaGuasto)
                    .HasColumnName("CAUSA_GUASTO")
                    .HasMaxLength(500);

                entity.Property(e => e.ClasseGuasto)
                    .HasColumnName("CLASSE_GUASTO")
                    .HasMaxLength(100);

                entity.Property(e => e.Closed).HasColumnName("CLOSED");

                entity.Property(e => e.DataFine)
                    .HasColumnName("DATA_FINE")
                    .HasColumnType("datetime");

                entity.Property(e => e.DataInizio)
                    .HasColumnName("DATA_INIZIO")
                    .HasColumnType("datetime");

                entity.Property(e => e.DataValidazione).HasColumnName("DATA_VALIDAZIONE");

                entity.Property(e => e.Deleted).HasColumnName("DELETED");

                entity.Property(e => e.DescrSoluzione)
                    .HasColumnName("DESCR_SOLUZIONE")
                    .HasMaxLength(500);

                entity.Property(e => e.Durata).HasColumnName("DURATA");

                entity.Property(e => e.DurataReale)
                    .HasColumnName("DURATA_REALE")
                    .HasMaxLength(50);

                entity.Property(e => e.Grado)
                    .HasColumnName("GRADO")
                    .HasMaxLength(50);

                entity.Property(e => e.IdUtentePoste).HasColumnName("ID_UTENTE_POSTE");

                entity.Property(e => e.IdUtenteSitma).HasColumnName("ID_UTENTE_SITMA");

                entity.Property(e => e.ImpactFactor)
                    .HasColumnName("IMPACT_FACTOR")
                    .HasMaxLength(50);

                entity.Property(e => e.ImpattoDegrado)
                    .HasColumnName("IMPATTO_DEGRADO")
                    .HasMaxLength(50);

                entity.Property(e => e.Imputabilita)
                    .HasColumnName("IMPUTABILITA_")
                    .HasMaxLength(50);

                entity.Property(e => e.Linea)
                    .HasColumnName("LINEA")
                    .HasMaxLength(250);

                entity.Property(e => e.Modulo)
                    .HasColumnName("MODULO")
                    .HasMaxLength(250);

                entity.Property(e => e.RefAssistenza)
                    .HasColumnName("REF_ASSISTENZA")
                    .HasMaxLength(50);

                entity.Property(e => e.RefPoste)
                    .HasColumnName("REF_POSTE")
                    .HasMaxLength(50);

                entity.Property(e => e.Soluzione)
                    .HasColumnName("SOLUZIONE")
                    .HasMaxLength(250);

                entity.Property(e => e.Sottoassieme)
                    .HasColumnName("SOTTOASSIEME")
                    .HasMaxLength(250);

                entity.Property(e => e.TipoGuasto)
                    .HasColumnName("TIPO_GUASTO")
                    .HasMaxLength(250);

                entity.Property(e => e.TipoTurno)
                    .HasColumnName("TIPO_TURNO")
                    .HasMaxLength(50);

                entity.Property(e => e.Turno)
                    .HasColumnName("TURNO")
                    .HasMaxLength(50);

                entity.HasOne(d => d.IdUtentePosteNavigation)
                    .WithMany(p => p.FermoIdUtentePosteNavigation)
                    .HasForeignKey(d => d.IdUtentePoste)
                    .HasConstraintName("FK_Fermo_Utente1");

                entity.HasOne(d => d.IdUtenteSitmaNavigation)
                    .WithMany(p => p.FermoIdUtenteSitmaNavigation)
                    .HasForeignKey(d => d.IdUtenteSitma)
                    .HasConstraintName("FK_Fermo_Utente");
            });

            modelBuilder.Entity<Ruolo>(entity =>
            {
                entity.HasKey(e => e.IdRuolo)
                    .HasName("PK_tblRUOLO");

                entity.HasIndex(e => e.IdRuolo)
                    .HasName("IX_tblRUOLO");

                entity.Property(e => e.IdRuolo)
                    .HasColumnName("ID_RUOLO")
                    .ValueGeneratedNever();

                entity.Property(e => e.NomeRuolo)
                    .IsRequired()
                    .HasColumnName("NOME_RUOLO")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Utente>(entity =>
            {
                entity.HasKey(e => e.IdUtente)
                    .HasName("PK_tblUTENTE");

                entity.Property(e => e.IdUtente)
                    .HasColumnName("ID_UTENTE")
                    .ValueGeneratedNever();

                entity.Property(e => e.Cognome)
                    .HasColumnName("COGNOME")
                    .HasMaxLength(50);

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(100);

                entity.Property(e => e.Nome)
                    .HasColumnName("NOME")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(50);

                entity.Property(e => e.Username)
                    .HasColumnName("USERNAME")
                    .HasMaxLength(50);

                entity.Property(e => e.Token)
                   .HasColumnName("TOKEN")
                   .HasMaxLength(100);
            });

            modelBuilder.Entity<UtenteRuolo>(entity =>
            {
                entity.HasKey(e => new { e.IdUtente, e.IdRuolo });

                entity.Property(e => e.IdUtente).HasColumnName("ID_UTENTE");

                entity.Property(e => e.IdRuolo).HasColumnName("ID_RUOLO");

                entity.HasOne(d => d.IdRuoloNavigation)
                    .WithMany(p => p.UtenteRuolo)
                    .HasForeignKey(d => d.IdRuolo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tblUTENTE_RUOLO_tblRUOLO");

                entity.HasOne(d => d.IdUtenteNavigation)
                    .WithMany(p => p.UtenteRuolo)
                    .HasForeignKey(d => d.IdUtente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_tblUTENTE_RUOLO_tblUTENTE");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
