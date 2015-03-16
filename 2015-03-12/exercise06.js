(function() {
 function Album(nome, autore) {
  this.nome = nome;
  this.autore = autore;
  this.played = 0;
  this.play = function() {
    console.log("Playing" + " " + this.nome + "-" + this.autore);
    this.played++;
  }
 }

 function MusicBox() {
  this.albums = [];
  this.addAlbum = function(item) {
    this.albums.push(item);
  };
  this.favoriteAlbum = function() {
    var result = this.albums[0];
    for (var i=1;i<this.albums.length;i++) {
      (this.albums[i].played > result.played) && (result = this.albums[i])
    }
    return (result.nome + "-" + result.autore);
  }
 }

  var box = new MusicBox();
  var a1 = new Album("The Who", "Tommy");
  var a2 = new Album("Tom Waits", "Closing Time");
  var a3 = new Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());