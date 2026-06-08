import {useState, useEffect} from 'react' //state hooks

function useFetch(url) {
    const [data, setData] = useState(null) // holds what is returned from fetch
useEffect (() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setData(data)
    })
}, [url])

return data //To be used by any component that needs it
};

export default useFetch;