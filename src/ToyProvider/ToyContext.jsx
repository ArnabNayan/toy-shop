import  { createContext, useState, useEffect } from 'react';

export const ToyContext = createContext();

// eslint-disable-next-line react/prop-types
export const ToyProvider = ({ children }) => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        // Fetch toys initially
        fetch("https://toy-shop-server-1bae.onrender.com/toys")
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const addToy = (newToy) => {
        setToys(prevToys => [...prevToys, newToy]);
    };

    return (
        <ToyContext.Provider value={{ toys, addToy }}>
            {children}
        </ToyContext.Provider>
    );
};
