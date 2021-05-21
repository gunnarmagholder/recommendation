import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Recommendation } from './Recommendation'

function RecommendationList() {
    let { id } = useParams();
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    console.log('Fetch Recommendation ')
    fetch('http://localhost:5001/recommendations/' + id)
        .then(res => res.json())
        .then((data) => {
            console.log('result : ' + JSON.stringify(data));
            setCount(data.length)
            setData(data)
        })
    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Anzahl Recommendation: {count}</p>
            <table>
                <th>
                    <td>Titel</td>
                    <td>Link</td>
                </th>
            { data.map((recommendation) => {
                console.log(JSON.stringify(recommendation))
                return (
                    <Recommendation title={recommendation.title} link={recommendation.link} />)
            })}
            </table>
        </div>
    );
}

export default RecommendationList