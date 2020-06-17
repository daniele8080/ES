using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasySortGestioneFermiWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace EasySortGestioneFermiWebApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class FermiController : ControllerBase
    {
        private readonly EasySortFermiContext _context;

        public FermiController(EasySortFermiContext context)
        {
            _context = context;
        }

        // GET: api/Fermi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fermo>>> GetFermo()
        {
            List<Fermo> fermi = new List<Fermo>();
            fermi = await _context.Fermo.Where(x => x.Deleted == false).ToListAsync();

                       
            foreach (Fermo f in fermi)
            {
                var utente = await _context.Utente.FindAsync(f.IdUtentePoste);
                f.IdUtentePosteNavigation = utente;

                //f.DataInizio = Convert.ToDateTime(f.DataInizio).ToLocalTime();
                //f.DataFine = Convert.ToDateTime(f.DataFine).ToLocalTime();
                //f.DataValidazione = Convert.ToDateTime(f.DataValidazione).ToLocalTime();
            }

            foreach (Fermo f in fermi)
            {
                var utente = await _context.Utente.FindAsync(f.IdUtenteSitma);
                f.IdUtenteSitmaNavigation = utente;
            }

            return fermi;
        }

        // GET: api/Fermi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fermo>> GetFermo(Guid id)
        {
            var fermo = await _context.Fermo.FindAsync(id);

            if (fermo == null)
            {
                return NotFound();
            }

            return fermo;
        }

        // PUT: api/Fermi/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFermo(Guid id, Fermo fermo)
        {
            if (id != fermo.IdFermo)
            {
                return BadRequest();
            }

            _context.Entry(fermo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FermoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Fermi
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Fermo>> PostFermo([FromBody] Fermo fermo)        
        {

            if (!FermoExists(fermo.IdFermo))
            {
                //fermo.DataInizio = fermo.DataInizio.Value.ToLocalTime();
                //fermo.DataFine = fermo.DataFine.Value.ToLocalTime();
                //fermo.DataValidazione = fermo.DataValidazione.Value.ToLocalTime();

                _context.Fermo.Add(fermo);
            }
            else
            {
                //fermo.DataInizio = fermo.DataInizio.Value.ToLocalTime();
                //fermo.DataFine = fermo.DataFine.Value.ToLocalTime();
                //fermo.DataValidazione =fermo.DataValidazione.Value.ToLocalTime();
                               
             
                _context.Entry(fermo).State = EntityState.Modified;
            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                return BadRequest(ex.Message);
            }
            #region old
            //_context.Fermo.Add(fermo);
            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            //catch (DbUpdateException)
            //{
            //    if (FermoExists(fermo.IdFermo))
            //    {
            //        return Conflict();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}
            #endregion

            return CreatedAtAction("PostFermo", new { id = fermo.IdFermo }, fermo);

           // return Ok();
        }

        // DELETE: api/Fermi/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Fermo>> DeleteFermo(Guid id)
        {
            var fermo = await _context.Fermo.FindAsync(id);
            if (fermo == null)
            {
                return NotFound();
            }

            fermo.Deleted = true;

           _context.Entry(fermo).State = EntityState.Modified;            

            await _context.SaveChangesAsync();

            return fermo;
        }

        private bool FermoExists(Guid id)
        {
            return _context.Fermo.Any(e => e.IdFermo == id);
        }
    }
}
