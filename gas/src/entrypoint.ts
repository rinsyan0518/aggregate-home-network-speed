const HEADERS = ["server name", "server id", "latency", "jitter", "packet loss", "download", "upload", "download bytes", "upload bytes", "share url"]

function doPost(e: GoogleAppsScript.Events.DoPost) {
  Logger.log(JSON.stringify(e))
  if (e.postData.type !== 'text/csv') return
  const data = e.postData.contents.split(',')
  if (data.length !== HEADERS.length) return false
  initializeCsvHeader()
  const result = appendData(data)
  Logger.log(result)
  // FIXME: 以下を有効にすると「現在、ファイルを開くことができません。」が返ってくる
  // return ContentService.createTextOutput("OK")
}

function initializeCsvHeader() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
}

function appendData(data: string[]) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const stripped = data.map((v) => v.replace(/^\"*|\"*$/g, ""))
  sheet.appendRow(stripped)
  return true
}
