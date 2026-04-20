
const STORAGE_KEY = 'imalavoglia-c5-app-v12';
const DATA_VERSION = 'v29';
const TEAM_PENALTY_POINTS = 2;
const TEAM_PENALTY_SYMBOL = '✱';
const DEFAULT_PLAYER_IMG = 'assets/icona.png';
const MALAVOGLIA = 'I Malavoglia';
const DEFAULT_LOGIN_PASSWORD = 'malavoglia';

const AUTH_LOCKOUT_MAX_ATTEMPTS = 5;
const AUTH_LOCKOUT_WINDOW_MS = 15 * 60 * 1000;
const AUTH_LOCKOUT_DURATIONS_MS = [
  1 * 60 * 1000,
  5 * 60 * 1000,
  10 * 60 * 1000,
  30 * 60 * 1000,
];
const AUTH_SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const FIXTURES_SOURCE_URL = 'https://www.noisportverona.it/risultati-campionato-di-calcio-a-5-m_CM20250000005';
const WEATHER_REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const LOCAL_FIXTURES_TXT_FILENAME = 'Partite da disputare.txt';
const LOCAL_SCORERS_TXT_FILENAME = 'Marcatori.txt';
const DEFAULT_IMPORTED_DATA_VERSION = 'defaults-v2';
const DEFAULT_IMPORTED_SCORERS_VERSION = 'scorers-v3';
const DEFAULT_OPEN_SEASON_LABEL = '2025/2026';
const REMOVED_COMPETITION_LABELS = ['2026/2027', 'Coppa 2026'];
const COMPETITION_PRESET_LOGOS = {
  default: '🏆',
  'noi-sport': 'assets/noi-sport-campionato.png',
};

function sortPlayersAlphabetically(players = []) {
  return players.sort((a, b) => {
    const firstCompare = String(a?.firstName || '').localeCompare(String(b?.firstName || ''), 'it', { sensitivity: 'base' });
    if (firstCompare !== 0) return firstCompare;
    const lastCompare = String(a?.lastName || '').localeCompare(String(b?.lastName || ''), 'it', { sensitivity: 'base' });
    if (lastCompare !== 0) return lastCompare;
    return String(a?.number || '').localeCompare(String(b?.number || ''), 'it', { sensitivity: 'base', numeric: true });
  });
}
const DEFAULT_IMPORTED_COPY_TIMESTAMP = '20/04/2026, 09:03';
const POLL_RESET_VERSION = 'poll-rebuild-v1';
const POLL_SECTION_DISABLED = false;
const NOTICE_HOME_LIFETIME_MS = 24 * 60 * 60 * 1000;

const EMAIL_RECOVERY_CONFIG = {
  enabled: false,
  publicKey: '',
  serviceId: '',
  templateId: '',
  ...(window.EMAIL_RECOVERY_CONFIG || {}),
};

const LOCAL_FIXTURES_FALLBACK_RAW = "Andata\n\nGiornata 1\nAMICI C5 - TOHO FC\nMarcatori: Amici c5: Dzemovski B, Scapin\nGiorno 21/10/2025 alle 20.30\t2 - 10\nATLETICO MICATANTO - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 22/10/2025 alle 21\t5 - 1\nFC CRISTO - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x3 Dakir\nGiorno 23/10/2025 alle 20.30\t4 - 4\nATLETICO BOVOLONE C5 - SAMMY BOYS\nMarcatori: Sammy Boys: Viola x2, Melotto, De Paolini\nGiorno 23/10/2025 alle 21.15\t4 - 4\nARAGON PLAZA - BEI_RUT C5\nMarcatori:\nGiorno 24/10/2025 alle 21\t0 - 4\nI MALAVOGLIA - HARMONY QUADERNI\nMarcatori:\nGiorno 25/10/2025 alle 15\t2 - 7\nGiornata 2\nSAMMY BOYS - TOHO FC\nMarcatori:\nGiorno 28/10/2025 alle 21\t0 - 3\nPAP\u00c0 INNOCENTI FUTSAL - ARAGON PLAZA\nMarcatori: 5 Faccini 3 Gangemi 2 Bruschetta 1 Venica\nGiorno 28/10/2025 alle 21\t11 - 3\nATLETICO MICATANTO - I MALAVOGLIA\nMarcatori:\nGiorno 29/10/2025 alle 21\t17 - 0\nHARMONY QUADERNI - FC CRISTO\nMarcatori:\nGiorno 30/10/2025 alle 21.30\t7 - 8\nNOI MEN\u00c0 - ATLETICO BOVOLONE C5\nMarcatori: Noi Men\u00e0: Sabri x5, Dakir, Lotfi, De Grandis\nGiorno 31/10/2025 alle 21\t8 - 5\nBEI_RUT C5 - AMICI C5\nMarcatori: Amici c5: Gjergji 2, Camasta 2\nGiorno 01/11/2025 alle 16\t11 - 4\nGiornata 3\nATLETICO BOVOLONE C5 - HARMONY QUADERNI\nMarcatori:\nGiorno 03/11/2025 alle 21.15\t13 - 2\nAMICI C5 - SAMMY BOYS\nMarcatori: Sammy Boys: Marcolungo x 4, Tabarelli, Melotto, Marafiotti - Amici c5: Gjergji 4, Dzemovski B, autogol\nGiorno 04/11/2025 alle 20.30\t6 - 7\nTOHO FC - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x3, Louahi\nGiorno 05/11/2025 alle 21\t3 - 4\nFC CRISTO - ATLETICO MICATANTO\nMarcatori:\nGiorno 06/11/2025 alle 20.30\t0 - 2\nI MALAVOGLIA - ARAGON PLAZA\nMarcatori:\nGiorno 08/11/2025 alle 15\t0 - 5\nBEI_RUT C5 - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 08/11/2025 alle 16\t8 - 2\nGiornata 4\nPAP\u00c0 INNOCENTI FUTSAL - AMICI C5\nMarcatori: Amici c5: Camasta 3, Gjergji 2 , Dzemovski B 2, Chimetto\nGiorno 11/11/2025 alle 21\t1 - 8\nATLETICO MICATANTO - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 12/11/2025 alle 21\t11 - 5\nHARMONY QUADERNI - TOHO FC\nMarcatori:\nGiorno 13/11/2025 alle 21.30\t2 - 4\nARAGON PLAZA - FC CRISTO\nMarcatori:\nGiorno 14/11/2025 alle 21\t4 - 4\nNOI MEN\u00c0 - SAMMY BOYS\nMarcatori: a tavolino\nGiorno 14/11/2025 alle 21\t6 - 0\nI MALAVOGLIA - BEI_RUT C5\nMarcatori:\nGiorno 15/11/2025 alle 15\t0 - 15\nGiornata 5\nATLETICO BOVOLONE C5 - ARAGON PLAZA\nMarcatori:\nGiorno 17/11/2025 alle 21.15\t4 - 3\nAMICI C5 - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x5, Dakir x2, Formigaro x2, Lotfi M, Srirti. Amici c5: Gjergji 2, Scapin\nGiorno 18/11/2025 alle 20.30\t3 - 11\nSAMMY BOYS - HARMONY QUADERNI\nMarcatori: Sammy Boys: Melotto\nGiorno 18/11/2025 alle 21\t1 - 3\nTOHO FC - ATLETICO MICATANTO\nMarcatori:\nGiorno 19/11/2025 alle 21\t3 - 4\nFC CRISTO - BEI_RUT C5\nMarcatori:\nGiorno 20/11/2025 alle 20.30\t7 - 2\nI MALAVOGLIA - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 22/11/2025 alle 15\t4 - 4\nGiornata 6\nPAP\u00c0 INNOCENTI FUTSAL - FC CRISTO\nMarcatori:\nGiorno 25/11/2025 alle 21\t5 - 6\nATLETICO MICATANTO - SAMMY BOYS\nMarcatori: Sammy Boys: Artegiani, Piccinini\nGiorno 26/11/2025 alle 21\t4 - 2\nHARMONY QUADERNI - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x5, Sordo x2, El Orch\nGiorno 27/11/2025 alle 21.30\t2 - 8\nARAGON PLAZA - TOHO FC\nMarcatori:\nGiorno 28/11/2025 alle 21\t0 - 1\nI MALAVOGLIA - AMICI C5\nMarcatori: Amici c5: Camasta, Scapin 2, Bonfante 2, Milani 2, Gjergji\nGiorno 29/11/2025 alle 15\t4 - 8\nBEI_RUT C5 - ATLETICO BOVOLONE C5\nMarcatori: A TAVOLINO\nGiorno 07/02/2026 alle 16\t6 - 0\nGiornata 7\nATLETICO BOVOLONE C5 - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 01/12/2025 alle 21.15\t5 - 4\nAMICI C5 - HARMONY QUADERNI\nMarcatori: Amici c5: Camasta 2, Gjergji, Rinaldi, Milani, autogol\nGiorno 02/12/2025 alle 20.30\t6 - 6\nSAMMY BOYS - ARAGON PLAZA\nMarcatori: Sammy Boys: De Paolini, Piccinini x3, Maestrelli, Melotto, aut\nGiorno 02/12/2025 alle 21\t7 - 1\nTOHO FC - BEI_RUT C5\nMarcatori:\nGiorno 03/12/2025 alle 21\t4 - 3\nFC CRISTO - I MALAVOGLIA\nMarcatori:\nGiorno 04/12/2025 alle 20.30\t9 - 2\nNOI MEN\u00c0 - ATLETICO MICATANTO\nMarcatori: Noi Men\u00e0: Sabri, Srirti, Louahi\nGiorno 05/12/2025 alle 21\t3 - 2\nGiornata 8\nPAP\u00c0 INNOCENTI FUTSAL - TOHO FC\nMarcatori:\nGiorno 09/12/2025 alle 21\t4 - 12\nATLETICO MICATANTO - HARMONY QUADERNI\nMarcatori:\nGiorno 10/12/2025 alle 21\t7 - 3\nFC CRISTO - AMICI C5\nMarcatori: Amici c5: Chimetto\nGiorno 11/12/2025 alle 20.30\t7 - 1\nARAGON PLAZA - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Valentini x4, Sordo M. x3, El Orch x2, Srirti, Dakir\nGiorno 12/12/2025 alle 21\t2 - 11\nI MALAVOGLIA - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 13/12/2025 alle 15\t2 - 9\nBEI_RUT C5 - SAMMY BOYS\nMarcatori:\nGiorno 13/12/2025 alle 16\t5 - 0\nGiornata 9\nATLETICO BOVOLONE C5 - FC CRISTO\nMarcatori:\nGiorno 15/12/2025 alle 21.15\t7 - 8\nAMICI C5 - ATLETICO MICATANTO\nMarcatori: Amici c5: Camasta 2, Dzemovski B\nGiorno 16/12/2025 alle 20.30\t3 - 15\nSAMMY BOYS - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori: Sammy Boys: Piccinini, Marcolungo, Boscaro\nGiorno 16/12/2025 alle 21\t3 - 0\nTOHO FC - I MALAVOGLIA\nMarcatori:\nGiorno 17/12/2025 alle 21\t13 - 1\nHARMONY QUADERNI - ARAGON PLAZA\nMarcatori:\nGiorno 18/12/2025 alle 21.30\t5 - 3\nNOI MEN\u00c0 - BEI_RUT C5\nMarcatori: Noi Men\u00e0: Louahi x2, Srirti x2, Birsan\nGiorno 23/12/2025 alle 21\t5 - 4\nGiornata 10\nATLETICO BOVOLONE C5 - AMICI C5\nMarcatori: Amici c5: Chimetto 2\nGiorno 12/01/2026 alle 21.15\t12 - 2\nPAP\u00c0 INNOCENTI FUTSAL - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Valentini x2, Dakir, El Orch\nGiorno 13/01/2026 alle 21\t3 - 4\nFC CRISTO - TOHO FC\nMarcatori:\nGiorno 15/01/2026 alle 20.30\t3 - 2\nARAGON PLAZA - ATLETICO MICATANTO\nMarcatori:\nGiorno 16/01/2026 alle 21\t1 - 2\nI MALAVOGLIA - SAMMY BOYS\nMarcatori: Sammy Boys: Bortignon x3, Pozzerle, Pelosi\nGiorno 17/01/2026 alle 15\t4 - 5\nBEI_RUT C5 - HARMONY QUADERNI\nMarcatori:\nGiorno 17/01/2026 alle 16\t10 - 3\nGiornata 11\nAMICI C5 - ARAGON PLAZA\nMarcatori: Amici c%: Gjergji 3, Camasta, Bonfante, Dzemovski B\nGiorno 20/01/2026 alle 20.30\t6 - 6\nSAMMY BOYS - FC CRISTO\nMarcatori: Sammy: Pelosi\nGiorno 20/01/2026 alle 21\t1 - 4\nTOHO FC - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 21/01/2026 alle 21\t4 - 10\nATLETICO MICATANTO - BEI_RUT C5\nMarcatori:\nGiorno 21/01/2026 alle 21\t4 - 8\nHARMONY QUADERNI - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 22/01/2026 alle 21.30\t2 - 1\nNOI MEN\u00c0 - I MALAVOGLIA\nMarcatori: Noi Men\u00e0: Valentini x4, Sabri x2\nGiorno 23/01/2026 alle 21.30\t6 - 5\n \nRitorno\n\nGiornata 1\nSAMMY BOYS - ATLETICO BOVOLONE C5\nMarcatori: Sammy Boys: Piccinini x2, Marcolungo x2\nGiorno 27/01/2026 alle 21\t4 - 3\nPAP\u00c0 INNOCENTI FUTSAL - ATLETICO MICATANTO\nMarcatori:\nGiorno 27/01/2026 alle 21\t3 - 9\nTOHO FC - AMICI C5\nMarcatori: Amici c5: Gjergji 3\nGiorno 28/01/2026 alle 21\t16 - 3\nHARMONY QUADERNI - I MALAVOGLIA\nMarcatori:\nGiorno 29/01/2026 alle 21.30\t6 - 4\nNOI MEN\u00c0 - FC CRISTO\nMarcatori: Noi Men\u00e0: Formigaro x3, Louahi x2, Valentini, Dakir\nGiorno 30/01/2026 alle 21.30\t7 - 3\nBEI_RUT C5 - ARAGON PLAZA\nMarcatori: A TAVOLINO\nGiorno 14/03/2026 alle 16\t6 - 0\nGiornata 2\nAMICI C5 - BEI_RUT C5\nMarcatori: Amici c5: Camasta 2, Dzemovski B 2, Dzemovski M 2, Bonfante\nGiorno 03/02/2026 alle 20.30\t7 - 6\nTOHO FC - SAMMY BOYS\nMarcatori:\nGiorno 04/02/2026 alle 21\t5 - 1\nFC CRISTO - HARMONY QUADERNI\nMarcatori:\nGiorno 05/02/2026 alle 20.30\t8 - 0\nATLETICO BOVOLONE C5 - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x3, Louahi\nGiorno 05/02/2026 alle 21.15\t6 - 4\nARAGON PLAZA - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 06/02/2026 alle 21\t1 - 3\nI MALAVOGLIA - ATLETICO MICATANTO\nMarcatori:\nGiorno 07/02/2026 alle 15\t1 - 7\nGiornata 3\nSAMMY BOYS - AMICI C5\nMarcatori: Amici c5: Gjergji\nGiorno 10/02/2026 alle 21\t1 - 1\nPAP\u00c0 INNOCENTI FUTSAL - BEI_RUT C5\nMarcatori:\nGiorno 10/02/2026 alle 21\t9 - 10\nATLETICO MICATANTO - FC CRISTO\nMarcatori:\nGiorno 11/02/2026 alle 21\t4 - 2\nHARMONY QUADERNI - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 12/02/2026 alle 21.30\t5 - 7\nARAGON PLAZA - I MALAVOGLIA\nMarcatori:\nGiorno 13/02/2026 alle 21\t10 - 3\nNOI MEN\u00c0 - TOHO FC\nMarcatori: Noi Men\u00e0: Sabri, Walid\nGiorno 13/02/2026 alle 21.30\t2 - 1\nGiornata 4\nAMICI C5 - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori: Amici c5: Camasta 2, Gjergji, Bonfante, Chimetto, Dzemovki B\nGiorno 17/02/2026 alle 20.30\t6 - 7\nSAMMY BOYS - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x2, Sordo D. x2, Lotfi\nGiorno 17/02/2026 alle 21\t2 - 5\nTOHO FC - HARMONY QUADERNI\nMarcatori:\nGiorno 18/02/2026 alle 21\t10 - 2\nFC CRISTO - ARAGON PLAZA\nMarcatori:\nGiorno 19/02/2026 alle 20.30\t5 - 1\nATLETICO BOVOLONE C5 - ATLETICO MICATANTO\nMarcatori:\nGiorno 23/02/2026 alle 21.15\t5 - 2\nBEI_RUT C5 - I MALAVOGLIA\nMarcatori:\nGiorno 09/03/2026 alle 21.30\t4 - 2\nGiornata 5\nPAP\u00c0 INNOCENTI FUTSAL - I MALAVOGLIA\nMarcatori:\nGiorno 24/02/2026 alle 21\t4 - 10\nATLETICO MICATANTO - TOHO FC\nMarcatori:\nGiorno 25/02/2026 alle 21\t4 - 3\nHARMONY QUADERNI - SAMMY BOYS\nMarcatori:\nGiorno 26/02/2026 alle 21.30\t2 - 2\nARAGON PLAZA - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 27/02/2026 alle 21\t5 - 2\nNOI MEN\u00c0 - AMICI C5\nMarcatori: a tavolino\nGiorno 27/02/2026 alle 21.30\t6 - 0\nBEI_RUT C5 - FC CRISTO\nMarcatori:\nGiorno 21/03/2026 alle 16\t3 - 1\nGiornata 6\nATLETICO BOVOLONE C5 - BEI_RUT C5\nMarcatori:\nGiorno 02/03/2026 alle 21.15\t2 - 7\nAMICI C5 - I MALAVOGLIA\nMarcatori: Amici c5:Camasta 3, Gjergji, Dzemovski M, Dzemovski B\nGiorno 03/03/2026 alle 20.30\t6 - 9\nSAMMY BOYS - ATLETICO MICATANTO\nMarcatori:\nGiorno 03/03/2026 alle 21\t2 - 0\nTOHO FC - ARAGON PLAZA\nMarcatori:\nGiorno 04/03/2026 alle 21\t6 - 2\nFC CRISTO - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 05/03/2026 alle 20.30\t8 - 1\nNOI MEN\u00c0 - HARMONY QUADERNI\nMarcatori: Noi Men\u00e0: Formigaro x3, Sabri\nGiorno 06/03/2026 alle 21.30\t4 - 4\nGiornata 7\nBEI_RUT C5 - TOHO FC\nMarcatori:\nGiorno 07/03/2026 alle 16\t4 - 1\nPAP\u00c0 INNOCENTI FUTSAL - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 10/03/2026 alle 21\t7 - 4\nHARMONY QUADERNI - AMICI C5\nMarcatori: Amici c5: Camasta 2, Bozic 2, Scapin, Bonfante\nGiorno 12/03/2026 alle 21.30\t6 - 6\nARAGON PLAZA - SAMMY BOYS\nMarcatori: Melotto x 4, De Paolini, aut.\nGiorno 13/03/2026 alle 21\t1 - 6\nI MALAVOGLIA - FC CRISTO\nMarcatori:\nGiorno 14/03/2026 alle 15,00\t6 - 6\nATLETICO MICATANTO - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Lotfi, Lazreq, Sabri\nGiorno 23/03/2026 alle 21\t7 - 3\nGiornata 8\nAMICI C5 - FC CRISTO\nMarcatori: Amici c5: Camasta 2, Gjergji, Chimetto, Scapin, Bianchi\nGiorno 17/03/2026 alle 20.30\t6 - 12\nSAMMY BOYS - BEI_RUT C5\nMarcatori:\nGiorno 17/03/2026 alle 21\t0 - 4\nTOHO FC - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori:\nGiorno 18/03/2026 alle 21\t5 - 5\nHARMONY QUADERNI - ATLETICO MICATANTO\nMarcatori:\nGiorno 19/03/2026 alle 21.30\t1 - 8\nATLETICO BOVOLONE C5 - I MALAVOGLIA\nMarcatori:\nGiorno 19/03/2026 alle 21.30\t9 - 5\nNOI MEN\u00c0 - ARAGON PLAZA\nMarcatori: A TAVOLINO\nGiorno 20/03/2026 alle 21.30\t6 - 0\nGiornata 9\nBEI_RUT C5 - NOI MEN\u00c0\nMarcatori: Noi Men\u00e0: Sabri x3\nGiorno 21/02/2026 alle 16\t8 - 3\nPAP\u00c0 INNOCENTI FUTSAL - SAMMY BOYS\nMarcatori:\nGiorno 24/03/2026 alle 21\t2 - 4\nATLETICO MICATANTO - AMICI C5\nMarcatori:\nGiorno 25/03/2026 alle 21\t13 - 1\nFC CRISTO - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 26/03/2026 alle 20.30\t10 - 3\nARAGON PLAZA - HARMONY QUADERNI\nMarcatori:\nGiorno 27/03/2026 alle 21\t0 - 7\nI MALAVOGLIA - TOHO FC\nMarcatori:\nGiorno 28/03/2026 alle 15.30 Alpo\t7 - 4\nGiornata 10\nAMICI C5 - ATLETICO BOVOLONE C5\nMarcatori:\nGiorno 07/04/2026 alle 20.30\t9 - 7\nSAMMY BOYS - I MALAVOGLIA\nMarcatori:\nGiorno 07/04/2026 alle 21\t1 - 4\nATLETICO MICATANTO - ARAGON PLAZA\nMarcatori: A TAVOLINO\nGiorno 08/04/2026 alle 21\t6 - 0\nTOHO FC - FC CRISTO\nMarcatori:\nGiorno 08/04/2026 alle 21\t1 - 2\nHARMONY QUADERNI - BEI_RUT C5\nMarcatori:\nGiorno 09/04/2026 alle 21.30\t4 - 7\nNOI MEN\u00c0 - PAP\u00c0 INNOCENTI FUTSAL\nMarcatori: Noi Men\u00e0: Pislaru x2, De Grandis x2, Lotfi, Lazreq x2, Srirti, Formigaro x3\nGiorno 10/04/2026 alle 21.30\t11 - 1\nGiornata 11\nATLETICO BOVOLONE C5 - TOHO FC\nMarcatori:\nGiorno 13/04/2026 alle 21.15\t1 - 3\nPAP\u00c0 INNOCENTI FUTSAL - HARMONY QUADERNI\nMarcatori:\nGiorno 14/04/2026 alle 21\t2 - 8\nFC CRISTO - SAMMY BOYS\nMarcatori:\nGiorno 16/04/2026 alle 20.30\t8 - 4\nARAGON PLAZA - AMICI C5\nMarcatori:\nGiorno 17/04/2026 alle 21\t3 - 4\nI MALAVOGLIA - NOI MEN\u00c0\nMarcatori:\nGiorno 18/04/2026 alle 15\t6 - 3\nBEI_RUT C5 - ATLETICO MICATANTO\nMarcatori:\nGiorno 18/04/2026 alle 16\t6 - 8";
const LOCAL_MALAVOGLIA_SCORERS_FALLBACK_RAW = "A-1\tDanny\t\tBonizzato\t11'\t(1T)\n\tMarian\t\tFratila\t\t10'\t(2T)\nA-2\n\nA-3\n\nA-4\n\nA-5\tDaniele\t\tZanotto\t\t-\t-\n\tMattia\t\tBoscaro\t\t-\t-\n\tRudy\t\tScarazzai\t-\t-\n\tMattia\t\tBoscaro\t\t-\t-\n\tCristian\tFurfaro\t\t\t(G)\n\nA-6\tMattia\t\tBoscaro\t\t8'\t(1T)\n\tMattia\t\tBoscaro\t\t16'\t(1T)\n\tMattia\t\tBoscaro\t\t22'\t(1T)\n\tCristian\tFurfaro\t\t24'\t(2T)\n\nA-7\tDanny\t\tBonizzato\t7'\t(2T)\n\tCristian\tFurfaro\t\t24'\t(2T)\n\nA-8\tRudy\t\tScarazzai\t19'\t(1T)\n\tRudy\t\tScarazzai\t20'\t(2T)\n\nA-9\tDanny\t\tBonizzato\t18'\t(1T)\n\nA-10\tMattia\t\tBoscaro\t\t2'\t(1T)\n\tLeonardo\tRemelli\t\t9'\t(1T)\n\tLeonardo\tRemelli\t\t14'\t(1T)\n\tLeonardo\tRemelli\t\t19'\t(2T)\n\nA-11\tMattia\t\tBoscaro\t\t13'\t(1T)\n\tYoussouf\tSidib\u00e9\t\t15'\t(1T)\n\tLeonardo\tRemelli\t\t6'\t(2T)\n\tDanny\t\tBonizzato\t17'\t(2T)\n\tMattia\t\tBoscaro\t\t23'\t(2T)\n\nR-1\tLeonardo\tRemelli\t\t20'\t(1T)\n\tYoussouf\tSidib\u00e9\t\t11'\t(2T)\n\tMattia\t\tBoscaro\t\t19'\t(2T)\n\tMattia\t\tBoscaro\t\t21'\t(2T)\n\tMattia\t\tBoscaro\t\t\t(G)\n\nR-2\tRudy\t\tScarazzai\t1'\t(2T)\n\nR-3\tYoussouf\tSidib\u00e9\t\t18'\t(1T)\n\tLeonardo\tRemelli\t\t19'\t(1T)\n\tDanny\t\tBonizzato\t16'\t(2T)\n\nR-4\tLeonardo\tRemelli\t\t21'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t23'\t(2T)\n\t\nR-5\tLeonardo\tRemelli\t\t2'\t(1T)\n\tLeonardo\tRemelli\t\t16'\t(1T)\n\tDanny\t\tBonizzato\t8'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t11'\t(2T)\n\tDanny\t\tBonizzato\t12'\t(2T)\n\tDaniele\t\tZanotto\t\t13'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t16'\t(2T)\n\tLeonardo\tRemelli\t\t17'\t(2T)\n\tLeonardo\tRemelli\t\t19'\t(2T)\n\tMarian\t\tFratila\t\t22'\t(2T)\n\tRudy\t\tScarazzai\t\t(G)\n\tDaniele\t\tZanotto\t\t\t(G)\n\tLeonardo\tRemelli\t\t\t(G)\n\nR-6\tYoussouf\tSidib\u00e9\t\t13'\t(1T)\n\tLeonardo\tRemelli\t\t1'\t(2T)\n\tRudy\t\tScarazzai\t4'\t(2T)\n\tDanny\t\tBonizzato\t7'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t8'\t(2T)\n\tDanny\t\tBonizzato\t10'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t12'\t(2T)\n\tLeonardo\tRemelli\t\t22'\t(2T)\n\tLeonardo\tRemelli\t\t24'\t(2T)\n\nR-7\tDaniele\t\tZanotto\t\t9'\t(1T)\n\tYoussouf\tSidib\u00e9\t\t25'\t(1T)\n\tLeonardo\tRemelli\t\t6'\t(2T)\n\tLeonardo\tRemelli\t\t11'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t15'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t21'\t(2T)\n\tDaniele\t\tZanotto\t\t\t(G)\n\nR-8\tRudy\t\tScarazzai\t2'\t(1T)\n\tRudy\t\tScarazzai\t11'\t(1T)\n\tMarian\t\tFratila\t\t12'\t(1T)\n\tDaniele\t\tZanotto\t\t17'\t(1T)\n\tYoussouf\tSidib\u00e9\t\t24'\t(2T)\n\nR-9\tRudy\t\tScarazzai\t22'\t(1T)\n\tLeonardo\tRemelli\t\t5'\t(2T)\n\tLeonardo\tRemelli\t\t7'\t(2T)\n\tDanny\t\tBonizzato\t11'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t12'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t16'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t19'\t(2T)\n\tYari\t\tNegrente\t\t(G)\n\nR-10\tLeonardo\tRemelli\t\t3'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t12'\t(2T)\n\tLeonardo\tRemelli\t\t23'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t24'\t(2T)\n\tAngelo\t\tArconzo\t\t\t(G)\n\tKevin\t\tMutinari\t\t(G)\n\nR-11\tLeonardo\tRemelli\t\t12'\t(1T)\n\tLeonardo\tRemelli\t\t4'\t(2T)\n\tYoussouf\tSidib\u00e9\t\t6'\t(2T)\n\tLeonardo\tRemelli\t\t9'\t(2T)\n\tLeonardo\tRemelli\t\t17'\t(2T)\n\tRudy\t\tScarazzai\t20'\t(2T)";

const teams = [
  { name: 'Amici C5', logo: 'assets/amici-c5.png' },
  { name: 'Aragon Plaza', logo: 'assets/aragon-plaza.png' },
  { name: 'Atletico Bovolone C5', logo: 'assets/atletico-bovolone.png' },
  { name: 'Atletico Micatanto', logo: 'assets/atletico-micatanto.png' },
  { name: 'Bei_Rut C5', logo: 'assets/bei-rut.png' },
  { name: 'FC Cristo', logo: 'assets/fc-cristo.png' },
  { name: 'Harmony Quaderni', logo: 'assets/harmony-quaderni.png' },
  { name: 'I Malavoglia', logo: 'assets/i-malavoglia.png' },
  { name: 'NOI Menà', logo: 'assets/noi-mena.png' },
  { name: 'Papà Innocenti Futsal', logo: 'assets/papa-innocenti.png' },
  { name: 'Sammy Boys', logo: 'assets/sammy-boys.png' },
  { name: 'Toho FC', logo: 'assets/toho-fc.png' },
];

const teamAliases = {
  'AMICI C5': 'Amici C5',
  'ARAGON PLAZA': 'Aragon Plaza',
  'ATLETICO BOVOLONE C5': 'Atletico Bovolone C5',
  'ATLETICO BOVOLONE': 'Atletico Bovolone C5',
  'ATLETICO MICATANTO': 'Atletico Micatanto',
  'BEI_RUT C5': 'Bei_Rut C5',
  'FC CRISTO': 'FC Cristo',
  'HARMONY QUADERNI': 'Harmony Quaderni',
  'I MALAVOGLIA': 'I Malavoglia',
  'NOI MENÀ': 'NOI Menà',
  'NOI MENA': 'NOI Menà',
  'PAPÀ INNOCENTI FUTSAL': 'Papà Innocenti Futsal',
  'PAPA INNOCENTI FUTSAL': 'Papà Innocenti Futsal',
  'PAPÀ INNOCENTI': 'Papà Innocenti Futsal',
  'SAMMY BOYS': 'Sammy Boys',
  'TOHO FC': 'Toho FC',
};

const venues = {
  'Amici C5': 'Polisportiva San Giorgio in Salici, Via Segradi 19, San Giorgio in Salici (VR)',
  'Papà Innocenti Futsal': 'Polisportiva San Giorgio in Salici, Via Segradi 19, San Giorgio in Salici (VR)',
  'I Malavoglia': 'Tensostruttura Giuseppe “Pino” Benato, Via Monte Grappa, Povegliano Veronese (VR)',
  'Bei_Rut C5': 'Tensostruttura Giuseppe “Pino” Benato, Via Monte Grappa, Povegliano Veronese (VR)',
  'Atletico Micatanto': 'Tennis Alpo, Via Federico di Saluzzo 25, Alpo di Villafranca (VR)',
  'FC Cristo': 'Centro Parrocchiale Cristo Risorto, Via Cristoforo Colombo 3, Bussolengo (VR)',
  'Toho FC': 'NOI Isola / Centro NOI, Via Rimembranza 2, Isola della Scala (VR)',
  'NOI Menà': 'Piazza P. Orfeo Mantovani 152, Menà di Castagnaro (VR)',
  'Harmony Quaderni': 'Polisportiva Quaderni, Via Afra Decò 20, Quaderni di Villafranca (VR)',
  'Aragon Plaza': 'Via Papa Giovanni XXIII, Nogara (VR)',
  'Atletico Bovolone C5': 'Palazzetto Le Muse, Piazzale Aldo Moro 4, Bovolone (VR)',
  'Sammy Boys': 'Palazzetto dello Sport, Via Mediana 2, Mozzecane (VR)',
};

const matchVenueOptions = Array.from(new Set(Object.values(venues).filter(Boolean)))
  .sort((a, b) => String(a).localeCompare(String(b), 'it', { sensitivity: 'base' }));

const venueMapTargets = {
  'Amici C5': {
    label: 'Polisportiva San Giorgio in Salici',
    query: 'Via Segradi 19, San Giorgio in Salici, Sona, Verona, Italia',
  },
  'Papà Innocenti Futsal': {
    label: 'Polisportiva San Giorgio in Salici',
    query: 'Via Segradi 19, San Giorgio in Salici, Sona, Verona, Italia',
  },
  'I Malavoglia': {
    label: 'Tensostruttura Giuseppe Pino Benato',
    query: 'Via Monte Grappa, Povegliano Veronese, Verona, Italia',
  },
  'Bei_Rut C5': {
    label: 'Tensostruttura Giuseppe Pino Benato',
    query: 'Via Monte Grappa, Povegliano Veronese, Verona, Italia',
  },
  'Atletico Micatanto': {
    label: 'Tennis Alpo',
    query: 'Via Federico di Saluzzo 25, Alpo di Villafranca, Verona, Italia',
  },
  'FC Cristo': {
    label: 'Centro Parrocchiale Cristo Risorto',
    query: 'Via Cristoforo Colombo 3, Bussolengo, Verona, Italia',
  },
  'Toho FC': {
    label: 'Centro NOI Isola della Scala',
    query: 'Via Rimembranza 2, Isola della Scala, Verona, Italia',
  },
  'NOI Menà': {
    label: 'Menà di Castagnaro',
    query: 'Piazza Padre Orfeo Mantovani 152, Menà di Castagnaro, Verona, Italia',
  },
  'Harmony Quaderni': {
    label: 'Polisportiva Quaderni',
    query: 'Via Afra Decò 20, Quaderni di Villafranca di Verona, Verona, Italia',
  },
  'Aragon Plaza': {
    label: 'Aragon Plaza',
    query: 'Via Papa Giovanni XXIII, Nogara, Verona, Italia',
  },
  'Atletico Bovolone C5': {
    label: 'Palazzetto Le Muse',
    query: 'Piazzale Aldo Moro 4, Bovolone, Verona, Italia',
  },
  'Sammy Boys': {
    label: 'Palazzetto dello Sport Mozzecane',
    query: 'Via Mediana 2, Mozzecane, Verona, Italia',
  },
};

const teamTowns = {
  'Amici C5': 'San Giorgio in Salici',
  'Papà Innocenti Futsal': 'San Giorgio in Salici',
  'I Malavoglia': 'Povegliano Veronese',
  'Bei_Rut C5': 'Povegliano Veronese',
  'Atletico Micatanto': 'Alpo di Villafranca',
  'FC Cristo': 'Bussolengo',
  'Toho FC': 'Isola della Scala',
  'NOI Menà': 'Menà di Castagnaro',
  'Harmony Quaderni': 'Quaderni di Villafranca',
  'Aragon Plaza': 'Nogara',
  'Atletico Bovolone C5': 'Bovolone',
  'Sammy Boys': 'Mozzecane',
};

const weatherCoords = {
  'Povegliano Veronese': { lat: 45.350, lon: 10.881 },
  'San Giorgio in Salici': { lat: 45.393, lon: 10.805 },
  'Alpo di Villafranca': { lat: 45.352, lon: 10.918 },
  'Bussolengo': { lat: 45.474, lon: 10.848 },
  'Isola della Scala': { lat: 45.271, lon: 11.009 },
  'Menà di Castagnaro': { lat: 45.141, lon: 11.295 },
  'Quaderni di Villafranca': { lat: 45.353, lon: 10.828 },
  'Nogara': { lat: 45.181, lon: 11.064 },
  'Bovolone': { lat: 45.260, lon: 11.118 },
  'Mozzecane': { lat: 45.307, lon: 10.820 },
};

const baseCardPoints = {
  'Aragon Plaza': 0,
  'I Malavoglia': 0,
  'Amici C5': 0,
  'FC Cristo': 0,
  'Bei_Rut C5': 0,
  'Atletico Micatanto': 0,
  'NOI Menà': 0,
  'Harmony Quaderni': 0,
  'Sammy Boys': 0,
  'Toho FC': 0,
  'Papà Innocenti Futsal': 0,
  'Atletico Bovolone C5': 0,
};

const defaultTeamCardPointsBySeason = {
  '2025/2026': {
    'Aragon Plaza': 6,
    'FC Cristo': 10,
    'Atletico Micatanto': 11,
    'Bei_Rut C5': 11,
    'Amici C5': 18,
    'NOI Menà': 20,
    'Toho FC': 22,
    'Atletico Bovolone C5': 23,
    'Sammy Boys': 25,
    'Harmony Quaderni': 27,
    'Papà Innocenti Futsal': 30,
  },
};

const defaultTeamPenaltiesBySeason = {
  '2025/2026': {
    'Aragon Plaza': 3,
    'Amici C5': 1,
    'Atletico Bovolone C5': 1,
    'Sammy Boys': 1,
  },
};

const TEAM_DISCIPLINE_DEFAULTS_VERSION = 'discipline-2025-2026-v3';

const MATCH_VENUE_OVERRIDES = {
  'ritorno-2-i-malavoglia-atletico-micatanto': 'Via Federico di Saluzzo, 25 - Alpo di Villafranca di Verona',
  'ritorno-9-i-malavoglia-toho-fc': 'Palestra Scuole Medie, Povegliano Veronese (VR)',
  'ritorno-11-i-malavoglia-noi-mena': 'Palestra Scuole Medie, Povegliano Veronese (VR)',
};

const MATCH_MAP_TARGET_OVERRIDES = {
  'ritorno-2-i-malavoglia-atletico-micatanto': {
    label: 'Alpo di Villafranca',
    query: 'Via Federico di Saluzzo, 25, Alpo di Villafranca di Verona, Verona, Italia',
  },
  'ritorno-9-i-malavoglia-toho-fc': {
    label: 'Palestra Scuole Medie',
    query: 'Palestra Scuole Medie, Povegliano Veronese, Verona, Italia',
  },
  'ritorno-11-i-malavoglia-noi-mena': {
    label: 'Palestra Scuole Medie',
    query: 'Palestra Scuole Medie, Povegliano Veronese, Verona, Italia',
  },
};

const CAMPIONATO_LOGO = 'assets/noi-sport-campionato.png';
const DEFAULT_COMPETITION_DISPLAY_NAMES = {
  '2025/2026': 'NOI Sport Verona 2025/2026',
};
const COMPETITION_FALLBACK_EMOJI = '🏆';


const standingsSortOptions = [
  { key: 'points', label: 'Punti (PT)' },
  { key: 'team', label: 'Ordine alfabetico' },
  { key: 'won', label: 'Vittorie (V)' },
  { key: 'draw', label: 'Pareggi (N)' },
  { key: 'lost', label: 'Sconfitte (P)' },
  { key: 'gf', label: 'Goal Fatti (GF)' },
  { key: 'gs', label: 'Goal Subiti (GS)' },
  { key: 'diff', label: 'Differenza Reti (DR)' },
  { key: 'cards', label: 'Punti Cartellini (PC)' },
];

const scorersSortOptions = [
  { key: 'goals', label: 'Goal' },
  { key: 'cards', label: 'Cartellini' },
  { key: 'alphabetical', label: 'Ordine alfabetico' },
];

const cardPointsMap = {
  'Cartellino Giallo': 1,
  'Doppia Ammonizione': 3,
  'Cartellino Rosso Diretto': 4,
  'Cartellino Giallo + Cartellino Rosso Diretto': 5,
};

const seededMatchCards = {};

const defaultPlayers = [
  ['Leonardo', 'Remelli', '7', '3385632672'],
  ['Mattia', 'Boscaro', '1/26', '3483650699'],
  ['Danny', 'Bonizzato', '68', '3495060051'],
  ['Youssouf', 'Sidibé', '9', '3509534085'],
  ['Rudy', 'Scarazzai', '6', '3470363945'],
  ['Marian', 'Fratila', '10', '3892358201'],
  ['Daniele', 'Zanotto', '69', '3427014632'],
  ['Cristian', 'Furfaro', '', ''],
  ['Andrea', 'Garagna', '8', '3408825079'],
  ['Angelo', 'Arconzo', '11', '3281478295'],
  ['Kevin', 'Mutinari', '21', '3924992451'],
  ['Riccardo', 'Arcamone', '49', '3714347166'],
  ['Yari', 'Negrente', '70', '3515711015'],
  ['Mouhamed', 'Mar', '66', '3791388290'],
  ['Alessandro', 'Arconzo', '96', '3519686434'],
].map((row, index) => ({
  id: `p-${index + 1}`,
  firstName: row[0],
  lastName: row[1],
  number: row[2],
  phone: row[3],
  photo: '',
  status: 'active',
}));

const defaultStaff = [
  { role: 'Presidente', firstName: 'Alessandro', lastName: 'Arconzo', phone: '3519686434' },
  { role: 'Vice Presidente', firstName: 'Andrea', lastName: 'Bosio', phone: '3481811014' },
  { role: 'Allenatore', firstName: 'Michele', lastName: 'Di Paolo', phone: '3491865372' },
];

const defaultExternalManagers = [
  {
    id: 'mgr-andrea-bosio',
    firstName: 'Andrea',
    lastName: 'Bosio',
    password: DEFAULT_LOGIN_PASSWORD,
    mustChangePassword: false,
  },
];

const POLL_TYPE_META = {
  training: { label: 'Allenamento', icon: '🏃' },
  match: { label: 'Partita', icon: '⚽' },
  notice: { label: 'Avviso', icon: '📢' },
  other: { label: 'Altro sondaggio', icon: '📌' },
};

const specialStaffRoleConfig = [
  {
    id: 'staff-presidente',
    staffRole: 'Presidente',
    roleLabel: 'Presidente',
    permissionRole: 'manager',
  },
  {
    id: 'staff-allenatore',
    staffRole: 'Allenatore',
    roleLabel: 'Allenatore',
    permissionRole: 'player',
  },
];

const uiState = {
  standingsView: 'teams',
  competitionModalMode: 'create',
  competitionEditingKey: '',
  competitionModalTeamLogos: {},
  competitionTeamsEditingSeason: '',
  competitionTeamsModalRows: [],
  standingsTeamsEditorSeason: '',
  standingsTeamsEditorDraftLogos: {},
  expandedMatchId: null,
  editingMatchId: null,
  matchDrafts: {},
  targetMatchId: null,
  targetPollId: null,
  expandedPlayerId: null,
  revealedPlayerPasswordIds: [],
  loginFailedAttempts: 0,
  profileDetailsOpen: false,
  selectedSeason: '',
  pollDraft: null,
  pollComposerOpen: false,
  expandedStaffRole: '',
  matchesFiltersOpen: false,
  penaltiesModalOpen: false,
  penaltySelectedSeason: '',
  activePcEditorTeam: '',
  teamsStandingsExpanded: false,
  standingsSortKey: 'points',
  scorersSortKey: 'goals',
  standingsSortMenuOpen: false,
};

const authState = {
  currentUser: null,
};

let state = {
  players: [],
  staff: [],
  matchEdits: {},
  matches: [],
  sourceVersion: '',
  lastSourceSync: '',
  fixturesCopiedAt: '',
  dataVersion: '',
  customSeasons: [],
  competitionMeta: {},
  competitionTeams: {},
  competitionTeamLogos: {},
  remoteFixturesRaw: '',
  fixturesSyncError: '',
  defaultImportedDataVersion: '',
  defaultImportedScorersVersion: '',
  polls: [],
  pollResetVersion: '',
  teamPenalties: {},
  teamCardPoints: {},
  teamDisciplineDefaultsVersion: '',
  auth: null,
};

function uid(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

function createPollDraftOption(label = '', id = '') {
  return {
    id: typeof id === 'string' ? id : '',
    label: normalizePollOptionLabel(label),
  };
}

function normalizePollDraftOptions(options = [], { preserveEmpty = true } = {}) {
  const normalized = Array.isArray(options)
    ? options.map(option => {
        if (typeof option === 'string') return createPollDraftOption(option);
        return createPollDraftOption(option?.label || option?.value || '', option?.id || '');
      }).filter(option => preserveEmpty || option.label || option.id)
    : [];

  if (normalized.length >= 2) return normalized;

  const fallback = [...normalized];
  while (fallback.length < 2) {
    fallback.push(createPollDraftOption(fallback.length === 0 ? 'Si' : 'No'));
  }
  return fallback;
}

function createDefaultPollDraft() {
  return {
    editingPollId: '',
    type: 'training',
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    imageChanged: false,
    includeSurvey: false,
    options: normalizePollDraftOptions(['Si', 'No']),
  };
}

function ensurePollDraft() {
  if (!uiState.pollDraft || typeof uiState.pollDraft !== 'object') {
    uiState.pollDraft = createDefaultPollDraft();
  }
  uiState.pollDraft.editingPollId = uiState.pollDraft.editingPollId || '';
  uiState.pollDraft.title = uiState.pollDraft.title || '';
  uiState.pollDraft.image = uiState.pollDraft.image || '';
  uiState.pollDraft.imageChanged = Boolean(uiState.pollDraft.imageChanged);
  uiState.pollDraft.includeSurvey = Boolean(uiState.pollDraft.includeSurvey);
  uiState.pollDraft.options = normalizePollDraftOptions(uiState.pollDraft.options);
  return uiState.pollDraft;
}

function slugify(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getPartiteActionButtonMarkup(type = 'txt', isBusy = false) {
  if (type === 'filters') return '<span class="action-btn-emoji" aria-hidden="true">🔎</span><span class="action-btn-label">Filtri</span>';
  if (type === 'standings') return '<span class="action-btn-emoji" aria-hidden="true">🏆</span><span class="action-btn-label">Classifica</span>';
  if (isBusy) return '<span class="action-btn-label">Caricamento…</span>';
  return '<span class="action-btn-emoji" aria-hidden="true">📃</span><span class="action-btn-label">TXT</span>';
}

function getAppToastStack() {
  let stack = document.getElementById('appToastStack');
  if (stack) return stack;
  stack = document.createElement('div');
  stack.id = 'appToastStack';
  stack.className = 'app-toast-stack';
  document.body.appendChild(stack);
  return stack;
}

function showAppToast(title = '', message = '') {
  if (!document.body) return;
  const stack = getAppToastStack();
  const toast = document.createElement('div');
  toast.className = 'app-toast';
  toast.innerHTML = `<strong>${escapeHtml(title || 'Notifica')}</strong><span>${escapeHtml(message || '')}</span>`;
  stack.appendChild(toast);
  window.setTimeout(() => {
    toast.remove();
    if (!stack.childElementCount) stack.remove();
  }, 4200);
}

function showSystemNotification(title = '', body = '') {
  if (!("Notification" in window)) return;
  const icon = new URL('assets/icona.png', window.location.href).href;
  const emit = () => {
    try {
      const notification = new Notification(title || 'I Malavoglia C5', {
        body: body || '',
        icon,
        badge: icon,
        tag: `poll-${Date.now()}`,
        renotify: true,
      });
      window.setTimeout(() => notification.close(), 7000);
    } catch (error) {
      console.warn('Notifica di sistema non disponibile.', error);
    }
  };

  if (Notification.permission === 'granted') {
    emit();
    return;
  }

  if (Notification.permission !== 'default' || typeof Notification.requestPermission !== 'function') return;

  try {
    const permissionRequest = Notification.requestPermission();
    if (permissionRequest && typeof permissionRequest.then === 'function') {
      permissionRequest.then(permission => {
        if (permission === 'granted') emit();
      }).catch(error => {
        console.warn('Richiesta permesso notifiche non riuscita.', error);
      });
    }
  } catch (error) {
    console.warn('Richiesta permesso notifiche non disponibile.', error);
  }
}

function notifyPollCreated(poll) {
  if (!poll) return;
  const title = isNoticePoll(poll) ? 'Nuovo avviso pubblicato' : 'Nuovo sondaggio creato';
  const pieces = [getPollAutoTitle(poll), getPollDateTimeLabel(poll)];
  if (poll.location) pieces.push(poll.location);
  const body = pieces.filter(Boolean).join(' • ');
  showAppToast(title, body);
  if (navigator.vibrate) {
    try {
      navigator.vibrate([150, 70, 150]);
    } catch (error) {
      console.warn('Vibrazione non disponibile.', error);
    }
  }
  showSystemNotification(title, body);
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(reader.error || new Error('READ_FAILED'));
    reader.readAsDataURL(file);
  });
}

function dataUrlByteSize(dataUrl = '') {
  const payload = String(dataUrl || '').split(',')[1] || '';
  if (!payload) return 0;
  const padding = (payload.match(/=+$/) || [''])[0].length;
  return Math.max(0, Math.floor((payload.length * 3) / 4) - padding);
}

function loadImageFromDataUrl(dataUrl = '') {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('IMAGE_LOAD_FAILED'));
    image.src = dataUrl;
  });
}

async function loadImageRenderable(source, fallbackDataUrl = '') {
  if (source && typeof createImageBitmap === 'function') {
    try {
      const bitmap = await createImageBitmap(source, { imageOrientation: 'from-image' });
      return {
        image: bitmap,
        width: bitmap.width || 1,
        height: bitmap.height || 1,
        cleanup() {
          if (typeof bitmap.close === 'function') bitmap.close();
        },
      };
    } catch (error) {
      console.warn('createImageBitmap non disponibile per il file selezionato.', error);
    }
  }

  if (!fallbackDataUrl && source) {
    fallbackDataUrl = await readFileAsDataUrl(source);
  }
  const image = await loadImageFromDataUrl(fallbackDataUrl || '');
  return {
    image,
    width: image.naturalWidth || image.width || 1,
    height: image.naturalHeight || image.height || 1,
    cleanup() {},
  };
}

async function compressImageForStorage(source, {
  maxBytes = 140 * 1024,
  maxDimensions = [1280, 1024, 900, 780, 680, 560, 460, 380],
  qualities = [0.84, 0.76, 0.68, 0.6, 0.52, 0.44],
  fallbackDataUrl = '',
} = {}) {
  const originalDataUrl = fallbackDataUrl || await readFileAsDataUrl(source);
  if (!originalDataUrl) return '';
  if (dataUrlByteSize(originalDataUrl) <= maxBytes) return originalDataUrl;

  try {
    const renderable = await loadImageRenderable(source, originalDataUrl);
    let bestDataUrl = originalDataUrl;
    let bestSize = dataUrlByteSize(originalDataUrl);

    for (const maxDimension of maxDimensions) {
      const scale = Math.min(1, maxDimension / Math.max(renderable.width || 1, renderable.height || 1));
      const width = Math.max(1, Math.round((renderable.width || 1) * scale));
      const height = Math.max(1, Math.round((renderable.height || 1) * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (!context) continue;
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
      context.drawImage(renderable.image, 0, 0, width, height);

      for (const quality of qualities) {
        const candidate = canvas.toDataURL('image/jpeg', quality);
        const candidateSize = dataUrlByteSize(candidate);
        if (candidateSize < bestSize) {
          bestDataUrl = candidate;
          bestSize = candidateSize;
        }
        if (candidateSize <= maxBytes) {
          renderable.cleanup();
          return candidate;
        }
      }
    }

    renderable.cleanup();
    return bestDataUrl;
  } catch (error) {
    console.warn('Ottimizzazione immagine non riuscita, uso il file originale.', error);
    return originalDataUrl;
  }
}

async function readImageFileForStorage(file, options = {}) {
  const originalDataUrl = await readFileAsDataUrl(file);
  if (!originalDataUrl) return '';
  if (!String(file?.type || '').startsWith('image/')) return originalDataUrl;
  return compressImageForStorage(file, {
    maxBytes: options.maxBytes || 140 * 1024,
    maxDimensions: options.maxDimensions || [1280, 1024, 900, 780, 680, 560, 460, 380],
    qualities: options.qualities || [0.84, 0.76, 0.68, 0.6, 0.52, 0.44],
    fallbackDataUrl: originalDataUrl,
  });
}

async function shrinkPollImageForStorage(dataUrl = '', maxBytes = 90 * 1024) {
  if (!dataUrl) return '';
  return compressImageForStorage(null, {
    maxBytes,
    maxDimensions: [960, 820, 700, 600, 520, 440, 360, 300],
    qualities: [0.76, 0.68, 0.6, 0.52, 0.44, 0.36],
    fallbackDataUrl: dataUrl,
  });
}


const POLL_IMAGE_ASSET_DB_NAME = 'imalavoglia-poll-assets';
const POLL_IMAGE_ASSET_STORE = 'pollImages';
const POLL_IMAGE_ASSET_LS_PREFIX = 'imalavoglia-poll-asset:';
const pollImageAssetCache = new Map();
const pollImageAssetPending = new Set();
let pollImageAssetDbPromise = null;

function supportsPollImageAssets() {
  return typeof indexedDB !== 'undefined';
}

function getPollImageAssetLocalStorageKey(assetId = '') {
  const id = String(assetId || '').trim();
  return id ? `${POLL_IMAGE_ASSET_LS_PREFIX}${id}` : '';
}

function storePollImageAssetInLocalStorage(dataUrl = '') {
  const normalized = String(dataUrl || '').trim();
  if (!normalized) return '';
  try {
    const id = uid('pollimg');
    localStorage.setItem(getPollImageAssetLocalStorageKey(id), normalized);
    pollImageAssetCache.set(id, normalized);
    return id;
  } catch (error) {
    console.warn('Salvataggio immagine sondaggio su localStorage dedicato non riuscito.', error);
    return '';
  }
}

function readPollImageAssetFromLocalStorage(assetId = '') {
  const id = String(assetId || '').trim();
  if (!id) return '';
  try {
    const dataUrl = String(localStorage.getItem(getPollImageAssetLocalStorageKey(id)) || '').trim();
    if (dataUrl) pollImageAssetCache.set(id, dataUrl);
    return dataUrl;
  } catch (error) {
    console.warn('Lettura immagine sondaggio da localStorage dedicato non riuscita.', error);
    return '';
  }
}

function deletePollImageAssetFromLocalStorage(assetId = '') {
  const id = String(assetId || '').trim();
  if (!id) return;
  try {
    localStorage.removeItem(getPollImageAssetLocalStorageKey(id));
  } catch (error) {
    console.warn('Eliminazione immagine sondaggio da localStorage dedicato non riuscita.', error);
  }
}

function openPollImageAssetDb() {
  if (!supportsPollImageAssets()) return Promise.resolve(null);
  if (pollImageAssetDbPromise) return pollImageAssetDbPromise;
  pollImageAssetDbPromise = new Promise(resolve => {
    try {
      const request = indexedDB.open(POLL_IMAGE_ASSET_DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(POLL_IMAGE_ASSET_STORE)) {
          db.createObjectStore(POLL_IMAGE_ASSET_STORE, { keyPath: 'id' });
        }
      };
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => {
        console.warn('IndexedDB non disponibile per le immagini dei sondaggi.', request.error);
        resolve(null);
      };
    } catch (error) {
      console.warn('Apertura IndexedDB non riuscita.', error);
      resolve(null);
    }
  });
  return pollImageAssetDbPromise;
}

async function storePollImageAsset(dataUrl = '') {
  const normalized = String(dataUrl || '').trim();
  if (!normalized) return '';
  const db = await openPollImageAssetDb();
  if (!db) return storePollImageAssetInLocalStorage(normalized);
  const id = uid('pollimg');
  return new Promise(resolve => {
    try {
      const tx = db.transaction(POLL_IMAGE_ASSET_STORE, 'readwrite');
      tx.objectStore(POLL_IMAGE_ASSET_STORE).put({ id, dataUrl: normalized, updatedAt: new Date().toISOString() });
      tx.oncomplete = () => {
        pollImageAssetCache.set(id, normalized);
        resolve(id);
      };
      tx.onerror = () => {
        console.warn('Salvataggio immagine sondaggio su IndexedDB non riuscito.', tx.error);
        resolve(storePollImageAssetInLocalStorage(normalized));
      };
      tx.onabort = () => resolve(storePollImageAssetInLocalStorage(normalized));
    } catch (error) {
      console.warn('Scrittura immagine sondaggio non riuscita.', error);
      resolve(storePollImageAssetInLocalStorage(normalized));
    }
  });
}

async function readPollImageAsset(assetId = '') {
  const id = String(assetId || '').trim();
  if (!id) return '';
  if (pollImageAssetCache.has(id)) return pollImageAssetCache.get(id) || '';
  const db = await openPollImageAssetDb();
  if (!db) return readPollImageAssetFromLocalStorage(id);
  return new Promise(resolve => {
    try {
      const tx = db.transaction(POLL_IMAGE_ASSET_STORE, 'readonly');
      const req = tx.objectStore(POLL_IMAGE_ASSET_STORE).get(id);
      req.onsuccess = () => {
        const dataUrl = req.result?.dataUrl || '';
        if (dataUrl) {
          pollImageAssetCache.set(id, dataUrl);
          resolve(dataUrl);
          return;
        }
        resolve(readPollImageAssetFromLocalStorage(id));
      };
      req.onerror = () => resolve(readPollImageAssetFromLocalStorage(id));
    } catch (error) {
      console.warn('Lettura immagine sondaggio non riuscita.', error);
      resolve(readPollImageAssetFromLocalStorage(id));
    }
  });
}

async function deletePollImageAsset(assetId = '') {
  const id = String(assetId || '').trim();
  if (!id) return;
  pollImageAssetCache.delete(id);
  deletePollImageAssetFromLocalStorage(id);
  const db = await openPollImageAssetDb();
  if (!db) return;
  try {
    const tx = db.transaction(POLL_IMAGE_ASSET_STORE, 'readwrite');
    tx.objectStore(POLL_IMAGE_ASSET_STORE).delete(id);
  } catch (error) {
    console.warn('Eliminazione immagine sondaggio non riuscita.', error);
  }
}

function requestPollImageAsset(assetId = '') {
  const id = String(assetId || '').trim();
  if (!id || pollImageAssetCache.has(id) || pollImageAssetPending.has(id)) return;
  pollImageAssetPending.add(id);
  readPollImageAsset(id)
    .then(dataUrl => {
      if (!dataUrl) return;
      pollImageAssetCache.set(id, dataUrl);
      renderHome();
      renderPolls();
      const openedNotice = document.getElementById('openNoticePollBtn')?.dataset?.pollId || '';
      if (openedNotice) {
        const notice = (state.polls || []).find(item => item.id === openedNotice && isNoticePoll(item));
        if (notice) openNoticeDetailModal(openedNotice);
      }
    })
    .finally(() => {
      pollImageAssetPending.delete(id);
    });
}

function getPollImageSource(poll) {
  const inline = String(poll?.image || '').trim();
  if (inline) return inline;
  const assetId = String(poll?.imageAssetId || '').trim();
  if (!assetId) return '';
  const cached = String(pollImageAssetCache.get(assetId) || '').trim();
  if (cached) return cached;
  requestPollImageAsset(assetId);
  return '';
}

async function preparePollImageForSave(dataUrl = '', existingAssetId = '') {
  const normalized = String(dataUrl || '').trim();
  const previousAssetId = String(existingAssetId || '').trim();
  if (!normalized) {
    if (previousAssetId) await deletePollImageAsset(previousAssetId);
    return { image: '', imageAssetId: '' };
  }

  let optimized = normalized;
  for (const maxBytes of [180 * 1024, 140 * 1024, 110 * 1024, 85 * 1024]) {
    try {
      optimized = await shrinkPollImageForStorage(optimized, maxBytes) || optimized;
      if (dataUrlByteSize(optimized) <= maxBytes) break;
    } catch (error) {
      console.warn('Riduzione finale immagine sondaggio non riuscita, uso il contenuto disponibile.', error);
    }
  }

  const storedAssetId = await storePollImageAsset(optimized);
  if (storedAssetId) {
    if (previousAssetId && previousAssetId !== storedAssetId) await deletePollImageAsset(previousAssetId);
    return { image: '', imageAssetId: storedAssetId };
  }

  return { image: optimized, imageAssetId: '' };
}

async function readPollImageForDraft(file) {
  // Funzione deprecata - non usata più
  return '';
}

async function saveStateWithPollImageFallback(priorityPollId = '') {
  if (saveState()) return true;
  const shrinkTargets = [110 * 1024, 85 * 1024, 65 * 1024, 48 * 1024, 36 * 1024];
  const orderedPolls = [...(state.polls || [])].sort((a, b) => {
    if (a.id === priorityPollId) return -1;
    if (b.id === priorityPollId) return 1;
    return 0;
  });

  for (const maxBytes of shrinkTargets) {
    let hasChanged = false;
    for (const poll of orderedPolls) {
      if (!poll?.image) continue;
      if (dataUrlByteSize(poll.image) <= maxBytes) continue;
      const compressed = await shrinkPollImageForStorage(poll.image, maxBytes);
      if (compressed && compressed !== poll.image) {
        poll.image = compressed;
        hasChanged = true;
      }
    }
    if (hasChanged && saveState()) return true;
  }

  for (const poll of orderedPolls) {
    if (!String(poll?.image || '').trim()) continue;
    const prepared = await preparePollImageForSave(poll.image, poll.imageAssetId || '');
    poll.image = prepared.image;
    poll.imageAssetId = prepared.imageAssetId;
    if (saveState()) return true;
  }
  return false;
}

function buildMatchId(phase = '', round = '', homeTeam = '', awayTeam = '') {
  return `${String(phase || '').toLowerCase()}-${round}-${slugify(homeTeam)}-${slugify(awayTeam)}`;
}

function getSeededCardsForMatch(matchId = '') {
  return clone(seededMatchCards[matchId] || []);
}

function mergeCardEntries(baseCards = [], overrideCards = []) {
  const seen = new Set();
  return [...clone(baseCards), ...clone(overrideCards)].filter(card => {
    const key = [
      card.team || '',
      card.playerId || '',
      (card.playerName || '').trim().toLowerCase(),
      card.type || '',
    ].join('|');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeTeam(name = '') {
  const normalized = name.replace(/\s+/g, ' ').trim();
  return teamAliases[normalized.toUpperCase()] || normalized;
}

function getTeamLogo(teamName, season = getSelectedSeason()) {
  return getCompetitionTeamLogo(teamName, season);
}

function getMatchVenueOverride(match) {
  return MATCH_VENUE_OVERRIDES[match?.id] || '';
}

function getVenueForMatch(match) {
  return getMatchVenueOverride(match) || match?.venue || venues[match?.homeTeam] || 'Luogo da definire';
}

function getMatchMapTarget(match) {
  const overrideTarget = MATCH_MAP_TARGET_OVERRIDES[match?.id];
  if (overrideTarget) return overrideTarget;
  const venue = getVenueForMatch(match);
  return getVenueMapTarget(match?.homeTeam || '', venue);
}

function getMatchLocationLabel(match) {
  return getVenueTown(getVenueForMatch(match));
}

function cleanupTownToken(value = '') {
  return String(value || '')
    .replace(/\d{5}/g, ' ')
    .replace(/\((?:VR|VERONA)\)/gi, ' ')
    .replace(/(?:VR|VERONA)/gi, ' ')
    .replace(/[-–|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function looksLikeTownToken(value = '') {
  const clean = cleanupTownToken(value);
  if (!clean) return false;
  return /[A-Za-zÀ-ÿ]/.test(clean) && clean.split(' ').length <= 5;
}

function extractTownFromVenue(venue = '') {
  const cleanVenue = String(venue || '').trim();
  if (!cleanVenue) return '';

  const commaParts = cleanVenue.split(',').map(part => part.trim()).filter(Boolean);
  for (let index = commaParts.length - 1; index >= 0; index -= 1) {
    const candidate = cleanupTownToken(commaParts[index]);
    if (looksLikeTownToken(candidate)) return candidate;
  }

  const compact = cleanupTownToken(cleanVenue);
  const words = compact.split(' ').filter(Boolean);
  if (!words.length) return '';

  if (words.length >= 3) {
    const trailingThree = words.slice(-3).join(' ');
    if (looksLikeTownToken(trailingThree)) return trailingThree;
  }
  if (words.length >= 2) {
    const trailingTwo = words.slice(-2).join(' ');
    if (looksLikeTownToken(trailingTwo)) return trailingTwo;
  }
  return compact;
}

function getVenueTown(venue) {
  if (!venue) return 'Località da definire';
  const normalizedVenue = String(venue).toUpperCase();
  if (normalizedVenue.includes('SAN GIORGIO IN SALICI')) return 'San Giorgio in Salici';
  if (normalizedVenue.includes('POVEGLIANO')) return 'Povegliano Veronese';
  if (normalizedVenue.includes('ALPO DI VILLAFRANCA')) return 'Alpo di Villafranca';
  if (normalizedVenue.includes('BUSSOLENGO')) return 'Bussolengo';
  if (normalizedVenue.includes('ISOLA DELLA SCALA')) return 'Isola della Scala';
  if (normalizedVenue.includes('MENA')) return 'Menà di Castagnaro';
  if (normalizedVenue.includes('QUADERNI DI VILLAFRANCA')) return 'Quaderni di Villafranca';
  if (normalizedVenue.includes('NOGARA')) return 'Nogara';
  if (normalizedVenue.includes('BOVOLONE')) return 'Bovolone';
  if (normalizedVenue.includes('MOZZECANE')) return 'Mozzecane';
  return extractTownFromVenue(venue) || venue;
}

function getVenueMapTarget(teamName = '', fallbackVenue = '') {
  if (venueMapTargets[teamName]) return venueMapTargets[teamName];
  return {
    label: fallbackVenue || 'Destinazione',
    query: fallbackVenue || '',
  };
}

function buildGoogleMapsUrl(target) {
  const query = target?.query || target?.label || '';
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function buildAndroidGeoUrl(target) {
  const label = (target?.label || target?.query || 'Destinazione').replace(/[()]/g, ' ');
  const query = target?.query || target?.label || '';
  return `geo:0,0?q=${encodeURIComponent(`${query} (${label})`)}`;
}

function mapsUrl(teamNameOrVenue, fallbackVenue = '') {
  const isKnownTeam = Boolean(venueMapTargets[teamNameOrVenue]);
  const target = isKnownTeam
    ? getVenueMapTarget(teamNameOrVenue, fallbackVenue || venues[teamNameOrVenue] || '')
    : getVenueMapTarget('', teamNameOrVenue || fallbackVenue);
  return buildGoogleMapsUrl(target);
}

function openMapsWithConsent(teamNameOrVenue, fallbackVenue = '') {
  const venueLabel = fallbackVenue || venues[teamNameOrVenue] || teamNameOrVenue;
  if (!venueLabel) return;
  const confirmed = window.confirm('Vuoi aprire questo luogo in Google Maps?');
  if (!confirmed) return;

  const isKnownTeam = Boolean(venueMapTargets[teamNameOrVenue]);
  const target = isKnownTeam
    ? getVenueMapTarget(teamNameOrVenue, fallbackVenue || venues[teamNameOrVenue] || '')
    : getVenueMapTarget('', teamNameOrVenue || fallbackVenue);
  const targetUrl = /android/i.test(navigator.userAgent)
    ? buildAndroidGeoUrl(target)
    : buildGoogleMapsUrl(target);

  window.location.assign(targetUrl);
}

function normalizeTime(timeStr = '') {
  const raw = String(timeStr || '').trim();
  if (!raw) return '';
  const normalized = raw.replace(',', '.').replace(':', '.');
  const [hoursRaw = '', minutesRaw = '00'] = normalized.split('.');
  const hours = hoursRaw === '' ? '' : String(Number(hoursRaw));
  if (hours === '') return '';
  const minutes = String(minutesRaw || '00').padStart(2, '0').slice(0, 2);
  return `${hours}.${minutes}`;
}

function formatTime(timeStr = '') {
  const normalized = normalizeTime(timeStr);
  if (!normalized) return '';
  const [hours, minutes = '00'] = normalized.split('.');
  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function getCurrentSeasonLabel() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const startYear = month >= 7 ? year : year - 1;
  return `${startYear}/${startYear + 1}`;
}

function normalizeCompetitionType(value = '') {
  return String(value || '').trim().toLowerCase() === 'coppa' ? 'coppa' : 'campionato';
}

function normalizeCompetitionYearInput(type = 'campionato', value = '') {
  const competitionType = normalizeCompetitionType(type);
  const cleaned = String(value || '').trim().replace(/\s+/g, '');

  if (competitionType === 'coppa') {
    const match = cleaned.match(/^(\d{4})$/);
    return match ? match[1] : '';
  }

  const match = cleaned.match(/^(\d{4})[\/-](\d{4})$/);
  if (!match) return '';
  const startYear = Number(match[1]);
  const endYear = Number(match[2]);
  if (endYear != startYear + 1) return '';
  return `${startYear}/${endYear}`;
}

function buildCompetitionLabel(type = 'campionato', value = '') {
  const competitionType = normalizeCompetitionType(type);
  const normalizedYear = normalizeCompetitionYearInput(competitionType, value);
  if (!normalizedYear) return '';
  return competitionType === 'coppa' ? `Coppa ${normalizedYear}` : normalizedYear;
}

function buildCompetitionDisplayName(name = '', type = 'campionato', value = '') {
  const rawName = String(name || '').trim().replace(/\s+/g, ' ');
  const competitionType = normalizeCompetitionType(type);
  const normalizedYear = normalizeCompetitionYearInput(competitionType, value);
  if (!normalizedYear) return rawName;
  if (!rawName) return competitionType === 'coppa' ? `Coppa ${normalizedYear}` : normalizedYear;
  return `${rawName} ${normalizedYear}`;
}

function normalizeSeasonLabel(value = '') {
  const raw = String(value || '').trim();
  if (!raw) return '';

  const cupMatch = raw.replace(/\s+/g, ' ').match(/^coppa\s+(\d{4})$/i);
  if (cupMatch) return `Coppa ${cupMatch[1]}`;

  return buildCompetitionLabel('campionato', raw);
}

function getPreferredSeasonLabel() {
  return normalizeSeasonLabel(DEFAULT_OPEN_SEASON_LABEL) || getCurrentSeasonLabel();
}

function getRemovedCompetitionLabels() {
  return REMOVED_COMPETITION_LABELS.map(normalizeSeasonLabel).filter(Boolean);
}

function sanitizeCustomCompetitionData() {
  const removedLabels = new Set(getRemovedCompetitionLabels());
  let changed = false;

  const previousCustomSeasons = sortSeasonLabels(state.customSeasons || []);
  const cleanedCustomSeasons = sortSeasonLabels((state.customSeasons || []).filter(label => {
    const normalized = normalizeSeasonLabel(label);
    return normalized && !removedLabels.has(normalized);
  }));
  if (JSON.stringify(cleanedCustomSeasons) !== JSON.stringify(previousCustomSeasons)) changed = true;
  state.customSeasons = cleanedCustomSeasons;

  const cleanedCompetitionMeta = normalizeCompetitionMetaStore(state.competitionMeta || {});
  removedLabels.forEach(label => {
    if (cleanedCompetitionMeta[label]) {
      delete cleanedCompetitionMeta[label];
      changed = true;
    }
  });
  state.competitionMeta = cleanedCompetitionMeta;

  const penaltyStore = normalizeTeamPenaltyStore(state.teamPenalties || {});
  removedLabels.forEach(label => {
    if (penaltyStore[label]) {
      delete penaltyStore[label];
      changed = true;
    }
  });
  state.teamPenalties = penaltyStore;

  const cardStore = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  removedLabels.forEach(label => {
    if (cardStore[label]) {
      delete cardStore[label];
      changed = true;
    }
  });
  state.teamCardPoints = cardStore;

  const competitionTeamsStore = normalizeCompetitionTeamsStore(state.competitionTeams || {});
  removedLabels.forEach(label => {
    if (competitionTeamsStore[label]) {
      delete competitionTeamsStore[label];
      changed = true;
    }
  });
  state.competitionTeams = competitionTeamsStore;

  const competitionTeamLogosStore = normalizeCompetitionTeamLogosStore(state.competitionTeamLogos || {});
  removedLabels.forEach(label => {
    if (competitionTeamLogosStore[label]) {
      delete competitionTeamLogosStore[label];
      changed = true;
    }
  });
  state.competitionTeamLogos = competitionTeamLogosStore;

  return changed;
}

function getCompetitionPresetLogo(preset = 'default') {
  return COMPETITION_PRESET_LOGOS[preset] || COMPETITION_PRESET_LOGOS.default;
}

function normalizeCompetitionMetaStore(store = {}) {
  const normalized = {};
  if (!store || typeof store !== 'object') return normalized;

  Object.entries(store).forEach(([label, meta]) => {
    const key = normalizeSeasonLabel(label);
    if (!key) return;
    const type = normalizeCompetitionType(meta?.type || (/^Coppa\s+\d{4}$/i.test(key) ? 'coppa' : 'campionato'));
    normalized[key] = {
      type,
      logo: typeof meta?.logo === 'string' ? meta.logo : '',
      name: typeof meta?.name === 'string' ? meta.name.trim() : '',
    };
  });

  return normalized;
}


function normalizeCompetitionTeamsStore(store = {}) {
  const normalized = {};
  if (!store || typeof store !== 'object') return normalized;

  Object.entries(store).forEach(([label, values]) => {
    const key = normalizeSeasonLabel(label);
    if (!key) return;
    const seen = new Set();
    const names = (Array.isArray(values) ? values : [])
      .map(value => normalizeTeam(String(value || '').trim()))
      .filter(Boolean)
      .filter(name => {
        const lookup = name.toLowerCase();
        if (seen.has(lookup)) return false;
        seen.add(lookup);
        return true;
      });
    if (names.length) normalized[key] = names;
  });

  return normalized;
}

function normalizeCompetitionTeamLogosStore(store = {}) {
  const normalized = {};
  if (!store || typeof store !== 'object') return normalized;

  Object.entries(store).forEach(([label, teamsMap]) => {
    const key = normalizeSeasonLabel(label);
    if (!key || !teamsMap || typeof teamsMap !== 'object') return;
    const entries = {};
    Object.entries(teamsMap).forEach(([teamName, logo]) => {
      const cleanTeam = normalizeTeam(String(teamName || '').trim());
      const cleanLogo = typeof logo === 'string' ? logo.trim() : '';
      if (cleanTeam && cleanLogo) entries[cleanTeam] = cleanLogo;
    });
    if (Object.keys(entries).length) normalized[key] = entries;
  });

  return normalized;
}

function getDefaultCompetitionTeamNames() {
  return teams.map(team => team.name);
}

function ensureDefaultCompetitionTeams() {
  const preferredSeason = getPreferredSeasonLabel();
  const store = normalizeCompetitionTeamsStore(state.competitionTeams || {});
  if (Array.isArray(store[preferredSeason]) && store[preferredSeason].length) return false;
  store[preferredSeason] = getDefaultCompetitionTeamNames();
  state.competitionTeams = store;
  return true;
}

function getCompetitionTeamNames(season = getSelectedSeason()) {
  const seasonKey = normalizeSeasonLabel(season) || '';
  const store = normalizeCompetitionTeamsStore(state.competitionTeams || {});
  const explicitTeams = Array.isArray(store[seasonKey]) ? store[seasonKey].filter(Boolean) : [];
  if (explicitTeams.length) return explicitTeams;

  const derived = [];
  const seen = new Set();
  (state.matches || []).forEach(match => {
    const matchSeason = match.season || inferSeasonFromDate(match.date) || '';
    if (seasonKey && matchSeason !== seasonKey) return;
    [match.homeTeam, match.awayTeam].forEach(teamName => {
      const normalized = normalizeTeam(String(teamName || '').trim());
      if (!normalized) return;
      const lookup = normalized.toLowerCase();
      if (seen.has(lookup)) return;
      seen.add(lookup);
      derived.push(normalized);
    });
  });
  if (derived.length) return derived;

  if (!seasonKey || seasonKey === getPreferredSeasonLabel()) return getDefaultCompetitionTeamNames();
  return [];
}

function getCompetitionTeamLogo(teamName = '', season = getSelectedSeason()) {
  const cleanTeam = normalizeTeam(String(teamName || '').trim());
  if (!cleanTeam) return DEFAULT_PLAYER_IMG;
  const seasonKey = normalizeSeasonLabel(season) || '';
  const store = normalizeCompetitionTeamLogosStore(state.competitionTeamLogos || {});
  const seasonLogos = store[seasonKey] || {};
  const storedLogo = String(seasonLogos[cleanTeam] || '').trim();
  if (storedLogo) return storedLogo;
  return teams.find(team => team.name === cleanTeam)?.logo || DEFAULT_PLAYER_IMG;
}

function getCompetitionTeams(season = getSelectedSeason()) {
  return getCompetitionTeamNames(season).map(teamName => ({
    name: teamName,
    logo: getCompetitionTeamLogo(teamName, season),
  }));
}


function ensureDefaultCompetitionMeta() {
  const preferredSeason = getPreferredSeasonLabel();
  const metaStore = normalizeCompetitionMetaStore(state.competitionMeta || {});
  const current = metaStore[preferredSeason] || {};
  const next = {
    type: 'campionato',
    logo: CAMPIONATO_LOGO,
    name: DEFAULT_COMPETITION_DISPLAY_NAMES[preferredSeason] || preferredSeason,
  };

  const shouldUpdate = !current || current.type !== next.type || current.logo !== next.logo || current.name !== next.name;
  if (!shouldUpdate) return false;

  metaStore[preferredSeason] = next;
  state.competitionMeta = metaStore;
  return true;
}

function getCompetitionMeta(label = '') {
  const normalized = normalizeSeasonLabel(label);
  if (!normalized) {
    return {
      key: '',
      type: 'campionato',
      logo: CAMPIONATO_LOGO,
      name: '',
    };
  }

  const stored = normalizeCompetitionMetaStore(state.competitionMeta || {})[normalized] || {};
  const type = normalizeCompetitionType(stored.type || (/^Coppa\s+\d{4}$/i.test(normalized) ? 'coppa' : 'campionato'));
  const fallbackLogo = normalized === getPreferredSeasonLabel() ? CAMPIONATO_LOGO : COMPETITION_FALLBACK_EMOJI;
  const fallbackName = DEFAULT_COMPETITION_DISPLAY_NAMES[normalized] || normalized;
  return {
    key: normalized,
    type,
    logo: stored.logo || fallbackLogo,
    name: stored.name || fallbackName,
  };
}

function getCompetitionLogo(label = '') {
  return getCompetitionMeta(label).logo || CAMPIONATO_LOGO;
}

function getCompetitionDisplayName(label = '') {
  return getCompetitionMeta(label).name || normalizeSeasonLabel(label) || '';
}

function isCompetitionLogoImage(value = '') {
  const logo = String(value || '').trim();
  if (!logo) return false;
  if (logo.startsWith('data:image/')) return true;
  if (/^(?:https?:)?\/\//i.test(logo)) return true;
  if (logo.startsWith('assets/') || logo.startsWith('./') || logo.startsWith('../') || logo.startsWith('/')) return true;
  return /\.(png|jpe?g|webp|gif|svg)(?:[?#].*)?$/i.test(logo);
}

function renderCompetitionLogoMarkup(label = '') {
  const meta = getCompetitionMeta(label);
  const logo = String(meta.logo || '').trim();
  const altLabel = `Logo ${getCompetitionKindLabel(label).toLowerCase()}`;
  if (isCompetitionLogoImage(logo)) {
    return `<img class="match-group-logo" src="${escapeHtml(logo)}" alt="${escapeHtml(altLabel)}" />`;
  }
  return `<span class="match-group-logo match-group-logo-emoji" role="img" aria-label="${escapeHtml(altLabel)}">${escapeHtml(logo || COMPETITION_FALLBACK_EMOJI)}</span>`;
}

function renderStandingsCompetitionTitleMarkup(label = '') {
  const meta = getCompetitionMeta(label);
  const logo = String(meta.logo || '').trim();
  const displayName = getCompetitionDisplayName(label) || normalizeSeasonLabel(label) || 'Competizione';
  const altLabel = `Logo ${getCompetitionKindLabel(label).toLowerCase()}`;
  const logoMarkup = isCompetitionLogoImage(logo)
    ? `<img class="standings-competition-logo" src="${escapeHtml(logo)}" alt="${escapeHtml(altLabel)}" />`
    : `<span class="standings-competition-logo standings-competition-logo-emoji" role="img" aria-label="${escapeHtml(altLabel)}">${escapeHtml(logo || COMPETITION_FALLBACK_EMOJI)}</span>`;
  return `<span class="standings-competition-title">${logoMarkup}<span class="standings-competition-name">${escapeHtml(displayName)}</span></span>`;
}

function getCompetitionFilterLabel(label = '') {
  const normalized = normalizeSeasonLabel(label);
  if (!normalized) return '';
  const meta = getCompetitionMeta(normalized);
  if (meta.name) return meta.name;
  const displayName = getCompetitionDisplayName(normalized) || normalized;
  if (!displayName) return normalized;
  return displayName.toLowerCase().includes(normalized.toLowerCase()) ? displayName : `${displayName} ${normalized}`;
}

function getCompetitionKindLabel(label = '') {
  return getCompetitionMeta(label).type === 'coppa' ? 'Coppa' : 'Campionato';
}

function getCompetitionSortValue(label = '') {
  const normalized = normalizeSeasonLabel(label);
  if (!normalized) return -1;
  const cupMatch = normalized.match(/^Coppa\s+(\d{4})$/i);
  if (cupMatch) return Number(cupMatch[1]) * 10 + 5;
  const seasonMatch = normalized.match(/^(\d{4})\/(\d{4})$/);
  if (!seasonMatch) return -1;
  return Number(seasonMatch[2]) * 10;
}

function inferSeasonFromDate(dateStr = '') {
  const match = String(dateStr || '').match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return '';
  const month = Number(match[2]);
  const year = Number(match[3]);
  const startYear = month >= 7 ? year : year - 1;
  return `${startYear}/${startYear + 1}`;
}

function sortSeasonLabels(seasons = []) {
  return [...new Set((seasons || []).map(normalizeSeasonLabel).filter(Boolean))]
    .sort((a, b) => getCompetitionSortValue(b) - getCompetitionSortValue(a) || b.localeCompare(a, 'it'));
}

function getAvailableSeasons() {
  return sortSeasonLabels([
    ...(state.customSeasons || []),
    ...state.matches.map(match => match.season || inferSeasonFromDate(match.date) || getCurrentSeasonLabel()),
  ]);
}

function ensureSeasonSelection() {
  const seasons = getAvailableSeasons();
  const preferredSeason = getPreferredSeasonLabel();
  if (!seasons.length) {
    uiState.selectedSeason = preferredSeason;
    return;
  }
  if (!uiState.selectedSeason || !seasons.includes(uiState.selectedSeason)) {
    uiState.selectedSeason = seasons.includes(preferredSeason) ? preferredSeason : seasons[0];
  }
}

function getSelectedSeason() {
  ensureSeasonSelection();
  return uiState.selectedSeason;
}

function getMatchesForSelectedSeason() {
  const selectedSeason = getSelectedSeason();
  return state.matches.filter(match => (match.season || inferSeasonFromDate(match.date) || '') === selectedSeason);
}

function populateSeasonFilter() {
  const selects = [...document.querySelectorAll('[data-season-filter]')];
  if (!selects.length) return;
  const seasons = getAvailableSeasons();
  ensureSeasonSelection();
  const fallbackSeason = getSelectedSeason();
  const options = seasons.length ? seasons : [fallbackSeason];
  const optionsHtml = options.map(season => {
    const label = getCompetitionFilterLabel(season) || season;
    return `<option value="${escapeHtml(season)}">${escapeHtml(label)}</option>`;
  }).join('');

  selects.forEach(select => {
    const previousValue = select.value;
    select.innerHTML = optionsHtml;
    if ([...select.options].some(option => option.value === uiState.selectedSeason)) {
      select.value = uiState.selectedSeason;
    } else if ([...select.options].some(option => option.value === previousValue)) {
      select.value = previousValue;
      uiState.selectedSeason = previousValue;
    } else if (select.options.length) {
      select.value = select.options[0].value;
      uiState.selectedSeason = select.value;
    }
  });
}

function updatePartiteStickyOffset() {
  const header = document.querySelector('.partite-header-sticky');
  const offset = header ? header.offsetHeight + 4 : 74;
  document.documentElement.style.setProperty('--partite-sticky-offset', `${offset}px`);
  document.documentElement.style.setProperty('--matches-filters-top', `${offset}px`);
}

function syncMatchesFiltersUi() {
  const panel = document.getElementById('matchesFiltersPanel');
  const button = document.getElementById('toggleMatchFiltersBtn');
  const open = Boolean(uiState.matchesFiltersOpen);
  panel?.classList.toggle('hidden', !open);
  if (button) {
    button.classList.toggle('secondary', open);
    button.classList.toggle('ghost', !open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  updatePartiteStickyOffset();
}

function normalizeTeamPenaltyStore(store = {}) {
  const normalized = {};
  if (!store || typeof store !== 'object') return normalized;
  Object.entries(store).forEach(([season, teamsMap]) => {
    if (!season || !teamsMap || typeof teamsMap !== 'object') return;
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    normalized[seasonKey] = {};
    Object.entries(teamsMap).forEach(([team, count]) => {
      const value = Number(count) || 0;
      if (value > 0) normalized[seasonKey][team] = value;
    });
    if (!Object.keys(normalized[seasonKey]).length) delete normalized[seasonKey];
  });
  return normalized;
}


function normalizeTeamCardPointsStore(store = {}) {
  const normalized = {};
  if (!store || typeof store !== 'object') return normalized;
  Object.entries(store).forEach(([season, teamsMap]) => {
    if (!season || !teamsMap || typeof teamsMap !== 'object') return;
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    normalized[seasonKey] = {};
    Object.entries(teamsMap).forEach(([team, points]) => {
      const value = Math.max(0, Math.round(Number(points) || 0));
      if (team && team !== MALAVOGLIA) normalized[seasonKey][team] = value;
    });
    if (!Object.keys(normalized[seasonKey]).length) delete normalized[seasonKey];
  });
  return normalized;
}

function ensureDefaultTeamCardPoints() {
  const store = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  let changed = false;

  Object.entries(defaultTeamCardPointsBySeason).forEach(([season, teamsMap]) => {
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    if (!store[seasonKey]) {
      store[seasonKey] = {};
    }

    Object.entries(teamsMap || {}).forEach(([team, value]) => {
      if (!team || team === MALAVOGLIA) return;
      if (Object.prototype.hasOwnProperty.call(store[seasonKey], team)) return;
      store[seasonKey][team] = Math.max(0, Math.round(Number(value) || 0));
      changed = true;
    });
  });

  if (changed) {
    state.teamCardPoints = normalizeTeamCardPointsStore(store);
  }

  return changed;
}

function ensureDefaultTeamPenalties() {
  const store = normalizeTeamPenaltyStore(state.teamPenalties || {});
  let changed = false;

  Object.entries(defaultTeamPenaltiesBySeason).forEach(([season, teamsMap]) => {
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    if (!store[seasonKey]) {
      store[seasonKey] = {};
    }

    Object.entries(teamsMap || {}).forEach(([team, value]) => {
      if (!team) return;
      const cleanValue = Math.max(0, Math.round(Number(value) || 0));
      if (!cleanValue) return;
      if (Object.prototype.hasOwnProperty.call(store[seasonKey], team)) return;
      store[seasonKey][team] = cleanValue;
      changed = true;
    });

    if (!Object.keys(store[seasonKey]).length) delete store[seasonKey];
  });

  if (changed) {
    state.teamPenalties = normalizeTeamPenaltyStore(store);
  }

  return changed;
}

function applyDisciplineDefaultsMigration() {
  if (state.teamDisciplineDefaultsVersion === TEAM_DISCIPLINE_DEFAULTS_VERSION) return false;

  const cardStore = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  const penaltyStore = normalizeTeamPenaltyStore(state.teamPenalties || {});

  Object.entries(defaultTeamCardPointsBySeason).forEach(([season, teamsMap]) => {
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    cardStore[seasonKey] = {};
    Object.entries(teamsMap || {}).forEach(([team, value]) => {
      if (!team || team === MALAVOGLIA) return;
      cardStore[seasonKey][team] = Math.max(0, Math.round(Number(value) || 0));
    });
  });

  Object.entries(defaultTeamPenaltiesBySeason).forEach(([season, teamsMap]) => {
    const seasonKey = normalizeSeasonLabel(season) || String(season);
    penaltyStore[seasonKey] = {};
    Object.entries(teamsMap || {}).forEach(([team, value]) => {
      const cleanValue = Math.max(0, Math.round(Number(value) || 0));
      if (cleanValue > 0) penaltyStore[seasonKey][team] = cleanValue;
    });
    if (!Object.keys(penaltyStore[seasonKey]).length) delete penaltyStore[seasonKey];
  });

  state.teamCardPoints = normalizeTeamCardPointsStore(cardStore);
  state.teamPenalties = normalizeTeamPenaltyStore(penaltyStore);
  state.teamDisciplineDefaultsVersion = TEAM_DISCIPLINE_DEFAULTS_VERSION;
  return true;
}

function getManualTeamCardPoints(team = '', season = getSelectedSeason()) {
  const teamName = String(team || '').trim();
  if (!teamName || teamName === MALAVOGLIA) return 0;
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  const store = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  return Number(store?.[seasonKey]?.[teamName]) || 0;
}

function getAutomaticTeamCardPoints(team = '', season = getSelectedSeason()) {
  const teamName = String(team || '').trim();
  if (!teamName) return 0;
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  if (teamName !== MALAVOGLIA) return 0;
  return state.matches.reduce((sum, match) => {
    if ((match.season || inferSeasonFromDate(match.date) || '') !== seasonKey) return sum;
    if (!isPlayed(match)) return sum;
    return sum + (match.cards || []).reduce((inner, card) => {
      if (card.team !== teamName) return inner;
      return inner + (cardPointsMap[card.type] || 0);
    }, 0);
  }, 0);
}

function getDisplayedTeamCardPoints(team = '', season = getSelectedSeason()) {
  return team === MALAVOGLIA
    ? getAutomaticTeamCardPoints(team, season)
    : getManualTeamCardPoints(team, season);
}

function setManualTeamCardPoints(team = '', value = 0, season = getSelectedSeason()) {
  if (!isManagerUser()) return false;
  const teamName = String(team || '').trim();
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  if (!teamName || !seasonKey || teamName === MALAVOGLIA) return false;
  const store = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  const cleanValue = Math.max(0, Math.round(Number(value) || 0));
  if (!store[seasonKey]) store[seasonKey] = {};
  store[seasonKey][teamName] = cleanValue;
  state.teamCardPoints = store;
  saveState();
  return true;
}

function changeManualTeamCardPoints(team = '', delta = 0, season = getSelectedSeason()) {
  if (!isManagerUser()) return false;
  const current = getManualTeamCardPoints(team, season);
  return setManualTeamCardPoints(team, current + Number(delta || 0), season);
}

function getTeamPenaltyCount(team = '', season = getSelectedSeason()) {
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  const store = normalizeTeamPenaltyStore(state.teamPenalties || {});
  return Number(store?.[seasonKey]?.[team]) || 0;
}

function getTeamPenaltySymbols(team = '', season = getSelectedSeason()) {
  const count = getTeamPenaltyCount(team, season);
  if (!count) return '';
  return Array.from({ length: count }, () => `<span class="team-penalty-symbol" title="Penalità">${TEAM_PENALTY_SYMBOL}</span>`).join('');
}

function populatePenaltySeasonSelect() {
  const select = document.getElementById('penaltySeasonSelect');
  if (!select) return;
  const seasons = getAvailableSeasons();
  const fallbackSeason = normalizeSeasonLabel(uiState.penaltySelectedSeason) || getSelectedSeason();
  const options = seasons.length ? seasons : [fallbackSeason];
  select.innerHTML = options.map(season => `<option value="${escapeHtml(season)}">${escapeHtml(season)}</option>`).join('');

  if ([...select.options].some(option => option.value === fallbackSeason)) {
    select.value = fallbackSeason;
  } else if (select.options.length) {
    select.value = select.options[0].value;
  }

  uiState.penaltySelectedSeason = select.value || fallbackSeason;
}

function getPenaltySelectedSeason() {
  const select = document.getElementById('penaltySeasonSelect');
  const normalized = normalizeSeasonLabel(select?.value || uiState.penaltySelectedSeason || getSelectedSeason()) || getSelectedSeason();
  uiState.penaltySelectedSeason = normalized;
  return normalized;
}

function getPenaltyPreviewData(team = '', season = getPenaltySelectedSeason()) {
  const teamName = String(team || '').trim();
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  const row = getStandings(seasonKey).find(item => item.team === teamName);
  const penalties = getTeamPenaltyCount(teamName, seasonKey);
  const currentPoints = Number(row?.points) || 0;
  return {
    team: teamName,
    penalties,
    currentPoints,
    afterAdd: currentPoints - TEAM_PENALTY_POINTS,
    afterRemove: currentPoints + TEAM_PENALTY_POINTS,
  };
}

function renderPenaltyPreview() {
  const box = document.getElementById('penaltyLiveBox');
  const select = document.getElementById('penaltyTeamSelect');
  const removeBtn = document.getElementById('removePenaltyBtn');
  if (!box || !select) return;

  const teamName = select.value || '';
  if (!teamName) {
    box.innerHTML = "<p class='penalty-live-empty'>Seleziona una squadra per vedere i punti e le penalità attive.</p>";
    if (removeBtn) removeBtn.disabled = true;
    return;
  }

  const preview = getPenaltyPreviewData(teamName, getPenaltySelectedSeason());
  box.innerHTML = `
    <div class="penalty-live-header">
      <strong>${escapeHtml(preview.team)}</strong>
    </div>
    <div class="penalty-live-grid">
      <div class="penalty-live-stat">
        <span class="penalty-live-label">Punti attuali</span>
        <strong>${preview.currentPoints}</strong>
      </div>
      <div class="penalty-live-stat">
        <span class="penalty-live-label">Penalità attive</span>
        <strong>${preview.penalties}</strong>
      </div>
    </div>
  `;

  if (removeBtn) {
    removeBtn.disabled = preview.penalties <= 0;
    removeBtn.setAttribute('aria-label', preview.penalties > 0 ? 'Togli penalità' : 'Togli penalità non disponibile');
    removeBtn.title = preview.penalties > 0 ? 'Togli penalità' : 'Togli penalità non disponibile';
  }
}

function populatePenaltyTeamSelect() {
  const select = document.getElementById('penaltyTeamSelect');
  if (!select) return;
  const seasonTeams = getCompetitionTeams(getPenaltySelectedSeason());
  const current = select.value || seasonTeams[0]?.name || '';
  select.innerHTML = seasonTeams.map(team => `<option value="${escapeHtml(team.name)}">${escapeHtml(team.name)}</option>`).join('');
  if ([...select.options].some(option => option.value === current)) {
    select.value = current;
  } else if (select.options.length) {
    select.value = select.options[0].value;
  }
  renderPenaltyPreview();
}

function getSeasonDeletionSummary(season = '') {
  const seasonKey = normalizeSeasonLabel(season);
  if (!seasonKey) {
    return { matches: 0, penalties: 0, teamsWithPenalties: 0, teamsWithCardPoints: 0 };
  }

  const matches = state.matches.filter(match => (match.season || inferSeasonFromDate(match.date) || '') === seasonKey).length;
  const seasonPenalties = normalizeTeamPenaltyStore(state.teamPenalties || {})[seasonKey] || {};
  const seasonCardPoints = normalizeTeamCardPointsStore(state.teamCardPoints || {})[seasonKey] || {};
  const penalties = Object.values(seasonPenalties).reduce((sum, count) => sum + (Number(count) || 0), 0);

  return {
    matches,
    penalties,
    teamsWithPenalties: Object.keys(seasonPenalties).length,
    teamsWithCardPoints: Object.keys(seasonCardPoints).length,
  };
}

function deleteSeasonData(season = '') {
  if (!isManagerUser()) return false;
  const seasonKey = normalizeSeasonLabel(season);
  if (!seasonKey) return false;

  const matchIdsToDelete = new Set(
    state.matches
      .filter(match => (match.season || inferSeasonFromDate(match.date) || '') === seasonKey)
      .map(match => match.id)
  );

  state.matches = state.matches.filter(match => !matchIdsToDelete.has(match.id));

  if (state.matchEdits && typeof state.matchEdits === 'object') {
    Object.keys(state.matchEdits).forEach(matchId => {
      if (matchIdsToDelete.has(matchId)) delete state.matchEdits[matchId];
    });
  }

  state.customSeasons = sortSeasonLabels((state.customSeasons || []).filter(item => normalizeSeasonLabel(item) !== seasonKey));
  const competitionMetaStore = normalizeCompetitionMetaStore(state.competitionMeta || {});
  if (competitionMetaStore[seasonKey]) delete competitionMetaStore[seasonKey];
  state.competitionMeta = competitionMetaStore;

  const penaltyStore = normalizeTeamPenaltyStore(state.teamPenalties || {});
  if (penaltyStore[seasonKey]) delete penaltyStore[seasonKey];
  state.teamPenalties = penaltyStore;

  const teamCardPointsStore = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  if (teamCardPointsStore[seasonKey]) delete teamCardPointsStore[seasonKey];
  state.teamCardPoints = teamCardPointsStore;

  const competitionTeamsStore = normalizeCompetitionTeamsStore(state.competitionTeams || {});
  if (competitionTeamsStore[seasonKey]) delete competitionTeamsStore[seasonKey];
  state.competitionTeams = competitionTeamsStore;

  const competitionTeamLogosStore = normalizeCompetitionTeamLogosStore(state.competitionTeamLogos || {});
  if (competitionTeamLogosStore[seasonKey]) delete competitionTeamLogosStore[seasonKey];
  state.competitionTeamLogos = competitionTeamLogosStore;

  const remainingSeasons = sortSeasonLabels([
    ...(state.customSeasons || []),
    ...state.matches.map(match => match.season || inferSeasonFromDate(match.date) || getCurrentSeasonLabel()),
  ]);

  if (uiState.selectedSeason === seasonKey) {
    uiState.selectedSeason = remainingSeasons[0] || getCurrentSeasonLabel();
  }
  if (uiState.penaltySelectedSeason === seasonKey) {
    uiState.penaltySelectedSeason = uiState.selectedSeason;
  }

  saveState();
  return true;
}

function openPenaltyModal() {
  if (!isManagerUser()) return;
  const modal = document.getElementById('penaltyModal');
  if (!modal) return;
  uiState.penaltiesModalOpen = true;
  uiState.penaltySelectedSeason = getSelectedSeason();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  populatePenaltySeasonSelect();
  populatePenaltyTeamSelect();
  renderPenaltyPreview();
}

function closePenaltyModal() {
  const modal = document.getElementById('penaltyModal');
  if (!modal) return;
  uiState.penaltiesModalOpen = false;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function addTeamPenalty(team = '', season = getSelectedSeason()) {
  if (!isManagerUser()) return false;
  const teamName = String(team || '').trim();
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  if (!teamName || !seasonKey) return false;
  const store = normalizeTeamPenaltyStore(state.teamPenalties || {});
  if (!store[seasonKey]) store[seasonKey] = {};
  store[seasonKey][teamName] = (Number(store[seasonKey][teamName]) || 0) + 1;
  state.teamPenalties = store;
  saveState();
  return true;
}

function removeTeamPenalty(team = '', season = getSelectedSeason()) {
  if (!isManagerUser()) return false;
  const teamName = String(team || '').trim();
  const seasonKey = normalizeSeasonLabel(season) || getSelectedSeason();
  if (!teamName || !seasonKey) return false;
  const store = normalizeTeamPenaltyStore(state.teamPenalties || {});
  const current = Number(store?.[seasonKey]?.[teamName]) || 0;
  if (current <= 0) return false;

  if (current === 1) {
    delete store[seasonKey][teamName];
    if (!Object.keys(store[seasonKey]).length) delete store[seasonKey];
  } else {
    store[seasonKey][teamName] = current - 1;
  }

  state.teamPenalties = store;
  saveState();
  return true;
}

function buildWeatherSourceUrl(town = '') {
  const coords = weatherCoords[town];
  if (!coords) return 'https://open-meteo.com/';
  return `https://open-meteo.com/en/#latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
}

function formatDate(dateStr, timeStr = '') {
  if (!dateStr) return 'Data da definire';
  const normalizedDate = normalizeStoredDate(dateStr);
  const [dd = '', mm = '', yyyy = ''] = String(normalizedDate || '').split('/');
  const label = [dd, mm, yyyy].filter(Boolean).join('/');
  const timeLabel = formatTime(timeStr);
  return timeLabel ? `${label} • ${timeLabel}` : label;
}

function normalizeStoredDate(value = '') {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    const [yyyy = '', mm = '', dd = ''] = raw.split('-');
    return [dd, mm, yyyy].filter(Boolean).join('/');
  }
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) return raw;
  return raw;
}

function toDateInputValue(value = '') {
  const normalized = normalizeStoredDate(value);
  if (!normalized) return '';
  const [dd = '', mm = '', yyyy = ''] = normalized.split('/');
  if (!dd || !mm || !yyyy) return '';
  return `${yyyy}-${mm}-${dd}`;
}

function fromDateInputValue(value = '') {
  return normalizeStoredDate(value);
}

function toTimestamp(dateStr, timeStr = '00.00') {
  const normalizedDate = normalizeStoredDate(dateStr);
  if (!normalizedDate) return Number.MAX_SAFE_INTEGER;
  const [dd, mm, yyyy] = normalizedDate.split('/');
  const [h, m = '00'] = normalizeTime(timeStr || '00.00').split('.');
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd), Number(h || 0), Number(m || 0)).getTime();
}

function isPlayed(match) {
  return match.status === 'played' && Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals);
}

function isMalavogliaMatch(match) {
  return match.homeTeam === MALAVOGLIA || match.awayTeam === MALAVOGLIA;
}

function getMalGoals(match) {
  if (!isMalavogliaMatch(match)) return 0;
  return match.homeTeam === MALAVOGLIA ? Number(match.homeGoals || 0) : Number(match.awayGoals || 0);
}


function parseSourceFixtures(raw = '') {
  const rawLines = String(raw || '')
    .replace(/\r/g, '')
    .split('\n');

  const matches = [];
  let phase = 'Andata';
  let round = 0;

  for (let i = 0; i < rawLines.length; i += 1) {
    const rawLine = rawLines[i];
    const line = rawLine
      .replace(/\u00a0/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!line) continue;

    // Check for phase changes
    if (/^ritorno$/i.test(line)) {
      phase = 'Ritorno';
      continue;
    }
    if (/^andata$/i.test(line)) {
      phase = 'Andata';
      continue;
    }

    // Check for round
    const roundMatch = line.match(/^Giornata\s+(\d+)/i);
    if (roundMatch) {
      round = Number(roundMatch[1]);
      continue;
    }

    // Check for match line (contains " - ")
    const separatorIndex = line.indexOf(' - ');
    if (separatorIndex === -1) continue;

    const homeRaw = line.slice(0, separatorIndex).trim();
    const awayRaw = line.slice(separatorIndex + 3).trim();

    const homeTeam = normalizeTeam(homeRaw);
    const awayTeam = normalizeTeam(awayRaw);
    if (!homeTeam || !awayTeam) continue;

    // Collect scorer and result lines
    let scorerLine = '';
    let resultLine = '';
    
    for (let j = i + 1; j < rawLines.length; j += 1) {
      const nextRawLine = rawLines[j];
      const nextLine = nextRawLine
        .replace(/\u00a0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      if (!nextLine) continue;

      // Stop if we hit a new round (must check before " - " becausepausresult line contains " - ")
      if (/^Giornata\s+\d+/i.test(nextLine) || /^Andata$/i.test(nextLine) || /^Ritorno$/i.test(nextLine)) break;

      // Result line: "Giorno 21/10/2025 alle 20.30\t2 - 10" (must check before " - ")
      if (/^Giorno\s+/i.test(nextLine)) {
        resultLine = nextRawLine; // Use raw line to preserve tabs
        i = j;
        break;
      }

      // Scorer line: "Marcatori: ..."
      if (/^Marcatori:/i.test(nextLine)) {
        scorerLine = nextLine;
        continue;
      }

      // Stop if we hit another match (contains " - " and not Marcatori)
      if (nextLine.includes(' - ') && !/^Marcatori:/i.test(nextLine)) break;
    }

    const { date, time, status, homeGoals, awayGoals } = parseFixtureResult({
      matchLine: line,
      resultLine,
      scorerLine,
      homeTeam,
      awayTeam,
    });

    const matchId = buildMatchId(phase, round, homeTeam, awayTeam);
    matches.push({
      id: matchId,
      phase,
      round,
      homeTeam,
      awayTeam,
      venue: venues[homeTeam] || 'Luogo da definire',
      date,
      time,
      status,
      homeGoals,
      awayGoals,
      scorers: [],
      cards: getSeededCardsForMatch(matchId),
      season: inferSeasonFromDate(date) || getCurrentSeasonLabel(),
    });
  }

  return matches;
}

function parseFixtureResult({ matchLine = '', resultLine = '', scorerLine = '', homeTeam = '', awayTeam = '' } = {}) {
  // Normalize tabs and multiple spaces to single space
  const normalizedResultLine = String(resultLine || '').replace(/\t/g, ' ').replace(/\s+/g, ' ');
  
  const dateMatch = normalizedResultLine.match(/(\d{2}\/\d{2}\/\d{4})/);
  const timeMatch = normalizedResultLine.match(/alle\s+([0-9]{1,2}(?:[.,:][0-9]{1,2})?)/i);
  const date = dateMatch ? dateMatch[1] : '';
  const time = timeMatch ? normalizeTime(timeMatch[1]) : '';

  const explicitScoreMatch = `${matchLine} ${normalizedResultLine}`.match(/\b(\d+)\s*-\s*(\d+)\b/);
  if (explicitScoreMatch) {
    return {
      date,
      time,
      status: 'played',
      homeGoals: Number(explicitScoreMatch[1]),
      awayGoals: Number(explicitScoreMatch[2]),
    };
  }

  if (/rinviat/i.test(`${matchLine} ${scorerLine} ${normalizedResultLine}`)) {
    return { date, time, status: 'postponed', homeGoals: null, awayGoals: null };
  }

  const scorersText = String(scorerLine || '').replace(/^Marcatori:\s*/i, '').trim();
  if (!scorersText) {
    return { date, time, status: 'scheduled', homeGoals: null, awayGoals: null };
  }

  const inferredScore = inferGoalsFromScorersText(scorersText, homeTeam, awayTeam);
  if (inferredScore) {
    return {
      date,
      time,
      status: 'played',
      homeGoals: inferredScore.homeGoals,
      awayGoals: inferredScore.awayGoals,
    };
  }

  return { date, time, status: 'scheduled', homeGoals: null, awayGoals: null };
}

function inferGoalsFromScorersText(scorersText = '', homeTeam = '', awayTeam = '') {
  const text = String(scorersText || '').trim();
  if (!text || /^[-–—]+$/.test(text) || /^(nessuno|n\.d\.)$/i.test(text) || /a tavolino/i.test(text)) return null;

  const normalizedHome = normalizeAuthText(normalizeTeam(homeTeam) || homeTeam);
  const normalizedAway = normalizeAuthText(normalizeTeam(awayTeam) || awayTeam);
  const segments = text.split(/\s+-\s+/).map(segment => segment.trim()).filter(Boolean);

  let homeGoals = null;
  let awayGoals = null;
  let hasTeamLabels = false;

  segments.forEach(segment => {
    const dividerIndex = segment.indexOf(':');
    if (dividerIndex === -1) return;

    const label = normalizeAuthText(normalizeTeam(segment.slice(0, dividerIndex)) || segment.slice(0, dividerIndex));
    const scorerChunk = segment.slice(dividerIndex + 1).trim();
    const goalCount = countGoalsFromScorerSegment(scorerChunk);
    if (!Number.isFinite(goalCount)) return;

    if (label === normalizedHome) {
      homeGoals = goalCount;
      hasTeamLabels = true;
    } else if (label === normalizedAway) {
      awayGoals = goalCount;
      hasTeamLabels = true;
    }
  });

  if (hasTeamLabels && (Number.isFinite(homeGoals) || Number.isFinite(awayGoals))) {
    return {
      homeGoals: Number.isFinite(homeGoals) ? homeGoals : 0,
      awayGoals: Number.isFinite(awayGoals) ? awayGoals : 0,
    };
  }

  const genericCount = countGoalsFromScorerSegment(text);
  if (Number.isFinite(genericCount)) {
    return { homeGoals: genericCount, awayGoals: 0 };
  }

  return null;
}

function countGoalsFromScorerSegment(segment = '') {
  let text = String(segment || '')
    .replace(/[()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return 0;
  if (/a tavolino/i.test(text)) return null;

  let total = 0;
  const prefixPattern = /\b(\d+)\s+([A-Za-zÀ-ÿ'._]+(?:\s+[A-Za-zÀ-ÿ'._]+)*?)(?=(?:\s+\d+\s+[A-Za-zÀ-ÿ'._]+)|$|,)/g;
  text = text.replace(prefixPattern, (match, goals) => {
    total += Number(goals);
    return ' ';
  });

  const multiplierPattern = /\b([A-Za-zÀ-ÿ'._]+(?:\s+[A-Za-zÀ-ÿ'._]+)*?)\s*x\s*(\d+)\b/g;
  text = text.replace(multiplierPattern, (match, scorer, goals) => {
    total += Number(goals);
    return ' ';
  });

  const suffixPattern = /\b([A-Za-zÀ-ÿ'._]+(?:\s+[A-Za-zÀ-ÿ'._]+)*?)\s+(\d+)\b/g;
  text = text.replace(suffixPattern, (match, scorer, goals) => {
    total += Number(goals);
    return ' ';
  });

  const autoGoals = text.match(/autogol/gi) || [];
  total += autoGoals.length;
  text = text.replace(/autogol/gi, ' ');

  const leftovers = text
    .split(/,|\s{2,}/)
    .map(item => item.trim())
    .filter(item => item && !/^(marcatori|nessuno)$/i.test(item));

  total += leftovers.length;
  return total;
}



function clearAllFixtureResultsFromRaw(raw = '') {
  return String(raw || '')
    .replace(/(Giorno\s+\d{2}\/\d{2}\/\d{4}\s+alle\s+[0-9]{1,2}(?:[.,:][0-9]{1,2})?)\s+\d+\s*-\s*\d+/gi, '$1')
    .replace(/(Giorno\s+\d{2}\/\d{2}\/\d{4})(?!\s+alle)([^\r\n]*?)\s+\d+\s*-\s*\d+/gi, '$1$2');
}

function extractFixturesSourceFromRemote(raw = '') {
  let text = String(raw || '');
  if (!text.trim()) return '';

  if (/<[a-z][\s\S]*>/i.test(text)) {
    try {
      const doc = new DOMParser().parseFromString(text, 'text/html');
      text = doc.body?.innerText || doc.documentElement?.textContent || text;
    } catch (error) {
      console.warn("Impossibile leggere l'HTML delle partite.", error);
    }
  }

  const markdownIndex = text.indexOf('Markdown Content:');
  if (markdownIndex !== -1) {
    text = text.slice(markdownIndex + 'Markdown Content:'.length);
  }

  text = text
    .replace(/\*\*(Giornata\s+\d+)\*\*/gi, '\n$1\n')
    .replace(/####\s*(Andata|Ritorno)/gi, '\n$1\n')
    .replace(/\*\*([A-ZÀ-Ÿ0-9'._%/ ]+\s-\s[A-ZÀ-Ÿ0-9'._%/ ]+)\*\*/g, '\n$1\n')
    .replace(/(Marcatori:)/gi, '\n$1')
    .replace(/(Giorno\s+\d{2}\/\d{2}\/\d{4}[^\n]*?)(?=(?:\*\*[A-ZÀ-Ÿ0-9'._%/ ]+\s-\s[A-ZÀ-Ÿ0-9'._%/ ]+\*\*)|(?:\*\*Giornata\s+\d+\*\*)|(?:####\s*(?:Andata|Ritorno))|$)/gi, '\n$1\n')
    .replace(/\*\*/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n');

  const lines = text
    .replace(/\r/g, '')
    .split('\n')
    .map(line => line
      .replace(/\u00a0/g, ' ')
      .replace(/\t+/g, ' ')
      .replace(/^#+\s*/, '')
      .replace(/^\*+\s*/, '')
      .replace(/\s+/g, ' ')
      .trim())
    .filter(Boolean);

  const startIndex = lines.findIndex(line => /^(Andata|Giornata\s+1)$/i.test(line));
  if (startIndex === -1) return '';

  const endIndex = lines.findIndex((line, index) => index > startIndex && /^(Vai alla classifica|Vuoi partecipare come squadra\?|Contatti)$/i.test(line));
  const relevantLines = lines
    .slice(startIndex, endIndex === -1 ? lines.length : endIndex)
    .filter(line => /^(Giornata\s+\d+|Andata|Ritorno)$/i.test(line)
      || /^Marcatori:/i.test(line)
      || /^Giorno\s+\d{2}\/\d{2}\/\d{4}/i.test(line)
      || (/\s-\s/.test(line) && !/^Sorgente:/i.test(line)));

  return relevantLines.filter((line, index, arr) => index === 0 || line !== arr[index - 1]).join('\n');
}

async function fetchLatestFixturesSource() {
  const timestamp = Date.now();
  const endpoints = [
    {
      url: `${FIXTURES_SOURCE_URL}${FIXTURES_SOURCE_URL.includes('?') ? '&' : '?'}_=${timestamp}`,
      mode: 'text',
    },
    {
      url: `https://api.allorigins.win/get?url=${encodeURIComponent(FIXTURES_SOURCE_URL)}&_=${timestamp}`,
      mode: 'allorigins-json',
    },
    {
      url: `https://api.allorigins.win/raw?url=${encodeURIComponent(FIXTURES_SOURCE_URL)}&_=${timestamp}`,
      mode: 'text',
    },
    {
      url: 'https://r.jina.ai/http://www.noisportverona.it/risultati-campionato-di-calcio-a-5-m_CM20250000005',
      mode: 'text',
    },
  ];

  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint.url, {
        cache: 'no-store',
        headers: {
          Accept: endpoint.mode === 'allorigins-json' ? 'application/json,text/plain,*/*' : 'text/plain,text/html,*/*',
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      let remoteText = '';
      if (endpoint.mode === 'allorigins-json') {
        const payload = await response.json();
        remoteText = payload?.contents || '';
      } else {
        remoteText = await response.text();
      }

      const parsed = extractFixturesSourceFromRemote(remoteText);
      if (parsed) return parsed;
      lastError = new Error('Sorgente partite vuota o non riconoscibile.');
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('Sincronizzazione non disponibile.');
}

function formatFixturesCopyTimestamp(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString('it-IT');
}

function buildFixturesSnapshot(rawBody = '', copiedAt = new Date()) {
  const body = String(rawBody || '')
    .replace(/\r/g, '')
    .trim();
  const copiedAtLabel = formatFixturesCopyTimestamp(copiedAt);
  const header = [
    'Copia strutturata della pagina:',
    'Risultati partite CAMPIONATO DI CALCIO A 5 M',
    `Sorgente: ${FIXTURES_SOURCE_URL}`,
    copiedAtLabel ? `Data copiatura: ${copiedAtLabel}` : '',
    '',
    '# CAMPIONATO DI CALCIO A 5 M',
    '',
    '* UNICO',
  ].filter(Boolean).join('\n');
  return `${header}${body ? `\n\n${body}` : ''}`.replace(/\n{3,}/g, '\n\n').trim();
}

function applyFixturesImport(raw = '', options = {}) {
  const normalizedRaw = String(raw || '').replace(/\r/g, '').trim();
  if (!normalizedRaw) throw new Error('Il file TXT è vuoto.');
  const parsedMatches = parseSourceFixtures(normalizedRaw);
  if (!parsedMatches.length) throw new Error('Formato file non riconosciuto. Usa esattamente il tracciato del file esempio.');

  const copiedAtLabel = options?.copiedAtLabel || formatFixturesCopyTimestamp(new Date());
  state.remoteFixturesRaw = normalizedRaw;
  state.fixturesSyncError = '';
  state.fixturesCopiedAt = copiedAtLabel;
  state.lastSourceSync = copiedAtLabel;
  Object.values(state.matchEdits).forEach(edit => {
    if (edit && typeof edit === 'object') edit.overrideResult = false;
  });
  rebuildMatchesFromSource({ preserveResultOverrides: false });
  renderAll();
}

async function syncFixturesFromWebsite(options = {}) {
  if (fixturesSyncPromise) return fixturesSyncPromise;

  const {
    fallbackToBundled = true,
    silent = false,
  } = options || {};

  setFixturesSyncBusy(true);
  fixturesSyncPromise = (async () => {
    const copiedAt = new Date();
    try {
      const remoteBody = await fetchLatestFixturesSource();
      const snapshot = buildFixturesSnapshot(remoteBody, copiedAt);
      applyFixturesImport(snapshot, { copiedAtLabel: formatFixturesCopyTimestamp(copiedAt) });
      return snapshot;
    } catch (error) {
      console.warn('Errore sincronizzazione partite dal sito', error);
      if (fallbackToBundled) {
        try {
          const bundledRaw = await loadBundledFixturesText();
          applyFixturesImport(bundledRaw, { copiedAtLabel: formatFixturesCopyTimestamp(copiedAt) });
          state.fixturesSyncError = silent ? '' : 'Sincronizzazione dal sito non riuscita: caricata la copia locale del file.';
          saveState();
          updateSyncNote();
          renderAll();
          return bundledRaw;
        } catch (fallbackError) {
          error = fallbackError;
        }
      }
      state.fixturesSyncError = error?.message || 'Importazione del file non riuscita.';
      saveState();
      updateSyncNote();
      renderAll();
      if (!silent) throw error;
      return '';
    } finally {
      setFixturesSyncBusy(false);
      fixturesSyncPromise = null;
    }
  })();

  return fixturesSyncPromise;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeAuthText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}


function buildNameKey(firstName = '', lastName = '') {
  return normalizeAuthText(`${firstName} ${lastName}`);
}

function buildDefaultLoginSecurityState() {
  return {
    failedAttempts: 0,
    firstFailedAt: 0,
    lockedUntil: 0,
    lockLevel: 0,
    lastSuccessfulAt: 0,
  };
}

function normalizeLoginSecurityState(security = {}) {
  const now = Date.now();
  const failedAttempts = Number.isFinite(Number(security?.failedAttempts)) ? Math.max(0, Number(security.failedAttempts)) : 0;
  const firstFailedAt = Number.isFinite(Number(security?.firstFailedAt)) ? Math.max(0, Number(security.firstFailedAt)) : 0;
  const lockedUntil = Number.isFinite(Number(security?.lockedUntil)) ? Math.max(0, Number(security.lockedUntil)) : 0;
  const lockLevel = Number.isFinite(Number(security?.lockLevel)) ? Math.max(0, Number(security.lockLevel)) : 0;
  const lastSuccessfulAt = Number.isFinite(Number(security?.lastSuccessfulAt)) ? Math.max(0, Number(security.lastSuccessfulAt)) : 0;

  const windowExpired = firstFailedAt && (now - firstFailedAt) > AUTH_LOCKOUT_WINDOW_MS;
  const sanitizedFailedAttempts = windowExpired ? 0 : failedAttempts;
  const sanitizedFirstFailedAt = sanitizedFailedAttempts > 0 ? firstFailedAt : 0;
  const sanitizedLockedUntil = lockedUntil > now ? lockedUntil : 0;

  return {
    failedAttempts: sanitizedFailedAttempts,
    firstFailedAt: sanitizedFirstFailedAt,
    lockedUntil: sanitizedLockedUntil,
    lockLevel,
    lastSuccessfulAt,
  };
}

function getAuthSecurityStore() {
  if (!state.auth || typeof state.auth !== 'object') return {};
  if (!state.auth.loginSecurityByUser || typeof state.auth.loginSecurityByUser !== 'object') {
    state.auth.loginSecurityByUser = {};
  }
  return state.auth.loginSecurityByUser;
}

function normalizeLoginSecurityStore(store = {}) {
  if (!store || typeof store !== 'object') return {};
  const nextStore = {};
  Object.entries(store).forEach(([key, value]) => {
    const normalizedKey = normalizeAuthText(key);
    if (!normalizedKey) return;
    nextStore[normalizedKey] = normalizeLoginSecurityState(value);
  });
  return nextStore;
}

function getLoginSecurityKey(firstName = '', lastName = '') {
  const key = buildNameKey(firstName, lastName);
  return key || normalizeAuthText(`${firstName} ${lastName}`) || '__unknown__';
}

function getAuthSecurityStateByKey(key = '') {
  const normalizedKey = normalizeAuthText(key) || '__unknown__';
  const store = getAuthSecurityStore();
  return normalizeLoginSecurityState(store[normalizedKey]);
}

function saveAuthSecurityStateByKey(key = '', securityState = {}) {
  if (!state.auth || typeof state.auth !== 'object') return;
  const normalizedKey = normalizeAuthText(key) || '__unknown__';
  const store = getAuthSecurityStore();
  store[normalizedKey] = normalizeLoginSecurityState({
    ...getAuthSecurityStateByKey(normalizedKey),
    ...securityState,
  });
  state.auth.loginSecurityByUser = store;
}

function getRemainingLockMsForKey(key = '') {
  const security = getAuthSecurityStateByKey(key);
  return security.lockedUntil > Date.now() ? security.lockedUntil - Date.now() : 0;
}

function isLoginLockedForKey(key = '') {
  return getRemainingLockMsForKey(key) > 0;
}

function getLockoutDurationMs(lockLevel = 0) {
  if (lockLevel < AUTH_LOCKOUT_DURATIONS_MS.length) {
    return AUTH_LOCKOUT_DURATIONS_MS[lockLevel];
  }
  return (lockLevel - (AUTH_LOCKOUT_DURATIONS_MS.length - 1)) * 60 * 60 * 1000;
}

function registerLoginFailure(key = '') {
  const normalizedKey = getLoginSecurityKey(key);
  const security = getAuthSecurityStateByKey(normalizedKey);
  const now = Date.now();
  const withinWindow = security.firstFailedAt && (now - security.firstFailedAt) <= AUTH_LOCKOUT_WINDOW_MS;

  const nextSecurity = withinWindow
    ? { ...security, failedAttempts: security.failedAttempts + 1 }
    : { ...security, failedAttempts: 1, firstFailedAt: now };

  if (nextSecurity.failedAttempts >= AUTH_LOCKOUT_MAX_ATTEMPTS) {
    nextSecurity.lockedUntil = now + getLockoutDurationMs(nextSecurity.lockLevel);
    nextSecurity.lockLevel = (nextSecurity.lockLevel || 0) + 1;
    nextSecurity.failedAttempts = 0;
    nextSecurity.firstFailedAt = 0;
  }

  saveAuthSecurityStateByKey(normalizedKey, nextSecurity);
  return normalizeLoginSecurityState(nextSecurity);
}

function registerLoginSuccess(key = '') {
  const normalizedKey = getLoginSecurityKey(key);
  saveAuthSecurityStateByKey(normalizedKey, {
    failedAttempts: 0,
    firstFailedAt: 0,
    lockedUntil: 0,
    lockLevel: 0,
    lastSuccessfulAt: Date.now(),
  });
}

function formatLockoutRemaining(ms = 0) {
  const minutes = Math.max(1, Math.ceil(ms / 60000));
  return `${minutes} min`;
}

function getLoginFailureMessage(reason = 'invalid', key = '') {
  if (reason === 'locked') {
    const remainingMs = getRemainingLockMsForKey(key);
    return `Troppi tentativi. Riprova tra ${formatLockoutRemaining(remainingMs)}.`;
  }
  if (reason === 'retired') {
    return 'Accesso non disponibile per questo account.';
  }
  return 'Credenziali non valide o account non disponibile.';
}

function createDefaultAuthData() {
  return {
    externalManagers: clone(defaultExternalManagers).map(item => ({
      ...item,
      nameKey: buildNameKey(item.firstName, item.lastName),
    })),
    staffAccounts: [],
    managerPlayerIds: [],
    playerPasswords: {},
    hiddenPollIdsByUser: {},
    loginSecurityByUser: {},
    session: null,
  };
}

function getStaffMemberByRole(role = '') {
  const roleKey = normalizeAuthText(role);
  return state.staff.find(item => normalizeAuthText(item.role) === roleKey) || null;
}

function getSpecialStaffConfigById(accountId = '') {
  return specialStaffRoleConfig.find(item => item.id === accountId) || null;
}

function getStaffAccountById(accountId = '') {
  return (state.auth?.staffAccounts || []).find(item => item.id === accountId) || null;
}

function getSpecialAccountsByPlayerId(playerId = '') {
  return (state.auth?.staffAccounts || []).filter(item => item.linkedPlayerId === playerId);
}

function getSpecialAccountByPlayerId(playerId = '') {
  return getSpecialAccountsByPlayerId(playerId)[0] || null;
}

function getPlayerCredential(playerId = '') {
  return state.auth?.playerPasswords?.[playerId] || { password: DEFAULT_LOGIN_PASSWORD, mustChangePassword: true };
}

function getLoginPasswordForPlayer(playerId = '') {
  return getPlayerCredential(playerId).password;
}

function normalizeRecoveryEmail(value = '') {
  return String(value || '').trim().toLowerCase();
}

function isValidRecoveryEmail(value = '') {
  const email = normalizeRecoveryEmail(value);
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getDefaultRecoveryEmailForIdentity(firstName = '', lastName = '') {
  return buildNameKey(firstName, lastName) === buildNameKey('Andrea', 'Bosio')
    ? 'andrea.bosio.94@gmail.com'
    : '';
}

function getRecoveryEmailForPlayer(playerId = '') {
  return normalizeRecoveryEmail(state.auth?.playerPasswords?.[playerId]?.recoveryEmail || '');
}

function getCurrentUserRecoveryEmail() {
  if (!authState.currentUser) return '';
  if (authState.currentUser.accountType === 'player') {
    return getRecoveryEmailForPlayer(authState.currentUser.playerId);
  }
  if (authState.currentUser.accountType === 'staff-account') {
    const account = getStaffAccountById(authState.currentUser.staffAccountId);
    return normalizeRecoveryEmail(
      account?.recoveryEmail
      || (account?.linkedPlayerId ? getRecoveryEmailForPlayer(account.linkedPlayerId) : '')
      || getDefaultRecoveryEmailForIdentity(authState.currentUser.firstName, authState.currentUser.lastName)
    );
  }
  const manager = (state.auth?.externalManagers || []).find(item => item.id === authState.currentUser.externalManagerId);
  return normalizeRecoveryEmail(
    manager?.recoveryEmail
    || getDefaultRecoveryEmailForIdentity(authState.currentUser.firstName, authState.currentUser.lastName)
  );
}

function updateRecoveryEmailForUser(user, recoveryEmail = '') {
  const normalizedEmail = normalizeRecoveryEmail(recoveryEmail);
  if (!user || !normalizedEmail || !isValidRecoveryEmail(normalizedEmail)) return false;

  if (user.accountType === 'player') {
    const currentCredential = state.auth.playerPasswords[user.playerId] || {};
    state.auth.playerPasswords[user.playerId] = {
      password: currentCredential.password || DEFAULT_LOGIN_PASSWORD,
      mustChangePassword: currentCredential.mustChangePassword == null ? true : Boolean(currentCredential.mustChangePassword),
      recoveryEmail: normalizedEmail,
    };
    return true;
  }

  if (user.accountType === 'staff-account') {
    const accountIds = Array.isArray(user.staffAccountIds)
      ? user.staffAccountIds
      : [user.staffAccountId].filter(Boolean);
    const accounts = accountIds.map(id => getStaffAccountById(id)).filter(Boolean);
    if (!accounts.length) return false;
    accounts.forEach(account => {
      account.recoveryEmail = normalizedEmail;
      if (account.linkedPlayerId) {
        const linkedCredential = state.auth.playerPasswords[account.linkedPlayerId] || {};
        state.auth.playerPasswords[account.linkedPlayerId] = {
          password: linkedCredential.password || account.password || DEFAULT_LOGIN_PASSWORD,
          mustChangePassword: linkedCredential.mustChangePassword == null ? Boolean(account.mustChangePassword) : Boolean(linkedCredential.mustChangePassword),
          recoveryEmail: normalizedEmail,
        };
      }
    });
    return true;
  }

  const manager = (state.auth?.externalManagers || []).find(item => item.id === user.externalManagerId);
  if (!manager) return false;
  manager.recoveryEmail = normalizedEmail;
  return true;
}

function getStaffAccountByRole(role = '') {
  const roleKey = normalizeAuthText(role);
  const config = specialStaffRoleConfig.find(item => normalizeAuthText(item.staffRole) === roleKey);
  return config ? getStaffAccountById(config.id) : null;
}

function canEditStaffRole(role = '') {
  const roleKey = normalizeAuthText(role);
  if (!roleKey) return false;
  if (isPresidentUser()) return roleKey === normalizeAuthText('Allenatore');
  return isManagerUser() && [normalizeAuthText('Presidente'), normalizeAuthText('Allenatore')].includes(roleKey);
}

function isAutomaticRecoveryEmailConfigured() {
  return Boolean(
    EMAIL_RECOVERY_CONFIG.enabled
    && EMAIL_RECOVERY_CONFIG.publicKey
    && EMAIL_RECOVERY_CONFIG.serviceId
    && EMAIL_RECOVERY_CONFIG.templateId
    && window.emailjs
  );
}


function buildRecoveryTarget(firstName = '', lastName = '') {
  const nameKey = buildNameKey(firstName, lastName);
  if (!nameKey) return null;

  const staffAccount = (state.auth?.staffAccounts || []).find(item => buildNameKey(item.firstName, item.lastName) === nameKey);
  if (staffAccount) {
    return {
      nameKey,
      fullName: `${staffAccount.firstName} ${staffAccount.lastName}`.trim(),
      firstName: staffAccount.firstName,
      lastName: staffAccount.lastName,
      roleLabel: staffAccount.roleLabel || (staffAccount.permissionRole === 'manager' ? 'Gestore' : 'Giocatore'),
      password: staffAccount.password || DEFAULT_LOGIN_PASSWORD,
      mustChangePassword: Boolean(staffAccount.mustChangePassword),
      recoveryEmail: normalizeRecoveryEmail(
        staffAccount.recoveryEmail
        || (staffAccount.linkedPlayerId ? getRecoveryEmailForPlayer(staffAccount.linkedPlayerId) : '')
      ),
    };
  }

  const manager = (state.auth?.externalManagers || []).find(item => item.nameKey === nameKey);
  if (manager) {
    return {
      nameKey,
      fullName: `${manager.firstName} ${manager.lastName}`.trim(),
      firstName: manager.firstName,
      lastName: manager.lastName,
      roleLabel: 'Gestore',
      password: manager.password || DEFAULT_LOGIN_PASSWORD,
      mustChangePassword: Boolean(manager.mustChangePassword),
      recoveryEmail: normalizeRecoveryEmail(manager.recoveryEmail || ''),
    };
  }

  const player = state.players.find(item => buildNameKey(item.firstName, item.lastName) === nameKey);
  if (!player) return null;
  const credential = getPlayerCredential(player.id);
  return {
    nameKey,
    fullName: getPlayerFullName(player),
    firstName: player.firstName,
    lastName: player.lastName,
    roleLabel: isPlayerManager(player.id) ? 'Gestore' : 'Giocatore',
    password: credential.password || DEFAULT_LOGIN_PASSWORD,
    mustChangePassword: Boolean(credential.mustChangePassword),
    recoveryEmail: normalizeRecoveryEmail(credential.recoveryEmail || ''),
  };
}

function canRecoverTargetPassword(target) {
  if (!target) return false;
  if (!target.recoveryEmail) return false;
  if (target.mustChangePassword) return false;
  if ((target.password || '') === DEFAULT_LOGIN_PASSWORD) return false;
  return true;
}

function setRecoveryModalMessage(message = '', type = 'info') {
  const box = document.getElementById('recoveryModalText');
  if (!box) return;
  box.textContent = message;
  box.classList.remove('recovery-note-error', 'recovery-note-success');
  if (type === 'error') box.classList.add('recovery-note-error');
  if (type === 'success') box.classList.add('recovery-note-success');
}

async function dispatchRecoveryEmail(target) {
  if (!isAutomaticRecoveryEmailConfigured()) {
    throw new Error('EMAIL_SERVICE_NOT_CONFIGURED');
  }

  const subject = 'Recupero password - I Malavoglia C5';
  const message = [
    `Ciao ${target.fullName},`,
    '',
    `la password del tuo account ${target.roleLabel} e: ${target.password}`,
    '',
    'App I Malavoglia C5',
  ].join('\n');

  window.emailjs.init({ publicKey: EMAIL_RECOVERY_CONFIG.publicKey });
  await window.emailjs.send(EMAIL_RECOVERY_CONFIG.serviceId, EMAIL_RECOVERY_CONFIG.templateId, {
    to_email: target.recoveryEmail,
    to_name: target.fullName,
    first_name: target.firstName,
    last_name: target.lastName,
    role_label: target.roleLabel,
    password_value: target.password,
    subject,
    message,
  });

  return { mode: 'emailjs' };
}

function isManagerUser() {
  return authState.currentUser?.role === 'manager';
}

function currentUserHasStaffRole(role = '') {
  if (authState.currentUser?.accountType !== 'staff-account') return false;
  const roleKey = normalizeAuthText(role);
  const accountIds = Array.isArray(authState.currentUser.staffAccountIds)
    ? authState.currentUser.staffAccountIds
    : [authState.currentUser.staffAccountId].filter(Boolean);
  return accountIds
    .map(id => getStaffAccountById(id))
    .filter(Boolean)
    .some(account => normalizeAuthText(account.staffRole || account.roleLabel) === roleKey);
}

function isPresidentUser() {
  return currentUserHasStaffRole('Presidente');
}

function isAndreaBosioAccount() {
  if (!authState.currentUser) return false;
  return buildNameKey(authState.currentUser.firstName, authState.currentUser.lastName) === buildNameKey('Andrea', 'Bosio');
}

function canManageMatches() {
  return isManagerUser();
}

function canImportFixtures() {
  return isManagerUser() || isPresidentUser();
}

function canManagePolls() {
  return isManagerUser() || currentUserHasStaffRole('Allenatore') || currentUserHasStaffRole('Presidente');
}

function canViewPollResponderNames() {
  return isPlayerUser() || canManagePolls();
}

function canViewPollResponseTimestamps() {
  return isManagerUser() || isPresidentUser();
}

function isPlayerUser() {
  return authState.currentUser?.accountType === 'player';
}

function canViewWeatherMeta() {
  return isManagerUser();
}

function shouldHideRosterPhonesForCurrentUser() {
  return currentUserHasStaffRole('Presidente') || currentUserHasStaffRole('Allenatore');
}

function canViewRosterPhoneForPlayer(playerId = '') {
  if (!authState.currentUser) return false;
  if (shouldHideRosterPhonesForCurrentUser()) return false;
  if (!isPlayerUser()) return true;
  return Boolean(authState.currentUser.playerId && authState.currentUser.playerId === playerId);
}

function canViewStaffPhone() {
  if (!authState.currentUser) return false;
  if (shouldHideRosterPhonesForCurrentUser()) return false;
  return !isPlayerUser();
}

function getCurrentPollViewerKey() {
  const user = authState.currentUser;
  if (!user) return '';
  if (user.accountType === 'player') return `player:${user.playerId || ''}`;
  if (user.accountType === 'staff-account') {
    const ids = Array.isArray(user.staffAccountIds) ? user.staffAccountIds : [user.staffAccountId].filter(Boolean);
    return `staff:${ids.sort().join('|') || buildNameKey(user.firstName, user.lastName)}`;
  }
  if (user.accountType === 'external-manager') return `external-manager:${user.externalManagerId || buildNameKey(user.firstName, user.lastName)}`;
  return `${user.accountType || 'user'}:${buildNameKey(user.firstName, user.lastName)}`;
}

function getHiddenPollIdsForCurrentUser() {
  const viewerKey = getCurrentPollViewerKey();
  if (!viewerKey) return [];
  const value = state.auth?.hiddenPollIdsByUser?.[viewerKey];
  return Array.isArray(value) ? value : [];
}

function isPollHiddenForCurrentUser(pollId = '') {
  return getHiddenPollIdsForCurrentUser().includes(pollId);
}

function isPollDeletedForRecipients(poll) {
  return Boolean(poll?.creatorDeletedAt || poll?.creatorDeletedByViewerKey);
}

function canDeletePollFromCurrentAccount(poll) {
  if (!poll) return false;
  
  const isDeletedForAll = isPollDeletedForRecipients(poll);
  if (isDeletedForAll) return true;
  
  if (isNoticeWithoutSurvey(poll)) return isNoticeHomeExpired(poll);
  
  if (isNoticePoll(poll) && poll?.includeSurvey) return isNoticeHomeExpired(poll);
  
  if (isPureSurvey(poll)) return isSurveyHomeExpired(poll);
  
  return false;
}

function hidePollForCurrentUser(pollId = '') {
  if (!pollId) return;
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll) return;
  if (!canDeletePollFromCurrentAccount(poll)) return;

  const viewerKey = getCurrentPollViewerKey();
  if (!viewerKey) return;
  const hiddenMap = state.auth.hiddenPollIdsByUser || (state.auth.hiddenPollIdsByUser = {});
  const current = Array.isArray(hiddenMap[viewerKey]) ? hiddenMap[viewerKey] : [];

  if (!current.includes(pollId)) hiddenMap[viewerKey] = [...current, pollId];
  if (ensurePollDraft().editingPollId === pollId) {
    uiState.pollDraft = createDefaultPollDraft();
    uiState.pollComposerOpen = false;
  }
  saveState();
  renderPolls();
  renderHome();
}


function deletePollGlobally(pollId = '') {
  if (!pollId) return;
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll) return;
  if (!isPollCreatedByCurrentUser(poll)) return;
  deletePollImageAsset(poll.imageAssetId || '');
  state.polls = (state.polls || []).filter(item => item.id !== pollId);
  const hiddenMap = state.auth.hiddenPollIdsByUser || {};
  Object.keys(hiddenMap).forEach(viewerKey => {
    const ids = Array.isArray(hiddenMap[viewerKey]) ? hiddenMap[viewerKey] : [];
    hiddenMap[viewerKey] = ids.filter(id => id !== pollId);
  });
  if (ensurePollDraft().editingPollId === pollId) {
    uiState.pollDraft = createDefaultPollDraft();
    uiState.pollComposerOpen = false;
  }
  saveState();
  renderPolls();
  renderHome();
}

function canManageRoster() {
  return isManagerUser() || currentUserHasStaffRole('Allenatore') || currentUserHasStaffRole('Presidente');
}

function canViewPlayerPasswords() {
  return isAndreaBosioAccount();
}

function canToggleManagerAssignments() {
  return isAndreaBosioAccount() || isPresidentUser();
}

function canUseTopPasswordButton() {
  return Boolean(authState.currentUser) && authState.currentUser.accountType === 'external-manager';
}

function hasProfileAccess() {
  return Boolean(authState.currentUser) && ['player', 'staff-account'].includes(authState.currentUser.accountType);
}

function isPlayerManager(playerId = '') {
  return Boolean(playerId) && Array.isArray(state.auth?.managerPlayerIds) && state.auth.managerPlayerIds.includes(playerId);
}

function buildCompositeRoleLabel(accounts = []) {
  const labels = [];
  accounts.forEach(account => {
    const label = account?.roleLabel || account?.staffRole;
    if (label && !labels.includes(label)) labels.push(label);
  });
  return labels.join(' • ') || 'Giocatore';
}

function buildStaffAccountUser(accountOrAccounts) {
  const accounts = Array.isArray(accountOrAccounts) ? accountOrAccounts.filter(Boolean) : [accountOrAccounts].filter(Boolean);
  if (!accounts.length) return null;
  const linkedPlayerId = accounts.find(item => item?.linkedPlayerId)?.linkedPlayerId || null;
  const player = linkedPlayerId ? getPlayerById(linkedPlayerId) : null;
  const primary = accounts[0];
  const firstName = player?.firstName || primary.firstName || '';
  const lastName = player?.lastName || primary.lastName || '';
  const role = accounts.some(item => item.permissionRole === 'manager') ? 'manager' : 'player';
  const roleLabel = buildCompositeRoleLabel(accounts);
  return {
    role,
    roleLabel,
    accountType: 'staff-account',
    staffAccountId: primary.id,
    staffAccountIds: accounts.map(item => item.id),
    playerId: player?.id || null,
    firstName,
    lastName,
    displayName: `${firstName} ${lastName}`.trim(),
    mustChangePassword: accounts.some(item => Boolean(item.mustChangePassword)),
    photo: player?.photo || primary.photo || '',
  };
}

function buildPlayerUser(player) {
  const credential = getPlayerCredential(player.id);
  return {
    role: isPlayerManager(player.id) ? 'manager' : 'player',
    roleLabel: isPlayerManager(player.id) ? 'Gestore' : 'Giocatore',
    accountType: 'player',
    playerId: player.id,
    firstName: player.firstName,
    lastName: player.lastName,
    displayName: getPlayerFullName(player),
    mustChangePassword: Boolean(credential.mustChangePassword),
    photo: player.photo || '',
  };
}

function buildExternalManagerUser(manager) {
  return {
    role: 'manager',
    roleLabel: 'Gestore',
    accountType: 'external-manager',
    externalManagerId: manager.id,
    firstName: manager.firstName,
    lastName: manager.lastName,
    displayName: `${manager.firstName} ${manager.lastName}`.trim(),
    mustChangePassword: Boolean(manager.mustChangePassword),
    photo: '',
  };
}

function buildSessionFromUser(user) {
  if (!user) return null;
  const now = Date.now();
  const base = {
    issuedAt: now,
    lastSeenAt: now,
    expiresAt: now + AUTH_SESSION_TTL_MS,
  };
  if (user.accountType === 'player') {
    return { ...base, type: 'player', playerId: user.playerId };
  }
  if (user.accountType === 'staff-account') {
    return {
      ...base,
      type: 'staff-account',
      staffAccountId: user.staffAccountId,
      staffAccountIds: Array.isArray(user.staffAccountIds) ? user.staffAccountIds : [user.staffAccountId].filter(Boolean),
      nameKey: buildNameKey(user.firstName, user.lastName),
    };
  }
  return { ...base, type: 'external-manager', managerId: user.externalManagerId, nameKey: buildNameKey(user.firstName, user.lastName) };
}

function isSessionExpired(session) {
  return Boolean(session && Number.isFinite(Number(session.expiresAt)) && Number(session.expiresAt) > 0 && Date.now() > Number(session.expiresAt));
}

function resolveSessionUser(session) {
  if (!session || !state.auth) return null;
  if (isSessionExpired(session)) return null;

  if (session.type === 'external-manager') {
    const manager = (state.auth.externalManagers || []).find(item => item.id === session.managerId || item.nameKey === session.nameKey);
    if (!manager) return null;
    return buildExternalManagerUser(manager);
  }

  if (session.type === 'staff-account') {
    const requestedIds = Array.isArray(session.staffAccountIds) ? session.staffAccountIds : [session.staffAccountId].filter(Boolean);
    let accounts = (state.auth.staffAccounts || []).filter(item => requestedIds.includes(item.id));
    if (!accounts.length && session.nameKey) {
      accounts = (state.auth.staffAccounts || []).filter(item => buildNameKey(item.firstName, item.lastName) === session.nameKey);
    }
    if (!accounts.length) return null;
    return buildStaffAccountUser(accounts);
  }

  if (session.type === 'player') {
    const player = state.players.find(item => item.id === session.playerId);
    if (!player || player.status === 'retired') return null;
    return buildPlayerUser(player);
  }

  return null;
}

function ensureAuthStateIntegrity() {
  if (!state.auth || typeof state.auth !== 'object') {
    state.auth = createDefaultAuthData();
  }

  if (!Array.isArray(state.auth.externalManagers)) state.auth.externalManagers = [];
  if (!Array.isArray(state.auth.staffAccounts)) state.auth.staffAccounts = [];
  if (!Array.isArray(state.auth.managerPlayerIds)) state.auth.managerPlayerIds = [];
  if (!state.auth.playerPasswords || typeof state.auth.playerPasswords !== 'object') state.auth.playerPasswords = {};
  if (!state.auth.hiddenPollIdsByUser || typeof state.auth.hiddenPollIdsByUser !== 'object') state.auth.hiddenPollIdsByUser = {};
  state.auth.loginSecurityByUser = normalizeLoginSecurityStore(state.auth.loginSecurityByUser || {});

  const andreaKey = buildNameKey('Andrea', 'Bosio');
  if (!state.auth.externalManagers.some(item => buildNameKey(item.firstName, item.lastName) === andreaKey)) {
    state.auth.externalManagers.unshift({
      id: 'mgr-andrea-bosio',
      firstName: 'Andrea',
      lastName: 'Bosio',
      password: DEFAULT_LOGIN_PASSWORD,
      mustChangePassword: false,
      nameKey: andreaKey,
    });
  }

  state.auth.externalManagers = state.auth.externalManagers.map(item => ({
    ...item,
    nameKey: buildNameKey(item.firstName, item.lastName),
    password: typeof item.password === 'string' && item.password ? item.password : DEFAULT_LOGIN_PASSWORD,
    mustChangePassword: Boolean(item.mustChangePassword),
    recoveryEmail: normalizeRecoveryEmail(item.recoveryEmail || getDefaultRecoveryEmailForIdentity(item.firstName, item.lastName)),
  }));

  const validPlayerIds = new Set(state.players.map(player => player.id));
  const nextPlayerPasswords = {};
  state.players.forEach(player => {
    const existing = state.auth.playerPasswords[player.id] || {};
    nextPlayerPasswords[player.id] = {
      password: typeof existing.password === 'string' && existing.password ? existing.password : DEFAULT_LOGIN_PASSWORD,
      mustChangePassword: existing.mustChangePassword == null ? true : Boolean(existing.mustChangePassword),
      recoveryEmail: normalizeRecoveryEmail(existing.recoveryEmail || getDefaultRecoveryEmailForIdentity(player.firstName, player.lastName)),
    };
  });
  state.auth.playerPasswords = nextPlayerPasswords;
  state.auth.managerPlayerIds = state.auth.managerPlayerIds.filter(playerId => validPlayerIds.has(playerId));

  state.auth.staffAccounts = specialStaffRoleConfig.map(config => {
    const current = state.auth.staffAccounts.find(item => item.id === config.id) || {};
    const staffMember = getStaffMemberByRole(config.staffRole);
    const hasExplicitPlayerLink = Boolean(current.linkedPlayerId && validPlayerIds.has(current.linkedPlayerId));
    let linkedPlayer = hasExplicitPlayerLink ? getPlayerById(current.linkedPlayerId) : null;
    const manualMode = current.linkMode === 'manual';
    if (!linkedPlayer && !manualMode && staffMember) {
      linkedPlayer = state.players.find(player => buildNameKey(player.firstName, player.lastName) === buildNameKey(staffMember.firstName, staffMember.lastName)) || null;
    }

    if (linkedPlayer && staffMember) {
      staffMember.firstName = linkedPlayer.firstName;
      staffMember.lastName = linkedPlayer.lastName;
      staffMember.phone = linkedPlayer.phone || staffMember.phone || '';
    }

    const linkedCredential = linkedPlayer ? state.auth.playerPasswords[linkedPlayer.id] : null;
    const password = typeof current.password === 'string' && current.password
      ? current.password
      : (linkedCredential?.password || DEFAULT_LOGIN_PASSWORD);
    const mustChangePassword = current.mustChangePassword == null
      ? Boolean(linkedCredential?.mustChangePassword ?? false)
      : Boolean(current.mustChangePassword);
    const firstName = linkedPlayer?.firstName || staffMember?.firstName || current.firstName || '';
    const lastName = linkedPlayer?.lastName || staffMember?.lastName || current.lastName || '';
    const phone = linkedPlayer?.phone || staffMember?.phone || current.phone || '';
    const recoveryEmail = normalizeRecoveryEmail(
      current.recoveryEmail
      || linkedCredential?.recoveryEmail
      || getDefaultRecoveryEmailForIdentity(firstName, lastName)
    );

    if (linkedPlayer && state.auth.playerPasswords[linkedPlayer.id]) {
      state.auth.playerPasswords[linkedPlayer.id].password = password;
      state.auth.playerPasswords[linkedPlayer.id].mustChangePassword = mustChangePassword;
      state.auth.playerPasswords[linkedPlayer.id].recoveryEmail = recoveryEmail;
    }

    return {
      id: config.id,
      staffRole: config.staffRole,
      roleLabel: config.roleLabel,
      permissionRole: config.permissionRole,
      linkedPlayerId: linkedPlayer?.id || null,
      linkMode: linkedPlayer ? 'player' : 'manual',
      firstName,
      lastName,
      phone,
      photo: linkedPlayer?.photo || current.photo || '',
      password,
      mustChangePassword,
      recoveryEmail,
    };
  });


  const staffAccountsByPlayer = new Map();
  state.auth.staffAccounts.forEach(account => {
    if (!account.linkedPlayerId) return;
    const list = staffAccountsByPlayer.get(account.linkedPlayerId) || [];
    list.push(account);
    staffAccountsByPlayer.set(account.linkedPlayerId, list);
  });

  staffAccountsByPlayer.forEach((accounts, playerId) => {
    const sharedCredential = state.auth.playerPasswords[playerId];
    if (!sharedCredential) return;
    accounts.forEach(account => {
      account.password = sharedCredential.password;
      account.mustChangePassword = Boolean(sharedCredential.mustChangePassword);
      account.recoveryEmail = normalizeRecoveryEmail(sharedCredential.recoveryEmail || account.recoveryEmail || getDefaultRecoveryEmailForIdentity(account.firstName, account.lastName));
    });
  });

  if (state.auth.session && (!resolveSessionUser(state.auth.session) || isSessionExpired(state.auth.session))) {
    state.auth.session = null;
  }
}

function setCurrentUser(user) {
  authState.currentUser = user || null;
  if (authState.currentUser) {
    registerLoginSuccess(buildNameKey(authState.currentUser.firstName, authState.currentUser.lastName));
  }
  if (state.auth) state.auth.session = buildSessionFromUser(authState.currentUser);
  saveState();
  applyAuthLayout();
  closeRecoveryModal();
  closeRecoveryEmailModal();
  closeStaffEditModal();
  renderAll();
  if (authState.currentUser?.mustChangePassword) {
    openPasswordModal();
  } else {
    closePasswordModal();
  }
}


function logout() {
  authState.currentUser = null;
  if (state.auth) state.auth.session = null;
  uiState.expandedPlayerId = null;
  uiState.revealedPlayerPasswordIds = [];
  uiState.expandedMatchId = null;
  uiState.editingMatchId = null;
  uiState.targetMatchId = null;
  saveState();
  applyAuthLayout();
  renderAll();
  closeTopMenu();
  if (window.location.hash === '#profilo') {
    window.location.hash = '#home';
  }
  setLoginMessage('Disconnessione eseguita.', 'info');
}

function openTopMenu() {
  const dropdown = document.getElementById('topMenuDropdown');
  const button = document.getElementById('topMenuBtn');
  if (!dropdown || !button || !authState.currentUser) return;
  dropdown.classList.remove('hidden');
  button.setAttribute('aria-expanded', 'true');
}

function closeTopMenu() {
  const dropdown = document.getElementById('topMenuDropdown');
  const button = document.getElementById('topMenuBtn');
  if (!dropdown || !button) return;
  dropdown.classList.add('hidden');
  button.setAttribute('aria-expanded', 'false');
}

function toggleTopMenu() {
  const dropdown = document.getElementById('topMenuDropdown');
  if (!dropdown || !authState.currentUser) return;
  if (dropdown.classList.contains('hidden')) {
    openTopMenu();
  } else {
    closeTopMenu();
  }
}

function handleTopMenuAction(action = '') {
  if (!authState.currentUser) return;
  closeTopMenu();
  if (action === 'home') {
    uiState.targetMatchId = null;
    if (window.location.hash !== '#home') {
      window.location.hash = '#home';
    } else {
      renderNavigation();
    }
    return;
  }
  if (action === 'password') {
    openPasswordModal();
    return;
  }
  if (action === 'logout') {
    logout();
  }
}

function attemptLogin(firstName = '', lastName = '', password = '') {
  const nameKey = buildNameKey(firstName, lastName);
  if (nameKey && isLoginLockedForKey(nameKey)) return { user: null, error: 'locked', nameKey };

  if (!nameKey || !password) return { user: null, error: 'empty', nameKey };

  const staffAccounts = (state.auth?.staffAccounts || []).filter(item => buildNameKey(item.firstName, item.lastName) === nameKey);
  if (staffAccounts.length) {
    const matchedAccounts = staffAccounts.filter(item => item.password === password);
    if (!matchedAccounts.length) return { user: null, error: 'invalid', nameKey };
    return { user: buildStaffAccountUser(staffAccounts), error: null, nameKey };
  }

  const manager = (state.auth?.externalManagers || []).find(item => item.nameKey === nameKey);
  if (manager) {
    if (manager.password !== password) return { user: null, error: 'invalid', nameKey };
    return { user: buildExternalManagerUser(manager), error: null, nameKey };
  }

  const player = state.players.find(item => buildNameKey(item.firstName, item.lastName) === nameKey);
  if (!player) return { user: null, error: 'invalid', nameKey };
  if (player.status === 'retired') return { user: null, error: 'retired', nameKey };
  const credential = getPlayerCredential(player.id);
  if (credential.password !== password) return { user: null, error: 'invalid', nameKey };

  return { user: buildPlayerUser(player), error: null, nameKey };
}

function setLoginMessage(message = '', type = 'info') {
  const box = document.getElementById('loginMessage');
  if (!box) return;
  box.innerHTML = message;
  box.dataset.state = type;
}

function updateAccountSummary() {
  const summary = document.getElementById('accountSummary');
  const name = document.getElementById('accountNameLabel');
  const role = document.getElementById('accountRoleLabel');
  const brandRole = document.getElementById('brandRoleLabel');
  if (!summary || !name || !role) return;

  if (!authState.currentUser) {
    summary.classList.add('hidden');
    summary.setAttribute('aria-label', 'Account corrente');
    name.textContent = '--';
    role.textContent = '--';
    if (brandRole) brandRole.textContent = 'Manager';
    return;
  }

  summary.classList.remove('hidden');
  summary.setAttribute('role', 'button');
  summary.setAttribute('tabindex', '0');
  summary.setAttribute('aria-label', 'Vai alla Home');
  name.textContent = authState.currentUser.firstName || authState.currentUser.displayName.split(' ')[0] || authState.currentUser.displayName;
  role.textContent = authState.currentUser.roleLabel || (authState.currentUser.role === 'manager' ? 'Gestore' : 'Giocatore');
  if (brandRole) brandRole.textContent = role.textContent;
}

function applyAuthLayout() {
  const isAuthenticated = Boolean(authState.currentUser);
  document.body.classList.toggle('app-locked', !isAuthenticated);
  document.body.classList.toggle('app-authenticated', isAuthenticated);
  document.getElementById('authScreen')?.classList.toggle('hidden', isAuthenticated);
  updateAccountSummary();
  if (!isAuthenticated) {
    closeTopMenu();
    closePasswordModal();
    closeRecoveryModal();
    closeRecoveryEmailModal();
    closeStaffEditModal();
  }
}

function openPasswordModal(message = '') {
  const modal = document.getElementById('passwordModal');
  const copy = document.getElementById('passwordModalText');
  const form = document.getElementById('passwordForm');
  if (!modal || !copy || !form) return;
  copy.textContent = message || '';
  copy.classList.toggle('hidden', !message);
  form.reset();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closePasswordModal() {
  const modal = document.getElementById('passwordModal');
  const form = document.getElementById('passwordForm');
  if (!modal || !form) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
}

function openRecoveryModal() {
  const modal = document.getElementById('recoveryModal');
  const form = document.getElementById('recoveryForm');
  const firstNameInput = document.getElementById('recoveryFirstName');
  const lastNameInput = document.getElementById('recoveryLastName');
  const loginFirstName = document.getElementById('loginFirstName')?.value.trim() || '';
  const loginLastName = document.getElementById('loginLastName')?.value.trim() || '';
  if (!modal || !form || !firstNameInput || !lastNameInput) return;
  form.reset();
  firstNameInput.value = loginFirstName;
  lastNameInput.value = loginLastName;
  setRecoveryModalMessage("Inserisci nome e cognome dell'account.", 'info');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeRecoveryModal() {
  const modal = document.getElementById('recoveryModal');
  const form = document.getElementById('recoveryForm');
  if (!modal || !form) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
}


function setRecoveryEmailModalMessage(message = '', type = 'info') {
  const box = document.getElementById('recoveryEmailModalText');
  if (!box) return;
  box.textContent = message;
  box.classList.remove('recovery-note-error', 'recovery-note-success');
  if (type === 'error') box.classList.add('recovery-note-error');
  if (type === 'success') box.classList.add('recovery-note-success');
}

function openRecoveryEmailModal() {
  const modal = document.getElementById('recoveryEmailModal');
  const form = document.getElementById('recoveryEmailForm');
  const firstNameInput = document.getElementById('recoveryEmailFirstName');
  const lastNameInput = document.getElementById('recoveryEmailLastName');
  const loginFirstName = document.getElementById('loginFirstName')?.value.trim() || '';
  const loginLastName = document.getElementById('loginLastName')?.value.trim() || '';
  if (!modal || !form || !firstNameInput || !lastNameInput) return;
  form.reset();
  firstNameInput.value = loginFirstName;
  lastNameInput.value = loginLastName;
  setRecoveryEmailModalMessage("Inserisci i dati dell'account e salva l'email di recupero.", 'info');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeRecoveryEmailModal() {
  const modal = document.getElementById('recoveryEmailModal');
  const form = document.getElementById('recoveryEmailForm');
  if (!modal || !form) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
}

function setStaffModalMessage(message = '', type = 'info') {
  const box = document.getElementById('staffModalText');
  if (!box) return;
  box.textContent = message;
  box.classList.toggle('hidden', !message);
  box.classList.remove('recovery-note-error', 'recovery-note-success');
  if (type === 'error') box.classList.add('recovery-note-error');
  if (type === 'success') box.classList.add('recovery-note-success');
}

function populateStaffLinkedPlayerOptions(role = '', selectedId = '') {
  const select = document.getElementById('staffLinkedPlayerId');
  if (!select) return;
  const normalizedSelectedId = selectedId || '';
  const currentRole = normalizeAuthText(role);
  const availablePlayers = state.players
    .slice()
    .sort((a, b) => getPlayerFullName(a).localeCompare(getPlayerFullName(b), 'it', { sensitivity: 'base' }));

  select.innerHTML = [
    '<option value="">Inserimento libero</option>',
    ...availablePlayers.map(player => {
      const specialAccounts = getSpecialAccountsByPlayerId(player.id);
      const labels = specialAccounts
        .filter(account => normalizeAuthText(account.staffRole || account.roleLabel) !== currentRole)
        .map(account => escapeHtml(account.roleLabel || account.staffRole || ''));
      const selected = player.id === normalizedSelectedId ? ' selected' : '';
      const suffix = labels.length ? ` — già ${labels.join(' • ')}` : '';
      return `<option value="${escapeHtml(player.id)}"${selected}>${escapeHtml(getPlayerFullName(player))}${suffix}</option>`;
    }),
  ].join('');
}

function syncStaffLinkedPlayerFields() {
  const select = document.getElementById('staffLinkedPlayerId');
  const firstNameInput = document.getElementById('staffEditFirstName');
  const lastNameInput = document.getElementById('staffEditLastName');
  const phoneInput = document.getElementById('staffEditPhone');
  const hint = document.getElementById('staffLinkedPlayerHint');
  if (!select || !firstNameInput || !lastNameInput || !phoneInput) return;

  const player = select.value ? getPlayerById(select.value) : null;
  const locked = Boolean(player);
  if (player) {
    firstNameInput.value = player.firstName || '';
    lastNameInput.value = player.lastName || '';
    phoneInput.value = player.phone || '';
  }
  [firstNameInput, lastNameInput, phoneInput].forEach(input => input.toggleAttribute('readonly', locked));
  if (hint) {
    hint.textContent = locked
      ? 'Dati collegati alla Rosa: nome, cognome e telefono vengono letti dalla scheda giocatore selezionata.'
      : 'Inserimento libero: puoi impostare manualmente nome, cognome e telefono.';
  }
}

function openStaffEditModal(role = '') {
  if (!canEditStaffRole(role)) return;
  const staffRow = getStaffMemberByRole(role);
  const linkedAccount = getStaffAccountByRole(role);
  const linkedPlayer = linkedAccount?.linkedPlayerId ? getPlayerById(linkedAccount.linkedPlayerId) : null;
  const modal = document.getElementById('staffModal');
  const form = document.getElementById('staffForm');
  if (!staffRow || !modal || !form) return;
  document.getElementById('staffEditRole').value = staffRow.role;
  document.getElementById('staffEditRoleLabel').value = staffRow.role;
  populateStaffLinkedPlayerOptions(role, linkedPlayer?.id || '');
  document.getElementById('staffLinkedPlayerId').value = linkedPlayer?.id || '';
  document.getElementById('staffEditFirstName').value = linkedPlayer?.firstName || staffRow.firstName || '';
  document.getElementById('staffEditLastName').value = linkedPlayer?.lastName || staffRow.lastName || '';
  document.getElementById('staffEditPhone').value = linkedPlayer?.phone || staffRow.phone || '';
  syncStaffLinkedPlayerFields();
  setStaffModalMessage('');
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeStaffEditModal() {
  const modal = document.getElementById('staffModal');
  const form = document.getElementById('staffForm');
  if (!modal || !form) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
  setStaffModalMessage('');
}

function openNoticeDetailModal(noticeId = '', source = null) {
  const poll = (state.polls || []).find(item => item.id === noticeId);
  const modal = document.getElementById('noticeDetailModal');
  const titleBox = document.getElementById('noticeDetailTitle');
  const body = document.getElementById('noticeDetailBody');
  const closeBtn = document.getElementById('closeNoticeDetailBtn');
  const openPollBtn = document.getElementById('openNoticePollBtn');
  const editBtn = document.getElementById('openNoticeEditBtn');
  const republishBtn = document.getElementById('republishNoticeBtn');
  const deleteLocalBtn = document.getElementById('deleteNoticeDetailLocalBtn');
  const deleteGlobalBtn = document.getElementById('deleteNoticeDetailGlobalBtn');
  const reportBtn = document.getElementById('responseReportBtn');
  if (!poll || !modal || !titleBox || !body || !closeBtn || !openPollBtn || !editBtn || !republishBtn || !deleteLocalBtn || !deleteGlobalBtn || !reportBtn) return;

  titleBox.textContent = getPollDisplayTitle(poll);
  const pollImageSrc = getPollImageSource(poll);
  const responder = getCurrentPollResponder();
  const myResponse = responder ? getPollUserResponse(poll, responder.id) : null;
  const myOption = myResponse ? (poll.options || []).find(option => option.id === myResponse.optionId) : null;
  const hasOptions = pollHasOptions(poll);
  const isCancelled = Boolean(poll.isCancelled || poll.cancelledAt);
  const isExpired = isPollExpired(poll);
  const canAnswer = Boolean(responder) && hasOptions && !isCancelled && !isExpired;
  const isCreator = isPollCreatedByCurrentUser(poll);
  const canEdit = isCreator && !isCancelled;
  
  const isNotice = isNoticePoll(poll);
  const noticeExpired = isNoticeHomeExpired(poll);
  const surveyExpired = isSurveyHomeExpired(poll);
  const isCurrentEntityExpired = isPureSurvey(poll) ? surveyExpired : noticeExpired;
  const canDeleteLocal = Boolean(canDeletePollFromCurrentAccount(poll));
  const canDeleteGlobal = Boolean(isCreator);
  const canRepublish = isCreator && isNotice && noticeExpired;
  
  const isFromHome = source === 'home';
  const isFromPollsList = source === 'polls';
  const hideCloseAndPoll = isFromHome || isFromPollsList;
  
  let metaContent = '';
  if (isNoticePoll(poll)) {
    metaContent = `<div class="notice-detail-meta">Pubblicato: ${escapeHtml(formatPollAnsweredAt(poll.publishedAt || poll.createdAt || ''))}</div>`;
  } else {
    metaContent = `<div class="notice-detail-meta">Quando: ${escapeHtml(getPollDateTimeLabel(poll))}</div>`;
  }
  
  let pollResponseMarkup = '';
  if (hasOptions) {
    const summary = myOption ? `<p class="poll-meta-copy">Hai risposto: <strong>${escapeHtml(myOption.label)}</strong></p>` : '';
    pollResponseMarkup = `
      <div class="poll-response-card" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color);">
        ${summary}
        ${canAnswer ? `
          <div class="poll-vote-grid">
            ${(poll.options || []).map(option => {
              const selected = myOption?.id === option.id;
              return `<button type="button" class="btn ${selected ? 'primary is-selected' : 'secondary'} poll-vote-btn" data-poll-vote="true" data-poll-id="${escapeHtml(poll.id)}" data-option-id="${escapeHtml(option.id)}">${escapeHtml(option.label)}</button>`;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }
  
  const imageMarkup = pollImageSrc ? `<div class="notice-detail-image-wrap ${isFromHome ? 'notice-detail-image-small' : ''}" data-notice-image-preview="${escapeHtml(poll.id)}"><img class="notice-detail-image clickable-image" src="${escapeHtml(pollImageSrc)}" alt="${escapeHtml(getPollDisplayTitle(poll))}" /></div>` : '';
  
  body.innerHTML = `
    ${metaContent}
    ${poll.location ? `<div class="notice-detail-location"><strong>Luogo:</strong> ${buildPollLocationMarkup(poll.location)}</div>` : ''}
    ${imageMarkup}
    ${poll.description ? `<div class="notice-detail-copy">${escapeHtml(poll.description).replace(/\n/g, '<br />')}</div>` : '<div class="empty-state">Nessun dettaglio aggiuntivo.</div>'}
    <div class="notice-detail-createdby"><strong>Creato da:</strong> ${escapeHtml(poll.createdBy?.label || 'Staff')}</div>
    ${pollResponseMarkup}
  `;
  closeBtn.classList.add('hidden');
  openPollBtn.dataset.pollId = poll.id;
  openPollBtn.classList.add('hidden');
  editBtn.dataset.pollId = poll.id;
  editBtn.classList.toggle('hidden', !canEdit || canRepublish);
  republishBtn.dataset.pollId = poll.id;
  republishBtn.classList.toggle('hidden', !canRepublish);
  deleteLocalBtn.dataset.pollId = poll.id;
  deleteLocalBtn.classList.toggle('hidden', !canDeleteLocal);
  deleteGlobalBtn.dataset.pollId = poll.id;
  deleteGlobalBtn.classList.toggle('hidden', !canDeleteGlobal);
  reportBtn.dataset.pollId = poll.id;
  const canViewReport = (isCreator || isManagerUser() || isPresidentUser() || currentUserHasStaffRole('Allenatore')) && hasOptions;
  reportBtn.classList.toggle('hidden', !canViewReport);
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeNoticeDetailModal() {
  const modal = document.getElementById('noticeDetailModal');
  const body = document.getElementById('noticeDetailBody');
  const openPollBtn = document.getElementById('openNoticePollBtn');
  if (!modal || !body || !openPollBtn) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  body.innerHTML = '';
  openPollBtn.dataset.pollId = '';
  openPollBtn.classList.add('hidden');
}

function openNoticeImagePreviewModal(src = '') {
  const modal = document.getElementById('noticeImagePreviewModal');
  const image = document.getElementById('noticeImagePreviewTarget');
  if (!modal || !image || !src) return;
  image.src = src;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeNoticeImagePreviewModal() {
  const modal = document.getElementById('noticeImagePreviewModal');
  const image = document.getElementById('noticeImagePreviewTarget');
  if (!modal || !image) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  image.removeAttribute('src');
}

function openResponseReport(pollId = '') {
  const poll = (state.polls || []).find(item => item.id === pollId);
  const modal = document.getElementById('responseReportModal');
  const titleBox = document.getElementById('responseReportTitle');
  const body = document.getElementById('responseReportBody');
  if (!poll || !modal || !titleBox || !body) return;

  titleBox.textContent = `Resoconto: ${getPollDisplayTitle(poll)}`;
  const responses = poll.responses || [];
  const options = poll.options || [];

  if (responses.length === 0) {
    body.innerHTML = '<div class="empty-state">Nessuna risposta ancora.</div>';
  } else {
    // Group responses by option
    const responsesByOption = {};
    options.forEach(option => {
      responsesByOption[option.id] = {
        label: option.label,
        respondents: [],
        count: 0
      };
    });

    responses.forEach(response => {
      const option = options.find(opt => opt.id === response.optionId);
      if (option && responsesByOption[option.id]) {
        const respondentName = response.responderLabel || 'Utente sconosciuto';
        responsesByOption[option.id].respondents.push(respondentName);
        responsesByOption[option.id].count += 1;
      }
    });

    // Find max count for scaling
    const maxCount = Math.max(...Object.values(responsesByOption).map(item => item.count), 1);

    // Build histogram markup
    const histogramMarkup = Object.entries(responsesByOption)
      .filter(([_, data]) => data.count > 0)
      .map(([optionId, data]) => {
        const percentage = (data.count / maxCount) * 100;
        const respondentsList = data.respondents.join(', ');
        return `
          <div class="histogram-item">
            <div class="histogram-label">${escapeHtml(data.label)}</div>
            <div class="histogram-bar-wrap">
              <div class="histogram-bar" style="width: ${percentage}%">
                <span class="histogram-count">${data.count}</span>
              </div>
            </div>
            <div class="histogram-respondents">${escapeHtml(respondentsList)}</div>
          </div>
        `;
      }).join('');

    body.innerHTML = `
      <div class="response-report-summary">
        <p>Totale risposte: <strong>${responses.length}</strong></p>
      </div>
      <div class="histogram-container">
        ${histogramMarkup}
      </div>
    `;
  }

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeResponseReport() {
  const modal = document.getElementById('responseReportModal');
  const body = document.getElementById('responseReportBody');
  if (!modal || !body) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  body.innerHTML = '';
}

function updatePollsNavigationUi() {
  const navLink = document.querySelector('.bottom-nav-item[data-section="sondaggi"]');
  const iconBox = navLink?.querySelector('.bnav-icon');
  const labelBox = navLink?.querySelector('.bnav-label');
  const titleBox = document.getElementById('pollsSectionTitle');
  if (iconBox) iconBox.textContent = '📢';
  if (labelBox) labelBox.textContent = 'AVVISI';
  if (titleBox) titleBox.textContent = 'AVVISI';
}

function syncRoleUi() {
  const manager = isManagerUser();
  document.getElementById('refreshResultsBtn')?.classList.toggle('hidden', !canImportFixtures());
  document.getElementById('resultsSyncNote')?.classList.toggle('hidden', !canImportFixtures());
  document.getElementById('togglePlayerForm')?.classList.toggle('hidden', !manager);
  document.getElementById('topMenuWrap')?.classList.toggle('hidden', !Boolean(authState.currentUser));
  document.getElementById('addSeasonBtn')?.classList.toggle('hidden', !manager);
  document.getElementById('editCompetitionBtn')?.classList.toggle('hidden', !manager);
  document.getElementById('editCompetitionTeamsBtn')?.classList.toggle('hidden', !manager);
  document.getElementById('deleteSeasonBtn')?.classList.add('hidden');
  document.getElementById('openPenaltyModalBtn')?.classList.toggle('hidden', !(manager && uiState.standingsView === 'teams'));
  document.querySelectorAll('[data-profile-nav]').forEach(item => item.classList.toggle('hidden', !hasProfileAccess()));
  updatePollsNavigationUi();
  if (!manager) {
    uiState.editingMatchId = null;
    uiState.penaltiesModalOpen = false;
    document.getElementById('playerFormWrap')?.classList.add('hidden');
    document.getElementById('penaltyModal')?.classList.add('hidden');
    document.getElementById('competitionTeamsModal')?.classList.add('hidden');
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const firstName = document.getElementById('loginFirstName').value.trim();
  const lastName = document.getElementById('loginLastName').value.trim();
  const password = document.getElementById('loginPassword').value;
  const nameKey = buildNameKey(firstName, lastName);
  const result = attemptLogin(firstName, lastName, password);
  const user = result.user;

  if (!user) {
    if (result.error === 'empty') {
      setLoginMessage('Compila nome, cognome e password per continuare.', 'error');
      return;
    }

    if (result.error === 'locked') {
      setLoginMessage(getLoginFailureMessage('locked', nameKey), 'error');
      return;
    }

    const updatedSecurity = registerLoginFailure(nameKey);
    if (updatedSecurity.lockedUntil > Date.now()) {
      setLoginMessage(getLoginFailureMessage('locked', nameKey), 'error');
      return;
    }

    const baseMessage = getLoginFailureMessage(result.error, nameKey);
    const attemptsLeft = Math.max(0, AUTH_LOCKOUT_MAX_ATTEMPTS - updatedSecurity.failedAttempts);
    const message = updatedSecurity.failedAttempts > 0 && attemptsLeft > 0
      ? `${baseMessage} Tentativi rimasti prima del blocco: ${attemptsLeft}.`
      : baseMessage;
    setLoginMessage(message, 'error');
    return;
  }

  setLoginMessage(`Accesso eseguito come <strong>${escapeHtml(user.roleLabel || (user.role === 'manager' ? 'Gestore' : 'Giocatore'))}</strong>.`, 'success');
  setCurrentUser(user);
}

async function handleRecoverySubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('recoveryFirstName')?.value.trim() || '';
  const lastName = document.getElementById('recoveryLastName')?.value.trim() || '';

  if (!firstName || !lastName) {
    setRecoveryModalMessage('Inserisci nome e cognome per continuare.', 'error');
    return;
  }

  const target = buildRecoveryTarget(firstName, lastName);
  if (!target) {
    setRecoveryModalMessage('Account non trovato nella Rosa o tra gli account speciali.', 'error');
    return;
  }

  if (!target.recoveryEmail) {
    setRecoveryModalMessage('Per questo account non e stata salvata nessuna email di recupero.', 'error');
    return;
  }

  if (!canRecoverTargetPassword(target)) {
    setRecoveryModalMessage('Recupera password e disponibile solo dopo il primo accesso e dopo il cambio password.', 'error');
    return;
  }

  try {
    await dispatchRecoveryEmail(target);
    closeRecoveryModal();
    setLoginMessage(`Email di recupero inviata a <strong>${escapeHtml(target.recoveryEmail)}</strong>.`, 'success');
  } catch (error) {
    console.error(error);
    const message = error?.message === 'EMAIL_SERVICE_NOT_CONFIGURED'
      ? "Invio automatico non disponibile in questa versione dell'app."
      : 'Invio non riuscito. Controlla la configurazione del servizio email.';
    setRecoveryModalMessage(message, 'error');
  }
}

function handleRecoveryEmailSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('recoveryEmailFirstName')?.value.trim() || '';
  const lastName = document.getElementById('recoveryEmailLastName')?.value.trim() || '';
  const password = document.getElementById('recoveryEmailPassword')?.value || '';
  const recoveryEmail = normalizeRecoveryEmail(document.getElementById('recoveryEmailValue')?.value || '');

  if (!firstName || !lastName || !password || !recoveryEmail) {
    setRecoveryEmailModalMessage("Compila tutti i campi per salvare l'email di recupero.", 'error');
    return;
  }

  if (!isValidRecoveryEmail(recoveryEmail)) {
    setRecoveryEmailModalMessage("Inserisci un'email valida.", 'error');
    return;
  }

  const result = attemptLogin(firstName, lastName, password);
  if (!result.user) {
    const message = result.error === 'retired'
      ? 'Giocatore ritirato: accesso disattivato, quindi email di recupero non modificabile.'
      : 'Credenziali non valide oppure account non presente nella Rosa.';
    setRecoveryEmailModalMessage(message, 'error');
    return;
  }

  if (!updateRecoveryEmailForUser(result.user, recoveryEmail)) {
    setRecoveryEmailModalMessage('Salvataggio non riuscito. Riprova.', 'error');
    return;
  }

  ensureAuthStateIntegrity();
  saveState();
  closeRecoveryEmailModal();
  setLoginMessage(`Email di recupero salvata per <strong>${escapeHtml(result.user.displayName)}</strong>.`, 'success');
}

function handleStaffSave(event) {
  event.preventDefault();
  const role = document.getElementById('staffEditRole')?.value || '';
  if (!canEditStaffRole(role)) return;

  const linkedPlayerId = document.getElementById('staffLinkedPlayerId')?.value || '';
  const linkedPlayer = linkedPlayerId ? getPlayerById(linkedPlayerId) : null;
  const firstName = linkedPlayer?.firstName || document.getElementById('staffEditFirstName')?.value.trim() || '';
  const lastName = linkedPlayer?.lastName || document.getElementById('staffEditLastName')?.value.trim() || '';
  const phone = linkedPlayer?.phone || document.getElementById('staffEditPhone')?.value.trim() || '';
  const staffRow = getStaffMemberByRole(role);

  if (!staffRow || !firstName || !lastName) {
    setStaffModalMessage('Nome e cognome sono obbligatori.', 'error');
    return;
  }

  const duplicateName = linkedPlayer
    ? false
    : state.players.some(player => buildNameKey(player.firstName, player.lastName) === buildNameKey(firstName, lastName));
  if (duplicateName) {
    setStaffModalMessage('Quel nominativo appartiene già a un giocatore della Rosa: selezionalo dal menu dedicato.', 'error');
    return;
  }

  const linkedAccount = getStaffAccountByRole(role);
  staffRow.firstName = firstName;
  staffRow.lastName = lastName;
  staffRow.phone = phone;

  if (linkedAccount) {
    linkedAccount.firstName = firstName;
    linkedAccount.lastName = lastName;
    linkedAccount.phone = phone;
    linkedAccount.linkedPlayerId = linkedPlayer?.id || null;
    linkedAccount.linkMode = linkedPlayer ? 'player' : 'manual';
  }

  ensureAuthStateIntegrity();
  authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
  saveState();
  applyAuthLayout();
  renderAll();
  closeStaffEditModal();
  alert(`${role} aggiornato con successo.`);
}

function handlePasswordSubmit(event) {
  event.preventDefault();
  if (!authState.currentUser) return;
  const newPassword = document.getElementById('newPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!newPassword || !confirmPassword) {
    alert('Inserisci e conferma la nuova password.');
    return;
  }
  if (newPassword.length < 4) {
    alert('La password deve avere almeno 4 caratteri.');
    return;
  }
  if (newPassword !== confirmPassword) {
    alert('Le password non coincidono.');
    return;
  }

  if (authState.currentUser.accountType === 'player') {
    const currentCredential = state.auth.playerPasswords[authState.currentUser.playerId] || {};
    state.auth.playerPasswords[authState.currentUser.playerId] = {
      password: newPassword,
      mustChangePassword: false,
      recoveryEmail: currentCredential.recoveryEmail || '',
    };
  } else if (authState.currentUser.accountType === 'staff-account') {
    const account = getStaffAccountById(authState.currentUser.staffAccountId);
    if (account) {
      account.password = newPassword;
      account.mustChangePassword = false;
      if (account.linkedPlayerId) {
        const linkedCredential = state.auth.playerPasswords[account.linkedPlayerId] || {};
        state.auth.playerPasswords[account.linkedPlayerId] = {
          password: newPassword,
          mustChangePassword: false,
          recoveryEmail: linkedCredential.recoveryEmail || account.recoveryEmail || '',
        };
      }
    }
  } else {
    const manager = (state.auth?.externalManagers || []).find(item => item.id === authState.currentUser.externalManagerId);
    if (manager) {
      manager.password = newPassword;
      manager.mustChangePassword = false;
    }
  }

  saveState();
  authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
  closePasswordModal();
  applyAuthLayout();
  renderAll();
  alert('Password aggiornata con successo.');
}

function togglePlayerPasswordVisibility(playerId) {
  if (!canViewPlayerPasswords() || !playerId) return;
  const visible = new Set(uiState.revealedPlayerPasswordIds || []);
  if (visible.has(playerId)) {
    visible.delete(playerId);
  } else {
    visible.add(playerId);
  }
  uiState.revealedPlayerPasswordIds = [...visible];
  renderRoster();
}

function togglePlayerManagerRole(playerId) {
  if (!canToggleManagerAssignments()) return;
  if (!playerId) return;
  if (isPlayerManager(playerId)) {
    state.auth.managerPlayerIds = state.auth.managerPlayerIds.filter(id => id !== playerId);
  } else {
    state.auth.managerPlayerIds.push(playerId);
  }
  authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
  saveState();
  applyAuthLayout();
  renderAll();
}
function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    state.players = Array.isArray(parsed.players) && parsed.players.length ? parsed.players : clone(defaultPlayers);
    state.staff = Array.isArray(parsed.staff) && parsed.staff.length ? parsed.staff : clone(defaultStaff);
    state.matchEdits = parsed.matchEdits && typeof parsed.matchEdits === 'object' ? parsed.matchEdits : {};
    state.lastSourceSync = parsed.lastSourceSync || '';
    state.fixturesCopiedAt = parsed.fixturesCopiedAt || parsed.lastSourceSync || '';
    state.dataVersion = parsed.dataVersion || '';
    state.customSeasons = Array.isArray(parsed.customSeasons) ? sortSeasonLabels(parsed.customSeasons) : [];
    state.competitionMeta = normalizeCompetitionMetaStore(parsed.competitionMeta || {});
    state.competitionTeams = normalizeCompetitionTeamsStore(parsed.competitionTeams || {});
    state.competitionTeamLogos = normalizeCompetitionTeamLogosStore(parsed.competitionTeamLogos || {});
    state.remoteFixturesRaw = typeof parsed.remoteFixturesRaw === 'string' ? parsed.remoteFixturesRaw : '';
    state.fixturesSyncError = parsed.fixturesSyncError || '';
    state.defaultImportedDataVersion = parsed.defaultImportedDataVersion || '';
    state.defaultImportedScorersVersion = parsed.defaultImportedScorersVersion || '';
    state.polls = Array.isArray(parsed.polls) ? parsed.polls : [];
    state.pollResetVersion = parsed.pollResetVersion || '';
    state.teamPenalties = normalizeTeamPenaltyStore(parsed.teamPenalties || {});
    state.teamCardPoints = normalizeTeamCardPointsStore(parsed.teamCardPoints || {});
    state.teamDisciplineDefaultsVersion = parsed.teamDisciplineDefaultsVersion || '';
    state.auth = parsed.auth && typeof parsed.auth === 'object' ? parsed.auth : createDefaultAuthData();
    if (state.auth.loginSecurity && !state.auth.loginSecurityByUser) {
      const legacySecurity = normalizeLoginSecurityState(state.auth.loginSecurity);
      state.auth.loginSecurityByUser = legacySecurity.failedAttempts || legacySecurity.lockedUntil || legacySecurity.lockLevel
        ? { __legacy__: legacySecurity }
        : {};
    }
  } catch {
    state.players = clone(defaultPlayers);
    state.staff = clone(defaultStaff);
    state.matchEdits = {};
    state.lastSourceSync = '';
    state.fixturesCopiedAt = '';
    state.dataVersion = '';
    state.customSeasons = [];
    state.competitionMeta = {};
    state.competitionTeams = {};
    state.competitionTeamLogos = {};
    state.remoteFixturesRaw = '';
    state.fixturesSyncError = '';
    state.defaultImportedDataVersion = '';
    state.defaultImportedScorersVersion = '';
    state.polls = [];
    state.pollResetVersion = '';
    state.teamPenalties = {};
    state.teamCardPoints = {};
    state.teamDisciplineDefaultsVersion = '';
    state.auth = createDefaultAuthData();
  }

  sortPlayersAlphabetically(state.players);

  state.polls = (state.polls || []).map(poll => ({
    ...poll,
    title: poll?.title || '',
    image: poll?.image || '',
    includeSurvey: typeof poll?.includeSurvey === 'boolean' ? poll.includeSurvey : Array.isArray(poll?.options) && poll.options.length > 0,
    cancelledByViewerKey: poll?.cancelledByViewerKey || '',
    cancelledByLabel: poll?.cancelledByLabel || '',
    creatorDeletedAt: poll?.creatorDeletedAt || '',
    creatorDeletedByViewerKey: poll?.creatorDeletedByViewerKey || '',
    creatorDeletedByLabel: poll?.creatorDeletedByLabel || '',
    publishedAt: poll?.publishedAt || poll?.createdAt || '',
    responses: Array.isArray(poll?.responses)
      ? poll.responses.map(response => ({
        ...response,
        answeredAt: response?.answeredAt || '',
      }))
      : [],
  }));

  const isDataVersionChanged = state.dataVersion !== DATA_VERSION;
  if (isDataVersionChanged) {
    state.matchEdits = {};
    state.remoteFixturesRaw = clearAllFixtureResultsFromRaw(state.remoteFixturesRaw || '');
    state.lastSourceSync = '';
    state.fixturesCopiedAt = '';
    state.fixturesSyncError = '';
    state.defaultImportedDataVersion = '';
    state.defaultImportedScorersVersion = '';
    state.polls = [];
    if (!state.auth || typeof state.auth !== 'object') state.auth = createDefaultAuthData();
    state.auth.hiddenPollIdsByUser = {};
  }

  const shouldResetPolls = state.pollResetVersion !== POLL_RESET_VERSION;
  if (shouldResetPolls) {
    state.polls = [];
    state.pollResetVersion = POLL_RESET_VERSION;
    if (!state.auth || typeof state.auth !== 'object') state.auth = createDefaultAuthData();
    state.auth.hiddenPollIdsByUser = {};
  }

  const shouldSeedDefaultImportedData = state.defaultImportedDataVersion !== DEFAULT_IMPORTED_DATA_VERSION;
  if (shouldSeedDefaultImportedData) {
    state.matchEdits = {};
    state.remoteFixturesRaw = LOCAL_FIXTURES_FALLBACK_RAW;
    state.lastSourceSync = DEFAULT_IMPORTED_COPY_TIMESTAMP;
    state.fixturesCopiedAt = DEFAULT_IMPORTED_COPY_TIMESTAMP;
    state.fixturesSyncError = '';
    state.defaultImportedDataVersion = DEFAULT_IMPORTED_DATA_VERSION;
  }

  const shouldSeedDefaultImportedScorers = shouldSeedDefaultImportedData || state.defaultImportedScorersVersion !== DEFAULT_IMPORTED_SCORERS_VERSION;

  ensureAuthStateIntegrity();

  const seededDefaultTeamCardPoints = ensureDefaultTeamCardPoints();
  const seededDefaultTeamPenalties = ensureDefaultTeamPenalties();
  const appliedDisciplineDefaults = applyDisciplineDefaultsMigration();
  const removedLegacyCompetitions = sanitizeCustomCompetitionData();
  const ensuredDefaultCompetitionMeta = ensureDefaultCompetitionMeta();
  const ensuredDefaultCompetitionTeams = ensureDefaultCompetitionTeams();

  rebuildMatchesFromSource({
    preserveResultOverrides: true,
    mergeSeededCards: false,
    resetStoredCards: isDataVersionChanged,
  });

  if (shouldSeedDefaultImportedScorers) {
    try {
      seedDefaultImportedScorers();
      state.defaultImportedScorersVersion = DEFAULT_IMPORTED_SCORERS_VERSION;
    } catch (error) {
      console.warn('Impossibile applicare i marcatori di default.', error);
    }
  }

  const preferredSeason = getPreferredSeasonLabel();
  uiState.selectedSeason = preferredSeason;
  uiState.penaltySelectedSeason = preferredSeason;

  if (isDataVersionChanged || shouldSeedDefaultImportedData || shouldSeedDefaultImportedScorers || seededDefaultTeamCardPoints || seededDefaultTeamPenalties || appliedDisciplineDefaults || removedLegacyCompetitions || ensuredDefaultCompetitionMeta || ensuredDefaultCompetitionTeams) saveState();
}

function saveState() {
  sortPlayersAlphabetically(state.players);
  state.dataVersion = DATA_VERSION;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      players: state.players,
      staff: state.staff,
      matchEdits: state.matchEdits,
      lastSourceSync: state.lastSourceSync,
      fixturesCopiedAt: state.fixturesCopiedAt,
      dataVersion: state.dataVersion,
      customSeasons: state.customSeasons,
      competitionMeta: state.competitionMeta,
      competitionTeams: state.competitionTeams,
      competitionTeamLogos: state.competitionTeamLogos,
      remoteFixturesRaw: state.remoteFixturesRaw,
      fixturesSyncError: state.fixturesSyncError,
      defaultImportedDataVersion: state.defaultImportedDataVersion,
      defaultImportedScorersVersion: state.defaultImportedScorersVersion,
      polls: state.polls,
      pollResetVersion: state.pollResetVersion,
      teamPenalties: state.teamPenalties,
      teamCardPoints: state.teamCardPoints,
      teamDisciplineDefaultsVersion: state.teamDisciplineDefaultsVersion,
      auth: state.auth,
    }));
    return true;
  } catch (error) {
    console.warn('Salvataggio locale non riuscito.', error);
    return false;
  }
}

function rebuildMatchesFromSource({ preserveResultOverrides = true, mergeSeededCards = false, resetStoredCards = false } = {}) {
  const raw = state.remoteFixturesRaw || '';
  state.sourceVersion = raw;
  const sourceMatches = parseSourceFixtures(raw);
  const merged = sourceMatches.map(match => {
    const edit = state.matchEdits[match.id];
    if (!edit) return match;

    const resultPatch = (preserveResultOverrides && edit.overrideResult)
      ? {
          date: edit.date || match.date,
          time: edit.time || match.time,
          venue: edit.venue || match.venue,
          status: edit.status,
          homeGoals: edit.homeGoals,
          awayGoals: edit.awayGoals,
        }
      : {};

    const seasonDate = resultPatch.date || match.date;
    return {
      ...match,
      ...resultPatch,
      season: inferSeasonFromDate(seasonDate) || match.season || getCurrentSeasonLabel(),
      scorers: Array.isArray(edit.scorers) ? clone(edit.scorers) : [],
      mvpPlayerId: edit.mvpPlayerId || '',
      cards: resetStoredCards
        ? []
        : (mergeSeededCards
            ? mergeCardEntries(match.cards || [], Array.isArray(edit.cards) ? edit.cards : [])
            : (Array.isArray(edit.cards) ? clone(edit.cards) : [])),
    };
  });

  state.matches = merged.map(match => ({
    ...match,
    season: match.season || inferSeasonFromDate(match.date) || getCurrentSeasonLabel(),
  })).sort((a, b) => {
    const phaseOrder = a.phase === b.phase ? 0 : a.phase === 'Andata' ? -1 : 1;
    if (phaseOrder !== 0) return phaseOrder;
    if (a.round !== b.round) return a.round - b.round;
    return toTimestamp(a.date, a.time) - toTimestamp(b.date, b.time);
  });
  saveState();
  ensureSeasonSelection();
}

let fixturesSyncPromise = null;

function setFixturesSyncBusy(isBusy) {
  const button = document.getElementById('refreshResultsBtn');
  const note = document.getElementById('resultsSyncNote');
  if (button) {
    button.disabled = Boolean(isBusy);
    button.innerHTML = getPartiteActionButtonMarkup('txt', Boolean(isBusy));
  }
  if (note && isBusy) {
    note.dataset.state = 'loading';
    note.textContent = 'Importazione file TXT in corso';
  }
}

function updateSyncNote() {
  const note = document.getElementById('resultsSyncNote');
  if (!note) return;
  if (!canImportFixtures()) {
    note.dataset.state = '';
    note.textContent = '';
    note.classList.add('hidden');
    return;
  }
  note.classList.remove('hidden');
  const copiedAt = state.fixturesCopiedAt || state.lastSourceSync || '';
  if (state.fixturesSyncError) {
    note.dataset.state = 'error';
    note.textContent = copiedAt
      ? `⚠️ ${state.fixturesSyncError} • importato ${copiedAt}`
      : `⚠️ ${state.fixturesSyncError}`;
    return;
  }
  note.dataset.state = state.remoteFixturesRaw ? 'success' : 'loading';
  note.textContent = copiedAt
    ? `file importato ${copiedAt}`
    : 'Premi TXT e carica un file esterno con partite o marcatori de I Malavoglia';
}

async function loadBundledFixturesText() {
  const cacheBuster = `_=${Date.now()}`;
  const candidates = [
    `${encodeURI(LOCAL_FIXTURES_TXT_FILENAME)}?${cacheBuster}`,
    `./${encodeURI(LOCAL_FIXTURES_TXT_FILENAME)}?${cacheBuster}`,
  ];

  for (const url of candidates) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) continue;
      const text = await response.text();
      if (String(text || '').trim()) return text;
    } catch (error) {
      console.warn('Lettura del file locale non riuscita, provo il fallback integrato.', error);
    }
  }

  return LOCAL_FIXTURES_FALLBACK_RAW;
}

async function loadBundledScorersText() {
  const cacheBuster = `_=${Date.now()}`;
  const candidates = [
    `${encodeURI(LOCAL_SCORERS_TXT_FILENAME)}?${cacheBuster}`,
    `./${encodeURI(LOCAL_SCORERS_TXT_FILENAME)}?${cacheBuster}`,
  ];

  for (const url of candidates) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) continue;
      const text = await response.text();
      if (String(text || '').trim()) return text;
    } catch (error) {
      console.warn('Lettura del file marcatori locale non riuscita, provo il fallback integrato.', error);
    }
  }

  return LOCAL_MALAVOGLIA_SCORERS_FALLBACK_RAW;
}

function findPlayerRefByImportedName(firstName = '', lastName = '') {
  const nameKey = buildNameKey(firstName, lastName);
  if (!nameKey) return { playerId: '', playerName: '' };
  const player = state.players.find(item => buildNameKey(item.firstName, item.lastName) === nameKey);
  if (player) {
    return { playerId: player.id, playerName: getPlayerFullName(player) };
  }
  return { playerId: '', playerName: `${firstName} ${lastName}`.trim() };
}

function normalizeImportedCardCode(value = '') {
  const normalized = String(value || '').replace(/[()\s]+/g, '').toUpperCase();
  return ['G', 'GG', 'R', 'GR'].includes(normalized) ? normalized : '';
}

function getImportedCardTypeFromCode(code = '') {
  return ({
    G: 'Cartellino Giallo',
    GG: 'Doppia Ammonizione',
    R: 'Cartellino Rosso Diretto',
    GR: 'Cartellino Giallo + Cartellino Rosso Diretto',
  })[String(code || '').toUpperCase()] || '';
}

function normalizeScorerMinute(value = '') {
  const raw = String(value || '').trim();
  if (!raw || raw === '-' || raw === '–' || raw === '—') return '';
  const match = raw.match(/(\d{1,2})/);
  return match ? match[1] : '';
}

function normalizeScorerPeriod(value = '') {
  const raw = String(value || '').trim();
  if (!raw || raw === '-' || raw === '–' || raw === '—') return '';
  const match = raw.match(/([12])\s*T/i);
  return match ? `${match[1]}T` : raw.replace(/[()]/g, '').replace(/\s+/g, '').toUpperCase();
}

function parseMalavogliaScorerEntry(rawLine = '') {
  const line = String(rawLine || '').replace(/ /g, ' ').trim();
  if (!line) return null;
  const parts = (line.includes('	')
    ? line.split(/	+/)
    : line.split(/\s{2,}/))
    .map(item => String(item || '').trim())
    .filter(Boolean);

  if (parts.length < 2) return null;

  const [firstName, lastName, thirdPart = '', fourthPart = ''] = parts;
  if (!firstName || !lastName) return null;

  const directCardCode = normalizeImportedCardCode(thirdPart);
  const trailingCardCode = normalizeImportedCardCode(fourthPart);
  const cardCode = directCardCode || trailingCardCode;
  if (cardCode && (parts.length === 3 || (!normalizeScorerMinute(thirdPart) && !normalizeScorerMinute(fourthPart)))) {
    const ref = findPlayerRefByImportedName(firstName, lastName);
    return {
      kind: 'card',
      card: {
        team: MALAVOGLIA,
        playerId: ref.playerId || '',
        playerName: ref.playerName || `${firstName} ${lastName}`.trim(),
        type: getImportedCardTypeFromCode(cardCode),
      },
    };
  }

  const ref = findPlayerRefByImportedName(firstName, lastName);
  return {
    kind: 'scorer',
    scorer: {
      playerId: ref.playerId || '',
      playerName: ref.playerName || `${firstName} ${lastName}`.trim(),
      minute: normalizeScorerMinute(thirdPart),
      period: normalizeScorerPeriod(fourthPart),
    },
  };
}

function parseMalavogliaScorersText(raw = '') {
  const lines = String(raw || '').replace(/\r/g, '').split('\n');
  const grouped = new Map();
  let currentKey = '';

  lines.forEach(sourceLine => {
    const trimmed = String(sourceLine || '').trim();
    if (!trimmed) return;

    const headerMatch = trimmed.match(/^([AR])\s*-\s*(\d+)\b(.*)$/i);
    if (headerMatch) {
      const phase = headerMatch[1].toUpperCase() === 'A' ? 'Andata' : 'Ritorno';
      const round = Number(headerMatch[2]);
      currentKey = `${phase}|${round}`;
      if (!grouped.has(currentKey)) grouped.set(currentKey, { scorers: [], cards: [] });
      const remainder = String(headerMatch[3] || '').trim();
      if (remainder) {
        const entry = parseMalavogliaScorerEntry(remainder);
        if (entry?.kind === 'scorer' && entry.scorer) grouped.get(currentKey).scorers.push(entry.scorer);
        if (entry?.kind === 'card' && entry.card?.type) grouped.get(currentKey).cards.push(entry.card);
      }
      return;
    }

    if (!currentKey) return;
    const entry = parseMalavogliaScorerEntry(trimmed);
    if (entry?.kind === 'scorer' && entry.scorer) grouped.get(currentKey).scorers.push(entry.scorer);
    if (entry?.kind === 'card' && entry.card?.type) grouped.get(currentKey).cards.push(entry.card);
  });

  return [...grouped.entries()].map(([key, payload]) => {
    const [phase, round] = key.split('|');
    return { phase, round: Number(round), scorers: payload.scorers || [], cards: payload.cards || [] };
  });
}

function applyGroupedMalavogliaScorers(grouped = [], options = {}) {
  const malMatches = state.matches.filter(isMalavogliaMatch);
  if (!malMatches.length) throw new Error('Importa prima il file TXT delle partite.');

  let applied = 0;
  grouped.forEach(item => {
    const match = malMatches.find(candidate => candidate.phase === item.phase && Number(candidate.round) === Number(item.round));
    if (!match) return;

    match.scorers = clone(item.scorers || []);
    const importedCards = clone(item.cards || []);
    const preservedMatchCards = Array.isArray(match.cards)
      ? match.cards.filter(card => (card.team || '') !== MALAVOGLIA)
      : [];
    match.cards = [...preservedMatchCards, ...importedCards];
    const existingEdit = state.matchEdits[match.id] || {};
    const preservedEditCards = Array.isArray(existingEdit.cards)
      ? existingEdit.cards.filter(card => (card.team || '') !== MALAVOGLIA)
      : preservedMatchCards;
    state.matchEdits[match.id] = {
      ...existingEdit,
      overrideResult: existingEdit.overrideResult === true,
      date: existingEdit.date || match.date,
      time: existingEdit.time || match.time,
      venue: existingEdit.venue || getVenueForMatch(match),
      status: existingEdit.status || match.status,
      homeGoals: existingEdit.homeGoals ?? match.homeGoals,
      awayGoals: existingEdit.awayGoals ?? match.awayGoals,
      scorers: clone(match.scorers || []),
      mvpPlayerId: existingEdit.mvpPlayerId || match.mvpPlayerId || '',
      cards: [...clone(preservedEditCards), ...clone(importedCards)],
    };
    applied += 1;
  });

  if (!applied) throw new Error('Nessuna partita de I Malavoglia corrisponde al file marcatori importato.');

  const shouldUpdateTimestamp = options.updateTimestamp !== false;
  if (shouldUpdateTimestamp) {
    const copiedAtLabel = options.copiedAtLabel || formatFixturesCopyTimestamp(new Date());
    state.fixturesSyncError = '';
    state.fixturesCopiedAt = copiedAtLabel;
    state.lastSourceSync = copiedAtLabel;
  }

  if (options.saveState !== false) saveState();
  if (options.render !== false) renderAll();
  return applied;
}

function seedDefaultImportedScorers() {
  const grouped = parseMalavogliaScorersText(LOCAL_MALAVOGLIA_SCORERS_FALLBACK_RAW);
  if (!grouped.length) return 0;
  return applyGroupedMalavogliaScorers(grouped, {
    updateTimestamp: false,
    saveState: false,
    render: false,
  });
}

function applyMalavogliaScorersImport(raw = '') {
  const grouped = parseMalavogliaScorersText(raw);
  if (!grouped.length) throw new Error('Formato file marcatori non riconosciuto. Usa il tracciato A-1 / R-1 con nome, cognome, minuto e tempo oppure con cartellino (G, GG, R, GR).');
  applyGroupedMalavogliaScorers(grouped);
}

function detectTxtImportKind(raw = '') {
  const text = String(raw || '').trim();
  if (!text) return '';
  if (/(^|\n)\s*[AR]\s*-\s*\d+\b/im.test(text)) return 'malavoglia-scorers';
  return 'fixtures';
}

async function importExternalTxtFile(raw = '') {
  const kind = detectTxtImportKind(raw);
  if (kind === 'malavoglia-scorers') {
    return applyMalavogliaScorersImport(raw);
  }
  return importFixturesFromText(raw);
}

async function importFixturesFromBundledText() {
  const raw = await loadBundledFixturesText();
  return importFixturesFromText(raw);
}

async function importFixturesFromText(raw = '') {
  if (fixturesSyncPromise) return fixturesSyncPromise;

  setFixturesSyncBusy(true);
  fixturesSyncPromise = (async () => {
    try {
      applyFixturesImport(raw, { copiedAtLabel: formatFixturesCopyTimestamp(new Date()) });
    } catch (error) {
      console.warn('Errore importazione partite', error);
      state.fixturesSyncError = error?.message || 'Importazione del file non riuscita.';
      saveState();
      updateSyncNote();
      renderAll();
      throw error;
    } finally {
      setFixturesSyncBusy(false);
      fixturesSyncPromise = null;
    }
  })();

  return fixturesSyncPromise;
}

function compareStandingsDefault(a, b) {
  return (b.points - a.points)
    || (b.diff - a.diff)
    || (b.gf - a.gf)
    || (a.cards - b.cards)
    || a.team.localeCompare(b.team, 'it');
}

function sortStandingsRows(rows = [], sortKey = uiState.standingsSortKey || 'points') {
  const safeRows = Array.isArray(rows) ? [...rows] : [];
  const key = String(sortKey || 'points');

  return safeRows.sort((a, b) => {
    switch (key) {
      case 'team':
        return a.team.localeCompare(b.team, 'it') || compareStandingsDefault(a, b);
      case 'won':
        return (b.won - a.won) || compareStandingsDefault(a, b);
      case 'draw':
        return (b.draw - a.draw) || compareStandingsDefault(a, b);
      case 'lost':
        return (a.lost - b.lost) || compareStandingsDefault(a, b);
      case 'gf':
        return (b.gf - a.gf) || compareStandingsDefault(a, b);
      case 'gs':
        return (a.gs - b.gs) || compareStandingsDefault(a, b);
      case 'diff':
        return (b.diff - a.diff) || compareStandingsDefault(a, b);
      case 'cards':
        return (a.cards - b.cards) || compareStandingsDefault(a, b);
      case 'points':
      default:
        return compareStandingsDefault(a, b);
    }
  });
}

function getScorerCardsTotal(row = {}) {
  return (Number(row.yellowCards) || 0)
    + (Number(row.doubleYellowCards) || 0)
    + (Number(row.directRedCards) || 0)
    + (Number(row.yellowRedCards) || 0);
}

function compareScorersDefault(a, b) {
  return (b.goals - a.goals)
    || (getScorerCardsTotal(b) - getScorerCardsTotal(a))
    || String(a.firstName || '').localeCompare(String(b.firstName || ''), 'it', { sensitivity: 'base' })
    || String(a.lastName || '').localeCompare(String(b.lastName || ''), 'it', { sensitivity: 'base' })
    || String(a.name || '').localeCompare(String(b.name || ''), 'it', { sensitivity: 'base' });
}

function sortScorersRows(rows = [], sortKey = uiState.scorersSortKey || 'goals') {
  const safeRows = Array.isArray(rows) ? [...rows] : [];
  const key = String(sortKey || 'goals');

  return safeRows.sort((a, b) => {
    switch (key) {
      case 'alphabetical':
        return String(a.name || '').localeCompare(String(b.name || ''), 'it', { sensitivity: 'base' }) || compareScorersDefault(a, b);
      case 'cards':
        return (getScorerCardsTotal(b) - getScorerCardsTotal(a)) || compareScorersDefault(a, b);
      case 'goals':
      default:
        return compareScorersDefault(a, b);
    }
  });
}

function getCurrentStandingsSortOptions() {
  return uiState.standingsView === 'scorers' ? scorersSortOptions : standingsSortOptions;
}

function getActiveStandingsSortKey() {
  return uiState.standingsView === 'scorers'
    ? (uiState.scorersSortKey || 'goals')
    : (uiState.standingsSortKey || 'points');
}

function buildStandingsSortDropdownMarkup() {
  const activeKey = getActiveStandingsSortKey();
  return getCurrentStandingsSortOptions().map(option => `
    <button type="button" class="standings-sort-item${option.key === activeKey ? ' active' : ''}" data-standings-sort="${escapeHtml(option.key)}">${escapeHtml(option.label)}</button>
  `).join('');
}

function getStandings(season = getSelectedSeason()) {
  const seasonKey = normalizeSeasonLabel(season) || '';
  const rows = getCompetitionTeams(seasonKey).map(team => ({
    team: team.name,
    logo: team.logo,
    points: 0,
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    gf: 0,
    gs: 0,
    diff: 0,
    cards: getDisplayedTeamCardPoints(team.name, seasonKey) + (baseCardPoints[team.name] || 0),
    penalties: getTeamPenaltyCount(team.name, seasonKey),
  }));
  const byTeam = new Map(rows.map(row => [row.team, row]));
  state.matches.forEach(match => {
    if (season && (match.season || inferSeasonFromDate(match.date)) !== season) return;
    if (!isPlayed(match)) return;
    const home = byTeam.get(match.homeTeam);
    const away = byTeam.get(match.awayTeam);
    if (!home || !away) return;

    home.played += 1;
    away.played += 1;
    home.gf += match.homeGoals;
    home.gs += match.awayGoals;
    away.gf += match.awayGoals;
    away.gs += match.homeGoals;

    if (match.homeGoals > match.awayGoals) {
      home.won += 1; away.lost += 1; home.points += 3;
    } else if (match.homeGoals < match.awayGoals) {
      away.won += 1; home.lost += 1; away.points += 3;
    } else {
      home.draw += 1; away.draw += 1; home.points += 1; away.points += 1;
    }
  });

  rows.forEach(row => {
    row.diff = row.gf - row.gs;
    const penaltyPoints = (Number(row.penalties) || 0) * TEAM_PENALTY_POINTS;
    row.points -= penaltyPoints;
  });
  return rows.sort(compareStandingsDefault);
}

function getScorersTable(season = getSelectedSeason()) {
  const totals = new Map();

  const resolvePlayerByScorerRef = (ref = {}) => {
    if (ref.playerId) return getPlayerById(ref.playerId);
    const fullName = String(ref.playerName || '').trim();
    if (!fullName) return null;
    const parts = fullName.split(/\s+/);
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ');
    const key = buildNameKey(firstName, lastName);
    return (state.players || []).find(player => buildNameKey(player.firstName, player.lastName) === key) || null;
  };

  (state.players || []).forEach(player => {
    totals.set(player.id, {
      playerId: player.id,
      firstName: player.firstName || '',
      lastName: player.lastName || '',
      name: getPlayerFullName(player),
      photo: player.photo || DEFAULT_PLAYER_IMG,
      status: player.status || 'active',
      goals: 0,
      yellowCards: 0,
      doubleYellowCards: 0,
      directRedCards: 0,
      yellowRedCards: 0,
    });
  });

  state.matches.forEach(match => {
    if (season && (match.season || inferSeasonFromDate(match.date)) !== season) return;
    if (!isMalavogliaMatch(match)) return;
    (match.scorers || []).forEach(item => {
      const player = resolvePlayerByScorerRef(item);
      const key = player?.id || item.playerId || item.playerName || '';
      if (!key) return;
      const name = getPlayerFullNameByRef(item);
      const existing = totals.get(key) || {
        playerId: item.playerId || player?.id || '',
        firstName: player?.firstName || String(name).trim().split(/\s+/)[0] || '',
        lastName: player?.lastName || String(name).trim().split(/\s+/).slice(1).join(' '),
        name,
        photo: player?.photo || DEFAULT_PLAYER_IMG,
        status: player?.status || 'active',
        goals: 0,
        yellowCards: 0,
        doubleYellowCards: 0,
        directRedCards: 0,
        yellowRedCards: 0,
      };
      existing.goals = (existing.goals || 0) + 1;
      existing.name = name;
      if (player) {
        existing.playerId = player.id || existing.playerId || '';
        existing.firstName = player.firstName || existing.firstName || '';
        existing.lastName = player.lastName || existing.lastName || '';
        existing.photo = player.photo || existing.photo || DEFAULT_PLAYER_IMG;
        existing.status = player.status || existing.status || 'active';
      }
      totals.set(key, existing);
    });

    (match.cards || []).forEach(item => {
      const player = resolvePlayerByScorerRef(item);
      const key = player?.id || item.playerId || item.playerName || '';
      if (!key) return;
      const name = item.playerName || (player ? getPlayerFullName(player) : '');
      const existing = totals.get(key) || {
        playerId: item.playerId || player?.id || '',
        firstName: player?.firstName || String(name).trim().split(/\s+/)[0] || '',
        lastName: player?.lastName || String(name).trim().split(/\s+/).slice(1).join(' '),
        name,
        photo: player?.photo || DEFAULT_PLAYER_IMG,
        status: player?.status || 'active',
        goals: 0,
        yellowCards: 0,
        doubleYellowCards: 0,
        directRedCards: 0,
        yellowRedCards: 0,
      };
      existing.name = name || existing.name;
      if (player) {
        existing.playerId = player.id || existing.playerId || '';
        existing.firstName = player.firstName || existing.firstName || '';
        existing.lastName = player.lastName || existing.lastName || '';
        existing.photo = player.photo || existing.photo || DEFAULT_PLAYER_IMG;
        existing.status = player.status || existing.status || 'active';
      }
      if (item.type === 'Cartellino Giallo') existing.yellowCards += 1;
      if (item.type === 'Doppia Ammonizione') existing.doubleYellowCards += 1;
      if (item.type === 'Cartellino Rosso Diretto') existing.directRedCards += 1;
      if (item.type === 'Cartellino Giallo + Cartellino Rosso Diretto') existing.yellowRedCards += 1;
      totals.set(key, existing);
    });
  });

  return sortScorersRows([...totals.values()], uiState.scorersSortKey || 'goals');
}

function getPlayerFullName(player) {
  return `${player.firstName} ${player.lastName}`.trim();
}

function getPlayerById(playerId) {
  return state.players.find(player => player.id === playerId) || null;
}

function getPlayerFullNameByRef(ref) {
  if (ref.playerId) {
    const player = getPlayerById(ref.playerId);
    if (player) return getPlayerFullName(player);
  }
  return ref.playerName || '';
}

function getActivePlayers() {
  return [...state.players]
    .filter(player => player.status !== 'retired');
}

function getMalavogliaMatches() {
  return state.matches.filter(isMalavogliaMatch).sort((a, b) => toTimestamp(a.date, a.time) - toTimestamp(b.date, b.time));
}

function getLastFiveForm() {
  return getMalavogliaMatches()
    .filter(isPlayed)
    .sort((a, b) => toTimestamp(b.date, b.time) - toTimestamp(a.date, a.time))
    .slice(0, 5)
    .reverse()
    .map(match => {
      const malHome = match.homeTeam === MALAVOGLIA;
      const gf = malHome ? match.homeGoals : match.awayGoals;
      const gs = malHome ? match.awayGoals : match.homeGoals;
      return { type: gf > gs ? 'win' : gf === gs ? 'draw' : 'loss' };
    });
}

function getCurrentProfilePlayer() {
  if (!authState.currentUser) return null;
  if (authState.currentUser.playerId) {
    const linkedPlayer = getPlayerById(authState.currentUser.playerId);
    if (linkedPlayer) return linkedPlayer;
  }
  const nameKey = buildNameKey(authState.currentUser.firstName, authState.currentUser.lastName);
  return state.players.find(player => buildNameKey(player.firstName, player.lastName) === nameKey) || null;
}

function getCurrentProfileAccount() {
  if (authState.currentUser?.accountType !== 'staff-account') return null;
  const accountIds = Array.isArray(authState.currentUser.staffAccountIds)
    ? authState.currentUser.staffAccountIds
    : [authState.currentUser.staffAccountId].filter(Boolean);
  return accountIds.map(id => getStaffAccountById(id)).find(Boolean) || null;
}

function getEventMinuteValue(value = '') {
  const parsed = Number(String(value || '').replace(/[^0-9]/g, ''));
  return Number.isFinite(parsed) ? parsed : 999;
}

function formatDateOnly(dateStr = '') {
  const normalizedDate = normalizeStoredDate(dateStr);
  if (!normalizedDate) return '-';
  const [dd, mm, yyyy] = String(normalizedDate).split('/');
  if (!dd || !mm || !yyyy) return String(normalizedDate || '-');
  const date = new Date(`${yyyy}-${mm}-${dd}T00:00:00`);
  return date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatMatchCardDate(dateStr = '') {
  const normalizedDate = normalizeStoredDate(dateStr);
  if (!normalizedDate) return '—';
  const [dd = '', mm = ''] = String(normalizedDate).split('/');
  return [dd, mm].filter(Boolean).join('/') || String(normalizedDate || '—');
}

function formatGoalEventLabel(eventData) {
  if (!eventData || !eventData.match) return '-';
  return formatDateOnly(eventData.match.date);
}

function buildShirtSvg(number = '') {
  const rawNumber = String(number || '-').trim() || '-';
  const shirtNumber = escapeHtml(rawNumber);
  const digits = rawNumber.replace(/\s+/g, '');
  const fontSize = digits.length >= 3 ? 38 : digits.length === 2 ? 50 : 60;
  return `
    <svg viewBox="0 0 280 280" class="profile-shirt-svg" role="img" aria-label="Maglia numero ${shirtNumber}">
      <defs>
        <linearGradient id="shirtBodyGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#edf2f7" />
        </linearGradient>
        <linearGradient id="shirtRibGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#f7cf39" />
          <stop offset="100%" stop-color="#ffd95c" />
        </linearGradient>
        <filter id="shirtDropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#102032" flood-opacity="0.2"/>
        </filter>
      </defs>
      <g filter="url(#shirtDropShadow)">
        <path d="M102 36c9 14 22 22 38 22s29-8 38-22l34 11 28 57-33 18-16-27v136c0 10-8 18-18 18H107c-10 0-18-8-18-18V95l-16 27-33-18 28-57 34-11Z" fill="url(#shirtBodyGradient)" stroke="#cfd8e3" stroke-width="7" stroke-linejoin="round"/>
        <path d="M114 36c6 11 15 17 26 17s20-6 26-17" fill="none" stroke="#bfcad7" stroke-width="6" stroke-linecap="round"/>
        <path d="M96 86c13 10 28 16 44 18" fill="none" stroke="#d9e2eb" stroke-width="6" stroke-linecap="round" opacity=".8"/>
        <path d="M184 86c-13 10-28 16-44 18" fill="none" stroke="#d9e2eb" stroke-width="6" stroke-linecap="round" opacity=".8"/>
        <path d="M109 102h62" stroke="url(#shirtRibGradient)" stroke-width="8" stroke-linecap="round" opacity=".95"/>
        <path d="M170 102h1" stroke="url(#shirtRibGradient)" stroke-width="8" stroke-linecap="round" opacity=".95"/>
        <rect x="94" y="84" width="92" height="112" rx="28" fill="none" stroke="none"/>
        <text x="140" y="148" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-weight="900" fill="#07111d" font-family="Inter, Arial, sans-serif" letter-spacing="-1">${shirtNumber}</text>
      </g>
    </svg>
  `;
}

function buildProfileVerticalChart(items = []) {
  const safeItems = items.map(item => ({
    label: String(item.label || '-'),
    value: Number(item.value) || 0,
  }));
  const maxValue = safeItems.reduce((max, item) => Math.max(max, item.value), 0) || 1;
  return `
    <div class="profile-vertical-chart">
      ${safeItems.map(item => {
        const height = item.value ? Math.max(16, Math.round((item.value / maxValue) * 100)) : 8;
        return `
          <div class="profile-vertical-bar-col">
            <strong>${escapeHtml(String(item.value))}</strong>
            <div class="profile-vertical-bar-track"><span style="height:${height}%"></span></div>
            <small class="profile-vertical-date-label">${escapeHtml(item.label)}</small>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function buildProfileBarChartRows(items = [], options = {}) {
  const safeItems = items.map(item => ({
    ...item,
    value: Number(item.value) || 0,
  }));
  const maxValue = safeItems.reduce((max, item) => Math.max(max, item.value), 0) || 1;
  return safeItems.map(item => `
    <div class="profile-chart-row ${escapeHtml(item.tone || 'dark')}">
      <div class="profile-chart-meta">
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(String(item.value))}</strong>
      </div>
      <div class="profile-chart-track"><span style="width:${item.value ? Math.max(12, Math.round((item.value / maxValue) * 100)) : 0}%"></span></div>
    </div>
  `).join('');
}

function getPlayerProfileStats(playerId = '') {
  const stats = {
    goals: 0,
    goalsFirstHalf: 0,
    goalsSecondHalf: 0,
    matchesWithGoal: new Set(),
    goalsByMatch: new Map(),
    yellowCards: 0,
    doubleYellowCards: 0,
    directRedCards: 0,
    yellowRedCards: 0,
    disciplinaryCardsTotal: 0,
    firstGoalEvent: null,
    lastGoalEvent: null,
    lastCardMatch: null,
    scorersRank: null,
    mvpCount: 0,
    lastFiveMatchesGoals: [],
  };
  if (!playerId) return stats;

  getMalavogliaMatches().forEach(match => {
    (match.scorers || []).forEach(item => {
      if (item.playerId !== playerId) return;
      stats.goals += 1;
      if (item.period === '2T') stats.goalsSecondHalf += 1;
      else stats.goalsFirstHalf += 1;
      stats.matchesWithGoal.add(match.id);
      const currentTimestamp = toTimestamp(match.date, match.time);
      const currentMinute = getEventMinuteValue(item.minute);
      const firstTimestamp = stats.firstGoalEvent ? toTimestamp(stats.firstGoalEvent.match.date, stats.firstGoalEvent.match.time) : Infinity;
      const firstMinute = stats.firstGoalEvent ? getEventMinuteValue(stats.firstGoalEvent.item?.minute) : Infinity;
      const lastTimestamp = stats.lastGoalEvent ? toTimestamp(stats.lastGoalEvent.match.date, stats.lastGoalEvent.match.time) : -Infinity;
      const lastMinute = stats.lastGoalEvent ? getEventMinuteValue(stats.lastGoalEvent.item?.minute) : -Infinity;
      const opponent = match.homeTeam === MALAVOGLIA ? match.awayTeam : match.homeTeam;
      const bucket = stats.goalsByMatch.get(match.id) || {
        matchId: match.id,
        timestamp: currentTimestamp,
        label: `${formatDateOnly(match.date)} • ${opponent}`,
        shortLabel: formatDateOnly(match.date),
        value: 0,
        tone: 'scoring',
      };
      bucket.value += 1;
      stats.goalsByMatch.set(match.id, bucket);

      if (!stats.firstGoalEvent || currentTimestamp < firstTimestamp || (currentTimestamp === firstTimestamp && currentMinute < firstMinute)) {
        stats.firstGoalEvent = { match, item };
      }
      if (!stats.lastGoalEvent || currentTimestamp > lastTimestamp || (currentTimestamp === lastTimestamp && currentMinute > lastMinute)) {
        stats.lastGoalEvent = { match, item };
      }
    });

    if (isPlayed(match) && match.mvpPlayerId === playerId) {
      stats.mvpCount += 1;
    }

    (match.cards || []).forEach(item => {
      if (item.playerId !== playerId) return;
      stats.disciplinaryCardsTotal += 1;
      if (item.type === 'Cartellino Giallo') stats.yellowCards += 1;
      if (item.type === 'Doppia Ammonizione') stats.doubleYellowCards += 1;
      if (item.type === 'Cartellino Rosso Diretto') stats.directRedCards += 1;
      if (item.type === 'Cartellino Giallo + Cartellino Rosso Diretto') stats.yellowRedCards += 1;
      if (!stats.lastCardMatch || toTimestamp(match.date, match.time) > toTimestamp(stats.lastCardMatch.date, stats.lastCardMatch.time)) {
        stats.lastCardMatch = match;
      }
    });
  });

  const goalsByMatchMap = stats.goalsByMatch;
  stats.lastFiveMatchesGoals = Array.from(goalsByMatchMap.values())
    .filter(item => (Number(item.value) || 0) > 0)
    .sort((a, b) => {
      const byGoals = (Number(b.value) || 0) - (Number(a.value) || 0);
      if (byGoals !== 0) return byGoals;
      return (Number(a.timestamp) || 0) - (Number(b.timestamp) || 0);
    })
    .slice(0, 5)
    .map(item => ({
      label: item.shortLabel || item.label || '-',
      value: Number(item.value) || 0,
    }));
  stats.matchesWithGoal = stats.matchesWithGoal.size;
  stats.goalsByMatch = Array.from(goalsByMatchMap.values()).sort((a, b) => a.timestamp - b.timestamp);
  const player = getPlayerById(playerId);
  const scorers = getScorersTable();
  const rankIndex = player ? scorers.findIndex(row => row.name === getPlayerFullName(player)) : -1;
  stats.scorersRank = rankIndex >= 0 ? rankIndex + 1 : null;
  return stats;
}

function buildProfileStatsCard(player, stats) {
  if (!player) {
    return `
      <article class="card light-card profile-card">
        <div class="section-title-row"><h3>Statistiche giocatore</h3></div>
        <div class="empty-state">Nessuna statistica disponibile per questo account.</div>
      </article>
    `;
  }

  const bestMatchesChart = stats.lastFiveMatchesGoals.length
    ? `
      <div class="profile-chart-section-title">Migliori partite</div>
      ${buildProfileVerticalChart(stats.lastFiveMatchesGoals)}
    `
    : '';

  const attackingRows = [
    { label: 'Goal 1T', value: stats.goalsFirstHalf },
    { label: 'Goal 2T', value: stats.goalsSecondHalf },
    { label: 'Primo goal', value: formatGoalEventLabel(stats.firstGoalEvent) },
    { label: 'Ultimo goal', value: formatGoalEventLabel(stats.lastGoalEvent) },
    { label: 'MVP', value: stats.mvpCount },
  ];

  const disciplinaryRows = [
    { label: 'Cartellini gialli', value: stats.yellowCards },
    { label: 'Doppie ammonizioni', value: stats.doubleYellowCards },
    { label: 'Rossi diretti', value: stats.directRedCards },
    { label: 'Giallo + Rosso diretto', value: stats.yellowRedCards },
  ];

  return `
    <article class="card light-card profile-card profile-stats-card profile-stats-reimagined">
      <div class="section-title-row"><h3>Statistiche giocatore</h3></div>
      <div class="profile-analytics-grid profile-analytics-grid-football">
        <section class="profile-analytics-card scoring-side">
          <div class="profile-stat-banner scoring-banner">
            <span>Goal segnati</span>
            <strong>${escapeHtml(String(stats.goals))}</strong>
          </div>
          ${bestMatchesChart ? `
          <div class="profile-vertical-chart-wrap">
            ${bestMatchesChart}
          </div>` : ''}
          <div class="profile-insights-list slim-list attack-grid">
            ${attackingRows.map(item => `
              <div class="profile-insight-row compact-row stat-tile">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(String(item.value))}</strong>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="profile-analytics-card discipline-side">
          <div class="profile-insights-list slim-list discipline-list">
            ${disciplinaryRows.map(item => `
              <div class="profile-insight-row compact-row stat-tile">
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(String(item.value))}</strong>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    </article>
  `;
}

function renderProfile() {
  const box = document.getElementById('profileContent');
  if (!box) return;
  if (!hasProfileAccess()) {
    box.innerHTML = '<article class="card light-card"><div class="empty-state">Profilo non disponibile per questo account.</div></article>';
    return;
  }

  const player = getCurrentProfilePlayer();
  const account = getCurrentProfileAccount();
  const stats = getPlayerProfileStats(player?.id || '');
  const fullName = player ? getPlayerFullName(player) : authState.currentUser.displayName;
  const photo = (player && player.photo ? player.photo : '') || account?.photo || authState.currentUser?.photo || DEFAULT_PLAYER_IMG;
  const phone = player?.phone || account?.phone || '';
  const canEditIdentity = hasProfileAccess();
  const isDetailsOpen = Boolean(uiState.profileDetailsOpen);
  const rankValue = player && stats.scorersRank ? `#${stats.scorersRank}` : '-';

  box.innerHTML = `
    <div class="profile-layout">
      <article class="card light-card profile-card profile-hero-card">
        <div class="profile-hero-top">
          <img class="profile-photo" src="${escapeHtml(photo)}" alt="${escapeHtml(fullName)}" />
          <div class="profile-hero-meta">
            <div class="profile-meta-topline">
              <p class="auth-kicker">Account personale</p>
              <button type="button" class="btn ghost small profile-toggle-details ${isDetailsOpen ? 'active' : ''}" id="profileDetailsToggleBtn">Modifica dati</button>
            </div>
            <h3>${escapeHtml(fullName)}</h3>
            <div class="player-badges profile-badges">
              <span class="role-pill ${authState.currentUser?.role === 'manager' ? 'manager' : ''}">${escapeHtml(authState.currentUser?.roleLabel || 'Giocatore')}</span>
              ${player ? `<span class="player-status ${player.status === 'retired' ? 'retired' : ''}">${player.status === 'retired' ? 'Ritirato' : 'Attivo'}</span>` : ''}
            </div>
            <p class="profile-subcopy">Telefono: <strong>${escapeHtml(phone || '-')}</strong></p>
          </div>
          ${player ? `
            <div class="profile-side-spotlight">
              <div class="profile-rank-card">
                <span>Classifica marcatori</span>
                <strong>${escapeHtml(String(rankValue))}</strong>
              </div>
              <div class="profile-shirt-card">
                <span class="profile-shirt-label">Maglia</span>
                ${buildShirtSvg(player.number || '-')}
              </div>
            </div>
          ` : ''}
        </div>
      </article>

      <article class="card light-card profile-card ${isDetailsOpen ? '' : 'hidden'}" id="profilePersonalDataCard">
        <div class="section-title-row"><h3>Modifica dati</h3></div>
        <form id="profileForm" class="player-form">
          <div class="grid two">
            <label>Nome<input id="profileFirstName" type="text" required ${canEditIdentity ? '' : 'readonly'} value="${escapeHtml(player?.firstName || account?.firstName || authState.currentUser?.firstName || '')}" /></label>
            <label>Cognome<input id="profileLastName" type="text" required ${canEditIdentity ? '' : 'readonly'} value="${escapeHtml(player?.lastName || account?.lastName || authState.currentUser?.lastName || '')}" /></label>
          </div>
          <label>Telefono<input id="profilePhone" type="tel" value="${escapeHtml(phone)}" placeholder="Es. 347…" /></label>
          <label>Immagine profilo<input id="profilePhoto" type="file" accept="image/*" /></label>
          <div class="form-actions">
            <button type="submit" class="btn primary">💾 Salva profilo</button>
            <button type="button" id="profilePasswordBtn" class="btn ghost">Cambia password</button>
            <button type="button" id="profileCloseDetailsBtn" class="btn ghost">Chiudi</button>
          </div>
        </form>
      </article>

      ${buildProfileStatsCard(player, stats)}
    </div>
  `;
}

async function handleProfileSave(event) {
  event.preventDefault();
  if (!authState.currentUser || !hasProfileAccess()) return;

  const requestedFirstName = document.getElementById('profileFirstName').value.trim();
  const requestedLastName = document.getElementById('profileLastName').value.trim();
  const phone = document.getElementById('profilePhone').value.trim();
  const photoInput = document.getElementById('profilePhoto');
  const currentPlayer = getCurrentProfilePlayer();
  const currentAccount = getCurrentProfileAccount();

  const canEditIdentity = hasProfileAccess();
  const firstName = canEditIdentity
    ? requestedFirstName
    : (currentPlayer?.firstName || currentAccount?.firstName || authState.currentUser?.firstName || '');
  const lastName = canEditIdentity
    ? requestedLastName
    : (currentPlayer?.lastName || currentAccount?.lastName || authState.currentUser?.lastName || '');

  if (!firstName || !lastName) {
    alert('Nome e cognome sono obbligatori.');
    return;
  }

  if (currentPlayer && canEditIdentity) {
    const duplicateName = state.players.some(player => player.id !== currentPlayer.id && buildNameKey(player.firstName, player.lastName) === buildNameKey(firstName, lastName));
    if (duplicateName) {
      alert('Esiste già un giocatore con lo stesso nome e cognome.');
      return;
    }
  }


  const finishSave = photo => {
    const snapshot = clone({
      players: state.players,
      staff: state.staff,
      auth: state.auth,
    });

    if (currentPlayer) {
      currentPlayer.firstName = firstName;
      currentPlayer.lastName = lastName;
      currentPlayer.phone = phone;
      if (photo != null) currentPlayer.photo = photo;
    }

    if (authState.currentUser.accountType === 'staff-account') {
      const accountIds = Array.isArray(authState.currentUser.staffAccountIds)
        ? authState.currentUser.staffAccountIds
        : [authState.currentUser.staffAccountId].filter(Boolean);
      accountIds.forEach(accountId => {
        const staffAccount = getStaffAccountById(accountId);
        if (!staffAccount) return;
        staffAccount.firstName = firstName;
        staffAccount.lastName = lastName;
        staffAccount.phone = phone;
        if (photo != null) staffAccount.photo = photo;
        const staffRow = getStaffMemberByRole(staffAccount.staffRole || staffAccount.roleLabel);
        if (staffRow) {
          staffRow.firstName = firstName;
          staffRow.lastName = lastName;
          staffRow.phone = phone;
          if (photo != null) staffRow.photo = photo;
        }
      });
    }

    ensureAuthStateIntegrity();
    authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
    const saved = saveState();
    if (!saved) {
      state.players = snapshot.players;
      state.staff = snapshot.staff;
      state.auth = snapshot.auth;
      ensureAuthStateIntegrity();
      authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
      applyAuthLayout();
      renderAll();
      alert("Impossibile salvare il profilo: l\'immagine e troppo pesante per il salvataggio locale. Prova con una foto piu leggera.");
      return;
    }
    applyAuthLayout();
    renderAll();
    alert('Profilo aggiornato con successo.');
  };

  if (photoInput?.files && photoInput.files[0]) {
    try {
      const photo = await readImageFileForStorage(photoInput.files[0]);
      finishSave(photo);
    } catch (error) {
      console.warn('Errore durante la lettura della foto profilo', error);
      alert("Non sono riuscito a leggere l\'immagine selezionata.");
    }
  } else {
    finishSave(null);
  }
}

function renderNavigation() {
  let hash = window.location.hash || '#home';
  if (hash === '#profilo' && !hasProfileAccess()) hash = '#home';
  document.querySelectorAll('.page').forEach(page => page.classList.toggle('active', `#${page.id}` === hash));
  document.querySelectorAll('.main-nav a, .bottom-nav a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === hash));
  if (hash === '#partite' && !uiState.targetMatchId) {
    requestAnimationFrame(() => scrollToPartiteTop({ behavior: 'auto' }));
  }
}

function focusMatch(matchId) {
  if (!matchId) return;
  uiState.expandedMatchId = matchId;
  uiState.editingMatchId = null;
  uiState.targetMatchId = matchId;
}

function scrollToMatch(matchId) {
  const target = document.querySelector(`[data-match-id="${CSS.escape(matchId)}"]`);
  if (!target) return false;
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return true;
}

function scrollToPartiteTop(options = {}) {
  const { behavior = 'smooth' } = options || {};
  const target = document.querySelector('#partite .partite-header-sticky') || document.getElementById('partite');
  if (!target) return false;
  target.scrollIntoView({ behavior, block: 'start' });
  return true;
}

function performPendingMatchScroll() {
  if ((window.location.hash || '#home') !== '#partite' || !uiState.targetMatchId) return;
  const matchId = uiState.targetMatchId;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (scrollToMatch(matchId)) uiState.targetMatchId = null;
    });
  });
}

function focusPoll(pollId) {
  if (!pollId) return;
  uiState.targetPollId = pollId;
}

function scrollToPoll(pollId) {
  const target = document.querySelector(`[data-poll-id="${CSS.escape(pollId)}"]`);
  if (!target) return false;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return true;
}

function performPendingPollScroll() {
  if ((window.location.hash || '#home') !== '#sondaggi' || !uiState.targetPollId) return;
  const pollId = uiState.targetPollId;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (scrollToPoll(pollId)) uiState.targetPollId = null;
    });
  });
}

function populateTeamFilter() {
  const select = document.getElementById('matchTeamFilter');
  const current = select.value || 'all';
  select.innerHTML = ['<option value="all">Tutte</option>']
    .concat(teams.map(team => `<option value="${escapeHtml(team.name)}">${escapeHtml(team.name)}</option>`))
    .join('');
  if ([...select.options].some(option => option.value === current)) select.value = current;
}

function populateRoundFilter() {
  const select = document.getElementById('roundFilter');
  if (!select) return;
  const current = select.value || 'all';
  const rounds = [...new Set(getMatchesForSelectedSeason().map(match => Number(match.round)).filter(Number.isFinite))].sort((a, b) => a - b);
  select.innerHTML = ['<option value="all">Tutte</option>']
    .concat(rounds.map(round => `<option value="${round}">${round}</option>`))
    .join('');
  if ([...select.options].some(option => option.value === current)) {
    select.value = current;
  }
}

function getLatestEnteredMatchId() {
  const candidates = getMatchesForSelectedSeason().filter(match => match.status === 'played' || match.status === 'postponed');
  return candidates.length ? candidates[candidates.length - 1].id : null;
}

function getNextMalavogliaMatch() {
  return getMalavogliaMatches()
    .filter(match => !isPlayed(match))
    .sort((a, b) => toTimestamp(a.date, a.time) - toTimestamp(b.date, b.time))[0] || null;
}

function refreshHomeWeather() {
  updateWeatherPanels(getNextMalavogliaMatch());
}

function renderHome() {
  const standings = getStandings();
  const malIndex = standings.findIndex(row => row.team === MALAVOGLIA);
  const malRow = standings[malIndex];
  const form = getLastFiveForm();
  const standingBox = document.getElementById('homeStandingBox');

  if (!malRow) {
    standingBox.innerHTML = '<div class="empty-state">Classifica non disponibile.</div>';
  } else {
    standingBox.innerHTML = `
      <div class="position-header">
        <div>
          <div class="stat-kicker">Classifica</div>
          <div class="position-rank">${malIndex + 1}°</div>
        </div>
        <div class="position-points">
          <div class="stat-kicker">Punti</div>
          <strong>${malRow.points}</strong>
        </div>
      </div>
      <div class="position-stats-grid">
        <div class="position-stat"><span>PG</span><strong>${malRow.played}</strong></div>
        <div class="position-stat"><span>GF</span><strong>${malRow.gf}</strong></div>
        <div class="position-stat"><span>GS</span><strong>${malRow.gs}</strong></div>
        <div class="position-stat"><span>DR</span><strong>${malRow.diff}</strong></div>
      </div>
      <div class="form-squares-wrap">
        <div class="form-squares-label">Ultime 5</div>
        <div class="form-squares">
          ${form.length ? form.map(item => `<span class="form-square ${item.type}">${item.type === 'win' ? 'V' : item.type === 'draw' ? 'N' : 'P'}</span>`).join('') : '<span class="empty-state">-</span>'}
        </div>
      </div>
    `;
  }

  const malMatches = getMalavogliaMatches();
  const played = malMatches.filter(isPlayed).sort((a, b) => toTimestamp(b.date, b.time) - toTimestamp(a.date, a.time));
  const scheduled = malMatches.filter(match => !isPlayed(match)).sort((a, b) => toTimestamp(a.date, a.time) - toTimestamp(b.date, b.time));
  const last = played[0] || null;
  const next = scheduled[0] || null;

  document.getElementById('lastMatchBox').innerHTML = last ? buildHomeMatchCard(last) : '<div class="empty-state">Nessuna partita giocata.</div>';
  document.getElementById('nextMatchBox').innerHTML = next ? buildHomeMatchCard(next, { forceDashForUnplayed: true }) : '<div class="empty-state">Nessuna prossima partita.</div>';
  const noticesBox = document.getElementById('homeNoticesBox');
  if (noticesBox) {
    const notices = getVisibleHomeNotices();
    noticesBox.innerHTML = notices.length ? buildHomeNoticesMarkup(notices) : '<div class="empty-state">Nessun avviso disponibile.</div>';
  }
  refreshHomeWeather();
}

function getMatchScoreLabel(match) {
  if (isPlayed(match)) return `${match.homeGoals} - ${match.awayGoals}`;
  if (match?.status === 'postponed') return 'Rinviata';
  return 'Da Giocare';
}

function buildHomeMatchCard(match, options = {}) {
  const score = options.forceDashForUnplayed && !isPlayed(match) ? '-' : getMatchScoreLabel(match);
  return `
    <div class="home-match-card" data-match-ref="${escapeHtml(match.id)}">
      <div class="home-match-teams">
        <div class="home-team home">
          <img src="${getTeamLogo(match.homeTeam, match.season || inferSeasonFromDate(match.date) || getSelectedSeason())}" alt="${escapeHtml(match.homeTeam)}" />
          <div class="team-name">${escapeHtml(match.homeTeam)}</div>
        </div>
        <div class="home-score">${score}</div>
        <div class="home-team away">
          <div class="team-name">${escapeHtml(match.awayTeam)}</div>
          <img src="${getTeamLogo(match.awayTeam, match.season || inferSeasonFromDate(match.date) || getSelectedSeason())}" alt="${escapeHtml(match.awayTeam)}" />
        </div>
      </div>
      <div class="home-match-meta">
        <span>${escapeHtml(formatDate(match.date, match.time))}</span>
        <a class="home-link-reset" href="${buildGoogleMapsUrl({ query: getVenueForMatch(match), label: getVenueForMatch(match) })}" data-maps-query="${escapeHtml(getVenueForMatch(match))}" data-maps-label="${escapeHtml(getVenueForMatch(match))}">${escapeHtml(getVenueForMatch(match))}</a>
      </div>
    </div>
  `;
}

function getVisibleHomeNotices() {
  if (POLL_SECTION_DISABLED) return [];
  const allPolls = clone(state.polls || []);
  
  const notices = allPolls
    .filter(poll => isNoticeWithoutSurvey(poll))
    .filter(poll => !isNoticeHomeExpired(poll))
    .filter(poll => !isPollHiddenForCurrentUser(poll.id))
    .filter(poll => !isPollDeletedForRecipients(poll));
  
  const noticesWithSurvey = allPolls
    .filter(poll => isNoticePoll(poll) && poll?.includeSurvey)
    .filter(poll => !isNoticeHomeExpired(poll))
    .filter(poll => !isPollHiddenForCurrentUser(poll.id))
    .filter(poll => !isPollDeletedForRecipients(poll));
  
  const surveys = allPolls
    .filter(poll => isPureSurvey(poll))
    .filter(poll => !isSurveyHomeExpired(poll))
    .filter(poll => !isPollHiddenForCurrentUser(poll.id))
    .filter(poll => !isPollDeletedForRecipients(poll));
  
  const combined = [...notices, ...noticesWithSurvey, ...surveys];
  return combined
    .sort((a, b) => (getNoticePublishStamp(b) - getNoticePublishStamp(a)) || getPollSortTimestamp(b) - getPollSortTimestamp(a) || String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
    .slice(0, 5);
}

function buildHomeNoticesMarkup(notices = []) {
  return `
    <div class="home-notices-list home-notices-title-list">
      ${notices.map(notice => {
        const typeIcon = POLL_TYPE_META[notice.type]?.icon || '📌';
        const dateTime = escapeHtml(formatPollAnsweredAt(notice.publishedAt || notice.createdAt || ''));
        return `
        <button type="button" class="home-notice-row home-notice-title-row" data-home-notice-id="${escapeHtml(notice.id)}">
          <span class="home-notice-time">${typeIcon} <span style="font-weight: normal;">${dateTime}</span></span>
          <strong>${escapeHtml(getPollDisplayTitle(notice))}</strong>
        </button>
      `;
      }).join('')}
    </div>
  `;
}

function toIsoDateFromItalian(dateStr = '') {
  if (!dateStr) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(dateStr))) return String(dateStr);
  const [dd = '', mm = '', yyyy = ''] = String(dateStr || '').split('/');
  if (!dd || !mm || !yyyy) return '';
  return `${yyyy}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`;
}

function buildMatchDateTimeFromItalian(dateStr = '', timeStr = '00.00') {
  const isoDate = toIsoDateFromItalian(dateStr);
  if (!isoDate) return null;
  const [hours = '00', minutes = '00'] = normalizeTime(timeStr || '00.00').split('.');
  const stamp = new Date(`${isoDate}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`);
  return Number.isNaN(stamp.getTime()) ? null : stamp;
}

function findClosestForecastIndex(times = [], targetDate = null) {
  if (!Array.isArray(times) || !times.length) return -1;
  if (!(targetDate instanceof Date) || Number.isNaN(targetDate.getTime())) return 0;
  let closestIndex = 0;
  let closestDiff = Number.POSITIVE_INFINITY;
  times.forEach((value, index) => {
    const candidate = new Date(`${value}:00`);
    const diff = Math.abs(candidate.getTime() - targetDate.getTime());
    if (diff < closestDiff) {
      closestDiff = diff;
      closestIndex = index;
    }
  });
  return closestIndex;
}

async function fetchWeatherForTown(town, options = {}) {
  const coords = weatherCoords[town];
  if (!coords) return null;

  const mode = options?.mode === 'forecast' ? 'forecast' : 'current';
  const targetDate = mode === 'forecast'
    ? buildMatchDateTimeFromItalian(options?.targetDate || '', options?.targetTime || '00.00')
    : null;

  try {
    if (mode === 'forecast' && targetDate) {
      const isoDate = toIsoDateFromItalian(options?.targetDate || '');
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m,weather_code,is_day&timezone=Europe%2FRome&start_date=${isoDate}&end_date=${isoDate}`;
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return null;
      const data = await response.json();
      const hourly = data.hourly || {};
      const times = Array.isArray(hourly.time) ? hourly.time : [];
      const index = findClosestForecastIndex(times, targetDate);
      if (index < 0 || !times[index]) return null;
      const selectedTime = new Date(`${times[index]}:00`);
      return {
        town,
        temperature: Number.isFinite(hourly.temperature_2m?.[index]) ? Math.round(hourly.temperature_2m[index]) : null,
        icon: getWeatherIcon(Number(hourly.weather_code?.[index]), Boolean(hourly.is_day?.[index])),
        updatedAt: new Date().toISOString(),
        referenceAt: Number.isNaN(selectedTime.getTime()) ? targetDate.toISOString() : selectedTime.toISOString(),
      };
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weather_code,is_day&timezone=Europe%2FRome`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) return null;
    const data = await response.json();
    const current = data.current || {};
    const updatedAt = current.time ? new Date(`${current.time}:00`) : new Date();
    return {
      town,
      temperature: Number.isFinite(current.temperature_2m) ? Math.round(current.temperature_2m) : null,
      icon: getWeatherIcon(Number(current.weather_code), Boolean(current.is_day)),
      updatedAt: Number.isNaN(updatedAt.getTime()) ? null : updatedAt.toISOString(),
      referenceAt: Number.isNaN(updatedAt.getTime()) ? null : updatedAt.toISOString(),
    };
  } catch {
    return null;
  }
}

function getWeatherIcon(code, isDay) {
  const dayClear = isDay ? '☀️' : '🌙';
  if ([0].includes(code)) return dayClear;
  if ([1, 2].includes(code)) return isDay ? '🌤️' : '☁️';
  if ([3].includes(code)) return '☁️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 56, 57].includes(code)) return '🌦️';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
  if ([95, 96, 99].includes(code)) return '⛈️';
  return '☁️';
}

async function updateWeatherPanels(nextMatch) {
  const nextTown = nextMatch ? teamTowns[nextMatch.homeTeam] || getVenueTown(nextMatch.venue) : 'Povegliano Veronese';
  const [nextWeather, homeWeather] = await Promise.all([
    nextMatch
      ? fetchWeatherForTown(nextTown, { mode: 'forecast', targetDate: nextMatch.date, targetTime: nextMatch.time })
      : fetchWeatherForTown(nextTown),
    fetchWeatherForTown('Povegliano Veronese'),
  ]);

  const weatherBox = document.getElementById('weatherBox');
  const weatherCard = document.querySelector('.weather-card');
  if (weatherCard) {
    delete weatherCard.dataset.weatherUrl;
    weatherCard.classList.remove('clickable-card');
  }
  weatherBox.innerHTML = `
    <div class="weather-stack">
      ${buildWeatherBlock('Meteo Prossima giornata', nextWeather || {
        town: nextTown,
        temperature: null,
        icon: '☁️',
        referenceAt: nextMatch ? (buildMatchDateTimeFromItalian(nextMatch.date, nextMatch.time)?.toISOString() || null) : null,
      })}
      ${buildWeatherBlock('Meteo Casa', homeWeather || { town: 'Povegliano Veronese', temperature: null, icon: '☁️' })}
    </div>
  `;
}

function buildWeatherBlock(title, weather) {
  const updatedAtLabel = weather?.updatedAt
    ? formatPollAnsweredAt(weather.updatedAt)
    : 'in aggiornamento';
  const referenceAtLabel = weather?.referenceAt
    ? formatPollAnsweredAt(weather.referenceAt)
    : '';
  const showMeta = canViewWeatherMeta();
  return `
    <div class="weather-block">
      <div class="weather-kicker">${escapeHtml(title)}</div>
      <div class="weather-row">
        <div class="weather-icon">${escapeHtml(weather.icon)}</div>
        <div>
          <div class="weather-temp">${weather.temperature == null ? '--' : `${weather.temperature}°`}</div>
          <div class="weather-town">${escapeHtml(weather.town)}</div>
          ${showMeta && referenceAtLabel ? `<div class="weather-reference">Riferito a: ${escapeHtml(referenceAtLabel)}</div>` : ''}
          ${showMeta ? `<div class="weather-updated">Aggiornato: ${escapeHtml(updatedAtLabel)}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

function getPollTypeMeta(type = 'other') {
  return POLL_TYPE_META[type] || POLL_TYPE_META.other;
}

function isNoticePoll(poll) {
  return poll?.type === 'notice';
}

function isNoticeWithoutSurvey(poll) {
  return isNoticePoll(poll) && !poll?.includeSurvey;
}

function isSurveyPoll(poll) {
  return !isNoticePoll(poll) || (isNoticePoll(poll) && poll?.includeSurvey);
}

function isPureSurvey(poll) {
  return !isNoticePoll(poll);
}

function isPollDateTimeOptionalType(type = '') {
  return type === 'notice' || type === 'other';
}

function pollHasOptions(poll) {
  return Array.isArray(poll?.options) && poll.options.filter(option => normalizePollOptionLabel(option?.label || option)).length >= 2;
}

function getPollDisplayTitle(poll) {
  const explicitTitle = String(poll?.title || '').trim();
  if (explicitTitle) return explicitTitle;
  return getPollAutoTitle(poll);
}

function getPollEntityLabel(poll) {
  return isNoticePoll(poll) ? 'avviso' : 'sondaggio';
}

function getNoticePublishStamp(poll) {
  const raw = String(poll?.publishedAt || poll?.createdAt || '');
  const stamp = Date.parse(raw);
  return Number.isFinite(stamp) ? stamp : 0;
}

function isNoticeHomeExpired(poll) {
  if (!isNoticePoll(poll)) return false;
  if (isPureSurvey(poll)) return false;
  const stamp = getNoticePublishStamp(poll);
  if (!stamp) return false;
  return Date.now() > stamp + NOTICE_HOME_LIFETIME_MS;
}

function isSurveyHomeExpired(poll) {
  if (!isPureSurvey(poll)) return false;
  return isPollExpired(poll);
}

function canViewNoticeInsidePolls(poll) {
  if (isPollCreatedByCurrentUser(poll)) return true;
  
  return true;
}

function getPollSortTimestamp(poll) {
  const eventStamp = getPollEventTimestamp(poll);
  if (Number.isFinite(eventStamp)) return eventStamp;
  const createdStamp = Date.parse(String(poll?.createdAt || ''));
  return Number.isFinite(createdStamp) ? createdStamp : 0;
}

const POLL_LOCATION_MANUAL_VALUE = '__manual__';

function getPollLocationChoices() {
  const uniqueChoices = new Map();
  Object.entries(venues)
    .filter(([, address]) => Boolean(String(address || '').trim()))
    .forEach(([team, address]) => {
      const cleanAddress = String(address || '').trim();
      const key = normalizeAuthText(cleanAddress);
      if (!key || uniqueChoices.has(key)) return;
      uniqueChoices.set(key, {
        team,
        address: cleanAddress,
        label: cleanAddress,
      });
    });

  return [...uniqueChoices.values()]
    .sort((a, b) => a.address.localeCompare(b.address, 'it', { sensitivity: 'base' }));
}

function getPollLocationPresetValue(location = '') {
  const normalizedLocation = String(location || '').trim();
  if (!normalizedLocation) return '';
  const choice = getPollLocationChoices().find(item => item.address === normalizedLocation);
  return choice ? choice.address : '';
}

function getPollLocationOptions() {
  return getPollLocationChoices().map(item => item.address);
}

function getPollLocationTarget(location = '') {
  const cleanLocation = String(location || '').trim();
  if (!cleanLocation) return null;
  const normalizedLocation = normalizeAuthText(cleanLocation);
  const matchedTeam = Object.entries(venues).find(([, venue]) => normalizeAuthText(venue) === normalizedLocation)?.[0] || '';
  if (matchedTeam) return getVenueMapTarget(matchedTeam, cleanLocation);
  return getVenueMapTarget('', cleanLocation);
}

function buildPollLocationMarkup(location = '') {
  const cleanLocation = String(location || '').trim();
  if (!cleanLocation) return '<strong>Non specificato</strong>';
  const target = getPollLocationTarget(cleanLocation);
  if (!target?.query && !target?.label) return `<strong>${escapeHtml(cleanLocation)}</strong>`;
  return `<strong><a class="venue-link poll-location-link" href="${buildGoogleMapsUrl(target)}" data-maps-query="${escapeHtml(target.query || target.label || cleanLocation)}" data-maps-label="${escapeHtml(target.label || cleanLocation)}">${escapeHtml(cleanLocation)}</a></strong>`;
}

function formatPollDate(date = '') {
  if (!date) return 'Data da definire';
  const [year, month, day] = String(date).split('-');
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

function formatPollTime(time = '') {
  if (!time) return 'Ora da definire';
  return String(time).slice(0, 5);
}

function getPollDateTimeLabel(poll) {
  const parts = [];
  if (poll?.date) parts.push(formatPollDate(poll.date));
  if (poll?.time) parts.push(formatPollTime(poll.time));
  if (parts.length) return parts.join(' • ');
  if (isNoticePoll(poll) && poll?.createdAt) return `Pubblicato ${formatPollAnsweredAt(poll.createdAt)}`;
  return 'Data e ora da definire';
}

function getPollEventTimestamp(poll) {
  if (!poll?.date) return NaN;
  const baseTime = String(poll?.time || '00:00').slice(0, 5) || '00:00';
  const stamp = Date.parse(`${poll.date}T${baseTime}`);
  return Number.isFinite(stamp) ? stamp : NaN;
}

function isPollExpired(poll) {
  const stamp = getPollEventTimestamp(poll);
  if (!Number.isFinite(stamp)) return false;
  return Date.now() > stamp;
}

function resolvePollCreatorViewerKey(createdBy = {}) {
  if (!createdBy || typeof createdBy !== 'object') return '';
  if (createdBy.viewerKey) return createdBy.viewerKey;

  if (createdBy.accountType === 'player' && createdBy.playerId) {
    return `player:${createdBy.playerId}`;
  }
  if (createdBy.accountType === 'external-manager') {
    return `external-manager:${createdBy.externalManagerId || buildNameKey(createdBy.firstName, createdBy.lastName)}`;
  }
  if (createdBy.accountType === 'staff-account') {
    const ids = Array.isArray(createdBy.staffAccountIds)
      ? createdBy.staffAccountIds.filter(Boolean)
      : [createdBy.staffAccountId].filter(Boolean);
    return `staff:${ids.sort().join('|') || buildNameKey(createdBy.firstName, createdBy.lastName)}`;
  }

  const labelKey = normalizeAuthText(createdBy.label || `${createdBy.firstName || ''} ${createdBy.lastName || ''}`);
  if (!labelKey) return '';

  const player = (state.players || []).find(item => normalizeAuthText(getPlayerFullName(item)) === labelKey);
  if (player) return `player:${player.id}`;

  const staffAccounts = (state.auth?.staffAccounts || []).filter(item => normalizeAuthText(`${item.firstName || ''} ${item.lastName || ''}`) === labelKey);
  if (staffAccounts.length) {
    return `staff:${staffAccounts.map(item => item.id).sort().join('|') || buildNameKey(staffAccounts[0].firstName, staffAccounts[0].lastName)}`;
  }

  const externalManager = (state.auth?.externalManagers || []).find(item => normalizeAuthText(`${item.firstName || ''} ${item.lastName || ''}`) === labelKey);
  if (externalManager) return `external-manager:${externalManager.id || buildNameKey(externalManager.firstName, externalManager.lastName)}`;

  return '';
}

function isPollCreatedByCurrentUser(poll) {
  const viewerKey = getCurrentPollViewerKey();
  if (!viewerKey) return false;
  return viewerKey === resolvePollCreatorViewerKey(poll?.createdBy || {});
}

function getPollAutoTitle(poll) {
  const meta = getPollTypeMeta(poll?.type);
  return `${meta.icon} ${meta.label}`;
}

function getCurrentPollResponder() {
  const viewerKey = getCurrentPollViewerKey();
  const user = authState.currentUser;
  if (!viewerKey || !user) return null;

  if (user.accountType === 'player' && user.playerId) {
    const player = getPlayerById(user.playerId);
    if (player) {
      return {
        id: viewerKey,
        label: getPlayerFullName(player),
      };
    }
  }

  return {
    id: viewerKey,
    label: user.displayName || `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Utente',
  };
}

function getPollResponseCount(poll) {
  return Array.isArray(poll?.responses) ? poll.responses.length : 0;
}

function getPollUserResponse(poll, responderId = '') {
  if (!responderId || !Array.isArray(poll?.responses)) return null;
  return poll.responses.find(item => item.responderId === responderId) || null;
}

function formatPollAnsweredAt(value = '') {
  if (!value) return 'data/ora non disponibile';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'data/ora non disponibile';
  return date.toLocaleString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function normalizePollOptionLabel(value = '') {
  return String(value || '').trim();
}

function getPollOptionDraftValue(option) {
  return typeof option === 'string' ? option : (option?.label || '');
}

function resetPollComposer() {
  uiState.pollDraft = createDefaultPollDraft();
  uiState.pollComposerOpen = false;
}

function savePollDraftFromForm(form) {
  const draft = ensurePollDraft();
  draft.type = form.querySelector('[name="pollType"]')?.value || draft.type;
  draft.title = form.querySelector('[name="pollTitle"]')?.value.trim() || '';
  draft.date = form.querySelector('[name="pollDate"]')?.value || '';
  draft.time = form.querySelector('[name="pollTime"]')?.value || '';
  draft.location = form.querySelector('[name="pollLocation"]')?.value.trim() || '';
  draft.description = form.querySelector('[name="pollDescription"]')?.value.trim() || '';
  draft.includeSurvey = Boolean(form.querySelector('[name="pollIncludeSurvey"]')?.checked);
}

function openPollEditor(pollId = '') {
  if (!canManagePolls()) return;
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll || !isPollCreatedByCurrentUser(poll)) return;
  uiState.pollDraft = {
    editingPollId: poll.id,
    type: poll.type || 'training',
    title: poll.title || '',
    date: poll.date || '',
    time: poll.time || '',
    location: poll.location || '',
    description: poll.description || '',
    image: getPollImageSource(poll) || poll.image || '',
    imageChanged: false,
    includeSurvey: typeof poll.includeSurvey === 'boolean' ? poll.includeSurvey : pollHasOptions(poll),
    options: normalizePollDraftOptions((poll.options || []).map(option => ({
      id: option.id || '',
      label: option.label || '',
    }))),
  };
  uiState.pollComposerOpen = true;
  renderPolls();
}

function republishNotice(pollId = '') {
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll || !isNoticePoll(poll) || !isPollCreatedByCurrentUser(poll)) return;
  poll.publishedAt = new Date().toISOString();
  poll.updatedAt = new Date().toISOString();
  saveState();
  closeNoticeDetailModal();
  renderAll();
}

function buildPollComposer() {
  const draft = ensurePollDraft();
  const isEditing = Boolean(draft.editingPollId);
  const isNotice = draft.type === 'notice';
  const dateTimeOptional = isPollDateTimeOptionalType(draft.type);
  const showSurveyOptions = !isNotice || draft.includeSurvey;
  const titleLabel = isNotice ? 'Titolo avviso' : 'Titolo (opzionale)';
  const publishLabel = isEditing ? 'Salva modifiche' : (isNotice ? 'Pubblica avviso' : 'Pubblica sondaggio');
  const typeOptions = Object.entries(POLL_TYPE_META)
    .map(([value, meta]) => `<option value="${escapeHtml(value)}" ${draft.type === value ? 'selected' : ''}>${escapeHtml(meta.icon)} ${escapeHtml(meta.label)}</option>`)
    .join('');
  const locationChoices = getPollLocationChoices();
  const locationDatalistOptions = locationChoices
    .map(choice => `<option value="${escapeHtml(choice.address)}"></option>`)
    .join('');
  return `
    <article class="card light-card poll-compose-card">
      <div class="poll-compose-head">
        <div>
          <h3>${isEditing ? 'Modifica contenuto' : 'Nuovo contenuto'}</h3>
        </div>
      </div>
      <form id="pollForm" class="player-form">
        <div class="grid two">
          <label>Tipo
            <select name="pollType">${typeOptions}</select>
          </label>
          <label>${titleLabel}
            <input name="pollTitle" type="text" value="${escapeHtml(draft.title || '')}" placeholder="Inserisci un titolo" ${isNotice ? 'required' : ''} />
          </label>
        </div>
        ${isNotice ? '' : `
        <div class="grid two">
          <label>Data ${dateTimeOptional ? '(opzionale)' : ''}
            <input name="pollDate" type="date" ${dateTimeOptional ? '' : 'required'} value="${escapeHtml(draft.date || '')}" />
          </label>
          <label>Ora ${dateTimeOptional ? '(opzionale)' : ''}
            <input name="pollTime" type="time" ${dateTimeOptional ? '' : 'required'} value="${escapeHtml(draft.time || '')}" />
          </label>
        </div>`}
        <div class="grid two">
          <label>Luogo (opzionale)
            <input name="pollLocation" type="text" list="pollLocationChoices" value="${escapeHtml(draft.location || '')}" placeholder="Seleziona o scrivi un luogo" />
            <datalist id="pollLocationChoices">${locationDatalistOptions}</datalist>
          </label>
        </div>
        <div class="poll-image-upload-section">
          <label>Immagine (opzionale)</label>
          <button type="button" class="btn secondary" data-poll-action="select-image">
            📁 Seleziona immagine
          </button>
          <span id="pollImageFileName" class="poll-file-name-display"></span>
        </div>
        <label>Descrizione (opzionale)
          <textarea name="pollDescription" placeholder="Dettagli utili per i giocatori">${escapeHtml(draft.description || '')}</textarea>
        </label>
        ${draft.image ? `
          <div class="poll-image-preview-wrap">
            <img class="poll-image-preview" src="${escapeHtml(draft.image)}" alt="Anteprima contenuto" />
            <div class="inline-actions">
              <button type="button" class="btn ghost small" data-poll-action="remove-image">Rimuovi immagine</button>
            </div>
          </div>
        ` : ''}
        ${isNotice ? `
          <label class="poll-include-survey-toggle ${draft.includeSurvey ? 'is-active' : ''}">
            <input type="checkbox" name="pollIncludeSurvey" ${draft.includeSurvey ? 'checked' : ''} />
            <span class="poll-include-survey-icon" aria-hidden="true">📊</span>
            <span class="poll-include-survey-copy">Inserisci un sondaggio dentro l\'avviso</span>
          </label>
        ` : '<input type="hidden" name="pollIncludeSurvey" value="true" />'}
        ${showSurveyOptions ? `
        <div class="poll-options-card">
          <h4>Opzioni del sondaggio</h4>
          <div class="poll-options-stack">
            ${draft.options.map((option, index) => `
              <div class="poll-option-row">
                <label>Opzione ${index + 1}
                  <input type="text" data-poll-editor="option" data-index="${index}" value="${escapeHtml(getPollOptionDraftValue(option))}" placeholder="Testo opzione" />
                </label>
                <button type="button" class="btn ghost small" data-poll-action="remove-option" data-index="${index}" ${draft.options.length <= 2 ? 'disabled' : ''}>Rimuovi</button>
              </div>
            `).join('')}
          </div>
          <div class="inline-actions">
            <button type="button" class="btn secondary small" data-poll-action="add-option">➕ Aggiungi opzione</button>
          </div>
        </div>
        ` : ''}
        <div class="form-actions">
          <button type="button" class="btn ghost" data-poll-action="close-composer">Annulla</button>
          <button type="submit" class="btn primary">${publishLabel}</button>
        </div>
      </form>
    </article>
  `;
}

function buildPollResults(poll) {
  if (!pollHasOptions(poll)) return '';
  const total = getPollResponseCount(poll);
  const showResponderNames = canViewPollResponderNames();
  const showResponderTimestamps = canViewPollResponseTimestamps();

  return `
    <div class="poll-results-card">
      <div class="poll-results-head">
        <h4>Risultati</h4>
        <span class="poll-results-total">${total} ${total === 1 ? 'voto' : 'voti'}</span>
      </div>
      <div class="poll-results-stack">
        ${(poll.options || []).map(option => {
          const responses = (poll.responses || []).filter(item => item.optionId === option.id);
          const voters = showResponderNames
            ? responses.map(item => ({
                label: item.responderLabel || 'Utente',
                answeredAt: showResponderTimestamps ? formatPollAnsweredAt(item.answeredAt) : '',
              })).filter(item => item.label)
            : [];
          const count = responses.length;
          const percentage = total ? Math.round((count / total) * 100) : 0;
          return `
            <div class="poll-chart-row">
              <div class="poll-chart-meta">
                <strong>${escapeHtml(option.label)}</strong>
                <span>${count} ${count === 1 ? 'voto' : 'voti'} • ${percentage}%</span>
              </div>
              <div class="poll-chart-track">
                <span style="width:${percentage}%;"></span>
              </div>
              ${voters.length ? `
                <div class="poll-result-voters">
                  <span>Risposte:</span>
                  <div class="poll-result-voters-list">
                    ${voters.map(item => `<div class="poll-result-voter-row"><strong>${escapeHtml(item.label)}</strong>${item.answeredAt ? `<small>${escapeHtml(item.answeredAt)}</small>` : ''}</div>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function buildPollResponseCard(poll, canAnswer, myOption) {
  if (!pollHasOptions(poll)) return '';
  if (!canAnswer && !myOption) return '';
  const summary = myOption ? `<p class="poll-meta-copy">Hai risposto: <strong>${escapeHtml(myOption.label)}</strong></p>` : '';
  return `
    <div class="poll-response-card">
      ${summary}
      ${canAnswer ? `
        <div class="poll-vote-grid">
          ${(poll.options || []).map(option => {
            const selected = myOption?.id === option.id;
            return `<button type="button" class="btn ${selected ? 'primary is-selected' : 'secondary'} poll-vote-btn" data-poll-vote="true" data-poll-id="${escapeHtml(poll.id)}" data-option-id="${escapeHtml(option.id)}">${escapeHtml(option.label)}</button>`;
          }).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renewNoticePublication(pollId = '') {
  const poll = (state.polls || []).find(item => item.id === pollId && isNoticePoll(item));
  if (!poll || !isPollCreatedByCurrentUser(poll)) return;
  const stamp = new Date().toISOString();
  poll.publishedAt = stamp;
  poll.updatedAt = stamp;
  saveState();
  renderAll();
}

function buildPollCard(poll) {
  const responder = getCurrentPollResponder();
  const myResponse = responder ? getPollUserResponse(poll, responder.id) : null;
  const myOption = myResponse ? (poll.options || []).find(option => option.id === myResponse.optionId) : null;
  const isCancelled = Boolean(poll.isCancelled || poll.cancelledAt);
  const isExpired = isPollExpired(poll);
  const isCreator = isPollCreatedByCurrentUser(poll);
  const isDeletedForRecipients = !isCreator && isPollDeletedForRecipients(poll);
  const hasOptions = pollHasOptions(poll);
  const canAnswer = Boolean(responder) && hasOptions && !isCancelled && !isExpired && !isDeletedForRecipients;
  const currentViewerKey = getCurrentPollViewerKey();
  const canRestoreCancellation = Boolean(
    currentViewerKey
    && isCancelled
    && !isExpired
    && currentViewerKey === (poll.cancelledByViewerKey || resolvePollCreatorViewerKey(poll.createdBy || {}))
  );
  const isNotice = isNoticePoll(poll);
  const noticeExpired = isNoticeHomeExpired(poll);
  const surveyExpired = isSurveyHomeExpired(poll);
  const isCurrentEntityExpired = isPureSurvey(poll) ? surveyExpired : noticeExpired;
  const canDeleteForCurrentUser = Boolean(canDeletePollFromCurrentAccount(poll));
  const canDeleteGlobally = Boolean(isCreator);
  const canDeleteExpiredAsCreator = Boolean(isCreator && isCurrentEntityExpired);
  const canRenewNotice = Boolean(isNotice && isCreator && noticeExpired);
  const deleteLabel = "Elimina dall'account";
  const descriptionMarkup = poll.description ? `<p class="poll-card-copy">${escapeHtml(poll.description)}</p>` : '';
  const pollImageSrc = getPollImageSource(poll);
  const imageMarkup = pollImageSrc ? `<div class="poll-card-image-wrap"><img class="poll-card-image" src="${escapeHtml(pollImageSrc)}" alt="${escapeHtml(getPollDisplayTitle(poll))}" /></div>` : '';
  const itemLabel = getPollEntityLabel(poll);
  const statusNote = isDeletedForRecipients
    ? `Questo ${itemLabel} è stato eliminato.`
    : (isNotice && isCreator && noticeExpired
      ? 'Questo Avviso è Scaduto'
      : (isCancelled
        ? `Questo ${itemLabel} è stato annullato e non accetta più risposte.`
        : (isExpired && hasOptions ? `Questo ${itemLabel} è scaduto e non accetta nuove risposte.` : '')));
  const statusBadge = isDeletedForRecipients
    ? `<span class="poll-type-pill">Eliminato</span>`
    : (isCancelled
      ? `<span class="poll-type-pill cancelled">Annullato</span>`
      : (isExpired && hasOptions ? `<span class="poll-type-pill">Scaduto</span>` : ''));

  return `
    <article class="card light-card poll-card ${isCancelled ? 'is-cancelled' : ''} ${isExpired ? 'is-expired' : ''} ${isDeletedForRecipients ? 'is-deleted' : ''}" data-poll-id="${escapeHtml(poll.id)}">
      <div class="poll-card-head">
        <div>
          <h3>${escapeHtml(getPollDisplayTitle(poll))}</h3>
          ${poll.title ? `<div class="poll-card-type-line">${escapeHtml(getPollAutoTitle(poll))}</div>` : ''}
          ${descriptionMarkup}
        </div>
        <div class="inline-actions">
          ${statusBadge}
          ${isCreator && !isCancelled ? `<button type="button" class="btn ghost small" data-poll-action="edit-poll" data-poll-id="${escapeHtml(poll.id)}">Modifica</button>` : ''}
          ${canRestoreCancellation ? `<button type="button" class="btn ghost small" data-poll-action="toggle-cancel-poll" data-poll-id="${escapeHtml(poll.id)}">Ritira annullamento</button>` : ''}
          ${canDeleteForCurrentUser ? `<button type="button" class="btn ghost small" data-poll-action="delete-poll-locally" data-poll-id="${escapeHtml(poll.id)}">Elimina dal mio account</button>` : ''}
          ${canDeleteGlobally ? `<button type="button" class="btn danger small" data-poll-action="delete-poll-global" data-poll-id="${escapeHtml(poll.id)}">Elimina per tutti</button>` : ''}
          ${canRenewNotice ? `<button type="button" class="btn ghost small" data-poll-action="renew-notice" data-poll-id="${escapeHtml(poll.id)}">Rinnova</button>` : ''}
        </div>
      </div>
      ${imageMarkup}
      <div class="poll-meta-grid">
        ${isNotice ? '' : `<div class="poll-meta-item"><span>Quando: </span><strong>${escapeHtml(getPollDateTimeLabel(poll))}</strong></div>`}
        ${poll.location ? `<div class="poll-meta-item"><span>Luogo: </span>${buildPollLocationMarkup(poll.location || '')}</div>` : ''}
        <div class="poll-meta-item"><span>Creato da: </span><strong>${escapeHtml(poll.createdBy?.label || 'Staff')}</strong></div>
      </div>
      ${statusNote ? `<div class="poll-status-note">${escapeHtml(statusNote)}</div>` : ''}
      ${(hasOptions || myOption) ? `<div class="poll-response-stack">${buildPollResponseCard(poll, canAnswer, myOption)}${buildPollResults(poll)}</div>` : ''}
    </article>
  `;
}

function buildPollListItem(poll) {
  const typeIcon = POLL_TYPE_META[poll.type]?.icon || '📌';
  const dateTime = escapeHtml(formatPollAnsweredAt(poll.publishedAt || poll.createdAt || ''));
  const title = escapeHtml(getPollDisplayTitle(poll));
  const isExpired = isPollExpired(poll);
  const isNotice = isNoticePoll(poll);
  const noticeExpired = isNoticeHomeExpired(poll);
  const isBothExpired = isExpired || noticeExpired;
  const statusBadge = isBothExpired ? '<span class="poll-list-badge expired">Scaduto</span>' : '';
  
  return `
    <div class="poll-list-item" data-poll-id="${escapeHtml(poll.id)}">
      <div class="poll-list-icon">${typeIcon}</div>
      <div class="poll-list-meta">
        <div class="poll-list-datetime">${dateTime}</div>
        <div class="poll-list-title">${title}</div>
      </div>
      ${statusBadge}
    </div>
  `;
}

function renderPolls() {
  const wrap = document.getElementById('pollsContent');
  if (!wrap) return;

  if (POLL_SECTION_DISABLED) {
    wrap.innerHTML = `
      <article class="card light-card polls-empty-card">
        <div class="empty-state">Sezione Sondaggi/Avvisi temporaneamente rimossa. La riscriviamo da capo nel prossimo passaggio.</div>
      </article>
    `;
    return;
  }

  const polls = clone(state.polls || [])
    .filter(poll => !isPollHiddenForCurrentUser(poll.id))
    .filter(poll => canViewNoticeInsidePolls(poll))
    .sort((a, b) => {
      const byStamp = getPollSortTimestamp(a) - getPollSortTimestamp(b);
      if (byStamp !== 0) return byStamp;
      return String(b.createdAt || '').localeCompare(String(a.createdAt || ''));
    });

  const editingPollId = ensurePollDraft().editingPollId;
  let pollsHtml = '';

  if (canManagePolls()) {
    if (!editingPollId) {
      pollsHtml += `
      <div class="polls-toolbar">
        <button type="button" class="btn primary" data-poll-action="open-composer">➕ Crea sondaggio / avviso</button>
      </div>
      ${uiState.pollComposerOpen ? buildPollComposer() : ''}
    `;
    }
  }

  if (polls.length) {
    // Display list view instead of individual cards
    if (!editingPollId) {
      pollsHtml += `
        <article class="card light-card polls-list-card">
          <div class="polls-list">
            ${polls.map(poll => buildPollListItem(poll)).join('')}
          </div>
        </article>
      `;
    }
    // When editing, show the composer
    polls.forEach(poll => {
      if (editingPollId === poll.id && uiState.pollComposerOpen) {
        pollsHtml += buildPollComposer();
      }
    });
  } else {
    pollsHtml += `
      <article class="card light-card polls-empty-card">
        <div class="empty-state">Nessun sondaggio disponibile al momento.</div>
      </article>
    `;
  }

  wrap.innerHTML = pollsHtml;
}

async function savePollFromDraft() {
  if (POLL_SECTION_DISABLED || !canManagePolls()) return false;
  const draft = ensurePollDraft();
  const isNotice = draft.type === 'notice';
  const includeSurvey = !isNotice || Boolean(draft.includeSurvey);
  const options = includeSurvey
    ? normalizePollDraftOptions(draft.options)
      .map(option => ({ id: option.id || '', label: normalizePollOptionLabel(option.label) }))
      .filter(option => option.label)
    : [];
  const editingPoll = draft.editingPollId ? (state.polls || []).find(item => item.id === draft.editingPollId) : null;

  if (isNotice) {
    const hasMainContent = Boolean(String(draft.title || '').trim() || String(draft.description || '').trim() || String(draft.image || '').trim());
    if (!hasMainContent) {
      alert('Inserisci almeno un titolo, una descrizione o un’immagine per l\'avviso.');
      return false;
    }
    if (includeSurvey && options.length < 2) {
      alert('Per inserire un sondaggio dentro l\'avviso servono almeno due opzioni valide.');
      return false;
    }
  } else if ((!isPollDateTimeOptionalType(draft.type) && (!draft.date || !draft.time)) || options.length < 2) {
    alert(isPollDateTimeOptionalType(draft.type)
      ? 'Inserisci almeno due opzioni valide.'
      : 'Compila data, ora e almeno due opzioni valide.');
    return false;
  }

  const now = new Date().toISOString();
  const user = authState.currentUser;
  let createdPoll = null;

  if (draft.editingPollId) {
    const poll = (state.polls || []).find(item => item.id === draft.editingPollId);
    if (!poll || !isPollCreatedByCurrentUser(poll)) return false;

    poll.type = draft.type;
    poll.title = draft.title;
    poll.date = draft.date;
    poll.time = draft.time;
    poll.location = draft.location;
    poll.description = draft.description;
    if (draft.imageChanged) {
      poll.image = draft.image || '';
      poll.imageAssetId = '';
    }
    poll.includeSurvey = includeSurvey;
    if (isNotice && !poll.publishedAt) poll.publishedAt = poll.createdAt || now;
    poll.options = options.map(option => ({
      id: option.id || uid('opt'),
      label: option.label,
    }));

    const validOptionIds = new Set(poll.options.map(option => option.id));
    poll.responses = (poll.responses || []).filter(response => validOptionIds.has(response.optionId));
    poll.updatedAt = now;
  } else {
    createdPoll = {
      id: uid('poll'),
      type: draft.type,
      title: draft.title,
      date: draft.date,
      time: draft.time,
      location: draft.location,
      description: draft.description,
      image: draft.image || '',
      imageAssetId: '',
      includeSurvey,
      publishedAt: isNotice ? now : '',
      options: options.map(option => ({ id: uid('opt'), label: option.label })),
      responses: [],
      isCancelled: false,
      cancelledAt: '',
      cancelledByViewerKey: '',
      cancelledByLabel: '',
      createdAt: now,
      updatedAt: now,
      createdBy: {
        label: user?.displayName || 'Staff',
        roleLabel: user?.roleLabel || '',
        viewerKey: getCurrentPollViewerKey(),
        accountType: user?.accountType || '',
        playerId: user?.playerId || '',
        staffAccountId: user?.staffAccountId || '',
        staffAccountIds: Array.isArray(user?.staffAccountIds) ? [...user.staffAccountIds] : [],
        externalManagerId: user?.externalManagerId || '',
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
      },
    };
    state.polls.unshift(createdPoll);
  }

  resetPollComposer();
  if (!(await saveStateWithPollImageFallback(createdPoll?.id || draft.editingPollId || ''))) {
    alert('Salvataggio non riuscito. Libera spazio nel dispositivo.');
    return false;
  }
  renderPolls();
  renderHome();
  if (createdPoll) notifyPollCreated(createdPoll);
  return true;
}

function voteOnPoll(pollId = '', optionId = '') {
  const responder = getCurrentPollResponder();
  if (!responder) return;
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll) return;
  if (poll.isCancelled || poll.cancelledAt || isPollExpired(poll) || isPollDeletedForRecipients(poll)) return;
  const option = (poll.options || []).find(item => item.id === optionId);
  if (!option) return;

  poll.responses = (poll.responses || []).filter(item => item.responderId !== responder.id);
  poll.responses.push({
    responderId: responder.id,
    responderLabel: responder.label,
    optionId: option.id,
    answeredAt: new Date().toISOString(),
  });
  poll.updatedAt = new Date().toISOString();
  saveState();
  
  const modal = document.getElementById('noticeDetailModal');
  const isModalOpen = modal && !modal.classList.contains('hidden');
  
  if (isModalOpen) {
    openNoticeDetailModal(pollId);
  } else {
    renderPolls();
  }
}

function togglePollCancelled(pollId = '') {
  if (!canManagePolls()) return;
  const poll = (state.polls || []).find(item => item.id === pollId);
  if (!poll || !isPollCreatedByCurrentUser(poll) || isPollExpired(poll)) return;

  const viewerKey = getCurrentPollViewerKey();
  const viewerLabel = authState.currentUser?.displayName || `${authState.currentUser?.firstName || ''} ${authState.currentUser?.lastName || ''}`.trim() || 'Utente';
  const canRestore = Boolean(
    viewerKey
    && (poll.isCancelled || poll.cancelledAt)
    && viewerKey === (poll.cancelledByViewerKey || resolvePollCreatorViewerKey(poll.createdBy || {}))
  );

  if (poll.isCancelled || poll.cancelledAt) {
    if (!canRestore) return;
    poll.isCancelled = false;
    poll.cancelledAt = '';
    poll.cancelledByViewerKey = '';
    poll.cancelledByLabel = '';
  } else {
    poll.isCancelled = true;
    poll.cancelledAt = new Date().toISOString();
    poll.cancelledByViewerKey = viewerKey;
    poll.cancelledByLabel = viewerLabel;
  }

  poll.updatedAt = new Date().toISOString();
  saveState();
  renderPolls();
  renderHome();
}


function syncTeamsStandingsFrozenPane() {
  const teamsTable = document.getElementById('teamsStandingsTable');
  const teamsWrap = document.getElementById('teamsStandingsWrap');

  teamsWrap?.classList.remove('has-frozen-pane');
  teamsWrap?.classList.remove('has-sticky-columns');
  teamsWrap?.style.removeProperty('--teams-frozen-pane-width');
  teamsWrap?.style.removeProperty('--teams-sticky-pane-width');
  teamsTable?.classList.remove('has-sticky-columns');
  teamsTable?.style.removeProperty('--teams-sticky-first-width');
  teamsTable?.style.removeProperty('--teams-sticky-second-left');
  teamsTable?.style.removeProperty('--teams-sticky-second-width');
  document.getElementById('teamsStandingsFrozenPane')?.remove();
}

function renderStandings() {
  const selectedSeason = getSelectedSeason();
  const standings = sortStandingsRows(getStandings(selectedSeason), uiState.standingsSortKey);
  const teamsTitle = document.getElementById('teamsStandingsTitle');
  if (teamsTitle) {
    teamsTitle.innerHTML = renderStandingsCompetitionTitleMarkup(selectedSeason);
    teamsTitle.classList.remove('hidden');
    teamsTitle.parentElement?.classList.remove('hidden');
  }
  renderStandingsCompetitionTeamsManager();
  if (uiState.activePcEditorTeam && !standings.some(row => row.team === uiState.activePcEditorTeam && row.team !== MALAVOGLIA)) {
    uiState.activePcEditorTeam = '';
  }

  document.getElementById('standingsBody').innerHTML = standings.map((row, index) => {
    const penaltySymbols = getTeamPenaltySymbols(row.team, selectedSeason);
    const penaltyTitle = row.penalties > 0 ? `Penalità: ${row.penalties} (-${row.penalties * TEAM_PENALTY_POINTS} pt)` : '';
    const canEditCards = isManagerUser() && row.team !== MALAVOGLIA;
    const isPcEditorOpen = canEditCards && uiState.activePcEditorTeam === row.team;
    const pcMarkup = canEditCards
      ? `
        <div class="pc-editor${isPcEditorOpen ? ' expanded' : ''}">
          <div class="pc-inline-editor">
            <button type="button" class="pc-badge pc-toggle-btn" data-action="pc-toggle" data-team="${escapeHtml(row.team)}" aria-expanded="${isPcEditorOpen ? 'true' : 'false'}" aria-label="Modifica punti cartellini ${escapeHtml(row.team)}">${row.cards}</button>
            <div class="pc-controls">
              <button type="button" class="btn ghost small pc-adjust-btn" data-action="pc-increase" data-team="${escapeHtml(row.team)}" aria-label="Aumenta punti cartellini ${escapeHtml(row.team)}">➕</button>
              <button type="button" class="btn ghost small pc-adjust-btn" data-action="pc-decrease" data-team="${escapeHtml(row.team)}" aria-label="Diminuisci punti cartellini ${escapeHtml(row.team)}">➖</button>
            </div>
          </div>
        </div>
      `
      : `
        <div class="pc-display">
          <span class="pc-badge">${row.cards}</span>
        </div>
      `;
    return `
    <tr${row.team === MALAVOGLIA ? ' class="standings-self-row"' : ''}>
      <td>${index + 1}</td>
      <td>
        <div class="team-cell team-cell-with-penalties">
          <img src="${row.logo}" alt="${escapeHtml(row.team)}" />
          <div class="team-cell-text">
            <strong>${escapeHtml(row.team)}</strong>
            ${row.penalties ? `<span class="team-penalties" title="${escapeHtml(penaltyTitle)}" aria-label="${escapeHtml(penaltyTitle)}">${penaltySymbols}</span>` : ''}
          </div>
        </div>
      </td>
      <td>${row.points}</td>
      <td>${row.played}</td>
      <td>${row.won}</td>
      <td>${row.draw}</td>
      <td>${row.lost}</td>
      <td>${row.gf}</td>
      <td>${row.gs}</td>
      <td>${row.diff}</td>
      <td class="pc-cell">${pcMarkup}</td>
    </tr>
  `;}).join('');

  const teamsCard = document.getElementById('teamsStandingsCard');
  const scorersCard = document.getElementById('scorersStandingsCard');
  const teamsBtn = document.getElementById('standingsTeamsBtn');
  const scorersBtn = document.getElementById('standingsScorersBtn');
  const sortButton = document.getElementById('standingsSortBtn');
  const sortDropdown = document.getElementById('standingsSortDropdown');
  const penaltyButton = document.getElementById('openPenaltyModalBtn');
  const expandButton = document.getElementById('toggleStandingsExpandBtn');
  const teamsTable = document.getElementById('teamsStandingsTable');
  const teamsTableWrap = document.getElementById('teamsStandingsWrap');
  const teamsViewActive = uiState.standingsView === 'teams';
  const teamsExpanded = Boolean(uiState.teamsStandingsExpanded);

  teamsCard.classList.toggle('hidden', !teamsViewActive);
  scorersCard.classList.toggle('hidden', teamsViewActive);
  teamsBtn.classList.toggle('secondary', teamsViewActive);
  teamsBtn.classList.toggle('ghost', !teamsViewActive);
  scorersBtn.classList.toggle('secondary', !teamsViewActive);
  scorersBtn.classList.toggle('ghost', teamsViewActive);

  if (sortDropdown) {
    sortDropdown.innerHTML = buildStandingsSortDropdownMarkup();
    sortDropdown.classList.toggle('hidden', !uiState.standingsSortMenuOpen);
  }
  if (sortButton) sortButton.setAttribute('aria-expanded', uiState.standingsSortMenuOpen ? 'true' : 'false');

  if (teamsTable) teamsTable.classList.toggle('is-compact', !teamsExpanded);
  if (teamsTableWrap) {
    teamsTableWrap.classList.toggle('allow-horizontal-scroll', teamsViewActive && teamsExpanded);
    if (!teamsExpanded || !teamsViewActive) teamsTableWrap.scrollLeft = 0;
  }
  if (expandButton) {
    expandButton.classList.toggle('hidden', !teamsViewActive);
    expandButton.setAttribute('aria-expanded', teamsExpanded ? 'true' : 'false');
    expandButton.textContent = teamsExpanded ? '↔️ Riduci' : '↔️ Estendi';
  }
  if (penaltyButton) penaltyButton.classList.toggle('hidden', !(isManagerUser() && teamsViewActive));
  if (!teamsViewActive && uiState.penaltiesModalOpen) closePenaltyModal();

  requestAnimationFrame(syncTeamsStandingsFrozenPane);

  if (uiState.penaltiesModalOpen) {
    populatePenaltySeasonSelect();
    populatePenaltyTeamSelect();
    renderPenaltyPreview();
  }
}

function renderScorers() {
  const selectedSeason = getSelectedSeason();
  const scorersTitle = document.getElementById('scorersStandingsTitle');
  if (scorersTitle) {
    scorersTitle.innerHTML = renderStandingsCompetitionTitleMarkup(selectedSeason);
    scorersTitle.classList.remove('hidden');
  }
  const scorers = sortScorersRows(getScorersTable(selectedSeason), uiState.scorersSortKey || 'goals');

  const formatScorerCards = (row = {}) => {
    const parts = [];
    if (row.yellowCards) parts.push(`🟨 ${row.yellowCards}`);
    if (row.doubleYellowCards) parts.push(`🟨🟨 ${row.doubleYellowCards}`);
    if (row.directRedCards) parts.push(`🟥 ${row.directRedCards}`);
    if (row.yellowRedCards) parts.push(`🟨🟥 ${row.yellowRedCards}`);
    return parts.length ? parts.join(' • ') : '—';
  };

  document.getElementById('scorersBody').innerHTML = scorers.length
    ? scorers.map((row, index) => `
      <tr class="${row.status === 'retired' ? 'scorer-retired-row' : ''}">
        <td>${index + 1}</td>
        <td>
          <div class="scorer-player-cell">
            <img class="scorer-player-photo" src="${escapeHtml(row.photo || DEFAULT_PLAYER_IMG)}" alt="${escapeHtml(row.name)}" />
            <strong>${escapeHtml(row.name)}</strong>
          </div>
        </td>
        <td>${row.goals}</td>
        <td class="scorer-cards-cell">${escapeHtml(formatScorerCards(row))}</td>
      </tr>
    `).join('')
    : '<tr><td colspan="4" class="empty-state">Nessun marcatore inserito.</td></tr>';
}

function getVisibleMatches() {
  const selectedSeason = getSelectedSeason();
  const teamFilter = document.getElementById('matchTeamFilter').value || 'all';
  const phaseFilter = document.getElementById('phaseFilter').value || 'all';
  const roundFilter = document.getElementById('roundFilter')?.value || 'all';
  return state.matches.filter(match => {
    const seasonOk = !selectedSeason || (match.season || inferSeasonFromDate(match.date)) === selectedSeason;
    const teamOk = teamFilter === 'all' || match.homeTeam === teamFilter || match.awayTeam === teamFilter;
    const phaseOk = phaseFilter === 'all' || match.phase === phaseFilter;
    const roundOk = roundFilter === 'all' || String(match.round) === roundFilter;
    return seasonOk && teamOk && phaseOk && roundOk;
  });
}


function getCompetitionFormDefaultValue(type = 'campionato') {
  const competitionType = normalizeCompetitionType(type);
  if (competitionType === 'coppa') return String(new Date().getFullYear());
  return getPreferredSeasonLabel();
}


function getCompetitionModalSeasonKey() {
  return normalizeSeasonLabel(uiState.competitionEditingKey || getSelectedSeason()) || getSelectedSeason();
}

function parseCompetitionTeamsInput(value = '') {
  const tokens = String(value || '')
    .split(/\n|;/)
    .map(token => token.split(','))
    .flat()
    .map(token => normalizeTeam(String(token || '').trim()))
    .filter(Boolean);

  const names = [];
  const seen = new Set();
  tokens.forEach(name => {
    const lookup = name.toLowerCase();
    if (seen.has(lookup)) return;
    seen.add(lookup);
    names.push(name);
  });
  return names;
}

function createCompetitionTeamsDraftRow(name = '', logo = '') {
  return {
    id: `comp-team-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    name: normalizeTeam(String(name || '').trim()),
    logo: String(logo || '').trim(),
  };
}

function getCompetitionTeamsModalSeasonKey() {
  return normalizeSeasonLabel(getSelectedSeason()) || getSelectedSeason() || '';
}

function buildCompetitionTeamsModalRowsFromSeason(seasonKey = '') {
  const names = getCompetitionTeamNames(seasonKey);
  if (!names.length) return [createCompetitionTeamsDraftRow()];
  return names.map(teamName => createCompetitionTeamsDraftRow(teamName, getCompetitionTeamLogo(teamName, seasonKey)));
}

function ensureCompetitionTeamsModalState(force = false) {
  const seasonKey = getCompetitionTeamsModalSeasonKey();
  if (!seasonKey) {
    uiState.competitionTeamsEditingSeason = '';
    uiState.competitionTeamsModalRows = [createCompetitionTeamsDraftRow()];
    return;
  }
  if (!force && uiState.competitionTeamsEditingSeason === seasonKey && Array.isArray(uiState.competitionTeamsModalRows) && uiState.competitionTeamsModalRows.length) {
    return;
  }
  uiState.competitionTeamsEditingSeason = seasonKey;
  uiState.competitionTeamsModalRows = buildCompetitionTeamsModalRowsFromSeason(seasonKey);
}

function renderCompetitionTeamsModal() {
  const container = document.getElementById('competitionTeamsEditorList');
  if (!container) return;

  ensureCompetitionTeamsModalState();
  const rows = Array.isArray(uiState.competitionTeamsModalRows) && uiState.competitionTeamsModalRows.length
    ? uiState.competitionTeamsModalRows
    : [createCompetitionTeamsDraftRow()];

  container.innerHTML = rows.map((row, index) => {
    const name = String(row.name || '').trim();
    const logo = String(row.logo || '').trim();
    const alt = name ? `Logo ${name}` : 'Logo squadra';
    const preview = isCompetitionLogoImage(logo)
      ? `<img class="competition-team-logo-preview" src="${escapeHtml(logo)}" alt="${escapeHtml(alt)}" />`
      : `<span class="competition-team-logo-preview competition-team-logo-preview-emoji" aria-hidden="true">${escapeHtml(logo || '🏆')}</span>`;

    return `
      <div class="competition-team-editor-row" data-team-row-id="${escapeHtml(row.id)}">
        <div class="competition-team-editor-main">
          <span class="competition-team-logo-current">${preview}</span>
          <label class="competition-team-editor-name-wrap">
            <span class="competition-team-editor-label">Squadra ${index + 1}</span>
            <input
              type="text"
              class="competition-team-editor-name"
              data-team-row-name="${escapeHtml(row.id)}"
              value="${escapeHtml(name)}"
              placeholder="Nome squadra"
            />
          </label>
        </div>
        <div class="competition-team-editor-actions">
          <label class="btn ghost small competition-team-upload-btn">
            Logo
            <input type="file" accept="image/*" data-team-row-logo="${escapeHtml(row.id)}" hidden />
          </label>
          <button type="button" class="btn ghost small" data-team-remove-row="${escapeHtml(row.id)}" aria-label="Rimuovi squadra">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

function openCompetitionTeamsModal(season = getSelectedSeason()) {
  if (!isManagerUser()) return;
  const modal = document.getElementById('competitionTeamsModal');
  if (!modal) return;
  uiState.selectedSeason = normalizeSeasonLabel(season) || season || uiState.selectedSeason;
  ensureCompetitionTeamsModalState(true);
  renderCompetitionTeamsModal();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  window.requestAnimationFrame(() => {
    document.querySelector('[data-team-row-name]')?.focus();
  });
}

function closeCompetitionTeamsModal() {
  const modal = document.getElementById('competitionTeamsModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function addCompetitionTeamsModalRow() {
  ensureCompetitionTeamsModalState();
  uiState.competitionTeamsModalRows = [
    ...(Array.isArray(uiState.competitionTeamsModalRows) ? uiState.competitionTeamsModalRows : []),
    createCompetitionTeamsDraftRow(),
  ];
  renderCompetitionTeamsModal();
}

async function saveCompetitionTeamsFromModal() {
  if (!isManagerUser()) return;
  const seasonKey = getCompetitionTeamsModalSeasonKey();
  if (!seasonKey) return;

  const rows = Array.isArray(uiState.competitionTeamsModalRows) ? uiState.competitionTeamsModalRows : [];
  const names = [];
  const seen = new Set();
  const nextTeamLogoMap = {};

  rows.forEach(row => {
    const teamName = normalizeTeam(String(row?.name || '').trim());
    if (!teamName) return;
    const lookup = teamName.toLowerCase();
    if (seen.has(lookup)) return;
    seen.add(lookup);
    names.push(teamName);
    const logo = String(row?.logo || '').trim();
    if (logo) nextTeamLogoMap[teamName] = logo;
  });

  if (!names.length) {
    alert('Inserisci almeno una squadra partecipante.');
    return;
  }

  state.competitionTeams = normalizeCompetitionTeamsStore({
    ...(state.competitionTeams || {}),
    [seasonKey]: names,
  });

  const logosStore = normalizeCompetitionTeamLogosStore({
    ...(state.competitionTeamLogos || {}),
    [seasonKey]: nextTeamLogoMap,
  });
  if (!Object.keys(nextTeamLogoMap).length && logosStore[seasonKey]) delete logosStore[seasonKey];
  state.competitionTeamLogos = logosStore;

  uiState.competitionTeamsEditingSeason = seasonKey;
  uiState.competitionTeamsModalRows = names.map(teamName => createCompetitionTeamsDraftRow(teamName, nextTeamLogoMap[teamName] || getCompetitionTeamLogo(teamName, seasonKey)));

  saveState();
  closeCompetitionTeamsModal();
  renderAll();
}

function renderStandingsCompetitionTeamsManager() {
  const panel = document.getElementById('competitionTeamsManager');
  if (panel) panel.classList.add('hidden');
}

function syncCompetitionModalFields() {
  const typeSelect = document.getElementById('competitionTypeInput');
  const yearInput = document.getElementById('competitionYearInput');
  const yearLabel = document.getElementById('competitionYearFieldLabel');
  if (!typeSelect || !yearInput) return;

  const competitionType = normalizeCompetitionType(typeSelect.value);
  yearInput.placeholder = competitionType === 'coppa' ? 'yyyy' : 'yyyy/yyyy';
  yearInput.inputMode = competitionType === 'coppa' ? 'numeric' : 'text';
  if (yearLabel) yearLabel.textContent = competitionType === 'coppa' ? 'Anno coppa' : 'Anno campionato';
  if (!yearInput.value.trim()) {
    yearInput.value = getCompetitionFormDefaultValue(competitionType);
  }
}

function openCompetitionModal(mode = 'create', season = getSelectedSeason()) {
  if (!isManagerUser()) return;
  const modal = document.getElementById('competitionModal');
  const form = document.getElementById('competitionForm');
  const title = document.getElementById('competitionModalTitle');
  const typeSelect = document.getElementById('competitionTypeInput');
  const yearInput = document.getElementById('competitionYearInput');
  const nameInput = document.getElementById('competitionNameInput');
  const logoInput = document.getElementById('competitionLogoInput');
  const presetDefault = document.querySelector('input[name="competitionLogoPreset"][value="default"]');
  const presetNoiSport = document.querySelector('input[name="competitionLogoPreset"][value="noi-sport"]');
  const deleteButton = document.getElementById('deleteCompetitionFromModalBtn');

  if (!modal || !form || !typeSelect || !yearInput || !nameInput || !logoInput) return;

  form.reset();
  uiState.competitionModalMode = mode === 'edit' ? 'edit' : 'create';
  uiState.competitionEditingKey = normalizeSeasonLabel(season) || '';
  uiState.competitionModalTeamLogos = {};

  if (uiState.competitionModalMode === 'edit' && uiState.competitionEditingKey) {
    const meta = getCompetitionMeta(uiState.competitionEditingKey);

    typeSelect.value = meta.type || 'campionato';
    nameInput.value = meta.name || '';
    yearInput.value = meta.key || uiState.competitionEditingKey;

    if (String(meta.logo || '').trim() === getCompetitionPresetLogo('noi-sport')) {
      if (presetNoiSport) presetNoiSport.checked = true;
    } else if (String(meta.logo || '').trim() === getCompetitionPresetLogo('default')) {
      if (presetDefault) presetDefault.checked = true;
    } else if (presetDefault) {
      presetDefault.checked = true;
    }

    if (deleteButton) deleteButton.classList.remove('hidden');
    if (title) title.textContent = 'Modifica Competizione';
  } else {
    typeSelect.value = 'campionato';
    nameInput.value = '';
    yearInput.value = getCompetitionFormDefaultValue('campionato');
    uiState.competitionEditingKey = '';
    uiState.competitionModalTeamLogos = {};
    if (presetDefault) presetDefault.checked = true;
    if (deleteButton) deleteButton.classList.add('hidden');
    if (title) title.textContent = 'Inserisci Competizione';
  }

  if (uiState.competitionModalMode === 'edit') {
    if (deleteButton) deleteButton.classList.remove('hidden');
  }

  logoInput.value = '';
  syncCompetitionModalFields();
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  window.requestAnimationFrame(() => nameInput.focus());
}

function closeCompetitionModal() {
  const modal = document.getElementById('competitionModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  uiState.competitionModalMode = 'create';
  uiState.competitionEditingKey = '';
  uiState.competitionModalTeamLogos = {};
  document.getElementById('deleteCompetitionFromModalBtn')?.classList.add('hidden');
}

function renameCompetitionData(oldLabel = '', newLabel = '') {
  const previousKey = normalizeSeasonLabel(oldLabel);
  const nextKey = normalizeSeasonLabel(newLabel);
  if (!previousKey || !nextKey || previousKey === nextKey) return;

  (state.matches || []).forEach(match => {
    const matchSeason = normalizeSeasonLabel(match.season || inferSeasonFromDate(match.date) || '');
    if (matchSeason === previousKey) match.season = nextKey;
  });

  const metaStore = normalizeCompetitionMetaStore(state.competitionMeta || {});
  if (metaStore[previousKey]) {
    metaStore[nextKey] = metaStore[previousKey];
    delete metaStore[previousKey];
    state.competitionMeta = metaStore;
  }

  const customSeasons = new Set(sortSeasonLabels(state.customSeasons || []));
  if (customSeasons.has(previousKey)) {
    customSeasons.delete(previousKey);
    customSeasons.add(nextKey);
    state.customSeasons = sortSeasonLabels([...customSeasons]);
  }

  const penaltyStore = normalizeTeamPenaltyStore(state.teamPenalties || {});
  if (penaltyStore[previousKey]) {
    penaltyStore[nextKey] = penaltyStore[previousKey];
    delete penaltyStore[previousKey];
    state.teamPenalties = penaltyStore;
  }

  const cardStore = normalizeTeamCardPointsStore(state.teamCardPoints || {});
  if (cardStore[previousKey]) {
    cardStore[nextKey] = cardStore[previousKey];
    delete cardStore[previousKey];
    state.teamCardPoints = cardStore;
  }

  const teamsStore = normalizeCompetitionTeamsStore(state.competitionTeams || {});
  if (teamsStore[previousKey]) {
    teamsStore[nextKey] = teamsStore[previousKey];
    delete teamsStore[previousKey];
    state.competitionTeams = teamsStore;
  }

  const logosStore = normalizeCompetitionTeamLogosStore(state.competitionTeamLogos || {});
  if (logosStore[previousKey]) {
    logosStore[nextKey] = logosStore[previousKey];
    delete logosStore[previousKey];
    state.competitionTeamLogos = logosStore;
  }

  if (uiState.selectedSeason === previousKey) uiState.selectedSeason = nextKey;
  if (uiState.penaltySelectedSeason === previousKey) uiState.penaltySelectedSeason = nextKey;
}

async function handleCompetitionFormSubmit(event) {
  event.preventDefault();
  if (!isManagerUser()) return;

  const typeSelect = document.getElementById('competitionTypeInput');
  const yearInput = document.getElementById('competitionYearInput');
  const nameInput = document.getElementById('competitionNameInput');
  const logoInput = document.getElementById('competitionLogoInput');
  const presetInput = document.querySelector('input[name="competitionLogoPreset"]:checked');
  if (!typeSelect || !yearInput || !nameInput || !logoInput) return;

  const competitionType = normalizeCompetitionType(typeSelect.value);
  const rawCompetitionName = String(nameInput.value || '').trim().replace(/\s+/g, ' ');
  if (!rawCompetitionName) {
    alert('Inserisci il nome della competizione.');
    nameInput.focus();
    return;
  }

  const normalizedYear = normalizeCompetitionYearInput(competitionType, yearInput.value || '');
  const competitionLabel = buildCompetitionLabel(competitionType, normalizedYear);
  if (!competitionLabel) {
    alert(competitionType === 'coppa'
      ? 'Formato non valido. Per la coppa usa per esempio 2026.'
      : 'Formato non valido. Per il campionato usa per esempio 2026/2027.');
    return;
  }

  const displayName = buildCompetitionDisplayName(rawCompetitionName, competitionType, normalizedYear);
  const editingKey = normalizeSeasonLabel(uiState.competitionEditingKey || '');
  const mode = uiState.competitionModalMode === 'edit' ? 'edit' : 'create';

  if (mode === 'create' && getAvailableSeasons().includes(competitionLabel)) {
    alert('Esiste già una competizione con questo anno.');
    return;
  }
  if (mode === 'edit' && editingKey && editingKey !== competitionLabel && getAvailableSeasons().includes(competitionLabel)) {
    alert("Esiste già un'altra competizione con questo anno.");
    return;
  }

  try {
    let logo = getCompetitionPresetLogo(presetInput?.value || 'default');
    const file = logoInput.files?.[0];
    if (file) {
      logo = await readImageFileForStorage(file, {
        maxBytes: 70 * 1024,
        maxDimensions: [420, 360, 300, 260, 220],
        qualities: [0.82, 0.72, 0.62, 0.52, 0.42],
      });
    } else if (mode === 'edit' && editingKey) {
      const existingMeta = getCompetitionMeta(editingKey);
      logo = String(existingMeta.logo || '').trim() || logo;
    }

    if (mode === 'edit' && editingKey && editingKey !== competitionLabel) {
      renameCompetitionData(editingKey, competitionLabel);
    }

    const targetKey = competitionLabel;
    state.customSeasons = sortSeasonLabels([...(state.customSeasons || []), targetKey]);

    state.competitionMeta = normalizeCompetitionMetaStore({
      ...(state.competitionMeta || {}),
      [targetKey]: {
        type: competitionType,
        logo,
        name: displayName,
      },
    });

    uiState.selectedSeason = targetKey;
    uiState.penaltySelectedSeason = targetKey;
    uiState.standingsTeamsEditorSeason = '';
    uiState.standingsTeamsEditorDraftLogos = {};

    saveState();
    closeCompetitionModal();
    renderAll();
  } catch (error) {
    console.warn('Salvataggio competizione non riuscito.', error);
    alert('Non sono riuscito a salvare il logo selezionato. Prova con un’immagine più leggera.');
  }
}

function renderMatches() {
  const list = document.getElementById('matchesList');
  const matches = getVisibleMatches();
  if (!matches.length) {
    const emptyMessage = state.remoteFixturesRaw
      ? 'Nessuna partita disponibile per la stagione selezionata.'
      : 'Nessuna partita caricata. Importa un file TXT con il formato dell’esempio allegato.';
    list.innerHTML = `<div class="card light-card empty-state">${escapeHtml(emptyMessage)}</div>`;
    return;
  }
  const groups = new Map();
  matches.forEach(match => {
    const key = `${match.phase}-${match.round}`;
    if (!groups.has(key)) groups.set(key, { phase: match.phase, round: match.round, matches: [] });
    groups.get(key).matches.push(match);
  });

  list.innerHTML = [...groups.values()].map(group => {
    const seasonKey = group.matches[0]?.season || getSelectedSeason();
    const competitionKind = getCompetitionKindLabel(seasonKey).toLowerCase();
    return `
    <section class="match-group">
      <div class="match-group-header">
        <div class="match-group-heading-row">
          <div class="match-group-heading">
            ${renderCompetitionLogoMarkup(seasonKey)}
            <h3 class="group-title"><span class="group-phase">${escapeHtml(group.phase)}</span><span class="group-separator">•</span><span class="group-round">Giornata ${group.round}</span></h3>
          </div>
        </div>
      </div>
      <div class="match-group-list">
        ${group.matches.map(match => buildMatchCard(match)).join('')}
      </div>
    </section>
  `;
  }).join('');
}

function buildMatchCard(match) {
  const open = uiState.expandedMatchId === match.id;
  const editing = uiState.editingMatchId === match.id;
  const statusLabel = match.status === 'postponed' ? 'Rinviata' : isPlayed(match) ? 'Finale' : 'Da Giocare';
  const statusClass = match.status === 'postponed' ? 'postponed' : isPlayed(match) ? 'played' : 'scheduled';
  const venue = getVenueForMatch(match);
  const venueLabel = getMatchLocationLabel(match);
  const mapTarget = getMatchMapTarget(match);
  const dateLabel = formatMatchCardDate(match.date);
  const timeLabel = formatTime(match.time) || '—';
  const scoreMarkup = isPlayed(match)
    ? `<div class="match-score-stack played"><span>${match.homeGoals}</span><span>${match.awayGoals}</span></div>`
    : `<div class="match-score-stack pending"><span>-</span><span>-</span></div>`;
  const events = buildMatchEvents(match);

  return `
    <article class="card light-card match-card ${open ? 'open' : ''} ${isMalavogliaMatch(match) ? 'malavoglia-match' : ''}" data-match-id="${escapeHtml(match.id)}">
      <div class="match-topline">
        <a class="venue-link" href="${buildGoogleMapsUrl(mapTarget)}" data-maps-query="${escapeHtml(mapTarget.query || venue)}" data-maps-label="${escapeHtml(mapTarget.label || venue)}">${escapeHtml(venueLabel)}</a>
        <span class="match-status-chip ${statusClass}">${escapeHtml(statusLabel)}</span>
      </div>

      <div class="match-row-shell">
        <div class="match-time-column">
          <div class="match-date-badge">${escapeHtml(dateLabel)}</div>
          <div class="match-time-badge">${escapeHtml(timeLabel)}</div>
        </div>
        <div class="match-row-divider" aria-hidden="true"></div>
        <div class="match-center-column">
          <div class="match-team-row home">
            <img src="${getTeamLogo(match.homeTeam, match.season || inferSeasonFromDate(match.date) || getSelectedSeason())}" alt="${escapeHtml(match.homeTeam)}" />
            <div class="match-team-label">${escapeHtml(match.homeTeam)}</div>
          </div>
          <div class="match-team-row away">
            <img src="${getTeamLogo(match.awayTeam, match.season || inferSeasonFromDate(match.date) || getSelectedSeason())}" alt="${escapeHtml(match.awayTeam)}" />
            <div class="match-team-label">${escapeHtml(match.awayTeam)}</div>
          </div>
        </div>
        <div class="match-row-divider" aria-hidden="true"></div>
        <div class="match-side-column">
          ${scoreMarkup}
          <div class="match-open-indicator" aria-hidden="true">${open ? '▴' : '▾'}</div>
        </div>
      </div>

      ${open ? `
        <div class="match-expanded">
          ${events}
          ${canManageMatches() ? `
            <div class="match-actions">
              <button type="button" class="btn secondary small" data-action="edit" data-id="${escapeHtml(match.id)}">Modifica</button>
            </div>
            ${editing ? buildMatchEditor(match) : ''}
          ` : ''}
        </div>
      ` : ''}
    </article>
  `;
}

function buildMatchEvents(match) {
  const homeLines = [];
  const awayLines = [];
  if (isMalavogliaMatch(match)) {
    (match.scorers || []).forEach(item => {
      const isHome = match.homeTeam === MALAVOGLIA;
      const target = isHome ? homeLines : awayLines;
      const suffix = [item.minute ? `${item.minute}'` : '', item.period || ''].filter(Boolean).join(' ');
      target.push(`<div class="event-line scorer-event-line"><span>⚽ <strong>${escapeHtml(getPlayerFullNameByRef(item))}</strong>${suffix ? ` • ${escapeHtml(suffix)}` : ''}</span></div>`);
    });
  }
  (match.cards || []).forEach(item => {
    const target = item.team === match.homeTeam ? homeLines : awayLines;
    target.push(`<div class="event-line card-event-line">${renderCardIcons(item.type)}<span><strong>${escapeHtml(item.playerName || getPlayerFullNameByRef(item))}</strong></span></div>`);
  });

  if (match.mvpPlayerId) {
    const isHome = match.homeTeam === MALAVOGLIA;
    const target = isHome ? homeLines : awayLines;
    const mvpPlayer = getPlayerById(match.mvpPlayerId);
    target.unshift(`<div class="event-line mvp-event-line"><span>🏅 <strong>MVP:</strong> ${escapeHtml(mvpPlayer ? getPlayerFullName(mvpPlayer) : getPlayerFullNameByRef({ playerId: match.mvpPlayerId, playerName: '' }))}</span></div>`);
  }

  if (!homeLines.length && !awayLines.length) return '';
  return `
    <div class="match-events-grid">
      <div class="team-events home">${homeLines.join('')}</div>
      <div class="team-events away">${awayLines.join('')}</div>
    </div>
  `;
}

function renderCardIcons(type) {
  if (type === 'Cartellino Giallo') return '<span class="card-icons"><span class="card-icon yellow"></span></span>';
  if (type === 'Doppia Ammonizione') return '<span class="card-icons"><span class="card-icon yellow"></span><span class="card-icon yellow"></span></span>';
  if (type === 'Cartellino Rosso Diretto') return '<span class="card-icons"><span class="card-icon red"></span></span>';
  return '<span class="card-icons"><span class="card-icon yellow"></span><span class="card-icon red"></span></span>';
}

function getMatchDraft(matchId) {
  if (!uiState.matchDrafts[matchId]) {
    const match = state.matches.find(item => item.id === matchId);
    uiState.matchDrafts[matchId] = {
      date: normalizeStoredDate(match.date),
      time: match.time,
      venue: getVenueForMatch(match),
      homeGoals: match.homeGoals ?? '',
      awayGoals: match.awayGoals ?? '',
      status: match.status,
      scorers: clone(match.scorers || []),
      cards: clone(match.cards || []),
      mvpPlayerId: match.mvpPlayerId || '',
    };
  }
  return uiState.matchDrafts[matchId];
}

function buildMatchEditor(match) {
  const draft = getMatchDraft(match.id);
  const malMatch = isMalavogliaMatch(match);
  const malGoals = malMatch
    ? (match.homeTeam === MALAVOGLIA ? Number(draft.homeGoals || 0) : Number(draft.awayGoals || 0))
    : 0;

  while (draft.scorers.length < malGoals) {
    draft.scorers.push({ playerId: '', minute: '', period: '1T' });
  }
  while (draft.scorers.length > malGoals) {
    draft.scorers.pop();
  }

  return `
    <div class="match-editor" data-editor-id="${escapeHtml(match.id)}">
      <div class="editor-section-title">Data e ora partita</div>
      <div class="editor-grid">
        <label>Data
          <input type="date" data-editor="date" data-id="${escapeHtml(match.id)}" value="${escapeHtml(toDateInputValue(draft.date || ''))}" />
        </label>
        <label>Ora
          <input type="time" data-editor="time" data-id="${escapeHtml(match.id)}" value="${escapeHtml(formatTime(draft.time || ''))}" />
        </label>
      </div>
      <div class="editor-spacer"></div>
      <div class="editor-section-title">Score partita</div>
      <div class="editor-grid">
        <label>${escapeHtml(match.homeTeam)}<input type="number" min="0" data-editor="homeGoals" data-id="${escapeHtml(match.id)}" value="${draft.homeGoals === '' ? '' : draft.homeGoals}" /></label>
        <label>${escapeHtml(match.awayTeam)}<input type="number" min="0" data-editor="awayGoals" data-id="${escapeHtml(match.id)}" value="${draft.awayGoals === '' ? '' : draft.awayGoals}" /></label>
      </div>
      <label>Luogo
        <input type="text" list="matchVenueChoices-${escapeHtml(match.id)}" data-editor="venue" data-id="${escapeHtml(match.id)}" value="${escapeHtml(draft.venue || '')}" placeholder="Seleziona o scrivi il luogo partita" />
        <datalist id="matchVenueChoices-${escapeHtml(match.id)}">${matchVenueOptions.map(venue => `<option value="${escapeHtml(venue)}"></option>`).join('')}</datalist>
      </label>

      ${malMatch && malGoals > 0 ? `
        <div class="editor-spacer"></div>
        <div class="editor-section-title">Marcatori de I Malavoglia</div>
        ${draft.scorers.map((item, index) => buildScorerRow(match, item, index)).join('')}
      ` : ''}

      <div class="editor-spacer"></div>
      <div class="editor-section-title">Ammonizioni</div>
      ${(draft.cards || []).map((item, index) => buildCardRow(match, item, index)).join('')}
      <div class="inline-actions">
        <button type="button" class="btn ghost small" data-action="add-card" data-id="${escapeHtml(match.id)}">Aggiungi cartellino</button>
      </div>

      ${malMatch ? `
        <div class="editor-spacer"></div>
        <label>MVP della partita
          <select data-editor="mvp-player" data-id="${escapeHtml(match.id)}">
            <option value="">Seleziona MVP</option>
            ${getActivePlayers().map(player => `<option value="${escapeHtml(player.id)}" ${draft.mvpPlayerId === player.id ? 'selected' : ''}>${escapeHtml(getPlayerFullName(player))}</option>`).join('')}
          </select>
        </label>
      ` : ''}

      <div class="form-actions">
        <button type="button" class="btn primary" data-action="save" data-id="${escapeHtml(match.id)}">Salva modifiche</button>
        <button type="button" class="btn ghost" data-action="cancel-edit" data-id="${escapeHtml(match.id)}">Annulla</button>
        <button type="button" class="btn danger" data-action="delete" data-id="${escapeHtml(match.id)}">Elimina</button>
      </div>
    </div>
  `;
}

function buildScorerRow(match, item, index) {
  const playersOptions = ['<option value="">Seleziona giocatore</option>']
    .concat(getActivePlayers().map(player => `<option value="${escapeHtml(player.id)}" ${item.playerId === player.id ? 'selected' : ''}>${escapeHtml(getPlayerFullName(player))}</option>`))
    .join('');
  return `
    <div class="scorer-row">
      <label>Giocatore
        <select data-editor="scorer-player" data-id="${escapeHtml(match.id)}" data-index="${index}">${playersOptions}</select>
      </label>
      <label>Minuto
        <input type="number" min="1" max="99" data-editor="scorer-minute" data-id="${escapeHtml(match.id)}" data-index="${index}" value="${escapeHtml(item.minute || '')}" />
      </label>
      <label>Tempo
        <select data-editor="scorer-period" data-id="${escapeHtml(match.id)}" data-index="${index}">
          <option value="1T" ${item.period === '1T' ? 'selected' : ''}>1T</option>
          <option value="2T" ${item.period === '2T' ? 'selected' : ''}>2T</option>
        </select>
      </label>
    </div>
  `;
}

function buildCardRow(match, item, index) {
  const malMatch = isMalavogliaMatch(match);
  const cardTypeOptions = Object.keys(cardPointsMap).map(type => `<option value="${escapeHtml(type)}" ${item.type === type ? 'selected' : ''}>${escapeHtml(type)}</option>`).join('');
  if (!malMatch) {
    const teamOptions = `
      <option value="${escapeHtml(match.homeTeam)}" ${item.team === match.homeTeam ? 'selected' : ''}>${escapeHtml(match.homeTeam)}</option>
      <option value="${escapeHtml(match.awayTeam)}" ${item.team === match.awayTeam ? 'selected' : ''}>${escapeHtml(match.awayTeam)}</option>
    `;
    return `
      <div class="card-row-shell">
        <div class="card-row with-team card-row-removable">
          <label>Squadra
            <select data-editor="card-team" data-id="${escapeHtml(match.id)}" data-index="${index}">
              ${teamOptions}
            </select>
          </label>
          <label>Giocatore
            <input type="text" data-editor="card-name" data-id="${escapeHtml(match.id)}" data-index="${index}" value="${escapeHtml(item.playerName || '')}" />
          </label>
          <label>Tipo
            <select data-editor="card-type" data-id="${escapeHtml(match.id)}" data-index="${index}">
              ${cardTypeOptions}
            </select>
          </label>
          <button type="button" class="btn ghost small remove-card-btn" data-action="remove-card" data-id="${escapeHtml(match.id)}" data-index="${index}" aria-label="Elimina cartellino">❌Elimina</button>
        </div>
      </div>
    `;
  }

  const teamOptions = `
    <option value="${escapeHtml(match.homeTeam)}" ${item.team === match.homeTeam ? 'selected' : ''}>${escapeHtml(match.homeTeam)}</option>
    <option value="${escapeHtml(match.awayTeam)}" ${item.team === match.awayTeam ? 'selected' : ''}>${escapeHtml(match.awayTeam)}</option>
  `;
  const isMalTeam = item.team === MALAVOGLIA;
  const playerField = isMalTeam
    ? `<label>Giocatore
        <select data-editor="card-player" data-id="${escapeHtml(match.id)}" data-index="${index}">
          <option value="">Seleziona giocatore</option>
          ${getActivePlayers().map(player => `<option value="${escapeHtml(player.id)}" ${item.playerId === player.id ? 'selected' : ''}>${escapeHtml(getPlayerFullName(player))}</option>`).join('')}
        </select>
      </label>`
    : `<label>Giocatore
        <input type="text" data-editor="card-name" data-id="${escapeHtml(match.id)}" data-index="${index}" value="${escapeHtml(item.playerName || '')}" />
      </label>`;

  return `
    <div class="card-row-shell">
      <div class="card-row with-team card-row-removable">
        <label>Squadra
          <select data-editor="card-team" data-id="${escapeHtml(match.id)}" data-index="${index}">
            ${teamOptions}
          </select>
        </label>
        ${playerField}
        <label>Tipo
          <select data-editor="card-type" data-id="${escapeHtml(match.id)}" data-index="${index}">
            ${cardTypeOptions}
          </select>
        </label>
        <button type="button" class="btn ghost small remove-card-btn" data-action="remove-card" data-id="${escapeHtml(match.id)}" data-index="${index}" aria-label="Elimina cartellino">❌Elimina</button>
      </div>
    </div>
  `;
}

function persistMatchEdit(match) {
  state.matchEdits[match.id] = {
    overrideResult: true,
    date: match.date,
    time: match.time,
    venue: getVenueForMatch(match),
    status: match.status,
    homeGoals: match.homeGoals,
    awayGoals: match.awayGoals,
    scorers: clone(match.scorers || []),
    cards: clone(match.cards || []),
    mvpPlayerId: match.mvpPlayerId || '',
  };
  saveState();
}

function commitMatchDraft(matchId) {
  if (!canManageMatches()) return;
  const match = state.matches.find(item => item.id === matchId);
  const draft = uiState.matchDrafts[matchId];
  if (!match || !draft) return;

  const homeGoals = draft.homeGoals === '' ? null : Number(draft.homeGoals);
  const awayGoals = draft.awayGoals === '' ? null : Number(draft.awayGoals);
  const validPlayed = Number.isFinite(homeGoals) && Number.isFinite(awayGoals);

  match.date = normalizeStoredDate(draft.date || match.date);
  match.time = normalizeTime(draft.time || match.time);
  match.homeGoals = validPlayed ? homeGoals : null;
  match.awayGoals = validPlayed ? awayGoals : null;
  match.venue = (draft.venue || '').trim() || venues[match.homeTeam] || 'Luogo da definire';
  match.status = validPlayed ? 'played' : draft.status || 'scheduled';
  match.scorers = isMalavogliaMatch(match)
    ? (draft.scorers || []).filter(item => item.playerId)
    : [];
  match.mvpPlayerId = isMalavogliaMatch(match) ? (draft.mvpPlayerId || '') : '';
  match.cards = (draft.cards || []).filter(item => {
    if (!item.type) return false;
    if (item.team === MALAVOGLIA) return Boolean(item.playerId);
    return Boolean(item.playerName);
  }).map(item => ({
    team: item.team || match.homeTeam,
    playerId: item.playerId || '',
    playerName: item.team === MALAVOGLIA ? getPlayerFullName(getPlayerById(item.playerId) || { firstName: '', lastName: '' }) : item.playerName,
    type: item.type,
  }));

  persistMatchEdit(match);
  uiState.editingMatchId = null;
  delete uiState.matchDrafts[matchId];
  renderAll();
}

function clearMatchData(matchId) {
  if (!canManageMatches()) return;
  const match = state.matches.find(item => item.id === matchId);
  if (!match) return;
  match.homeGoals = null;
  match.awayGoals = null;
  match.status = 'scheduled';
  match.scorers = [];
  match.cards = [];
  match.mvpPlayerId = '';
  persistMatchEdit(match);
  uiState.editingMatchId = null;
  uiState.expandedMatchId = matchId;
  delete uiState.matchDrafts[matchId];
  renderAll();
}

function cancelMatchDraft(matchId) {
  delete uiState.matchDrafts[matchId];
  if (uiState.editingMatchId === matchId) uiState.editingMatchId = null;
  uiState.expandedMatchId = matchId;
  renderMatches();
}

function confirmClearMatchData(matchId) {
  const match = state.matches.find(item => item.id === matchId);
  if (!match) return;
  const label = `${match.homeTeam} - ${match.awayTeam}`;
  const confirmed = window.confirm(`Confermi l'eliminazione dei dati inseriti per la partita ${label}?`);
  if (!confirmed) return;
  clearMatchData(matchId);
}

function renderRoster() {
  renderStaff();
  const grid = document.getElementById('rosterGrid');
  if (!grid) return;

  sortPlayersAlphabetically(state.players);

  grid.innerHTML = state.players.map(player => {
    const expanded = uiState.expandedPlayerId === player.id;
    const specialAccounts = getSpecialAccountsByPlayerId(player.id);
    const hasSpecialRoles = specialAccounts.length > 0;
    const revealed = (uiState.revealedPlayerPasswordIds || []).includes(player.id);
    const password = getLoginPasswordForPlayer(player.id);
    const canRevealPassword = canViewPlayerPasswords();
    const canToggleManager = canToggleManagerAssignments();
    const hasAdminTools = canRevealPassword || canToggleManager;

    const canViewPhone = canViewRosterPhoneForPlayer(player.id);

    return `
      <article class="card light-card player-card ${expanded ? 'selected' : ''} ${hasAdminTools ? 'player-card-expandable' : ''}" data-player-id="${escapeHtml(player.id)}">
        <div class="player-top">
          <img class="player-photo" src="${escapeHtml(player.photo || DEFAULT_PLAYER_IMG)}" alt="${escapeHtml(getPlayerFullName(player))}" />
          <div class="player-meta">
            <h4>${escapeHtml(getPlayerFullName(player))}</h4>
            <p>Maglia: ${escapeHtml(player.number || '-')}</p>
            ${canViewPhone && player.phone ? `<p>Telefono: ${escapeHtml(player.phone)}</p>` : ''}
            <div class="player-badges">
              <span class="player-status ${player.status === 'retired' ? 'retired' : ''}">${player.status === 'retired' ? 'Ritirato' : 'Attivo'}</span>
              ${specialAccounts.map(account => `<span class="role-pill special">${escapeHtml(account.roleLabel)}</span>`).join('')}
              ${!hasSpecialRoles && isPlayerManager(player.id) ? '<span class="role-pill manager">Gestore</span>' : ''}
            </div>
          </div>
        </div>
        ${expanded && canManageRoster() ? `
          <div class="player-actions-stack">
            ${hasAdminTools ? `
              <div class="player-admin-panel">
                ${canRevealPassword ? `
                  <button type="button" class="password-peek" data-player-password-toggle="true" data-id="${escapeHtml(player.id)}">
                    <span>Password account</span>
                    <strong>${revealed ? escapeHtml(password) : '••••••••'}</strong>
                  </button>
                ` : ''}
                ${canToggleManager ? `
                  <button type="button" class="btn ghost small player-manager-toggle" data-player-action="toggle-manager" data-id="${escapeHtml(player.id)}">${isPlayerManager(player.id) ? 'Rimuovi Gestore' : 'Rendi Gestore'}</button>
                ` : ''}
              </div>
            ` : ''}
            <div class="player-actions">
              <button type="button" class="btn secondary small" data-player-action="edit" data-id="${escapeHtml(player.id)}">Modifica</button>
              <button type="button" class="btn danger small" data-player-action="delete" data-id="${escapeHtml(player.id)}">Elimina</button>
            </div>
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

function positionPlayerForm(playerId = '') {
  const wrap = document.getElementById('playerFormWrap');
  const rosterGrid = document.getElementById('rosterGrid');
  if (!wrap || !rosterGrid) return;
  if (playerId) {
    const escapedId = typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
      ? CSS.escape(String(playerId))
      : String(playerId).replace(/"/g, '\"');
    const card = rosterGrid.querySelector(`[data-player-id="${escapedId}"]`);
    if (card?.parentNode) {
      card.insertAdjacentElement('afterend', wrap);
      return;
    }
  }
  rosterGrid.parentNode?.insertBefore(wrap, rosterGrid);
}

function renderStaff() {
  document.getElementById('staffGrid').innerHTML = state.staff.map(item => {
    const canEdit = canEditStaffRole(item.role);
    const revealEdit = canEdit && uiState.expandedStaffRole === item.role;
    const showPhone = canViewStaffPhone();
    const interactive = canEdit ? 'staff-card-interactive' : '';
    return `
      <article class="card light-card staff-card ${interactive} ${revealEdit ? 'selected' : ''}" data-staff-role="${escapeHtml(item.role)}">
        <h3>${escapeHtml(item.role)}</h3>
        <strong>${escapeHtml(`${item.firstName} ${item.lastName}`)}</strong>
        ${showPhone && item.phone ? `<span>${escapeHtml(item.phone)}</span>` : ''}
        ${revealEdit ? `
          <div class="player-actions staff-actions">
            <button type="button" class="btn secondary small" data-staff-action="edit" data-role="${escapeHtml(item.role)}">Modifica</button>
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

function openPlayerForm(playerId = null) {
  if (!canManageRoster()) return;
  const wrap = document.getElementById('playerFormWrap');
  wrap.classList.remove('hidden');
  const form = document.getElementById('playerForm');
  form.reset();
  document.getElementById('playerId').value = '';
  document.getElementById('playerStatus').value = 'active';
  positionPlayerForm(playerId || '');
  if (!playerId) return;
  const player = state.players.find(item => item.id === playerId);
  if (!player) return;
  document.getElementById('playerId').value = player.id;
  document.getElementById('playerName').value = player.firstName;
  document.getElementById('playerSurname').value = player.lastName;
  document.getElementById('playerNumber').value = player.number || '';
  document.getElementById('playerPhone').value = player.phone || '';
  document.getElementById('playerStatus').value = player.status || 'active';
}

function resetPlayerForm() {
  document.getElementById('playerFormWrap').classList.add('hidden');
  document.getElementById('playerForm').reset();
  document.getElementById('playerId').value = '';
  positionPlayerForm('');
}

async function handlePlayerSave(event) {
  event.preventDefault();
  if (!canManageRoster()) return;
  const id = document.getElementById('playerId').value || uid('p');
  const firstName = document.getElementById('playerName').value.trim();
  const lastName = document.getElementById('playerSurname').value.trim();
  const number = document.getElementById('playerNumber').value.trim();
  const phone = document.getElementById('playerPhone').value.trim();
  const status = document.getElementById('playerStatus').value;
  const photoInput = document.getElementById('playerPhoto');
  const existing = state.players.find(player => player.id === id);
  if (!firstName || !lastName) return;

  const duplicateName = state.players.some(player => player.id !== id && player.firstName.trim().toLowerCase() === firstName.toLowerCase() && player.lastName.trim().toLowerCase() === lastName.toLowerCase());
  if (duplicateName) {
    alert('Esiste già un giocatore con lo stesso nome e cognome.');
    return;
  }
  const duplicateNumber = number && state.players.some(player => player.id !== id && String(player.number || '').trim() === number);
  if (duplicateNumber) {
    alert('Esiste già un giocatore con lo stesso numero di maglia.');
    return;
  }

  const finishSave = photo => {
    const snapshot = clone({
      players: state.players,
      auth: state.auth,
    });

    const updated = {
      id,
      firstName,
      lastName,
      number,
      phone,
      status,
      photo: photo != null ? photo : (existing?.photo || ''),
    };
    if (existing) {
      Object.assign(existing, updated);
    } else {
      state.players.push(updated);
      if (state.auth?.playerPasswords) {
        state.auth.playerPasswords[id] = {
          password: DEFAULT_LOGIN_PASSWORD,
          mustChangePassword: true,
        };
      }
    }
    ensureAuthStateIntegrity();
    authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
    const saved = saveState();
    if (!saved) {
      state.players = snapshot.players;
      state.auth = snapshot.auth;
      ensureAuthStateIntegrity();
      authState.currentUser = resolveSessionUser(buildSessionFromUser(authState.currentUser));
      applyAuthLayout();
      renderAll();
      alert('Impossibile salvare il giocatore: la foto selezionata e troppo pesante per il salvataggio locale.');
      return;
    }
    resetPlayerForm();
    applyAuthLayout();
    renderAll();
  };

  if (photoInput.files && photoInput.files[0]) {
    try {
      const photo = await readImageFileForStorage(photoInput.files[0]);
      finishSave(photo);
    } catch (error) {
      console.warn('Errore durante la lettura della foto giocatore', error);
      alert("Non sono riuscito a leggere l\'immagine selezionata.");
    }
  } else {
    finishSave(null);
  }
}

function deletePlayer(playerId) {
  if (!canManageRoster()) return;
  state.players = state.players.filter(player => player.id !== playerId);
  if (state.auth?.playerPasswords) delete state.auth.playerPasswords[playerId];
  if (state.auth?.managerPlayerIds) state.auth.managerPlayerIds = state.auth.managerPlayerIds.filter(id => id !== playerId);
  (state.auth?.staffAccounts || []).forEach(account => {
    if (account.linkedPlayerId === playerId) account.linkedPlayerId = null;
  });
  if (authState.currentUser?.accountType === 'player' && authState.currentUser.playerId === playerId) {
    authState.currentUser = null;
    if (state.auth) state.auth.session = null;
  }
  state.matches.forEach(match => {
    match.scorers = (match.scorers || []).filter(item => item.playerId !== playerId);
    match.cards = (match.cards || []).filter(item => item.playerId !== playerId);
    if (match.mvpPlayerId === playerId) match.mvpPlayerId = '';
    persistMatchEdit(match);
  });
  ensureAuthStateIntegrity();
  saveState();
  applyAuthLayout();
  renderAll();
}

function renderAll() {
  renderNavigation();
  syncRoleUi();
  populateSeasonFilter();
  populateTeamFilter();
  populateRoundFilter();
  renderHome();
  renderStandings();
  renderScorers();
  renderMatches();
  renderPolls();
  renderProfile();
  renderRoster();
  updateSyncNote();
  syncMatchesFiltersUi();
  performPendingMatchScroll();
  performPendingPollScroll();
}

function bindEvents() {
  window.addEventListener('hashchange', () => {
    closeTopMenu();
    closeNoticeDetailModal();
    renderNavigation();
  });

  document.addEventListener('click', event => {
    const topMenuWrap = event.target.closest('#topMenuWrap');
    if (!topMenuWrap) closeTopMenu();

    const mapsLink = event.target.closest('[data-maps-team], [data-maps-query]');
    if (!mapsLink) return;
    event.preventDefault();
    event.stopPropagation();
    openMapsWithConsent(mapsLink.dataset.mapsTeam || mapsLink.dataset.mapsQuery || '', mapsLink.dataset.mapsLabel || '');
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeTopMenu();
      uiState.standingsSortMenuOpen = false;
      renderStandings();
    }
  });

  document.addEventListener('click', event => {
    const sortMenu = document.querySelector('.standings-sort-menu');
    if (!sortMenu || sortMenu.contains(event.target)) return;
    if (!uiState.standingsSortMenuOpen) return;
    uiState.standingsSortMenuOpen = false;
    renderStandings();
  });

  document.getElementById('topMenuBtn')?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    toggleTopMenu();
  });

  document.getElementById('topMenuDropdown')?.addEventListener('click', event => {
    const actionButton = event.target.closest('[data-top-menu-action]');
    if (!actionButton) return;
    event.preventDefault();
    event.stopPropagation();
    handleTopMenuAction(actionButton.dataset.topMenuAction || '');
  });

  const accountSummaryButton = document.getElementById('accountSummary');
  accountSummaryButton?.addEventListener('click', () => {
    uiState.targetMatchId = null;
    window.location.hash = '#home';
    renderAll();
  });
  accountSummaryButton?.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    uiState.targetMatchId = null;
    window.location.hash = '#home';
    renderAll();
  });

  document.getElementById('standingsBody')?.addEventListener('click', event => {
    const toggleButton = event.target.closest('[data-action="pc-toggle"]');
    if (toggleButton && isManagerUser()) {
      const team = toggleButton.dataset.team || '';
      uiState.activePcEditorTeam = uiState.activePcEditorTeam === team ? '' : team;
      renderStandings();
      return;
    }

    const actionButton = event.target.closest('[data-action="pc-increase"], [data-action="pc-decrease"]');
    if (!actionButton || !isManagerUser()) return;
    const team = actionButton.dataset.team || '';
    const delta = actionButton.dataset.action === 'pc-increase' ? 1 : -1;
    if (changeManualTeamCardPoints(team, delta, getSelectedSeason())) {
      uiState.activePcEditorTeam = team;
      renderStandings();
      renderHome();
    }
  });

  document.getElementById('standingsBody')?.addEventListener('change', event => {
    const input = event.target.closest('[data-standings-editor="pc-manual"]');
    if (!input || !isManagerUser()) return;
    const team = input.dataset.team || '';
    if (setManualTeamCardPoints(team, input.value, getSelectedSeason())) {
      uiState.activePcEditorTeam = team;
      renderStandings();
      renderHome();
    }
  });

  document.getElementById('phaseFilter').addEventListener('change', renderMatches);
  document.getElementById('matchTeamFilter').addEventListener('change', renderMatches);
  document.getElementById('roundFilter').addEventListener('change', renderMatches);
  document.querySelectorAll('[data-season-filter]').forEach(select => {
    select.addEventListener('change', event => {
      uiState.selectedSeason = normalizeSeasonLabel(event.target.value) || getCurrentSeasonLabel();
      uiState.activePcEditorTeam = '';
      uiState.standingsTeamsEditorSeason = '';
      uiState.standingsTeamsEditorDraftLogos = {};
      uiState.standingsSortMenuOpen = false;
      populateSeasonFilter();
      populateRoundFilter();
      renderStandings();
      renderScorers();
      renderMatches();
      updatePartiteStickyOffset();
    });
  });

  document.getElementById('standingsSortBtn')?.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    uiState.standingsSortMenuOpen = !uiState.standingsSortMenuOpen;
    renderStandings();
  });
  document.getElementById('standingsSortDropdown')?.addEventListener('click', event => {
    const actionButton = event.target.closest('[data-standings-sort]');
    if (!actionButton) return;
    event.preventDefault();
    event.stopPropagation();
    const selectedKey = actionButton.dataset.standingsSort || (uiState.standingsView === 'scorers' ? 'goals' : 'points');
    if (uiState.standingsView === 'scorers') {
      uiState.scorersSortKey = selectedKey;
      renderScorers();
    } else {
      uiState.standingsSortKey = selectedKey;
    }
    uiState.standingsSortMenuOpen = false;
    renderStandings();
  });

  document.getElementById('standingsTeamsBtn').addEventListener('click', () => {
    uiState.standingsView = 'teams';
    uiState.teamsStandingsExpanded = false;
    uiState.standingsSortMenuOpen = false;
    renderStandings();
  });
  document.getElementById('standingsScorersBtn').addEventListener('click', () => {
    uiState.standingsView = 'scorers';
    uiState.standingsSortMenuOpen = false;
    if (uiState.penaltiesModalOpen) closePenaltyModal();
    renderScorers();
    renderStandings();
  });

  document.getElementById('toggleStandingsExpandBtn')?.addEventListener('click', () => {
    if (uiState.standingsView !== 'teams') return;
    uiState.teamsStandingsExpanded = !uiState.teamsStandingsExpanded;
    renderStandings();
  });

  document.getElementById('refreshResultsBtn').addEventListener('click', () => {
    if (!canImportFixtures()) return;
    const input = document.getElementById('resultsTxtInput');
    if (!input) return;
    input.value = '';
    input.click();
  });

  document.getElementById('toggleMatchFiltersBtn')?.addEventListener('click', () => {
    uiState.matchesFiltersOpen = !uiState.matchesFiltersOpen;
    syncMatchesFiltersUi();
  });

  document.getElementById('openPenaltyModalBtn')?.addEventListener('click', () => {
    if (!isManagerUser()) return;
    if (uiState.penaltiesModalOpen) {
      closePenaltyModal();
    } else {
      openPenaltyModal();
    }
  });
  document.getElementById('closePenaltyModalBtn')?.addEventListener('click', closePenaltyModal);
  document.getElementById('penaltyModal')?.addEventListener('click', event => {
    if (event.target.id === 'penaltyModal') closePenaltyModal();
  });
  document.getElementById('penaltySeasonSelect')?.addEventListener('change', event => {
    uiState.penaltySelectedSeason = normalizeSeasonLabel(event.target.value) || getSelectedSeason();
    populatePenaltyTeamSelect();
    renderPenaltyPreview();
  });
  document.getElementById('penaltyTeamSelect')?.addEventListener('change', () => {
    renderPenaltyPreview();
  });
  document.getElementById('penaltyForm')?.addEventListener('submit', event => {
    event.preventDefault();
    if (!isManagerUser()) return;
    const team = document.getElementById('penaltyTeamSelect')?.value || '';
    const season = getPenaltySelectedSeason();
    if (!team) return;
    if (addTeamPenalty(team, season)) {
      populatePenaltySeasonSelect();
      populatePenaltyTeamSelect();
      renderPenaltyPreview();
      renderStandings();
      renderHome();
    }
  });
  document.getElementById('removePenaltyBtn')?.addEventListener('click', () => {
    if (!isManagerUser()) return;
    const team = document.getElementById('penaltyTeamSelect')?.value || '';
    const season = getPenaltySelectedSeason();
    if (!team) return;
    if (removeTeamPenalty(team, season)) {
      populatePenaltySeasonSelect();
      populatePenaltyTeamSelect();
      renderPenaltyPreview();
      renderStandings();
      renderHome();
    }
  });

  document.getElementById('resultsTxtInput')?.addEventListener('change', async event => {
    if (!canImportFixtures()) {
      event.target.value = '';
      return;
    }
    const input = event.target;
    const file = input?.files?.[0];
    if (!file) return;

    try {
      const content = await file.text();
      await importExternalTxtFile(content);
    } catch (error) {
      console.warn('Errore importazione file partite', error);
      if (!state.fixturesSyncError) {
        state.fixturesSyncError = 'Lettura del file TXT non riuscita.';
        saveState();
        updateSyncNote();
        renderAll();
      }
    } finally {
      input.value = '';
    }
  });

function confirmDeleteCompetition(season = getSelectedSeason()) {
  if (!isManagerUser()) return false;
  const summary = getSeasonDeletionSummary(season);
  const details = [];
  if (summary.matches > 0) details.push(`${summary.matches} partite`);
  if (summary.penalties > 0) details.push(`${summary.penalties} penalità`);
  if (summary.teamsWithCardPoints > 0) details.push(`punti cartellini manuali per ${summary.teamsWithCardPoints} squadre`);

  const competitionName = getCompetitionDisplayName(season) || season;
  const message = details.length
    ? `Confermi l'eliminazione della competizione ${competitionName}?\nVerranno eliminati anche ${details.join(' e ')} collegati a questa competizione.`
    : `Confermi l'eliminazione della competizione ${competitionName}?`;

  if (!window.confirm(message)) return false;

  if (deleteSeasonData(season)) {
    closeCompetitionModal();
    closeCompetitionTeamsModal();
    renderAll();
    alert(`Competizione ${normalizeSeasonLabel(season) || season} eliminata con successo.`);
    return true;
  }
  return false;
}

  document.getElementById('addSeasonBtn')?.addEventListener('click', () => openCompetitionModal('create'));
  document.getElementById('editCompetitionBtn')?.addEventListener('click', () => openCompetitionModal('edit', getSelectedSeason()));
  document.getElementById('editCompetitionTeamsBtn')?.addEventListener('click', () => openCompetitionTeamsModal(getSelectedSeason()));
  document.getElementById('closeCompetitionModalBtn')?.addEventListener('click', closeCompetitionModal);
  document.getElementById('deleteCompetitionFromModalBtn')?.addEventListener('click', () => confirmDeleteCompetition(getSelectedSeason()));
  document.getElementById('competitionModal')?.addEventListener('click', event => {
    if (event.target.id === 'competitionModal') closeCompetitionModal();
  });
  document.getElementById('competitionTypeInput')?.addEventListener('change', () => {
    const yearInput = document.getElementById('competitionYearInput');
    if (yearInput) yearInput.value = '';
    syncCompetitionModalFields();
  });
  document.getElementById('competitionForm')?.addEventListener('submit', handleCompetitionFormSubmit);
  document.getElementById('competitionTeamsModal')?.addEventListener('click', event => {
    if (event.target.id === 'competitionTeamsModal') closeCompetitionTeamsModal();
  });
  document.getElementById('closeCompetitionTeamsModalBtn')?.addEventListener('click', closeCompetitionTeamsModal);
  document.getElementById('addCompetitionTeamRowBtn')?.addEventListener('click', addCompetitionTeamsModalRow);
  document.getElementById('saveCompetitionTeamsModalBtn')?.addEventListener('click', saveCompetitionTeamsFromModal);
  document.getElementById('competitionTeamsEditorList')?.addEventListener('input', event => {
    const input = event.target.closest('[data-team-row-name]');
    if (!input) return;
    const rowId = String(input.dataset.teamRowName || '');
    uiState.competitionTeamsModalRows = (Array.isArray(uiState.competitionTeamsModalRows) ? uiState.competitionTeamsModalRows : []).map(row => (
      row.id === rowId ? { ...row, name: input.value } : row
    ));
  });
  document.getElementById('competitionTeamsEditorList')?.addEventListener('click', event => {
    const removeBtn = event.target.closest('[data-team-remove-row]');
    if (!removeBtn) return;
    const rowId = String(removeBtn.dataset.teamRemoveRow || '');
    const remaining = (Array.isArray(uiState.competitionTeamsModalRows) ? uiState.competitionTeamsModalRows : []).filter(row => row.id !== rowId);
    uiState.competitionTeamsModalRows = remaining.length ? remaining : [createCompetitionTeamsDraftRow()];
    renderCompetitionTeamsModal();
  });
  document.getElementById('competitionTeamsEditorList')?.addEventListener('change', async event => {
    const input = event.target.closest('[data-team-row-logo]');
    if (!input) return;
    const rowId = String(input.dataset.teamRowLogo || '');
    const file = input.files?.[0];
    if (!rowId || !file) return;

    try {
      const logo = await readImageFileForStorage(file, {
        maxBytes: 60 * 1024,
        maxDimensions: [280, 240, 200, 160],
        qualities: [0.82, 0.72, 0.62, 0.52],
      });
      uiState.competitionTeamsModalRows = (Array.isArray(uiState.competitionTeamsModalRows) ? uiState.competitionTeamsModalRows : []).map(row => (
        row.id === rowId ? { ...row, logo } : row
      ));
      renderCompetitionTeamsModal();
    } catch (error) {
      console.warn('Salvataggio logo squadra non riuscito.', error);
      alert('Non sono riuscito a salvare il logo della squadra selezionata.');
    } finally {
      input.value = '';
    }
  });
  document.getElementById('deleteSeasonBtn')?.addEventListener('click', () => confirmDeleteCompetition(getSelectedSeason()));

  document.getElementById('homeStandingsCard').addEventListener('click', () => {
    uiState.standingsView = 'teams';
    uiState.teamsStandingsExpanded = false;
    location.hash = '#classifiche';
  });

  document.getElementById('homeLastMatchCard').addEventListener('click', () => {
    const match = getMalavogliaMatches().filter(isPlayed).sort((a, b) => toTimestamp(b.date, b.time) - toTimestamp(a.date, a.time))[0];
    if (!match) return;
    focusMatch(match.id);
    if (window.location.hash !== '#partite') {
      location.hash = '#partite';
    }
    renderAll();
  });

  document.getElementById('homeNextMatchCard').addEventListener('click', () => {
    const match = getMalavogliaMatches().filter(item => !isPlayed(item)).sort((a, b) => toTimestamp(a.date, a.time) - toTimestamp(b.date, b.time))[0];
    if (!match) return;
    focusMatch(match.id);
    if (window.location.hash !== '#partite') {
      location.hash = '#partite';
    }
    renderAll();
  });

  document.getElementById('homeNoticesBox')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const noticeButton = event.target.closest('[data-home-notice-id]');
    if (!noticeButton) return;
    event.preventDefault();
    event.stopPropagation();
    
    const pollId = noticeButton.dataset.homeNoticeId || '';
    openNoticeDetailModal(pollId, 'home');
  });

  // Listener globale per i voti dal modal e da altre posizioni
  document.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const voteButton = event.target.closest('[data-poll-vote]');
    if (voteButton) {
      voteOnPoll(voteButton.dataset.pollId || '', voteButton.dataset.optionId || '');
    }
  });

  document.getElementById('matchesList').addEventListener('click', event => {
    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
      if (!canManageMatches()) return;
      event.stopPropagation();
      const id = actionButton.dataset.id;
      const action = actionButton.dataset.action;
      if (action === 'edit') {
        uiState.expandedMatchId = id;
        uiState.editingMatchId = id;
        getMatchDraft(id);
        renderMatches();
      } else if (action === 'delete') {
        confirmClearMatchData(id);
      } else if (action === 'save') {
        commitMatchDraft(id);
      } else if (action === 'cancel-edit') {
        cancelMatchDraft(id);
      } else if (action === 'add-card') {
        const draft = getMatchDraft(id);
        const match = state.matches.find(item => item.id === id);
        draft.cards.push({
          team: match.homeTeam,
          playerId: '',
          playerName: '',
          type: 'Cartellino Giallo',
        });
        renderMatches();
      } else if (action === 'remove-card') {
        const draft = getMatchDraft(id);
        const index = Number(actionButton.dataset.index);
        if (Number.isInteger(index) && index >= 0) {
          draft.cards.splice(index, 1);
          renderMatches();
        }
      }
      return;
    }

    if (event.target.closest('.match-editor')) {
      event.stopPropagation();
      return;
    }

    const card = event.target.closest('.match-card');
    if (!card) return;
    const matchId = card.dataset.matchId;
    uiState.expandedMatchId = uiState.expandedMatchId === matchId ? null : matchId;
    if (uiState.expandedMatchId !== matchId) uiState.editingMatchId = null;
    renderMatches();
  });

  document.getElementById('matchesList').addEventListener('input', event => {
    const target = event.target;
    if (!target.dataset.editor || !canManageMatches()) return;
    event.stopPropagation();
    const matchId = target.dataset.id;
    const index = Number(target.dataset.index);
    const draft = getMatchDraft(matchId);
    const type = target.dataset.editor;

    if (type === 'homeGoals' || type === 'awayGoals') {
      draft[type] = target.value;
      return;
    }
    if (type === 'venue') draft.venue = target.value;
    if (type === 'date') draft.date = fromDateInputValue(target.value);
    if (type === 'time') draft.time = target.value;
    if (type === 'mvp-player') draft.mvpPlayerId = target.value;
    if (type === 'scorer-minute') draft.scorers[index].minute = target.value;
    if (type === 'card-name') draft.cards[index].playerName = target.value;
  });

  document.getElementById('matchesList').addEventListener('change', event => {
    const target = event.target;
    if (!target.dataset.editor || !canManageMatches()) return;
    event.stopPropagation();
    const matchId = target.dataset.id;
    const index = Number(target.dataset.index);
    const draft = getMatchDraft(matchId);
    const type = target.dataset.editor;

    if (type === 'homeGoals' || type === 'awayGoals') {
      draft[type] = target.value;
      const match = state.matches.find(item => item.id === matchId);
      if (match && isMalavogliaMatch(match)) {
        renderMatches();
      }
      return;
    }
    if (type === 'date') { draft.date = fromDateInputValue(target.value); return; }
    if (type === 'time') { draft.time = target.value; return; }
    if (type === 'mvp-player') { draft.mvpPlayerId = target.value; return; }
    if (type === 'scorer-player') draft.scorers[index].playerId = target.value;
    if (type === 'scorer-period') draft.scorers[index].period = target.value;
    if (type === 'card-type') draft.cards[index].type = target.value;
    if (type === 'card-team') {
      draft.cards[index].team = target.value;
      draft.cards[index].playerId = '';
      draft.cards[index].playerName = '';
      renderMatches();
      return;
    }
    if (type === 'card-player') {
      draft.cards[index].playerId = target.value;
      draft.cards[index].playerName = getPlayerFullName(getPlayerById(target.value) || { firstName: '', lastName: '' });
    }
  });

  document.getElementById('loginForm').addEventListener('submit', handleLoginSubmit);
  document.getElementById('staffForm')?.addEventListener('submit', handleStaffSave);
  document.getElementById('cancelStaffBtn')?.addEventListener('click', closeStaffEditModal);
  document.getElementById('closeNoticeDetailBtn')?.addEventListener('click', closeNoticeDetailModal);
  document.getElementById('openNoticeEditBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    closeNoticeDetailModal();
    openPollEditor(pollId);
    if (window.location.hash !== '#sondaggi') {
      location.hash = '#sondaggi';
    }
    renderAll();
  });
  document.getElementById('republishNoticeBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    republishNotice(pollId);
  });
  document.getElementById('deleteNoticeDetailLocalBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    if (!confirm('Sei sicuro di voler eliminare questo elemento dal tuo account?')) return;
    closeNoticeDetailModal();
    hidePollForCurrentUser(pollId);
  });
  document.getElementById('deleteNoticeDetailGlobalBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    if (!confirm('Sei sicuro di voler eliminare questo elemento per tutti?')) return;
    closeNoticeDetailModal();
    deletePollGlobally(pollId);
  });
  document.getElementById('responseReportBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    openResponseReport(pollId);
  });
  document.getElementById('closeResponseReportBtn')?.addEventListener('click', closeResponseReport);
  document.getElementById('noticeDetailModal')?.addEventListener('click', event => {
    if (event.target.id === 'noticeDetailModal') closeNoticeDetailModal();
    const imageBtn = event.target.closest('[data-notice-image-preview]');
    if (imageBtn) {
      const notice = (state.polls || []).find(item => item.id === (imageBtn.dataset.noticeImagePreview || ''));
      const noticeImageSrc = getPollImageSource(notice);
      if (noticeImageSrc) openNoticeImagePreviewModal(noticeImageSrc);
    }
  });
  document.getElementById('closeNoticeImagePreviewBtn')?.addEventListener('click', closeNoticeImagePreviewModal);
  document.getElementById('noticeImagePreviewModal')?.addEventListener('click', event => {
    if (event.target.id === 'noticeImagePreviewModal') closeNoticeImagePreviewModal();
  });
  document.getElementById('openNoticePollBtn')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    const pollId = event.currentTarget?.dataset?.pollId || '';
    if (!pollId) return;
    closeNoticeDetailModal();
    focusPoll(pollId);
    if (window.location.hash !== '#sondaggi') {
      location.hash = '#sondaggi';
    }
    renderAll();
  });
  document.getElementById('staffLinkedPlayerId')?.addEventListener('change', syncStaffLinkedPlayerFields);
  document.getElementById('passwordForm').addEventListener('submit', handlePasswordSubmit);
  document.getElementById('cancelPasswordChange')?.addEventListener('click', closePasswordModal);

  document.getElementById('togglePlayerForm').addEventListener('click', () => {
    if (!canManageRoster()) return;
    openPlayerForm();
  });
  document.getElementById('cancelPlayerEdit').addEventListener('click', resetPlayerForm);
  document.getElementById('playerForm').addEventListener('submit', handlePlayerSave);

  document.addEventListener('submit', event => {
    if (event.target.id === 'profileForm') handleProfileSave(event);
  });

  document.addEventListener('click', event => {
    const profileDetailsToggleBtn = event.target.closest('#profileDetailsToggleBtn');
    if (profileDetailsToggleBtn) {
      event.preventDefault();
      uiState.profileDetailsOpen = !uiState.profileDetailsOpen;
      renderProfile();
      return;
    }

    const profilePasswordBtn = event.target.closest('#profilePasswordBtn');
    if (profilePasswordBtn) {
      event.preventDefault();
      openPasswordModal();
      return;
    }

    const profileCloseDetailsBtn = event.target.closest('#profileCloseDetailsBtn');
    if (profileCloseDetailsBtn) {
      event.preventDefault();
      uiState.profileDetailsOpen = false;
      renderProfile();
    }
  });

  document.getElementById('staffGrid').addEventListener('click', event => {
    const editButton = event.target.closest('[data-staff-action="edit"]');
    if (editButton) {
      event.preventDefault();
      event.stopPropagation();
      openStaffEditModal(editButton.dataset.role || '');
      return;
    }

    const card = event.target.closest('[data-staff-role]');
    if (!card) return;
    const role = card.dataset.staffRole || '';
    if (!canEditStaffRole(role)) return;
    uiState.expandedStaffRole = uiState.expandedStaffRole === role ? '' : role;
    renderStaff();
  });

  document.getElementById('pollsContent').addEventListener('input', event => {
    if (POLL_SECTION_DISABLED) return;
    const optionInput = event.target.closest('[data-poll-editor="option"]');
    if (optionInput) {
      const draft = ensurePollDraft();
      const option = draft.options[Number(optionInput.dataset.index)];
      if (option) option.label = optionInput.value;
      return;
    }

    const form = event.target.closest('#pollForm');
    if (form) savePollDraftFromForm(form);
  });

  document.getElementById('pollsContent')?.addEventListener('change', async event => {
    if (POLL_SECTION_DISABLED) return;
    const target = event.target;
    const form = target.closest('#pollForm');
    if (!form) return;
    
    savePollDraftFromForm(form);
    if (target.name === 'pollType' || target.name === 'pollIncludeSurvey') {
      renderPolls();
    }
  });

  // Listener globale sul file input persistente per le immagini dei sondaggi
  const globalPollImageInput = document.getElementById('globalPollImageInput');
  if (globalPollImageInput) {
    globalPollImageInput.addEventListener('change', async event => {
      if (POLL_SECTION_DISABLED) return;
      const file = event.target.files?.[0];
      if (!file) return;

      try {
        const draft = ensurePollDraft();
        const fileNameDisplay = document.getElementById('pollImageFileName');
        
        console.log('Caricamento immagine:', file.name);
        const photo = await readImageFileForStorage(file);
        
        if (!photo) {
          alert("Non sono riuscito a leggere l'immagine selezionata.");
          event.target.value = '';
          return;
        }
        
        draft.image = photo;
        draft.imageChanged = true;
        
        if (fileNameDisplay) {
          fileNameDisplay.textContent = `✓ ${file.name}`;
        }
        
        console.log('Immagine caricata con successo');
        event.target.value = '';
        renderPolls();
      } catch (error) {
        console.warn('Errore durante il caricamento dell\'immagine per l\'avviso', error);
        alert("Errore: " + (error.message || "Non sono riuscito a leggere l'immagine selezionata."));
        event.target.value = '';
      }
    });
  }

  document.getElementById('pollsContent')?.addEventListener('submit', async event => {
    if (POLL_SECTION_DISABLED) return;
    if (event.target.id !== 'pollForm') return;
    event.preventDefault();
    savePollDraftFromForm(event.target);
    await savePollFromDraft();
  });

  document.getElementById('pollsContent')?.addEventListener('click', event => {
    if (POLL_SECTION_DISABLED) return;
    
    // Handle click on poll list item
    const listItem = event.target.closest('[data-poll-id].poll-list-item');
    if (listItem) {
      const pollId = listItem.dataset.pollId || '';
      openNoticeDetailModal(pollId, 'polls');
      return;
    }
    
    const actionButton = event.target.closest('[data-poll-action]');
    if (actionButton) {
      const action = actionButton.dataset.pollAction;
      const draft = ensurePollDraft();
      if (action === 'add-option') {
        draft.options.push(createPollDraftOption(''));
        renderPolls();
        return;
      }
      if (action === 'remove-option') {
        if (draft.options.length <= 2) return;
        draft.options.splice(Number(actionButton.dataset.index), 1);
        renderPolls();
        return;
      }
      if (action === 'remove-image') {
        draft.image = '';
        draft.imageChanged = true;
        renderPolls();
        return;
      }
      if (action === 'select-image') {
        const globalImageInput = document.getElementById('globalPollImageInput');
        if (globalImageInput) {
          globalImageInput.click();
        }
        return;
      }
      if (action === 'open-composer') {
        uiState.pollDraft = createDefaultPollDraft();
        uiState.pollComposerOpen = true;
        renderPolls();
        return;
      }
      if (action === 'close-composer') {
        resetPollComposer();
        renderPolls();
        return;
      }
      if (action === 'edit-poll') {
        openPollEditor(actionButton.dataset.pollId || '');
        return;
      }
      if (action === 'toggle-cancel-poll') {
        togglePollCancelled(actionButton.dataset.pollId || '');
        return;
      }
      if (action === 'delete-poll-global') {
        deletePollGlobally(actionButton.dataset.pollId || '');
        return;
      }
      if (action === 'renew-notice') {
        renewNoticePublication(actionButton.dataset.pollId || '');
        return;
      }
      if (action === 'delete-poll-locally') {
        hidePollForCurrentUser(actionButton.dataset.pollId || '');
        return;
      }
      return;
    }

    const voteButton = event.target.closest('[data-poll-vote]');
    if (voteButton) {
      voteOnPoll(voteButton.dataset.pollId || '', voteButton.dataset.optionId || '');
    }
  });

  document.getElementById('rosterGrid').addEventListener('click', event => {
    const passwordButton = event.target.closest('[data-player-password-toggle]');
    if (passwordButton) {
      event.stopPropagation();
      togglePlayerPasswordVisibility(passwordButton.dataset.id);
      return;
    }

    const actionButton = event.target.closest('[data-player-action]');
    if (actionButton) {
      event.stopPropagation();
      const id = actionButton.dataset.id;
      const action = actionButton.dataset.playerAction;
      if (action === 'toggle-manager') {
        togglePlayerManagerRole(id);
        return;
      }
      if (!canManageRoster()) return;
      if (action === 'edit') openPlayerForm(id);
      if (action === 'delete') deletePlayer(id);
      return;
    }
    const card = event.target.closest('.player-card');
    if (!card) return;
    uiState.expandedPlayerId = uiState.expandedPlayerId === card.dataset.playerId ? null : card.dataset.playerId;
    renderRoster();
  });

  document.querySelectorAll('.main-nav a, .bottom-nav a').forEach(link => {
    link.addEventListener('click', event => {
      if (link.getAttribute('href') !== '#partite') {
        uiState.targetMatchId = null;
        return;
      }
      uiState.targetMatchId = null;
      uiState.expandedMatchId = null;
      uiState.editingMatchId = null;
      event.preventDefault();
      if (window.location.hash !== '#partite') {
        location.hash = '#partite';
      } else {
        renderNavigation();
      }
      requestAnimationFrame(() => scrollToPartiteTop({ behavior: 'smooth' }));
    });
  });
}
function updateClock() {
  const now = new Date();
  document.getElementById('liveDateTime').textContent = now.toLocaleString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function refreshNoticeVisibility() {
  renderHome();
  if ((window.location.hash || '#home') === '#sondaggi') {
    renderPolls();
  }
}


async function loadBundledTxtFilesOnStartup() {
  try {
    const bundledFixturesRaw = String(await loadBundledFixturesText() || '').replace(/\r/g, '').trim();
    if (bundledFixturesRaw) {
      state.remoteFixturesRaw = bundledFixturesRaw;
      state.fixturesSyncError = '';
      rebuildMatchesFromSource({
        preserveResultOverrides: true,
        mergeSeededCards: false,
        resetStoredCards: false,
      });
    }

    const bundledScorersRaw = String(await loadBundledScorersText() || '').replace(/\r/g, '').trim();
    if (bundledScorersRaw) {
      const groupedScorers = parseMalavogliaScorersText(bundledScorersRaw);
      if (groupedScorers.length) {
        applyGroupedMalavogliaScorers(groupedScorers, {
          updateTimestamp: false,
          saveState: false,
          render: false,
        });
        saveState();
      }
    }
  } catch (error) {
    console.warn('Caricamento automatico dei file TXT non riuscito.', error);
  } finally {
    renderAll();
  }
}

function init() {
  loadState();
  ensurePollDraft();
  ensureSeasonSelection();
  authState.currentUser = resolveSessionUser(state.auth?.session || null);
  applyAuthLayout();
  bindEvents();
  renderAll();
  loadBundledTxtFilesOnStartup();
  if (authState.currentUser?.mustChangePassword) {
    openPasswordModal();
  }
  updateClock();
  updatePartiteStickyOffset();
  syncTeamsStandingsFrozenPane();
  window.addEventListener('resize', updatePartiteStickyOffset);
  window.addEventListener('resize', syncTeamsStandingsFrozenPane);
  setInterval(updateClock, 1000);
  refreshHomeWeather();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      refreshHomeWeather();
      refreshNoticeVisibility();
    }
  });
  window.addEventListener('focus', () => {
    refreshHomeWeather();
    refreshNoticeVisibility();
  });
  setInterval(refreshHomeWeather, WEATHER_REFRESH_INTERVAL_MS);
  setInterval(refreshNoticeVisibility, 60000);
}

init();
