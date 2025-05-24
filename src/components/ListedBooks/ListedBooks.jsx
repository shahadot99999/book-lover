import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addToDB';
import Book from '../Book/Book';

const ListedBook = () => {

     const [readList, setReadList]= useState([]);
     const [sort, setSort]= useState('');
    const allBooks = useLoaderData();

    useEffect(()=>{
        const storeReadList = getStoreReadList();
        const storeReadListInt =storeReadList.map(id =>parseInt(id));

        console.log(storeReadList, storeReadList, allBooks);

        const readBookList = allBooks.filter(book =>storeReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, []);

    const handleSort = sortType =>{
        setSort(sortType);

        if(sortType === 'No of the pages'){
            const sortedReadList = [...readList].sort((a, b)=>a.totalPages-b.totalPages);
            setReadList(sortedReadList);
        }
        if(sortType === 'Ratings'){
            const sortedReadList= [...readList].sort((a,b)=>a.rating-b.rating);
            setReadList(sortedReadList);
        }
    }
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                    sort ? `Sort by: ${sort}`: 'Sort By'
                    }
                    </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=>handleSort('No of the pages')}><a>No of pages</a></li>
                </ul>
            </div>

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