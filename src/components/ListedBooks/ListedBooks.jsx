import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ListedBook = () => {

     const [readList, setReadList]= useState([]);
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storeReadList = getStoreReadList();
        const storeReadListInt =storeReadList.map(id =>parseInt(id));

        console.log(storeReadList, storeReadList, allBooks);

        const readBookList = allBooks.filter(book =>storeReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [])
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wist List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read:{readList.length}</h2>
                    <h2>
                        {
                            readList.map(book => <Book
                            key={book.bookId}
                            book ={book}
                            ></Book>)
                        }
                    </h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;