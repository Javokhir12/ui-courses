var path = require("path");

/**
 * GET /coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTgwMSwidGVuYW50IjoiZGlrdSJ9.3heHwaX1xIdKrzffWI8sDyjGaQq3dy25p9D8N-tIRSI
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/cr/courses/6d973b67-b0ed-44df-a169-67b46365264a
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:57:41 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3 : 202 6249us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/courselistings/50cf3f8d-2a00-4b26-bf0d-fbcb1a8c82d3 : 200 11177us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAAJSTP2/bMBDF93wKQWt7CUlRFJktfxajTVugyVRkOJHHgoUtGRQdJAjy3UvZkusaSOFq0KDH392949PrWVGUwZXFZVHWzPrKawcCGQPZCgWtZw58a1uO2mrhqvLjCET6GYYUMS525HB1zRnfafScKHa4nKTnA2nZW0yh7ybJW6ekJQ7KmBqk9gy0ZATaeI9CaF01R+DX9hfZNMKv+fOfyU+ulJEOV7SF7jB0xefQZhsvs2h7txM/PVzc3FzcLi7uZikMVzaFp62c4obmz92QQtoc2MqNiTGLgDXXeY3SQEuMA1OVdgwl2rrZ98PVejNMoBLWN6ptwFrMLlxVgRG8AXJeiuwOtdQzuNzNPZG1a7RmFYFFJseWuTkhgbCqao2QeZB2JtcxrDL5neJTsPStD912oWWFkulaOJDG55fzApB7A4qEkhwVGe7nGsMBvHDDyP84sULxmEu8bW8152Q1R8E0XAgjQbCqASl9A5opBYIrJJODKZQt99C7MTi1ymEM7mPoQnopBBNs7y9hTLeYdidGBfJehZp16tyRmpuwcu/M9ps40P3LmiZ/hteSSd1CpUzOhCCb05EjYr2l/I9JYkaWR+h7Lk+udehy0RVrikPfzYqjwcawHnO7PfClL/puGToqbL9a9x3lWOz9jCGPG5v6uBtquvHHrbiihA4THkxqI+X1HO+oASHvubqsm0umzoWqP7D87H+FHXP98pDTNa3NYWVYLT00VhLU+RahxcqCVyzfJs8ZFzjzm7X7d0/Jzzlnf/WcmP/vOW7m7O03AAAA//8=", "base64"));
  res.write(new Buffer("AwA4pt6uPQUAAA==", "base64"));
  res.end();

  return __filename;
};
