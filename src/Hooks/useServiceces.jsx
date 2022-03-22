import { useEffect, useState } from 'react';
//Custom hook form json data
const useServiceces = () => {
    const [info, setInfo] =useState([]);
    // Fetching api from github page
    useEffect(()=>{
        fetch('http://localhost:5000/api/getAllServices')
        .then(resp => resp.json())
        .then(data => setInfo(data.service))
    },[])
    return [info, setInfo]
};

export default useServiceces;