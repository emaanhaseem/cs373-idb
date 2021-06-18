import { useEffect, useState } from 'react'
import axios from 'axios';

const HelloText = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:5000/`)
            setData(res.data);
        };
        getData();

    }, [])
    

    return (
      <h1> {data} </h1>
    )
}

export default HelloText;