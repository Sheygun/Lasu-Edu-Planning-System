let faculty = document.getElementById('faculty');
let dept = document.getElementById('dept');
let proceed = document.getElementById('proceeds');

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

function checkNow(){
    document.getElementById('titleBar').innerHTML = "100 Level Students";
    let cscTeachingStaff = document.getElementById('cscTeachingStaff').innerHTML;
    let cscNonteachingStaff = document.getElementById('cscNonteachingStaff').innerHTML;
        let csclevel1 = document.getElementById('csclevel1').innerHTML;
        let csclevel2 = document.getElementById('csclevel2').innerHTML;
        let csclevel3 = document.getElementById('csclevel2').innerHTML;
        let csclevel4 = document.getElementById('csclevel2').innerHTML;
        let csclevel5 = document.getElementById('csclevel2').innerHTML;

        let ratio = (csclevel1/5) + ":" + (cscTeachingStaff/5);
        let ratio2 = (csclevel2/5) + ":" + (cscNonteachingStaff/5);

        document.getElementById('sratio').innerHTML = ratio;
        document.getElementById('sratio2').innerHTML = ratio2;


}
function sclears(){
    document.getElementById('titleBar').innerHTML = "";
    document.getElementById('sratio').innerHTML = "";
        document.getElementById('sratio2').innerHTML = "";
}