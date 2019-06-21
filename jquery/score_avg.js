$(document).ready(function () {

    const numberOfRow = $('#student table tbody tr').length

    const studentData = []

    for (let i = 0; i < numberOfRow; i++) {
        const student = {

            id: +$('#student table tbody tr:eq(' + i + ') td:eq(0)').text(),
            name: $('#student table tbody tr:eq(' + i + ') td:eq(1)').text(),
            english: +$('#student table tbody tr:eq(' + i + ') td:eq(2)').text(),
            chinese: +$('#student table tbody tr:eq(' + i + ') td:eq(3)').text()

        }

        studentData.push(student)
    }

    console.log(studentData)

    let display = `<table border='1'>
        <thead>
        <tr>
            <th>id</th>
            <th>姓名</th>
            <th>英文</th>
            <th>國文</th>
            <th>平均</th>
        </tr>
        </thead>`

    display += `<tbody>`
    
    let englishTotal = 0
    let chineseTotal = 0

    for (let i = 0; i < studentData.length; i++) {

        const mean = (studentData[i].chinese + studentData[i].english) / 2
        
        
        display += `<tr>
            <td>${studentData[i].id}</td>
            <td>${studentData[i].name}</td>
            <td>${studentData[i].english}</td>
            <td>${studentData[i].chinese}</td>
            <td>${mean}</td>   
            </tr>`

        englishTotal += studentData[i].english
        chineseTotal += studentData[i].chinese

        console.log(englishTotal)
        console.log(chineseTotal)

    }

    const englishAvg = englishTotal / studentData.length
    const chineseAvg = chineseTotal / studentData.length
    const avg = (englishAvg + chineseAvg) /2
    display += `<tr>
 
    <td colspan="2">總平均</td>
 
    <td>${englishAvg}</td>
    <td>${chineseAvg}</td>
    <td>${avg}</td>
    </tr>`


    display += `</tbody></table>`
 

    $('#student').html(display)

})