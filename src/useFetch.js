//CUSTOM HOOK
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch response!')
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null); //removes error message if next req us succesful
            })
            .catch(err => { // catches network error

                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false); // this removes loading from webpage IF there is an error 
                    setError(err.message)
                }
                
            })

            return () => console.log('clean up')
    }, [url]);

    return { data, isPending, error}

}

export default useFetch;