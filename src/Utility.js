const TICKETMASTER_ENDPOINT =
  "https://app.ticketmaster.com/discovery/v2/events.json?";

//This function sends a GET request to the TicketMaster
//API and returns the resulting data
export const getApiData = (args) => {
  //Merge the user's provided arguments for the
  //API query with API key
  const queryOptions = {
    apikey: "Y1rwxLXLcVqHuhiIgx1bVMhePdY018r1",
    ...args
  };

  //Convert JS object into URL query params
  const queryUrl =
    TICKETMASTER_ENDPOINT +
    new URLSearchParams(queryOptions);
  return fetch(queryUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      //Return resulting events from API
      let newEvents = [];
      for (const event of data._embedded.events) {
        newEvents.push(event);
      }
      return newEvents;
    });
};

export const locateLargestImage = (images) => {
  //Some images would appear very blurry.
  //This helper function chooses the largest
  //available image to make sure the user sees
  //a clear image.
  let maxWidth = 0;
  let largestWidthImageIndex = 0;
  for (let i = 0; i < images.length; ++i) {
    const image = images[i];
    if (image.width > maxWidth) {
      maxWidth = image.width;
      largestWidthImageIndex = i;
    }
  }
  return images[largestWidthImageIndex].url;
};

//Helper function to convert the time from the
//TicketMaster API into AM/PM standard for US users
const convertTimeToAmPm = (hours, minutes) => {
  let amOrPm;
  if (hours > 12) {
    amOrPm = "pm";
  } else {
    amOrPm = "am";
  }
  return `, ${parseInt(hours) % 12}:${minutes}${amOrPm}`;
}

//Format the date in a human-readble way for US users
export const prettyFormatDate = (localDate, localTime) => {
  const [year, month, day] = localDate.split("-");
  let hours;
  let minutes;
  if (localTime) {
    let ltSplit = localTime.split(":");
    hours = ltSplit[0];
    minutes = ltSplit[1];
  }
  const date = new Date(year, month - 1, day, );
  return date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) + (localTime ? convertTimeToAmPm(hours, minutes) : "") 
};

//Helper function to correctly format a date for
//the TicketMaster API
export const formatDateForTicketMasterApi = (date) => {
  return date.toISOString().substring(0,19) + "Z";
}