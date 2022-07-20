"use strict";

const GIPHY_API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

/** function return search values from form */
function getSearchText() {
  return $('#search-text').val();
}

/** function call the giphy api return giphy url */
async function callGiphyApi(searchText) {
  const giphyApiResponse = await axios.get('http://api.giphy.com/v1/gifs/search',
    { params: { q: searchText, limit: 1, api_key: GIPHY_API_KEY } });
  return giphyApiResponse.data.data[0].images.original.url;
}

/** function to add image to the Dom with giphyUrl */
function addGiphImageToDom(giphyUrl) {
  const img = $('<img>')
    .attr('src', giphyUrl)
    .css({'width': '200', 'height': '200'});
  $('#giphy-container').append(img);
}

/** function handles form submission, returns undefined */
async function formSubmitHandler() {
  const searchText = getSearchText();
  const giphyUrl = await callGiphyApi(searchText);
  addGiphyToDom(giphyUrl);
}

/** event listener to submit to button, calls formSubmitHandler */
$('#form').on('submit', function (evt) {
  console.log('listening to submit button');
  evt.preventDefault();
  formSubmitHandler(evt);
});

$('#delete-button').on('click', function () {
  $('#giphy-container').html(" ");
});