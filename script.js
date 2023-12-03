const date_picker_elem = document.querySelector('.date-picker');
const selected_date = document.querySelector('.date-picker .selected-date');
const dates_elem = document.querySelector('.date-picker .dates');
const month_elem = document.querySelector('.date-picker .dates .month .mth');
const prv_month = document.querySelector('.date-picker .dates .month .prev-mth');
const nxt_month = document.querySelector('.date-picker .dates .month .next-mth');
const days_elem = document.querySelector('.days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
console.log(day);

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

month_elem.textContent = months[month] + ' '+ year;
selected_date.textContent = formatDate(date);
selected_date.dataset.value = selectedDate;

populateday();
date_picker_elem.addEventListener('click',toggleDatePicker);
nxt_month.addEventListener('click',goToNextMonth);
prv_month.addEventListener('click',goToPrevMonth);

function toggleDatePicker(e){
    if(!checkClass(e.composedPath(),'dates')){
        dates_elem.classList.toggle('active');
    }
}

function checkClass(path,checker){
    for(let i in path){
        if(path[i].classList && path[i].classList.contains(checker)){
            return true;
        }
    }
    return false;
}

function goToNextMonth(){
    month ++;
    if(month > 11){
        month = 0;
        year++;
    }
    month_elem.textContent = months[month] +" "+ year;
    populateday();
}
function goToPrevMonth(){
    month --;
    if(month < 0){
        month = 11;
        year--
    }
    month_elem.textContent = months[month] +" "+ year;
    populateday();
}

function formatDate(d){
    let day = d.getDate();
    if(day<10){
        day = `0${day}`;
    }
    let month = d.getMonth();
    if(month<10){
        month = `0${month}`;
    }
    let year = d.getFullYear();

    return `${day} - ${month} - ${year}`;
}
// days appending nodes

function populateday(e){
    days_elem.innerHTML = "";
    let amount_days = 30;
    if(month === 1){
        amount_days = 28;
    }else if(month % 2){
        amount_days = 31;
    }

    for(let m=0;m<amount_days;m++){
        var day_div = document.createElement('div');
        day_div.textContent = m+1;
        day_div.classList.add('day');
        days_elem.appendChild(day_div);
        
        if(selectedDay == m+1 && selectedMonth == month && selectedYear == year){
            console.log(selectedYear);
            day_div.classList.add("selected");
        }

        day_div.addEventListener('click',()=>{ 
            selectedDate = new Date(year+ "-" + (month + 1) + "-" + (m + 1));
            selectedDay = m+1;
            selectedMonth = month;
            selectedYear = year;

            selected_date.textContent = formatDate(selectedDate);
            selected_date.dataset.value = selectedDate;
            populateday();
        })
    }
}
