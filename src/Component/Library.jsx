import  Book from './Book';
export default function Libray({books}) {
    // console.log(books);
    return (
        <div>
            <p>Library</p>
            <p>{books.length}</p>            
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    );
}