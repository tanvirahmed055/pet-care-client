import { useState, useEffect } from 'react';

const useStore = () => {
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tanvirahmed055/json-data-host/main/public/StoreData.json')
            .then(res => res.json())
            .then(data => setStore(data))
    }, [])

    return [store];
}

export default useStore;