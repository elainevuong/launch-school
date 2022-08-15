document.addEventListener("DOMContentLoaded", () => {
  let ALL_STAFF;
  let AVAILABLE_SCHEDULES;  
  
  let bookingForm = document.querySelector('#bookingForm');
  let studentForm = document.querySelector('#addStudentForm');

  main();  
  
  async function main() {
    await createScheduleDropdown();
    bookingForm.addEventListener('submit', submitForm);
    studentForm.addEventListener('submit', addNewStudent);
  }   
  
  async function createScheduleDropdown() {
    let select = document.querySelector('select');
    while (select.options.length > 0) {
      select.removeChild(select.lastChild);
    }
    ALL_STAFF = await getAllStaff();
    AVAILABLE_SCHEDULES = await getAvailableSchedules();
    AVAILABLE_SCHEDULES.forEach(schedule => createScheduleOption(schedule));
  }  
  
  function getAllStaff() {
    return new Promise(resolve => {
      let request = new XMLHttpRequest();
      request.open("GET", "/api/staff_members");
      request.setRequestHeader("Content-Type", "application/json");
      request.responseType = 'json';
      request.send();      
      request.addEventListener("load", () => {
        resolve(request.response);
      })
    })
  }  
  
  function getAvailableSchedules() {
    return new Promise(resolve => {
      let request = new XMLHttpRequest();
      request.open('GET', 'api/schedules')
      request.setRequestHeader("Content-Type", "application/json");
      request.responseType = 'json';
      request.send();      
      request.addEventListener("load", () => {
        let allSchedules = request.response;
        let availableSchedules = allSchedules.filter(schedule => schedule.student_email === null);
        resolve(availableSchedules);
      })
    })
  }  
  
  function createScheduleOption(schedule) {
    let staffSchedule = document.querySelector("#id");  
    let staffName = getStaffName(schedule.staff_id);
    let optionText = [staffName, schedule.date, schedule.time].join(' | ');
    let option = new Option(optionText, schedule.id);
    staffSchedule.append(option);
  }  
  
  function getStaffName(staffID) {
    for (let index = 0; index < ALL_STAFF.length; index++) {
      let currentStaff = ALL_STAFF[index];
      if (staffID === currentStaff.id) return currentStaff.name;
    }
  }

  function submitForm(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    let data = JSON.stringify(createJSONData(event.currentTarget));
    request.open(`${event.currentTarget.method}`, `${event.currentTarget.action}`);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);    

    request.addEventListener("load", event => {
      event.preventDefault();
      if (request.status === 204) {
        alert(`Booked`);
      } else if (request.status === 404) {
        if (request.responseText === `Schedule is either booked or does not exist.`) {
          alert(request.responseText);
        } else {
          alert(request.responseText);
          let bookingSequence = String(request.response).match(/\d+/)[0];
          let studentEmail = document.getElementById('student_email').value;                 
          createStudentDetails(studentEmail, bookingSequence);
        }
      }
    })
  }  

  function createJSONData(form) {
    let formData = new FormData(form);
    let json = {};    
    for (let [key, value] of formData) {
      json[key] = value;
    }
    return json;
  } 
  
  function createStudentDetails(studentEmail, bookingSequence) {  
    let studentForm = document.querySelector('div');
    studentForm.removeAttribute('hidden');

    let email = document.getElementById("email")
    email.setAttribute('value', studentEmail);

    let booking_sequence = document.getElementById("booking_sequence");
    booking_sequence.setAttribute('value', bookingSequence);
  }  
  
  function addNewStudent(event) {
    event.preventDefault();
    let request = new XMLHttpRequest();
    let data = JSON.stringify(createJSONData(event.currentTarget));

    request.open(`${event.currentTarget.method}`, `${event.currentTarget.action}`);
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(data);    

    request.addEventListener("load", () => {
      alert(request.response);
      if (request.status === 201) {
        bookingForm.dispatchEvent(new Event('submit'));
        bookingForm.reset();
        clearStudentForm();
        createScheduleDropdown();
      }
    })
  }

  function clearStudentForm() {
    let studentForm = document.querySelector('div');
    studentForm.setAttribute('hidden', 'true');
    document.getElementById("email").removeAttribute('value');
    document.getElementById("booking_sequence").removeAttribute('value');
  } 
})