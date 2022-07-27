"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  const hostName = story.getHostName();
  return $(`
      <li id="${story.storyId}">
        <i class="fa-regular fa-star"></i>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

function generateFavoritesMarkup(story) {
  
  const hostName = new URL(story.url).hostname;
  return $(`
      <li id="${story.storyId}">
        <i class="fa-regular fa-star"></i>
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}
 

// Show user favorited stories and add solid star to stories
function putFavoritesOnPage(favorites) {
  $allStoriesList.empty();
   
  if (favorites.favorites.length === 0) {
    $allStoriesList.append($("<div>No favorited stories to show...</div>"))
  }

    // loop through all of our stories and generate HTML for them
    for (let story of favorites.favorites) {
      const $story = generateFavoritesMarkup(story);
      const storyId = story.storyId

      $allStoriesList.append($story);     
      $(`#${storyId}`).find("i").removeClass("fa-regular")
      $(`#${storyId}`).find("i").addClass("fa-solid")
    }

    $allStoriesList.show();
  
}

// Show user submitted stories on page and add delete icon
function putMyStoriesOnPage(stories) {
  $allStoriesList.empty();
   
  if (stories.stories.length === 0) {
    $allStoriesList.append($("<div>You have no stories. Add one for everyone to read!</div>"))
  }

    // loop through all of our stories and generate HTML for them
    for (let story of stories.stories) {
      const $story = generateFavoritesMarkup(story);
      const storyId = story.storyId

      $allStoriesList.append($story);     
      $(`#${storyId}`).find("i").removeClass("fa-regular fa-star")
      $(`#${storyId}`).find("i").addClass("fa-solid fa-trash-can")
    }
    $allStoriesList.show();
}

