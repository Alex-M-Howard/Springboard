"use strict";
const endPoint = 'https://api.tvmaze.com'
const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */
async function getShowsByTerm(term) {
  const shows = [];
  const params = { "q": term }
  let response = await axios.get(`${endPoint}/search/shows`, { params })
  
  for (let i = 0; i < response.data.length; i++) {
      shows.push(response.data[i])
    } 
  return [shows]
}

/** Given list of shows, create markup for each and add to DOM */
function populateShows(shows) {
  shows = shows[0]
  $showsList.empty();
  
  for (let show of shows) {
    if (!show.show.image) {
      show.show.image = {"original": "https://banner2.cleanpng.com/20180312/xaq/kisspng-popcorn-polarized-3d-system-3d-film-stock-photogra-3d-movie-villain-5aa6fef4690882.6908380615208936844302.jpg"}
    }
    const $show = $(
        `<div data-show-id="${show.show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show.show.image.original}
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.show.name}</h5>
             <div><small>${show.show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);  }
}

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */
async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

$(document).on('click', '.Show-getEpisodes', async function (evt) {
  evt.preventDefault();
  const showID = $(evt.target).parent().parent().parent().attr("data-show-id")
  const episodes = await getEpisodesOfShow(showID);
  populateEpisodes(episodes);
})

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const episodes = [];
  const response = await axios.get(`${endPoint}/shows/${id}/episodes`);

  for (let i = 0; i < response.data.length; i++){
    episodes.push(response.data[i])
  }

  return [episodes];
}

/** After episodes are gathered, attach episodes to DOM */

async function populateEpisodes(episodes) {
  episodes = episodes[0]
  const $episodesList = $("#episodes-list");

  $episodesList.empty();
    
  for (let episode of episodes) {

    let $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `);

    $episodesList.append($item);

  }
  $showsList.hide();
  $("#episodes-area").show();
 }
