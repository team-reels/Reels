import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        setState((state) => ({data: state.data, loading: true}));
        axios.get(url).then(response => {
            setState({data: response.data, loading: false});
        });
    }, [url, setState]);
    return { state, setState }; //pending: may not work. try just returning state. did this cos sometimes may need to modify (set function)
};

export default useAxios;