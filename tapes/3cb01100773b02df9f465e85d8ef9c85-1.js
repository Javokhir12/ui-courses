var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("100d10bf-2f06-4aa0-be15-0b95b2d9f9e3" or "d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjIwOTkzMiwidGVuYW50IjoiZGlrdSJ9._w8yTy41Pf6RWdWZ3kGIwEqijvsmwGPO-oPwR-W3GuY
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/6fb96193-a78e-4c63-b91e-d52f9f8d4a60
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 15:40:08 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/inventory/items.. : 202 7549us, GET mod-inventory-16.1.0-SNAPSHOT.270 http://10.36.1.15:9173/inventory/items.. : 200 77046us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDEwIiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiRmllbGRpbmcsIEhlbGVuIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJmYjdiNzBmMS1iODk4LTQ5MjQtYTk5MS0wZTRiNjMxMmJiNWYiLAogICAgImJhcmNvZGUiIDogIjQ1Mzk4NzYwNTQzODMiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMyIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgIm51bWJlck9mUGllY2VzIiA6ICIxIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwZSIsCiAgICAgICJuYW1lIiA6ICJDb3Vyc2UgcmVzZXJ2ZXMiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQwMzozNDozOS42MTErMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQxNTo0MDowNS43NTQrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy9kNmY3YzFiYS1hMjM3LTQ2NWUtOTRlZC1mMzdlOTFiYzY0YmQiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlBSNjA1Ni5JNDU4OCBCNzQ5IDIwMTYiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiBudWxsCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiMTAwZDEwYmYtMmYwNi00YWEwLWJlMTUtMGI5NWIyZDlmOWUzIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQ2hlY2tlZCBvdXQiLAogICAgICAiZGF0ZSIgOiAiMjAyMC0wNy0zMVQxMzo0NTowMS45ODkrMDAwMCIKICAgIH0sCiAgICAidGl0bGUiIDogIkEgc2VtYW50aWMgd2ViIHByaW1lciIsCiAgICAiY2FsbE51bWJlciIgOiAiVEs1MTA1Ljg4ODE1IC4gQTU4IDIwMDQgRlQgTUVBREUiLAogICAgImhyaWQiIDogIml0ZW0wMDAwMDAwMDAwMTUiLAogICAgImNvbnRyaWJ1dG9yTmFtZXMiIDogWyB7CiAgICAgICJuYW1lIiA6ICJBbnRvbmlvdSwgR3JpZ29yaXMiCiAgICB9LCB7CiAgICAgICJuYW1lIiA6ICJWYW4gSGFybWVsZW4sIEZyYW5rIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJlM2ZmNjEzMy1iOWEyLTRkNGMtYTFjOS1kYzE4NjdkNGRmMTkiLAogICAgImJhcmNvZGUiIDogIjkwMDAwIiwKICAgICJpdGVtTGV2ZWxDYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAiaXRlbUxldmVsQ2FsbE51bWJlclByZWZpeCIgOiAiUFJFRklYIiwKICAgICJpdGVtTGV2ZWxDYWxsTnVtYmVyU3VmZml4IiA6ICJTVUZGSVgiLAogICAgInZvbHVtZSIgOiAidm9sLjIiLAogICAgImVudW1lcmF0aW9uIiA6ICJlbnVtIiwKICAgICJjaHJvbm9sb2d5IiA6ICJjaHJvbm8iLAogICAgImNvcHlOdW1iZXIiIDogImNwLjEiLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJjaXJjdWxhdGlvbk5vdGVzIiA6IFsgXSwKICAgICJudW1iZXJPZlBpZWNlcyIgOiAiMSIsCiAgICAiZGVzY3JpcHRpb25PZlBpZWNlcyIgOiAicGllY2VzIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgIjEwMDAiIF0sCiAgICAiZWxlY3Ryb25pY0FjY2VzcyIgOiBbIHsKICAgICAgInVyaSIgOiAiaHR0cDovL3d3dy5sb2MuZ292L2NhdGRpci90b2MvZWNpcDA3MTgvMjAwNzAyMDQyOS5odG1sIiwKICAgICAgImxpbmtUZXh0IiA6ICJMaW5rcyBhdmFpbGFibGUiLAogICAgICAibWF0ZXJpYWxzU3BlY2lmaWNhdGlvbiIgOiAiVGFibGUgb2YgY29udGVudHMiLAogICAgICAicHVibGljTm90ZSIgOiAiVGFibGUgb2YgY29udGVudHMgb25seSIsCiAgICAgICJyZWxhdGlvbnNoaXBJZCIgOiAiM2I0MzA1OTItMmUwOS00YjQ4LTlhMGMtMDYzNmQ2NmI5ZmIzIgogICAgfSBdLAogICAgInN0YXRpc3RpY2FsQ29kZUlkcyIgOiBbICJiNTk2OGM5ZS1jZGRjLTQ1NzYtOTllMy04ZTYwYWVkOGIwZGQiIF0sCiAgICAicHVyY2hhc2VPcmRlckxpbmVJZGVudGlmaWVyIiA6IG51bGwsCiAgICAibWF0ZXJpYWxUeXBlIiA6IHsKICAgICAgImlkIiA6ICIxYTU0YjQzMS0yZTRmLTQ1MmQtOWNhZS05Y2VlNjZjOWE4OTIiLAogICAgICAibmFtZSIgOiAiYm9vayIKICAgIH0sCiAgICAicGVybWFuZW50TG9hblR5cGUiIDogewogICAgICAiaWQiIDogIjJiOTRjNjMxLWZjYTktNDg5Mi1hNzMwLTAzZWU1MjlmZmUyNyIsCiAgICAgICJuYW1lIiA6ICJDYW4gY2lyY3VsYXRlIgogICAgfSwKICAgICJ0ZW1wb3JhcnlMb2FuVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMmU0OGU3MTMtMTdmMy00YzEzLWE5ZjgtMjM4NDViYjIxMGE0IiwKICAgICAgIm5hbWUiIDogIlJlYWRpbmcgcm9vbSIKICAgIH0sCiAgICAicGVybWFuZW50TG9jYXRpb24iIDogewogICAgICAiaWQiIDogImZjZDY0Y2UxLTY5OTUtNDhmMC04NDBlLTg5ZmZhMjI4ODM3MSIsCiAgICAgICJuYW1lIiA6ICJNYWluIExpYnJhcnkiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQwMzozNDozOS42MjcrMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQxNTo0MDowNy4xNzErMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy8xMDBkMTBiZi0yZjA2LTRhYTAtYmUxNS0wYjk1YjJkOWY5ZTMiCiAgICB9LAogICAgImxhc3RDaGVja0luIiA6IHsKICAgICAgInNlcnZpY2VQb2ludElkIiA6ICIzYTQwODUyZC00OWZkLTRkZjItYTFmOS02ZTI2NDFhNmU5MWYiLAogICAgICAic3RhZmZNZW1iZXJJZCIgOiAiYjA0OGI2ZWEtNDI4NS01OTQzLTgwNTEtYjY0NDJhZjU0NjkwIiwKICAgICAgImRhdGVUaW1lIiA6ICIyMDIwLTA3LTMxVDEwOjQ5OjQ1LjY5MFoiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICAgInByZWZpeCIgOiAiUFJFRklYIiwKICAgICAgInN1ZmZpeCIgOiAiU1VGRklYIiwKICAgICAgInR5cGVJZCIgOiAiNTEyMTczYTctYmQwOS00OTBlLWI3NzMtMTdkODNmMmI2M2ZlIgogICAgfSwKICAgICJlZmZlY3RpdmVMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0KICB9IF0sCiAgInRvdGFsUmVjb3JkcyIgOiAyCn0=", "base64"));
  res.end();

  return __filename;
};
