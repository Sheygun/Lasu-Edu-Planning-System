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

