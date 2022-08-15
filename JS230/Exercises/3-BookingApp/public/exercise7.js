/*
Implement two functions: one for cancelling schedules and the other for 
cancelling of bookings. The functions take a scheduleId and a bookingId as arguments respectively.
*/

function cancelSchedule(scheduleID) {
  let request = new XMLHttpRequest();
  request.open("DELETE", `/api/schedules/${schedule_id}`);
  // request.setRequestHeader("Content-Type", "application/json");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 204) {
      alert(`Schedule successfully deleted`);
    } else {
      alert(request.response);
    }
  })
}

function cancelBooking(bookingID) {
  let request = new XMLHttpRequest();
  request.open("PUT", `/api/bookings/${booking_id}`);
  // request.setRequestHeader("Content-Type", "application/json");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 204) {
      alert(`Booking successfully deleted`);
    } else {
      alert(request.response);
    }
  })
}

function createCancelEvent(action, method) {
  return function(id) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, `http://localhost:3000/api/${action}/${id}`);
    xhr.send();
    xhr.onload = () => alert (xhr.status === 204 ? 'Successfully cancelled' : xhr.response);
  }
}

const cancelBooking  = createCancelEvent('bookings', 'PUT',);
const cancelSchedule = createCancelEvent('schedules', 'DELETE');