const date_picker_elem = document.querySelector('.date-picker');
const selected_date = document.querySelector('.date-picker .selected-date');
const dates_elem = document.querySelector('.date-picker .dates');
const days = document.querySelector('.days');



date_picker_elem.addEventListener('click',toggleDatePicker);

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


// days appending nades
const dayP = document.createElement('div');
// days.appendChild(dayP)
for(let i=0;i<30;i++){
    var day = document.createElement('div');
    day.innerHTML = i+1;
    day.classList.add('day');
    days.appendChild(day);
}
console.log(days.childNodes)