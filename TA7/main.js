const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  
function getTheTitles(books){
    const titles = books.map(book => book.title);
    return titles;
}
console.log(getTheTitles(books));
