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
  const params = { "q": term }
  let response = await axios.get(`${endPoint}/search/shows`, { params })
  const shows = [];
  console.log(response.data)
  
  for (let i = 0; i < response.data.length; i++) {
    //TODO Work on this function!!!
      
      
    }
 
  
  return [shows]
}


/** Given list of shows, create markup for each and add to DOM */

function populateShows(shows) {
  $showsList.empty();
  console.log(shows.length)
  for (let show of shows) {
    const $show = $(
        `<div data-show-id="${show[0].id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
              src=${show[0].image}
              alt="Bletchly Circle San Francisco" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show[0].name}</h5>
             <div><small>${show[0].summary}</small></div>
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


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
