var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<html><head>");
    res.write("<meta charset='utf-8'><title>網誌</title>");
    res.write("<script src=\"http://code.jquery.com/jquery-2.1.3.min.js\"></script>");
    res.write("</head><body>");

    res.write("<form>");
    res.write("<label for=\"num1\">被加數：</label>");
    res.write("<input type=\"text\" name=\"num1\" id=\"num1\"><br>");
    res.write("<label for=\"num2\">加數：</label>");
    res.write("<input type=\"text\" name=\"num2\" id=\"num2\"><br>");
    res.write("<p>");
    res.write("<input type=\"button\" name=\"calc\" id=\"calc\" value=\"計算\">");
    res.write("<a href=\"#\" id=\"link\">計算</a>");
    res.write("</p>");
    res.write("<p>");
    res.write("<label for=\"result\">結果：</label>");
    res.write("<input type=\"text\" name=\"result\" id=\"result\">");
    res.write("</p>");
    res.write("</form>");
    res.write("<script>");
    res.write("$(function(){");
    res.write("function cal() {");
    res.write("var num1 = $(\"#num1\").val();");
    res.write("var num2 = $(\"#num2\").val();");
    res.write("$(\"#result\").val(Number(num1) + Number(num2));");
    res.write("return false;");
    res.write("}");
    res.write("$(\"#calc\").click(cal);");
    res.write("$(\"#link\").click(cal);");
    res.write("});");
    res.write("</script>");
    res.write("</body>");
    res.end("</html>");
});

server.listen(8080);
console.log("http伺服器已在8080埠口啟動");