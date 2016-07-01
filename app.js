$('document').ready(function(){

var movieLibrary = ['tt0314331', 'tt2015381', 'tt0113243']


function addMovie(library){
  for (i = 0; i < library.length; i++){
    var movie = $.ajax({
      url: 'http://www.omdbapi.com/?i=' + library[i] + '&type=movie&plot=short&tomatoes=true'
    });
    movie.then(function(data){
      $('.library').append('<div><img src=' + data.Poster + '><h3>' + data.Title + '</h3><ul><li>Rated: ' + data.Rated +
      '</li><li>Runtime: ' + data.Runtime + '</li><li>Release Date: ' + data.Released + '</li></ul><p>Cast: ' + data.Actors + '</p><p>' +
      data.Plot + '</p></div>')
      console.log(data);
    });

    movie.catch(function(data){
      console.log('error');
    });
  }
}
addMovie(movieLibrary);






});
