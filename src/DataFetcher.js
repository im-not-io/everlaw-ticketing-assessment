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
