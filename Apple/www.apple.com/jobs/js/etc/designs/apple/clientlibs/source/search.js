(function ($) {

  'use strict';
    var $component  = $('#search-data');
   	var autocomplete    = $component.attr("data-autocomplete");
    var results    = $component.attr("data-results");
    var hostname    = $component.attr("data-host");
    var url = autocomplete;

    // If hostname is undefined, we're on an internal page.
    // In that case, end points should be relative.
    // Otherwise, append host name to the end points.
    if (typeof hostname != 'undefined') {
      url = hostname + url;	
      results = hostname + results;
    }

  // Instantiate the Bloodhound suggestion engine
  var req = new Bloodhound({
    datumTokenizer: function (datum) {
      return Bloodhound.tokenizers.whitespace(datum.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: url + '%QUERY',
      wildcard: '%QUERY',
      rateLimitWait: 500,
    }
  });

  var footer = function (context) {
    // Displays results count in aria live region.
    return '<span role="status" aria-live="polite" class="auto-suggest-msg a11y">' + context.suggestions.length + ' suggestions are available. Use up and down arrows to select.</span>';
  }
  // Instantiate the Typeahead UI
  $('.page-search__input').typeahead({
      hint: false,
      highlight: true,
      minLength: 3
    },
    {
      name: "req",
      source:  req,
      limit: 'Infinity',
      templates: {
        notFound: [
          '<div class="list-group search-results-dropdown"><div class="list-group-item">' + $('#page-search__input').attr("data-noresult") + '</div></div>'
        ],
        footer: footer,
        suggestion: function (data) {
          return '<a href="' + results + data + '" class="list-group-item ac-gn-searchresults-link ac-gn-searchresults-link-quicklinks">' + data + '</a>'

        }
      }
    });

  // We could have used .replaceWith(), but it will remove all data and event handlers associated with the removed nodes.
  var typeahead_span = $("span.twitter-typeahead");
  var typeahead_div = $('<div class="twitter-typeahead"></div>');
  typeahead_span.before(typeahead_div);
  typeahead_div.append(typeahead_span.children());
  typeahead_span.remove();

  // Fix for <rdar://problem/29969498>.  Add the id attribute to tt-menu so that it can be used in aria-own.
  $(".tt-menu").attr("id", "tt-menu");

  function goToApplySite(){
    window.location.href = results + $('#page-search__input').val();
  }

  $('.page-search__submit').on('click', function() {
    goToApplySite();
    return false;
  });

  $(".page-search__submit, .page-search__input").keyup(function(ev){
    if(ev.keyCode === 13) { // 13 is the key code for enter.
      goToApplySite();
    }
  });

  // Update search box in VO rdar://problem/29969015  
  var searchTerm = "";
  $("#page-search__input").keydown(function() {
  // TODO: should detect if .tt-cursor exists
    searchTerm = $(".tt-cursor").text();
  });

  $(".page-search__submit").focus(function() {
    var userInput = $("#page-search__input").typeahead('val');
    //updated to fix rdar://problem/31149417		
    if (searchTerm == "" || searchTerm == null){		
      $('.tt-input').typeahead('val', userInput);		
    } else {		
      $('.tt-input').typeahead('val', searchTerm);		
    }
  });

  // losing search term on Tab or Option + Tab rdar://problem/31149611		
  $("#page-search__input").bind('typeahead:select', (function(ev, suggestion) {		
    $('.tt-input').text() + suggestion;		
  }));		

  // Move search results so that the submit button is next in the tab order
  // after the search input.
  // <rdar://problem/29969015>
  var tt_menu = $("#tt-menu");
  $('.page-search__submit').after(tt_menu);

// Fix for accessibility to remove curtain in VO when user ctrl+opt+rt arrow past
// search input box.
// <rdar://problem/36136196
  $('input.page-search__input').blur(function () {
    $.curtainOff();
  });

})(jQuery);