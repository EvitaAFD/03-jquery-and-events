//  REVIEW: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  //gets article element array, that do not have template class, iterates over and uses anonymous callback function
  $('article').not('.template').each(function() {
    //variable declarations
    var authorName, category, optionTag;
    //All of this asigned variable of authorName then this refers to current each iteration of artcile find an (a)anchor tag inside address tag that has a text value- retrieving it from the DOM
    authorName = $(this).find('address a').text();
    //assigning into variable a string we are creating an HTML element into option tag
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    //author-filter id gets the above inserted optionTag appended to it
    $('#author-filter').append(optionTag);
    //gets data-category attribute to the article
    category = $(this).attr('data-category');
    //making html option string and substituting category variable into option tag reassigned -overwrites above
    optionTag = '<option value="' + category + '">' + category + '</option>';
    //conditional operation get DOM element that has category filter and see if the select value option element is === 0 (see if it exists) if category exists do not append option tag if it does exist append option tag
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
  $('#category-filter').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    /* TODO:
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
    */
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  // Truncate logic to show only first two elements within the article body.
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
    When a class .read-on link is clicked, we can:
    1. Prevent the default action of a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!
    4. Call it
    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
};

// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
