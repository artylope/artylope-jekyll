(function() {
  function displaySearchResults(results, store) {
    document.getElementById("search-results").style.display = 'block';
    var searchResults = document.getElementById('search-results-list');

    if (results.length) { // Are there any results?
      document.getElementById("search-results-count").innerHTML=(results.length);
      var appendString = '';
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<div class="blog-post"><a href="' + item.url + '"><h2>' + item.title + '</h2></a>';
        appendString += '<div class="blog-post-content"><p>' + item.content + '... <a href="' + item.url + '"> Read More </a></p></div></div>';
        console.log(item.content);
      }

      searchResults.innerHTML = appendString;
      document.getElementById("all-posts").style.display = 'none';
      document.getElementById("blog-bottom-nav").style.display = 'none';
    } else {
      document.getElementById("search-results-count").innerHTML=(results.length);
      searchResults.innerHTML = '<p>No results found.</p>';
      document.getElementById("all-posts").style.display = 'none';
      document.getElementById("blog-bottom-nav").style.display = 'none';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
            for (var key in window.store) {
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'author': window.store[key].author,
                    'category': window.store[key].category,
                    'content': window.store[key].content
                });


            }
        });
      var results = idx.search(searchTerm); // Get lunr to perform a search
          displaySearchResults(results, window.store); // We'll write this in the next section

  }
})();
