console.log("sup");

function BookReader(book, currentPage) {
  this.book = book;
  this.currentPage = 0;
}

var book1 = new BookReader(['this', 'is', 'short']);
console.log(book1);

BookReader.prototype.nextPage = function() {
  this.currentPage++;
  if(this.currentPage >= this.book.length){
    this.currentPage = this.book.length -1;
    return this.book[this.book.length-1];
  }
  else if(this.currentPage > 0){
    return this.book[this.currentPage];
  }
};

BookReader.prototype.previousPage = function(){
  this.currentPage--;
  if(this.currentPage < 0){
    this.currentPage = 0;
    return this.book[0];
  }
  else{
    return this.book[this.currentPage];
  }
};


BookReader.prototype.pagesLeft = function() {
  if(this.currentPage >= this.book.length){
    return 0;
  }
  else if(this.currentPage > 0){
    return (this.book.length-1)-this.currentPage;
  }
};

BookReader.prototype.encouragement = function() {
  if(this.currentPage === this.book.length-1){
    return "Keep going, this book is good 'til the last drop!";
  }
  else if(this.currentPage >= 0){
    return "Keep going, only "+ (this.book.length-1 - this.currentPage) + " pages left after this one!";
  }
};



// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
