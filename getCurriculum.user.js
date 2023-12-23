// ==UserScript==
// @name         以學號取得北科大課表
// @namespace    https://codeberg.org/proton-penguin
// @version      v20231223.3
// @description  登入校園入口後可使用學號查詢預設課表，加退選的課程可能不會顯示。
// @author       proton-penguin
// @match        https://aps-rwd.ntut.edu.tw/RWDCourse/Welcome
// ==/UserScript==

const rgno = document.getElementById('rgno');
const select = document.getElementById('year_sem')
let student_id = window.prompt('輸入要查詢的學號',rgno.value);

function getYears(){
    let min_year ='';
    for(let i=0;i<=2;i++){
        min_year += String(student_id)[i];
    }return min_year;
}

function selectYearAndSemester() {
    for (let i=112; i>=getYears(); i--){
        for(let j=2; j>=1; j--){
            let opt = document.createElement('option');
            opt.value = i+'_'+j;
            opt.innerHTML = i+'學年度-第'+j+'學期('+student_id+')';
            select.appendChild(opt);
            console.log(opt);
        }
    }
}

(function() {
    rgno.value = student_id;
    selectYearAndSemester();
})();