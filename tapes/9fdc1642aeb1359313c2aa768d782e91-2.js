var path = require("path");

/**
 * GET /coursereserves/processingstatuses?limit=500
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/reserves/abd88c4d-8de9-46b8-8291-0ccf916fb89e/09427a84-6777-487d-bdb3-75235f4012de/5b839674-34d7-40b9-aa7b-690a4668c09c/100d10bf-2f06-4aa0-be15-0b95b2d9f9e3/edit
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:38:10 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/coursereserves/processingstatuses.. : 202 12688us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.15:9157/coursereserves/processingstatuses.. : 200 5852us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAKyTT0/cMBDF73wKK9fuIP8ZO06OFRdOSLQ9IQ5je4IihWSVOEgI7Xevd5cVUEqFUH2wZD+/kefn56czIartPEVeln68+5EprwsvlWjFjXgqYpH7tF9WPnTaU3RAMSZAW1vwXUdgnPVWBlbeqmpztIx0zwfTNUcaBk4nIfES536b+2l8owsak1hHeqB+oDDw6fw9Z0qUaX/4eJ2yGWemzOmiTIciWmoJsgajfkrTGtuiPUeD32QZz4WKa92mz7sOpl2Zd5s/MJBPGuvogT11gKQc+KBqkI3D2jvDxuA7DFejmObE80cYrvYip40IaxbjlMUjZ/EfYaD/CoyT62MYqjw9NU0CGdAB+mCgIaMBpZWdkqYh9z4Tl6OIpYthuiuJ+0cwuH8owXhN5Nm2vuTp60ic+jwSpVsjW92cWyX/7vr++Gvh+fJIJchCwjEBam/BNmjAS6sgOERNnUXXvIYqbvfVqjyV5krbJSiH/2fOdr8BAAD//w==", "base64"));
  res.write(new Buffer("AwDDtTwKngMAAA==", "base64"));
  res.end();

  return __filename;
};
