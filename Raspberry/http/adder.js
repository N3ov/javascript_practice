var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(`
    <html>
    <body>
    <form>
        <label for="num1">被加數：</label>
        <input type="text" name="num1" id="num1"><br>
        <label for="num2">加數：</label>
        <input type="text" name="num2" id="num2"><br>
        <label for="result">結果：</label>
        <input type="text" name="result" id="result"><br>
        <p>
          <input type="button" name="calc" id="calc" value="計算">
        </p>
    </form>
    <script>
    
    byId = (id) => document.getElementById(id);

    byId("calc").addEventListener("click", function(){

        var num1 = byId("num1").value;
        var num2 = byId("num2").value;
        console.log("轉成數字之前相加：" + num1 + num2);
        console.log("轉成數字之後相加：" + (Number(num1) + Number(num2)));
        byId("result").value = (Number(num1) + Number(num2));
    });

    </script>
    </body>
    </html>`);
    
    res.end();
});

server.listen(8080);
console.log("http伺服器已在8080埠口啟動");