"use strict";


//functions get search values from form
function getSearchText() {
  return $('#search-text').val();
}

//function call the giphy api
async function callGiphyApi() {
  let searchText = getSearchText();

  let giphy = await axios.get('api.giphy.com/v1/gifs/search',
    {params: {q: searchText}})
    console.log()
}
//function to update the Dom

//function to clear all

//listener on the clear all button

//listener on the submit button to run a controller function