//Exercise I:
// - There аrе starter files with a setup created for you.
// - All the cards info can be found in the products.js file and you have to work in the main.js file.
// - The card skeleton is shown in the html starter file (be sure to comment or remove it when you start with the javascript logic).
// - The steps you need to follow are:
// - Loop over the products array and for each iteration show a card in the div with an id='list'.
// - Clicking on the '+' button opens the bootstrap modal which will be used for adding a new card to the list. Make sure all the inputs are filled with text, and only then clicking on the 'add-btn' you should add a new card to the div with an id='list' in html. For the new card ids, use the products array length.
// - Clear the input values after adding a new card.
// - Now that you’ve added a new card in html, create an object similar to the ones in the products.js file and add it (push it) to the products array as well.
// - Clicking on the 'del-btn' in html, remove the correspondent card from the html file and from the products array also.
// - Now that you’ve removed the card, the id’s of the elements are shuffled, meaning: when you attempt to add a new card, two or more cards can have the same ids. In order to fix that, loop over the cards again and update their ids after clicking on the 'del-btn'.
// - Clicking on the 'search-btn' you should filter/search through all the cards based on their titles.
// - Optimize your code: use one function called renderCard to render the same html you are rendering in 3 places.
