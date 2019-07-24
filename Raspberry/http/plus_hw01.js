require('http').createServer(function(req, res) {

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<html><head>");
    res.write(`<form>
    <label for="num1">被加數：</label>
    <input type="text" name="num1" id="num1"><br>
    <label for="num2">加數：</label>
    <input type="text" name="num2" id="num2"><br>
    <p>
    <input type="button" name="calc" id="calc" value="計算">
    </p>
    <p>
    <label for="result">結果：</label>
    <input type="text" name="result" id="result">
    </p>
    </form>
    <script >
          
    document.getElementById("calc").addEventListener("click", function () {
    
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      document.getElementById("result").value = Number(num1) + Number(num2);
      
    });
    
    </script>
    </body>
    </html>`);

    res.end();

})
    .listen(8080);

console.log("http伺服器已在8080埠口啟動");