function toonTafel()
 {
    let tafelvan = document.getElementById("inputTafel").value;
    //let teller =1:
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += tafelvan + " x " + i + " = " + (tafelvan * i) + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}