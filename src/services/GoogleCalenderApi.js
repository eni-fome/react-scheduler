// // src/services/googleCalendar.js
// import { loadGoogleApi, useGoogleApi } from '@react-oauth/google';
// import { google } from 'googleapis';


// // Function to authenticate and load Google API
// const useGoogleCalendar = () => {
//   const { gapi, isSignedIn } = useGoogleApi();
  
//   const loadCalendarApi = async () => {
//     const Key = process.env.GOOGLE_API_KEY
//     const ID = process.env.CLIENT_ID
//     await loadGoogleApi({
//       apiKey: Key,
//       clientId: ID,
//       discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
//       scope: 'https://www.googleapis.com/auth/calendar',
//     });
//   };

//   return {
//     loadCalendarApi,
//     isSignedIn,
//     gapi,
//   };
// };

// // Function to create a new Google Calendar event
// const createCalendarEvent = async (eventDetails) => {
//   try {
//     const { gapi, isSignedIn } = useGoogleCalendar();

//     if (!isSignedIn) {
//       throw new Error('User not signed in.');
//     }

//     const calendar = google.calendar({ version: 'v3', auth: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token });

//     const event = {
//       summary: eventDetails.name,
//       start: {
//         dateTime: new Date(eventDetails.start).toISOString(),
//         timeZone: 'UTC', // Adjust the timezone as needed
//       },
//       end: {
//         dateTime: new Date(eventDetails.end).toISOString(),
//         timeZone: 'UTC', // Adjust the timezone as needed
//       },
//     };

//     const response = await calendar.events.insert({
//       calendarId: 'primary', // Use 'primary' to access the user's primary calendar
//       resource: event,
//     });

//     console.log('Event created:', response.data);

//     return response.data;
//   } catch (error) {
//     console.error('Error creating event:', error.message);
//     throw error;
//   }
// };

// export { useGoogleCalendar, createCalendarEvent };
