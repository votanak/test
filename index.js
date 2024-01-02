const loadPage = async () => {
  const loadedHtml = await fetch('./677074.html')
    .then(function (response) {
      // When the page is loaded convert it to text
      console.log(response);
      return response.text();
    })
    .then(function (html) {
      console.log(html);
      // Initialize the DOM parser
      var parser = new DOMParser();
      // Parse the text
      var doc = parser.parseFromString(html, 'text/html');
      // You can now even select part of that html as you would in the regular DOM
      // Example:
      let docArticle = doc.querySelector('body').innerHTML;
      document.body.insertAdjacentHTML('afterbegin', docArticle);
    })
    .catch(function (err) {
      console.log('Failed to fetch page: ', err);
    });
  console.log(loadedHtml);
};
