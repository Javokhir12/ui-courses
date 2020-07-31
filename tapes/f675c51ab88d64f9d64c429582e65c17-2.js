var path = require("path");

/**
 * GET /configurations/entries?query=(module=ORG and configName=localeSettings)
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * sec-fetch-dest: empty
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIxMDA1MiwidGVuYW50IjoiZGlrdSJ9.3VjFvu5eSfZEs4YqyrhdkYxjotUCjRUwfrWSdupujbw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: * / *
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:54 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/configurations/entries.. : 202 31634us, GET mod-configuration-5.5.0-SNAPSHOT.76 http://10.36.1.15:9131/configurations/entries.. : 200 7868us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKrmAgAAAP//", "base64"));
  res.write(new Buffer("UlBQSs7PS8tML1ayUojmAgAAAP//lJDbSsRADIbfJbd2NNPO9HS3siDerODaC6EgaScLxR5knCpr6bs7s90H0FwEEr78f5IFOgMlxLmWTZ6RQClRKEozUejMCK3iLJVs1AlziGCYzNyz55+eH3y5CR1oCK1+aqnnIzvXjV48Ah6p6dmrOztzBF/Uz4Fb6itaQ1l7SFTHGqIaXDfwzzRu7d3Atmvp7sDfb6+Tfb8Q7Wwtj+35QlTHfQ1r2IkdGXIE5QKtZXJs9j6FozBGgZlI5AsmpcZS4i1m6gZ9hO03+P5cfbJ9DF9oUOVNyiSU/4fQhUpEjlqKJlUqppNWaREG5w/zd5cr/F+Xdf0FAAD//4rVAcVVSX5JYk5QanJ+UQoowgx1uAAAAAD//1JQKkotLs0p8cxLyweKVKMpMdRRSktMTi0BMqNjdZRSMhPT8/KLSzKTwQK1XLUAAAAA//8DAGysg00DAgAA", "base64"));
  res.end();

  return __filename;
};
