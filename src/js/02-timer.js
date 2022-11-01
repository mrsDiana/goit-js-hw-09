// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputData = document.querySelector('#datetime-picker');
const startData = document.querySelector('button[data-start]');
const valueDays = document.querySelector('.value[data-days]');
const valueHours = document.querySelector('.value[data-hours]');
const valueMinutes = document.querySelector('.value[data-minutes]');
const valueSeconds = document.querySelector('.value[data-seconds]');
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      checkVerificateDate(selectedDates)
    //  console.log(selectedDates[0]); 
         },
  };

  const calendar = flatpickr(inputData, options);

  startData.setAttribute('disabled', " ");

  startData.addEventListener('click', () => {
    inputData.setAttribute('disabled', " ");
    startData.setAttribute('disabled', " ");    
    intervalId = setInterval(() => {
    if (calendar.selectedDates[0] - Date.now() < 0 ){
      inputData.removeAttribute('disabled', " ");
      clearInterval(intervalId);
      return;
    }
      const { days, hours, minutes, seconds } = convertMs(calendar.selectedDates[0] - Date.now());
      valueDays.textContent = days;
      valueHours.textContent = hours;
      valueMinutes.textContent = minutes;
      valueSeconds.textContent = seconds;
    }, 1000);
  });

  function checkVerificateDate(selectedDates) {
    if (selectedDates[0] - Date.now()  <= 0) {
      startData.setAttribute('disabled', " "); 
      return Notiflix.Notify.warning('Please choose a date in the future');
    } 
      startData.removeAttribute('disabled', '');
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
