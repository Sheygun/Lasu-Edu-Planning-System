let maleNumber = document.getElementById('maleNumber'), femaleNumber = document.getElementById('femaleNumber'), csclevel1 = document.getElementById('csclevel1'), total;
    maleNumber.value = 80; femaleNumber.value = 110;
        total = parseInt(maleNumber.value) + parseInt(femaleNumber.value);
            csclevel1.value = total;

let maleNumber2 = document.getElementById('maleNumber2'), femaleNumber2 = document.getElementById('femaleNumber2'), csclevel2 = document.getElementById('csclevel2'), total2;
    maleNumber2.value = 75; femaleNumber2.value = 103;
        total2 = parseInt(maleNumber2.value) + parseInt(femaleNumber2.value);
            csclevel2.value = total2;

let maleNumber3 = document.getElementById('maleNumber3'), femaleNumber3 = document.getElementById('femaleNumber3'), csclevel3 = document.getElementById('csclevel3'), total3;
    maleNumber3.value = 69; femaleNumber3.value = 95;
        total3 = parseInt(maleNumber3.value) + parseInt(femaleNumber3.value);
            csclevel3.value = total3;

let maleNumber4 = document.getElementById('maleNumber4'), femaleNumber4 = document.getElementById('femaleNumber4'), csclevel4 = document.getElementById('csclevel4'), total4;
    maleNumber4.value = 66; femaleNumber4.value = 74;
        total4 = parseInt(maleNumber4.value) + parseInt(femaleNumber4.value);
            csclevel4.value = total4;



let staffMaleNumber = document.getElementById('staffMaleNumber'), staffFemaleNumber = document.getElementById('staffFemaleNumber'), staffTotal = document.getElementById('staffTotal'), staffTotals;
staffMaleNumber.value = 12; staffFemaleNumber.value = 32;
        staffTotals = parseInt(staffMaleNumber.value) + parseInt(staffFemaleNumber.value);
        staffTotal.value = staffTotals;

let nonStaffMaleNumber = document.getElementById('nonStaffMaleNumber'), nonStaffFemaleNumber = document.getElementById('nonStaffFemaleNumber'), nonStaffTotal = document.getElementById('nonStaffTotal'), nonStaffTotals;
nonStaffMaleNumber.value = 4; nonStaffFemaleNumber.value = 6;
        nonStaffTotals = parseInt(nonStaffMaleNumber.value) + parseInt(nonStaffFemaleNumber.value);
        nonStaffTotal.value = nonStaffTotals;



function calculate(){
    let maleNumber = document.getElementById('maleNumber').value;
    let femaleNumber = document.getElementById('femaleNumber').value;
    let csclevel1 = document.getElementById('csclevel1');
    csclevel1.value = parseInt(maleNumber) + parseInt(femaleNumber);

    let maleNumber2 = document.getElementById('maleNumber2').value;
    let femaleNumber2 = document.getElementById('femaleNumber2').value;
    let csclevel2 = document.getElementById('csclevel2');
    csclevel2.value = parseInt(maleNumber2) + parseInt(femaleNumber2);

    let maleNumber3 = document.getElementById('maleNumber3').value;
    let femaleNumber3 = document.getElementById('femaleNumber3').value;
    let csclevel3 = document.getElementById('csclevel3');
    csclevel3.value = parseInt(maleNumber3) + parseInt(femaleNumber3);

    let maleNumber4 = document.getElementById('maleNumber4').value;
    let femaleNumber4 = document.getElementById('femaleNumber4').value;
    let csclevel4 = document.getElementById('csclevel4');
    csclevel4.value = parseInt(maleNumber4) + parseInt(femaleNumber4);


    let staffMaleNumber = document.getElementById('staffMaleNumber').value;
    let staffFemaleNumber = document.getElementById('staffFemaleNumber').value;
    let staffTotal = document.getElementById('staffTotal');
    staffTotal.value = parseInt(staffMaleNumber) + parseInt(staffFemaleNumber);


    let nonStaffMaleNumber = document.getElementById('nonStaffMaleNumber').value;
    let nonStaffFemaleNumber = document.getElementById('nonStaffFemaleNumber').value;
    let nonStaffTotal = document.getElementById('nonStaffTotal');
    nonStaffTotal.value = parseInt(nonStaffMaleNumber) + parseInt(nonStaffFemaleNumber);
}





function checkNow(){
    calculate();

    document.getElementById('titleBar').innerHTML = "100 Level Students";
        let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5);
        let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}

function checkNow2(){
    calculate();

    document.getElementById('titleBar').innerHTML = "200 Level Students";
    let ratio = (csclevel2.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel2.value/5) + ":" + (nonStaffTotal.value/5);


        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}


function checkNow3(){
    calculate();

    document.getElementById('titleBar').innerHTML = "300 Level Students";
    let ratio = (csclevel3.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel3.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}


function checkNow4(){
    calculate();

    document.getElementById('titleBar').innerHTML = "400 Level Students";
    let ratio = (csclevel4.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel4.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}
function checkNow5(){
    calculate();

    document.getElementById('titleBar').innerHTML = "500 Level Students";
    let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5);


        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}


function sclears(){
    document.getElementById('titleBar').innerHTML = "";
    document.getElementById('sratio').innerHTML = "";
        document.getElementById('sratio2').innerHTML = "";
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
                            data: [csclevel1.value/5, csclevel2.value/5, csclevel3.value/5, csclevel4.value/5],
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