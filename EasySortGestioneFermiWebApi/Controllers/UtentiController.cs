using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EasySortGestioneFermiWebApi.Models;
using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.IO;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;
using Microsoft.Extensions.Primitives;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace EasySortGestioneFermiWebApi.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class UtentiController : ControllerBase
    {
        private readonly EasySortFermiContext _context;

        public UtentiController(EasySortFermiContext context)
        {
            _context = context;
        }

        // GET: api/Utenti       
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Utente>>> GetUtente()
        {            
            var utenti = await _context.Utente.ToListAsync();
            
            foreach (Utente u in utenti)
            {
                var utenteRuolo = await _context.UtenteRuolo.Where(x => x.IdUtente == u.IdUtente).ToListAsync();

                foreach(UtenteRuolo ur in utenteRuolo)
                {
                    var ruolo = await _context.Ruolo.FindAsync(ur.IdRuolo);

                    ur.IdRuoloNavigation = ruolo;
                    u.UtenteRuolo.Add(ur);
                }
                   
            }

            return utenti;
        }

        // GET: api/Utenti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Utente>> GetUtente(Guid id)
        {
            var utente = await _context.Utente.FindAsync(id);

            if (utente == null)
            {
                return NotFound();
            }

            return utente;
        }

        // GET: api/Utenti/5
        //
        //
        //https://developerhandbook.com/dotnet/create-restful-api-authentication-using-web-api-jwt/
        //https://stackoverflow.com/questions/50617382/http-post-is-passing-parameters-as-null
        //https://stackoverflow.com/questions/51991835/post-json-data-to-dotnet-core-webapi
        //https://forums.asp.net/t/2134356.aspx?Create+token+based+web+API+using+Asp+net+Core+and+Identity
        //https://stackoverflow.com/questions/34475523/how-to-pass-url-arguments-query-string-to-a-http-request-on-angular
        [HttpPost]
        [AllowAnonymous]
        public void GetDetails([FromBody] object bar)
        {

            string a = bar.ToString();
        }

        [HttpPost]
        //[Route("GetToken")]
        public IActionResult GetToken([FromBody] LoginCredential credentials)
        {
           var utente =  _context.Utente.FirstOrDefault(acc => acc.Username == credentials.Email &&
                                                          acc.Password == credentials.Password);


            var identity = User.Identity as ClaimsIdentity;

            LoginHelper lh = new LoginHelper();
           
        
            if (utente == null)
            {
                return NotFound("");
            }

            var token = lh.CreateTokenForIdentity(identity);

            utente.Token = token;

            List<UtenteRuolo> utenteRuolo =  _context.UtenteRuolo.Where(x => x.IdUtente == utente.IdUtente).ToList();

            foreach(UtenteRuolo ur in utenteRuolo)
            {
                Ruolo ruolo = _context.Ruolo.Where(x => x.IdRuolo == ur.IdRuolo).FirstOrDefault();

                ur.IdRuoloNavigation = ruolo;
                utente.UtenteRuolo.Add(ur);
            }
                

            //foreach (UtenteRuolo ur in utenteRuolo)
            //{
            //    var ruolo = await _context.Ruolo.FindAsync(ur.IdRuolo);

            //    ur.IdRuoloNavigation = ruolo;
            //    u.UtenteRuolo.Add(ur);
            //}

            return Ok(utente);
        }

        // PUT: api/Utenti/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUtente(Guid id, Utente utente)
        {
            if (id != utente.IdUtente)
            {
                return BadRequest();
            }

            _context.Entry(utente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtenteExists(id))
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

        // POST: api/Utenti
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Utente>> PostUtente(Utente utente)
        {
            _context.Utente.Add(utente);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (UtenteExists(utente.IdUtente))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetUtente", new { id = utente.IdUtente }, utente);
        }

        // DELETE: api/Utenti/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Utente>> DeleteUtente(Guid id)
        {
            var utente = await _context.Utente.FindAsync(id);
            if (utente == null)
            {
                return NotFound();
            }

            _context.Utente.Remove(utente);
            await _context.SaveChangesAsync();

            return utente;
        }

        private bool UtenteExists(Guid id)
        {
            return _context.Utente.Any(e => e.IdUtente == id);
        }

        public class LoginCredential
        {
            public string Email { get; set; }
            public string Password { get; set; } // This is the json object
        }

        public class LoginHelper
        {

            //In questo metodo creiamo il token a partire dai claim della ClaimsIdentity
            public StringValues CreateTokenForIdentity(ClaimsIdentity identity)
            {
                string mySecretKey = "danielecarafoli05051980";


                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(mySecretKey));
                var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                issuer: "Issuer",
                  audience: "Audience",
                  claims: identity.Claims,
                  expires: DateTime.Now.AddMinutes(20),
                  signingCredentials: credentials
                );
                var tokenHandler = new JwtSecurityTokenHandler();
                var serializedToken = tokenHandler.WriteToken(token);
                return serializedToken;
            }           
        }

    }
}




