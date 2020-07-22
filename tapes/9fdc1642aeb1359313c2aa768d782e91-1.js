var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6Ijk1ZmM0NTBiLTIwYjItNTBkNy1hM2RjLThiYjM0NGFmZTk1MyIsImlhdCI6MTU5NTQyNTA5OCwidGVuYW50IjoiZGlrdSJ9.aHj-rxp-mOr098lh3N69WV5hM_yWQTaIvDvCbb433No
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

  res.setHeader("date", "Wed, 22 Jul 2020 13:38:22 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.55:9178/coursereserves/processingstatuses.. : 202 7405us, GET mod-courses-1.0.6-SNAPSHOT.95 http://10.36.1.55:9157/coursereserves/processingstatuses.. : 200 2786us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTvWrDMBSF9zyF8Nqo6M+ynLlLp0DbrXS4kq6DwZGDLQdKyLtXdpKmbUgpoRoE0tG5XH062s0IyTZd67Dv67B6jhCHHvuMLMgr2SUxybUfl5mxlTDgNAXnPFV5kVNTVUClzk3OLHKT82x+sARY42R6QgdNg/4keOxdV29i3YZvOoHgyRBgC3UDtsHT+TVG8BBhPHxoJ226DiGif0jTVEQwwSgrqBAvTC6UWCh1X5TmjqVxLJRcw8b/3TWZ9mnez39gAOOFKpyhaKCiCrimxvKCslKrwmiJUqoLDMtA2s5jdw3DchTRz4kdIgltJO8Yyf/BMFzcAOPTdR0GT08PZekps0pTZaykJUhBFctZxZksQV9m4jEQl27RtKuUuF+CgfU2BeMrkaNtOOfpdiSC34Lk5DojIW9jhSy2qbXUdHrm6ffI2f4DAAD//w==", "base64"));
  res.write(new Buffer("AwBZe72BXAMAAA==", "base64"));
  res.end();

  return __filename;
};
