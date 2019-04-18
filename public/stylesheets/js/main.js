let faculty = document.getElementById('faculty');
let dept = document.getElementById('dept');
let proceed = document.getElementById('proceeds');



let maleNumber = document.getElementById('maleNumber'), femaleNumber = document.getElementById('femaleNumber'), csclevel1 = document.getElementById('csclevel1'), total;
    maleNumber.value = 80; femaleNumber.value = 110;
        total = parseInt(maleNumber.value) + parseInt(femaleNumber.value);
            csclevel1.value = total;

let maleNumber2 = document.getElementById('maleNumber2'), femaleNumber2 = document.getElementById('femaleNumber2'), csclevel2 = document.getElementById('csclevel2'), total2;
    maleNumber2.value = 66; femaleNumber2.value = 12;
        total2 = parseInt(maleNumber2.value) + parseInt(femaleNumber2.value);
            csclevel2.value = total2;

let maleNumber3 = document.getElementById('maleNumber3'), femaleNumber3 = document.getElementById('femaleNumber3'), csclevel3 = document.getElementById('csclevel3'), total3;
    maleNumber3.value = 55; femaleNumber3.value = 131;
        total3 = parseInt(maleNumber3.value) + parseInt(femaleNumber3.value);
            csclevel3.value = total3;

let maleNumber4 = document.getElementById('maleNumber4'), femaleNumber4 = document.getElementById('femaleNumber4'), csclevel4 = document.getElementById('csclevel4'), total4;
    maleNumber4.value = 86; femaleNumber4.value = 92;
        total4 = parseInt(maleNumber4.value) + parseInt(femaleNumber4.value);
            csclevel4.value = total4;

let maleNumber5 = document.getElementById('maleNumber5'), femaleNumber5 = document.getElementById('femaleNumber5'), csclevel5 = document.getElementById('csclevel5'), total5;
    maleNumber5.value = 096; femaleNumber5.value = 812;
        total5 = parseInt(maleNumber5.value) + parseInt(femaleNumber5.value);
            csclevel5.value = total5;

let staffMaleNumber = document.getElementById('staffMaleNumber'), staffFemaleNumber = document.getElementById('staffFemaleNumber'), staffTotal = document.getElementById('staffTotal'), staffTotals;
staffMaleNumber.value = 12; staffFemaleNumber.value = 32;
        staffTotals = parseInt(staffMaleNumber.value) + parseInt(staffFemaleNumber.value);
        staffTotal.value = staffTotals;

let nonStaffMaleNumber = document.getElementById('nonStaffMaleNumber'), nonStaffFemaleNumber = document.getElementById('nonStaffFemaleNumber'), nonStaffTotal = document.getElementById('nonStaffTotal'), nonStaffTotals;
nonStaffMaleNumber.value = 4; nonStaffFemaleNumber.value = 6;
        nonStaffTotals = parseInt(nonStaffMaleNumber.value) + parseInt(nonStaffFemaleNumber.value);
        nonStaffTotal.value = nonStaffTotals;






