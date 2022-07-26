"use strict";

// global to hold the User instance of the currently-logged-in user
let currentUser;

/******************************************************************************
 * User login/signup/login
 */

/** Handle login form submission. If login ok, sets up the user instance */

async function login(evt) {
  console.debug("login", evt);
  evt.preventDefault();

  // grab the username and password
  const username = $("#login-username").val();
  const password = $("#login-password").val();

  // User.login retrieves user info from API and returns User instance
  // which we'll make the globally-available, logged-in user.
  currentUser = await User.login(username, password);

  $loginForm.trigger("reset");

  saveUserCredentialsInLocalStorage();
  updateUIOnUserLogin();
}

$loginForm.on("submit", login);

/** Handle signup form submission. */

async function signup(evt) {
  console.debug("signup", evt);
  evt.preventDefault();

  const name = $("#signup-name").val();
  const username = $("#signup-username").val();
  const password = $("#signup-password").val();

  // User.signup retrieves user info from API and returns User instance
  // which we'll make the globally-available, logged-in user.
  currentUser = await User.signup(username, password, name);

  saveUserCredentialsInLocalStorage();
  updateUIOnUserLogin();

  $signupForm.trigger("reset");
}

$signupForm.on("submit", signup); 

/** Handle click of logout button
 *
 * Remove their credentials from localStorage and refresh page
 */

function logout(evt) {
  console.debug("logout", evt);
  localStorage.clear();
  location.reload();
}

$navLogOut.on("click", logout);

/******************************************************************************
 * Storing/recalling previously-logged-in-user with localStorage
 */

/** If there are user credentials in local storage, use those to log in
 * that user. This is meant to be called on page load, just once.
 */

async function checkForRememberedUser() {
  //console.debug("checkForRememberedUser");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  if (!token || !username) return false;

  // try to log in with these credentials (will be null if login failed)
  currentUser = await User.loginViaStoredCredentials(token, username);
}

/** Sync current user information to localStorage.
 *
 * We store the username/token in localStorage so when the page is refreshed
 * (or the user revisits the site later), they will still be logged in.
 */

function saveUserCredentialsInLocalStorage() {
  console.debug("saveUserCredentialsInLocalStorage");
  if (currentUser) {
    localStorage.setItem("token", currentUser.loginToken);
    localStorage.setItem("username", currentUser.username);
  }
}

/******************************************************************************
 * General UI stuff about users
 */

/** When a user signs up or registers, we want to set up the UI for them:
 *
 * - show the stories list
 * - update nav bar options for logged-in user
 * - generate the user profile part of the page
 */

function updateUIOnUserLogin() {
  $allStoriesList.show();
  updateNavOnLogin();
}

/******************************************************************************
 * Handle click of submit nav button
 * Handle click of submit story button
 *
 *  -show submit form
 *  -once submit button clicked -> call addStory inside of StoryList
 * 
 * */

$navSubmitStory.on("click", () =>{$submitStoryForm.show()});
$addStory.on("click", async (event) => {
  event.preventDefault();
  await StoryList.addStory();
  getAndShowStoriesOnStart(); 
  resetHome();
});

/******************************************************************************
 * Handle click of Hack or Snooze in nav bar
 * 
 * Hide forms and just show stories
 * 
 */
 
$navAll.on("click", resetHome);

function resetHome() {
  $("#author-name").val("");
  $("#story-title").val("");
  $("#story-url").val("");

  $submitStoryForm.hide();
  $loginForm.hide();
  $signupForm.hide();
}



/******************************************************************************
 * Add click event to star icons to mark favorite/unmark favorite stories
 * 
*/
function addEventToFavorites() {
  $("i").on("click", (event) => {
    const star = event.target;
    const storyId = $(star).parent().attr("id")
    if ($(star).hasClass('fa-regular')) {
      $(star).removeClass('fa-regular')
      $(star).addClass('fa-solid')
      StoryList.addStoryToFavorites(storyId);
      addFavoriteToLocalStorage(storyId);
    } else {
      $(star).removeClass('fa-solid')
      $(star).addClass('fa-regular')
      StoryList.removeStoryFromFavorites(storyId);
      removeFavoriteFromLocalStorage(storyId);
    }
    })
}

function addFavoriteToLocalStorage(storyId) {
  if (localStorage.getItem('Favorites') === null) {
    localStorage.setItem('Favorites', storyId)
  } else {
    let totalFavorites = localStorage.getItem('Favorites').split(',');
    totalFavorites.push(storyId);
    localStorage.setItem('Favorites', totalFavorites);
  }
}
function removeFavoriteFromLocalStorage(storyId) {
    let totalFavorites = localStorage.getItem('Favorites').split(',');
    totalFavorites.splice(totalFavorites.indexOf(storyId), 1)
  if (totalFavorites === ' ') {
    localStorage.removeItem("Favorites")
  } else {
    localStorage.setItem('Favorites', totalFavorites);
  }
  }


/******************************************************************************
 * Mark favorited stories with solid star when page loads
 * 
*/
function markFavoritedStories() {
  let storage = localStorage.Favorites.split(',');
  for (let id of storage) {
    if(id === ''){continue}
    $(`#${id}`).find("i").removeClass("fa-regular")
    $(`#${id}`).find("i").addClass("fa-solid")
    }
}
  

/******************************************************************************
 * Handle clicks on favorites button
 * Handle clicks on 
*/