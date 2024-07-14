function calculate() {
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var biology = Number(document.getElementById("biology").value);

    var total = physics + chemistry + biology;
    var average = total / 3;

    var resultText = "Tổng điểm: " + total + "<br>" + "Điểm trung bình: " + average.toFixed(2);
    document.getElementById("result").innerHTML = resultText;
}

function changeDegree() {
    let celsius  = Number(document.getElementById("celsius").value);
    let fehrenheit = celsius*1.8+32;

    document.getElementById("degreeResult").innerHTML = fehrenheit;
}

function calculateCircle() {
    let radius = Number(document.getElementById("radius").value);

    let chuVi = radius*3.14*2;
    let dienTich = radius*radius*3.14;

    var circleText = "Chu vi: " + chuVi + "<br>" + "Diện tích: " + dienTich;
    document.getElementById("circleResult").innerHTML = circleText;

}
