import { useState, useEffect } from 'react';

const useStore = () => {
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/storeData')
            .then(res => res.json())
            .then(data => setStore(data))
    }, [])

    return [store];
}

export default useStore;