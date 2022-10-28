import axios from 'axios';
import {useEffect,useState} from 'react';

const useFetch=(url)=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData=async()=>{
        try{
            const response=await axios.get(url);
            setLoading(false);
            setData(response.data);
        }catch(err){
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data,loading,error};
}
export default useFetch;

