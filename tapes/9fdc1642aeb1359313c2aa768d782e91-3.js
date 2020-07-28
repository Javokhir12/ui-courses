var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzA0OSwidGVuYW50IjoiZGlrdSJ9.nYqMdQip1AoJMuWtGzwLefJDWyth5jLB-ofX5PGa0HU
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves?sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:55 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/coursereserves/processingstatuses.. : 202 7230us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.132:9157/coursereserves/processingstatuses.. : 200 3734us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTy2rDMBBF9/kK4W0zRbIkW/aydJNVoI9V6WIkjYPBsYMtB0LIv1dJ+khbUkKoFgLp6g6ao6vthLFk1XeOhqFuF48BwzjQkLCSvbBtFKNc+/0yMbZKDboM0DkPSucaTFUhyEwbzS0Jo0UyPVpaXNLB9EAOm4b8h+BpcH29CnXXftMZtp6NLa6xbtA29HF+SQE9BtwfPl4nbrqeMJC/j9OhSMpTDjyH1DxxWUpdSnUrC3HD43gvFF3jyl/uOph2cd5Nf2BA41OVOwNksAKFIgNjRQ68yFRuMklSql8Y5i3rek/9OQzzvUh+yuwYWNsFtqHA/g+G4uoKGJ+u8zBEfHosCg/cqgyUsRIKlCkornkluCww+52JWctc7KLpFjFxfwSD6nUMximRd9v4lafrkQh5ORIhSm5KrW9zdcZ1t3keqJ8dqZC0xmXxf1iXc9AWDRguLVhbWUTPvcXiBCp73VdLQhebi23HoBz+n5zs3gAAAP//AwD0IaosngMAAA==", "base64"));
  res.end();

  return __filename;
};
