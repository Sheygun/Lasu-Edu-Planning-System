
let studentMaleNumber1 = document.getElementById('studentMaleNumber1'), studentFemaleNumber1 = document.getElementById('studentFemaleNumber1'), csclevel1 = document.getElementById('csclevel1'), total;
studentMaleNumber1.value = 80; studentFemaleNumber1.value = 110;
        total = parseInt(studentMaleNumber1.value) + parseInt(studentFemaleNumber1.value);
            csclevel1.value = total;

let studentMaleNumber2 = document.getElementById('studentMaleNumber2'), studentFemaleNumber2 = document.getElementById('studentFemaleNumber2'), csclevel2 = document.getElementById('csclevel2'), total2;
studentMaleNumber2.value = 75; studentFemaleNumber2.value = 103;
        total2 = parseInt(studentMaleNumber2.value) + parseInt(studentFemaleNumber2.value);
            csclevel2.value = total2;

let studentMaleNumber3 = document.getElementById('studentMaleNumber3'), studentFemaleNumber3 = document.getElementById('studentFemaleNumber3'), csclevel3 = document.getElementById('csclevel3'), total3;
studentMaleNumber3.value = 69; studentFemaleNumber3.value = 95;
        total3 = parseInt(studentMaleNumber3.value) + parseInt(studentFemaleNumber3.value);
            csclevel3.value = total3;

let studentMaleNumber4 = document.getElementById('studentMaleNumber4'), studentFemaleNumber4 = document.getElementById('studentFemaleNumber4'), csclevel4 = document.getElementById('csclevel4'), total4;
studentMaleNumber4.value = 66; studentFemaleNumber4.value = 74;
        total4 = parseInt(studentMaleNumber4.value) + parseInt(studentFemaleNumber4.value);
            csclevel4.value = total4;



function calculate(){
    let studentMaleNumber1 = document.getElementById('studentMaleNumber1').value;
    let studentFemaleNumber1 = document.getElementById('studentFemaleNumber1').value;
    let csclevel1 = document.getElementById('csclevel1');
    csclevel1.value = parseInt(studentMaleNumber1) + parseInt(studentFemaleNumber1);

    let studentMaleNumber2 = document.getElementById('studentMaleNumber2').value;
    let studentFemaleNumber2 = document.getElementById('studentFemaleNumber2').value;
    let csclevel2 = document.getElementById('csclevel2');
    csclevel2.value = parseInt(studentMaleNumber2) + parseInt(studentFemaleNumber2);

    let studentMaleNumber3 = document.getElementById('studentMaleNumber3').value;
    let studentFemaleNumber3 = document.getElementById('studentFemaleNumber3').value;
    let csclevel3 = document.getElementById('csclevel3');
    csclevel3.value = parseInt(studentMaleNumber3) + parseInt(studentFemaleNumber3);

    let studentMaleNumber4 = document.getElementById('studentMaleNumber4').value;
    let studentFemaleNumber4 = document.getElementById('studentFemaleNumber4').value;
    let csclevel4 = document.getElementById('csclevel4');
    csclevel4.value = parseInt(studentMaleNumber4) + parseInt(studentFemaleNumber4);
}


function scienceComplex(){
    calculate();
    document.getElementById('headers').innerHTML = "Science Complex I";
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}

function scienceComplex2(){
    calculate();
    document.getElementById('headers').innerHTML = "Science Complex II";
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}

function scienceRoom1(){
    calculate();
    document.getElementById('headers').innerHTML = "Science Room I";
    document.getElementById('fan').innerHTML = "8";
    document.getElementById('aircon').innerHTML = "0";
    document.getElementById('chair').innerHTML = "150";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}
function scienceRoom2(){
    calculate();
    document.getElementById('headers').innerHTML = "Science Room II";
    document.getElementById('fan').innerHTML = "8";
    document.getElementById('aircon').innerHTML = "0";
    document.getElementById('chair').innerHTML = "150";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}
function scienceRoom3(){
    calculate();
    document.getElementById('headers').innerHTML = "Science Room III";
    document.getElementById('fan').innerHTML = "8";
    document.getElementById('aircon').innerHTML = "0";
    document.getElementById('chair').innerHTML = "150";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}
function benson(){
    calculate();
    document.getElementById('headers').innerHTML = "Benson Hall";
    document.getElementById('fan').innerHTML = "8";
    document.getElementById('aircon').innerHTML = "0";
    document.getElementById('chair').innerHTML = "160";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}
function computerLab(){
    calculate();
    document.getElementById('headers').innerHTML = "Computer Laboratory";
    document.getElementById('fan').innerHTML = "6";
    document.getElementById('aircon').innerHTML = "4";
    document.getElementById('chair').innerHTML = "120";

        const chair = document.getElementById('chair').innerHTML;

        let ratio1 = (csclevel1.value/10) + ":" + (chair/10);
        let ratio2 = (csclevel2.value/10) + ":" + (chair/10);
        let ratio3 = (csclevel3.value/10) + ":" + (chair/10);
        let ratio4 = (csclevel4.value/10) + ":" + (chair/10);

        document.getElementById('ratio1').innerHTML = ratio1;
        document.getElementById('ratio2').innerHTML = ratio2;
        document.getElementById('ratio3').innerHTML = ratio3;
        document.getElementById('ratio4').innerHTML = ratio4;

}

function clears(){
    document.getElementById('headers').innerHTML = "";
    document.getElementById('fan').innerHTML = "";
    document.getElementById('aircon').innerHTML = "";
    document.getElementById('chair').innerHTML = "";
    document.getElementById('ratio1').innerHTML = "";
    document.getElementById('ratio2').innerHTML = "";
    document.getElementById('ratio3').innerHTML = "";
    document.getElementById('ratio4').innerHTML = "";
}

function barchart(){
    calculate();
    var ctx = document.getElementById('myChart');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['100 Level', '200 Level', '300 Level', '400 Level'],
                        datasets: [{
                            label: '# of Ratio',
                            data: [csclevel1.value/10, csclevel2.value/10, csclevel3.value/10, csclevel4.value/10],
                            backgroundColor: [
                                'blue',
                                'red',
                                'black',
                                'purple',
                            ],
                            borderColor: [
                                'blue',
                                'red',
                                'black',
                                'purple',
                            ],
                            borderWidth: 3
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
}

barchart();