let fs = require("fs");

try {

  let file = fs.readFileSync("node.txt");
  console.log("檔案讀取完畢，內容：" + file);

} catch (err) {

  console.log("執行出錯了，訊息：" + err);
  process.exit();  // 中斷程序

}

// Sync in process
console.log("Node程式執行中…");