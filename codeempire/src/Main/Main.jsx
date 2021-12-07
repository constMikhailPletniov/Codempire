import './main.css';
import { constants } from '../constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TablePosts from '../Table/TablePosts';

export default function Main() {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const getApiData = () => {
            axios.get(constants.SUMMARY_DATA)
                .then(res => {
                    return setValues(res.data.Countries);
                })
                .catch(err => console.error('axios error:', err));
        }
        getApiData();

    }, []);
    // function showPopUp(e) {

    //     return e.target.id

    // }
    return (
        <>
            <main className="mainWrapper">
                <table className="statisticsTable">
                    <thead><th>№</th>
                        <th>Country</th>
                        <th>Total Confirmed</th></thead>

                    <tbody>{<TablePosts props={{ values: values }} />}</tbody>
                </table>
            </main>
        </>
    );
}
// values.map((i, index) => {

//     return <tr key={`key-tr-${index}`}><td key={`key-td-number-${index}`}>{index + 1}</td>
//         <td key={`key-td-country${i.Country}`}><button key={i.Country} id={i.Country}
//             className="countryBtn">{i.Country}</button></td>
//         <td key={`key-td-total-confirmed${i.TotalConfirmed}`}>{i.TotalConfirmed}</td></tr>

// })