"use strict";

const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

//functions get search values from form
function getSearchText() {
  return $('#search-text').val();
}

//function call the giphy api
async function callGiphyApi() {
  let searchText = getSearchText();

  let giphy = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params: {q: searchText, limit: 1, api_key: GIPHY_API_KEY}});
    console.log(giphy.data);
    console.log(giphy.data.url);
    // return giphy.data[0].url;
}
//function to update the Dom

//function to clear all

//listener on the clear all button

//listener on the submit button to run a controller function