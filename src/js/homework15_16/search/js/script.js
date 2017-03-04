function searchQuery() {
    var searchText = $('#search-input')[0].value;

    var articlesTemplate = _.template(document.getElementById('articles_template').innerHTML);


    $.getJSON("http://webhose.io/search?token=bec513ac-1c58-465a-9ce6-5e1efedb797b&format=json&sort=relevancy&q=" + encodeURIComponent(searchText),
        function (data) {
            var searchResult = data.posts.slice(0, 10);
            var articles = [];

            searchResult.forEach(function (article) {
                if (!article.title) {
                    article.title = "No title";
                }
                articles.push({title: article.title, href: article.url, text: article.text});
            });

            var domElement = articlesTemplate({articles: articles});
            $('#search_results').replaceWith(domElement);
        });

    return false;
}

