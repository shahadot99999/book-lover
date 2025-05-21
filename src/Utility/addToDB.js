const getStoreReadList = ()=>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }

}

const addToStoreReadList = (id)=>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        //already exists.do not add it
        console.log(id, 'already exists in the read list');
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListstr);
         //console.log(id, 'added to read list');
    }

}

export {addToStoreReadList}