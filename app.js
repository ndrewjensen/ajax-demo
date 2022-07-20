"use strict";

const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

//functions get search values from form
function getSearchText() {
  return $('#search-text').val();
}

//function call the giphy api
async function callGiphyApi() {
  let searchText = $('#search-text').val();
  let giphy = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params: {q: searchText, limit: 1, api_key: GIPHY_API_KEY}});
    return giphy.data.data[0].images.original.url;

    // return giphy.data[0].url;
}
//function to update the Dom
function addGiphyToDom(giphyUrl) {
  const img = $('<img>')
    .attr('src',giphyUrl)
    .css('width','200')
    .css('height','200');
  $('#giphy-container').append(img);
}

//function to clear all

//listener on the clear all button

//listener on the submit button to run a controller function

async function formSubmitHandler() {
  let searchText = getSearchText();
  let giphyUrl = await callGiphyApi(searchText);
  addGiphyToDom(giphyUrl);
}

$('#form').on('submit', function (evt) {
  console.log('listening to submit button');
  evt.preventDefault();
  formSubmitHandler(evt);

})