import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });
    useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(x => x.json())
            .then(y => {
                // problem med at return array/objct
                // setState({ data: y, loading: false });
                console.log(y);
            });
    }, [url, setState]);
    return state;
};  