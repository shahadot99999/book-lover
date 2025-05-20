import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {
    const {bookId} = useParams();

    const data = useLoaderData();

     const id = parseInt(bookId)

     //console.log(typeof bookId, typeof id, typeof data[0].bookid );

    const book = data.find(book => book.bookId === id)
    
   
   // console.log(book);

   const {bookId: currentBookId, image}= book;
    return (
        <div className="my-12">
            <h2>Book Details:{bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button className="btn btn-outline mr-4  btn-accent">Read</button>
            <button className="btn  btn-accent">Wish List</button>
        </div>
    );
};

export default BookDetail;