faculty.onchange = function(){
    if(faculty.value == "science"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'COMPUTER SCIENCE';
        dept.options[2].innerHTML = 'MATHEMATICS';
        dept.options[3].innerHTML = 'PHYSICS';
        dept.options[4].innerHTML = 'CHEMISTRY';
        dept.options[5].innerHTML = 'BIOCHEMISTRY';
        dept.options[6].innerHTML = 'MICROBIOLOGY';
        dept.options[7].innerHTML = 'FISHERY';
        dept.options[8].innerHTML = 'BOTANY';
        dept.options[9].innerHTML = 'ZOOLOGY';

        dept.options[1].value = 'csc';
        dept.options[2].value = 'mat';
        dept.options[3].value = 'phy';
        dept.options[4].value = 'chm';
        dept.options[5].value = 'bch';
        dept.options[6].value = 'mcb';
        dept.options[7].value = 'fis';
        dept.options[8].value = 'bot';
        dept.options[9].value = 'zoo';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[6].style.visibility = 'visible';
        dept.options[7].style.visibility = 'visible';
        dept.options[8].style.visibility = 'visible';
        dept.options[9].style.visibility = 'visible';


    } else if(faculty.value == "art"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'HISTORY AND RELATION';
        dept.options[2].innerHTML = 'ENGLISH';
        dept.options[3].innerHTML = 'RELIGION';
        dept.options[4].innerHTML = 'PHILOSOPHY';
        dept.options[5].innerHTML = 'FOREIGN LANGUAGE';
        dept.options[6].innerHTML = 'AFRICAN LANGUAGE';
        dept.options[7].innerHTML = 'THEATER ARTS';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[5].style.visibility = 'visible';
        dept.options[6].style.visibility = 'visible';
        dept.options[7].style.visibility = 'visible';
    }
    else if(faculty.value == "education"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'EDUCATIONAL MANAGEMENT';
        dept.options[2].innerHTML = 'SCIENCE AND TECHNOLOGY EDUCATION';
        dept.options[3].innerHTML = 'LANGUAGE ARTS AND SOCIAL SCIENCE EDUCATION';
        dept.options[4].innerHTML = 'PHYSICAL AND HEALTH EDUCATION';
        dept.options[5].innerHTML = 'EDUCATIONAL FOUNDATION AND COUNSELING PSYCHOLOGY';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[5].style.visibility = 'visible';
    }
    else if(faculty.value == "law"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'DEPARTMENT OF ISLAMIC LAW';
        dept.options[2].innerHTML = 'PRIVATE AND PROPERTY LAW';
        dept.options[3].innerHTML = 'BUSINESS LAW';
        dept.options[4].innerHTML = 'JURISPRUDENCE AND INTERNATIONAL LAW';
        dept.options[5].innerHTML = 'PUBLIC LAW';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[5].style.visibility = 'visible';
    }
    else if(faculty.value == "fms"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'ACCOUNTING AND FINANCE';
        dept.options[2].innerHTML = 'BUSINESS ADMINISTRATION AND MANAGEMENT TECHNOLOGY';
        dept.options[3].innerHTML = 'BUSINESS LAW';
        dept.options[4].innerHTML = 'INDUSTRIAL RELATIONS AND PUBLIC ADMINISTRATION';
        dept.options[5].style.visibility = 'hidden';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
    }
    else if(faculty.value == "fss"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'ECONOMICS';
        dept.options[2].innerHTML = 'GEOGRAPHY AND PLANNING';
        dept.options[3].innerHTML = 'POLITICAL SCIENCE';
        dept.options[4].innerHTML = 'SOCIOLOGY';
        dept.options[5].innerHTML = 'PSYCHOLOGY';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

        dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[5].style.visibility = 'visible';
    }

    else if(faculty.value == "masscom"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'PUBLIC RELATIONS AND ADVERTISING';
        dept.options[2].innerHTML = 'JOURNALISM';
        dept.options[3].innerHTML = 'RADIO AND TELEVISION BROADCAST';
        dept.options[4].innerHTML = 'PHOTO-JOURNALISM AND CINEMATOGRAPHY';
        dept.options[5].innerHTML = 'COMMUNICATION TECHNOLOGY';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

         dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
        dept.options[4].style.visibility = 'visible';
        dept.options[5].style.visibility = 'visible';
    }

    else if(faculty.value == "transport"){
        dept.disabled = false;
        dept.options[1].innerHTML = 'TRANSPORT MANAGEMENT AND OPERATION';
        dept.options[2].innerHTML = 'TRANSPORT PLANNING AND POLICY';
        dept.options[3].innerHTML = 'TRANSPORT TECHNOLOGY AND INFRASTRUCTURE';
        dept.options[4].style.visibility = 'hidden';
        dept.options[5].style.visibility = 'hidden';
        dept.options[6].style.visibility = 'hidden';
        dept.options[7].style.visibility = 'hidden';
        dept.options[8].style.visibility = 'hidden';
        dept.options[9].style.visibility = 'hidden';

        dept.options[1].value = '';
        dept.options[2].value = '';
        dept.options[3].value = '';
        dept.options[4].value = '';
        dept.options[5].value = '';
        dept.options[6].value = '';
        dept.options[7].value = '';
        dept.options[8].value = '';
        dept.options[9].value = '';

         dept.options[1].style.visibility = 'visible';
        dept.options[2].style.visibility = 'visible';
        dept.options[3].style.visibility = 'visible';
    }




    else{
        dept.disabled = true;

    }

}
dept.onchange = function(){
    if(dept.value != "dept"){
        if(faculty.value == "science" && dept.value == "csc"){
            proceed.disabled = false;
                proceed.onclick = function(){
                    window.location.replace('/minipage');
                }
        }else{
            proceed.disabled = true;
        }

    }else{
          proceed.disabled = true;
    }
}










function myFunction(){
    alert("goal");
}
function printIn(){
    document.getElementById('print').style.visibility = "hidden";

    window.print();
}

function scienceComplex(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Science Complex I"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}
function scienceComplex2(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Science Complex II"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}

function scienceRoom1(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "150";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Science Room I"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}

function scienceRoom2(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Science Room 2"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}
function scienceRoom3(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Science Room 3"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}
function computerLab(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "120";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Computer Laboratory"
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}
function benson(){
    document.getElementById('fan').innerHTML = "24";
    document.getElementById('aircon').innerHTML = "5";
    document.getElementById('chair').innerHTML = "375";
        let chair = document.getElementById('chair').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

            document.getElementById('headers').innerHTML = "Benson Hall";
    let ratio = (csclevel1/5)/5 + ":" + (chair/5)/5;
    let ratio2 = (csclevel2/5) + ":" + (chair/5);
    let ratio3 = (csclevel2/5) + ":" + (chair/5);
    let ratio4 = (csclevel2/5) + ":" + (chair/5);
    let ratio5 = (csclevel2/5) + ":" + (chair/5);

    document.getElementById('ratio').innerHTML = ratio;
    document.getElementById('ratio2').innerHTML = ratio2;
    document.getElementById('ratio3').innerHTML = ratio3;
    document.getElementById('ratio4').innerHTML = ratio4;
    document.getElementById('ratio5').innerHTML = ratio5;
}




function clears(){
    document.getElementById('headers').innerHTML = "";
    document.getElementById('fan').innerHTML = "";
    document.getElementById('aircon').innerHTML = "";
    document.getElementById('chair').innerHTML = "";
    document.getElementById('ratio').innerHTML = "";
    document.getElementById('ratio2').innerHTML = "";
    document.getElementById('ratio3').innerHTML = "";
    document.getElementById('ratio4').innerHTML = "";
    document.getElementById('ratio5').innerHTML = "";
}

// ================================================================ staffs =========================================
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

    let maleNumber5 = document.getElementById('maleNumber5').value;
    let femaleNumber5 = document.getElementById('femaleNumber5').value;
    let csclevel5 = document.getElementById('csclevel5');
    csclevel5.value = parseInt(maleNumber5) + parseInt(femaleNumber5);


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
    let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5);


        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}


function checkNow3(){
    calculate();

    document.getElementById('titleBar').innerHTML = "300 Level Students";
    let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;
}


function checkNow4(){
    calculate();

    document.getElementById('titleBar').innerHTML = "400 Level Students";
    let ratio = (csclevel1.value/5) + ":" + (staffTotal.value/5);
    let ratio2 = (csclevel1.value/5) + ":" + (nonStaffTotal.value/5);

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

