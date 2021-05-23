import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Recommendation } from './Recommendation'

function RecommendationList() {
    let { id } = useParams();
    let [count, setCount] = useState(0)
    let [data, setData] = useState([])
    console.log('Fetch Recommendation ')
    useEffect(() => {
        fetch('http://localhost:5001/recommendations/' + id)
        .then(res => { 
            console.log('Response : ' + JSON.stringify(res))
            return res.json() 
        })
        .then((data) => {
            console.log('result : ' + JSON.stringify(data));
            setCount(data.length)
            setData(data)
        });
    }, [])

    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Anzahl Recommendation: {count}</p>
            { data.map((recommendation) => {
                console.log(JSON.stringify(recommendation))
                return (
                    <Recommendation key={recommendation.recoid} title={recommendation.title} link={recommendation.link} />)
            })}
            
        </div>
    );
}

export default RecommendationList