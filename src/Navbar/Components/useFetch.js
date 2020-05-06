import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });
    useEffect(() => {
        setState({ data: null, loading: true });
        fetch(url)
            .then(x => x.json())
            .then(y => {
                // problem med at return array
                // setState({ data: y, loading: false });
                console.log(y);
            });
    }, [url]);
    return state;
};  