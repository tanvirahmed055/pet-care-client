import { useState, useEffect } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tanvirahmed055/json-data-host/main/public/servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services];
}

export default useServices;