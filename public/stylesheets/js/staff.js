//declaration for 100 level students in determining their population and calculating the total
let maleNumber = document.getElementById('maleNumber'), femaleNumber = document.getElementById('femaleNumber'), csclevel1 = document.getElementById('csclevel1'), total;
    maleNumber.value = 80;
    femaleNumber.value = 110;
    total = parseInt(maleNumber.value) + parseInt(femaleNumber.value); // total population
    csclevel1.value = total;

//declaration for 200 level students in determining their population and calculating the total
let maleNumber2 = document.getElementById('maleNumber2'), femaleNumber2 = document.getElementById('femaleNumber2'), csclevel2 = document.getElementById('csclevel2'), total2;
    maleNumber2.value = 75;
    femaleNumber2.value = 103;
    total2 = parseInt(maleNumber2.value) + parseInt(femaleNumber2.value);// total population
    csclevel2.value = total2;

//declaration for 300 level students in determining their population and calculating the total
let maleNumber3 = document.getElementById('maleNumber3'), femaleNumber3 = document.getElementById('femaleNumber3'), csclevel3 = document.getElementById('csclevel3'), total3;
    maleNumber3.value = 69;
    femaleNumber3.value = 95;
    total3 = parseInt(maleNumber3.value) + parseInt(femaleNumber3.value);// total population
    csclevel3.value = total3;

//declaration for 400 level students in determining their population and calculating the total
let maleNumber4 = document.getElementById('maleNumber4'), femaleNumber4 = document.getElementById('femaleNumber4'), csclevel4 = document.getElementById('csclevel4'), total4;
    maleNumber4.value = 66;
    femaleNumber4.value = 74;
    total4 = parseInt(maleNumber4.value) + parseInt(femaleNumber4.value);// total population
    csclevel4.value = total4;


// Declaration for Teaching Staff population and calculating the total
let staffMaleNumber = document.getElementById('staffMaleNumber'), staffFemaleNumber = document.getElementById('staffFemaleNumber'), staffTotal = document.getElementById('staffTotal'), staffTotals;
staffMaleNumber.value = 12;
staffFemaleNumber.value = 32;
staffTotals = parseInt(staffMaleNumber.value) + parseInt(staffFemaleNumber.value); //total population
staffTotal.value = staffTotals;

// Declaration for Non-Teaching Staff population and calculating the total
let nonStaffMaleNumber = document.getElementById('nonStaffMaleNumber'), nonStaffFemaleNumber = document.getElementById('nonStaffFemaleNumber'), nonStaffTotal = document.getElementById('nonStaffTotal'), nonStaffTotals;
nonStaffMaleNumber.value = 4;
nonStaffFemaleNumber.value = 6;
nonStaffTotals = parseInt(nonStaffMaleNumber.value) + parseInt(nonStaffFemaleNumber.value); // total population
nonStaffTotal.value = nonStaffTotals;



function calculate(){ // functions for auto calculating values for both students and Staffs population

    // 100 level students auto calculator
    let maleNumber = document.getElementById('maleNumber').value;
    let femaleNumber = document.getElementById('femaleNumber').value;
    let csclevel1 = document.getElementById('csclevel1');
    csclevel1.value = parseInt(maleNumber) + parseInt(femaleNumber);

    // 200 level students auto calculator
    let maleNumber2 = document.getElementById('maleNumber2').value;
    let femaleNumber2 = document.getElementById('femaleNumber2').value;
    let csclevel2 = document.getElementById('csclevel2');
    csclevel2.value = parseInt(maleNumber2) + parseInt(femaleNumber2);

    // 300 level students auto calculator
    let maleNumber3 = document.getElementById('maleNumber3').value;
    let femaleNumber3 = document.getElementById('femaleNumber3').value;
    let csclevel3 = document.getElementById('csclevel3');
    csclevel3.value = parseInt(maleNumber3) + parseInt(femaleNumber3);

    // 400 level students auto calculator
    let maleNumber4 = document.getElementById('maleNumber4').value;
    let femaleNumber4 = document.getElementById('femaleNumber4').value;
    let csclevel4 = document.getElementById('csclevel4');
    csclevel4.value = parseInt(maleNumber4) + parseInt(femaleNumber4);

    // Teaching staff auto calculator
    let staffMaleNumber = document.getElementById('staffMaleNumber').value;
    let staffFemaleNumber = document.getElementById('staffFemaleNumber').value;
    let staffTotal = document.getElementById('staffTotal');
    staffTotal.value = parseInt(staffMaleNumber) + parseInt(staffFemaleNumber);

    // Non Teaching staff auto calculator
    let nonStaffMaleNumber = document.getElementById('nonStaffMaleNumber').value;
    let nonStaffFemaleNumber = document.getElementById('nonStaffFemaleNumber').value;
    let nonStaffTotal = document.getElementById('nonStaffTotal');
    nonStaffTotal.value = parseInt(nonStaffMaleNumber) + parseInt(nonStaffFemaleNumber);
}


// Bar Chart Functions to display Graphical sections of the Ratio value
function barchart(){ // Barchart functions
    calculate(); //auto calculator
    var ctx = document.getElementById('myChart'); //declarations
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['100 Level', '200 Level', '300 Level', '400 Level'], // sections in the chart
                        datasets: [{
                            label: '# of Ratio',
                            data: [csclevel1.value/5, csclevel2.value/5, csclevel3.value/5, csclevel4.value/5], // calculations to determine the ratio
                            backgroundColor: [ // color of bars
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
                                    beginAtZero: true // some major functions
                                }
                            }]
                        }
                    }
                });
}

barchart(); // Calling Bar chart functions

function checkNow(){ // this function contains the calculations of Ratio for 100 level Section
    calculate();// auto calculator

    document.getElementById('titleBar').innerHTML = "100 Level Students";
        let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5); // determinig ratio for teaching staff
        let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5); // determining ratio for non teaching staff

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
        barchart();
}

function checkNow2(){ // this function contains the calculations of Ratio for 200 level Section
    calculate();

    document.getElementById('titleBar').innerHTML = "200 Level Students";
    let ratio = (csclevel2.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel2.value/5) + ":" + (nonStaffTotal.value/5);


        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
        barchart();

}


function checkNow3(){ // this function contains the calculations of Ratio for 300 level Section
    calculate();

    document.getElementById('titleBar').innerHTML = "300 Level Students";
    let ratio = (csclevel3.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel3.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
        barchart();

}


function checkNow4(){ // this function contains the calculations of Ratio for 400 level Section
    calculate();

    document.getElementById('titleBar').innerHTML = "400 Level Students";
    let ratio = (csclevel4.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel4.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
        barchart();

}


function sclears(){ // functions to clear the data
    document.getElementById('titleBar').innerHTML = "";
    document.getElementById('sratio').innerHTML = "";
        document.getElementById('sratio2').innerHTML = "";
}


