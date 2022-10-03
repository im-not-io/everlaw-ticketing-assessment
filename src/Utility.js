const TICKETMASTER_ENDPOINT =
  "https://app.ticketmaster.com/discovery/v2/events.json?";

export const getApiData = (args) => {
  const queryOptions = {
    apikey: "Y1rwxLXLcVqHuhiIgx1bVMhePdY018r1",
    ...args
  };

  const queryUrl =
    TICKETMASTER_ENDPOINT +
    new URLSearchParams(queryOptions);
    console.log("calling with queryUrl", queryUrl);
  return fetch(queryUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      let newEvents = [];
      for (const event of data._embedded.events) {
        newEvents.push(event);
      }
      return newEvents;
    });
};

export const locateLargestImage = (images) => {
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

export const prettyFormatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
};