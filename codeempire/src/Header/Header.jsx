import './header.css';
import logo from './img/logo.svg';
import searchLogo from './img/Vector.svg';
import TablePosts from '../Table/TablePosts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { constants } from '../constants';

export default function Header() {

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

    const showSearchValues = (e) => {

        if (e.target.value) {
            console.log(e.target.value)
            const props = {};

            values.map(values => {

                if (values.Country.includes(e.target.value)) {

                    (Object.assign(props, { props: { values } }));
                    <TablePosts props={{ values: props }} />
                }
            });

        }

    };
    return (
        <>
            <header className="header">
                <div className="containerRigthSide">
                    <div className="containerLogo"><img src={logo} alt="logo" /></div>
                    <h1 className="mainHeader">STATISTIC</h1>
                </div>
                <div className="containerSearchInput">
                    <form id="formSerach">
                        <input type="search" name="" id="searchInput" placeholder="Search..." onInput={showSearchValues} />
                        <input type="image" src={searchLogo} alt="serachLogo" />
                    </form>
                </div>
            </header>
        </>
    );
}