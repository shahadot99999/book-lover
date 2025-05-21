const getStoreWishlist = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreWishlist = (id) => {
    const storedList = getStoreWishlist();
    if(storedList.includes(id)){
        console.log(id, 'already exists in the wish list');
       // return false; // Return false if already exists
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
       // console.log(id, 'added to wish list');
      //  return true; // Return true if added successfully
    }
}

export { addToStoreWishlist };