import  ApiCalendar  from 'react-google-calendar-api';



const Key = process.env.GOOGLE_API_KEY


const GoogleCalendar = {
  init: () => {
    const apiKey = Key;
    ApiCalendar.init(apiKey);
    console.log(Key)
  },
  createEvent: (event) => {
    return ApiCalendar.createEvent(event);
  },
  getEvents: () => {
    return ApiCalendar.getEvents();
  },
  // Other methods for managing events
};

export default GoogleCalendar;
