

export default function TablePosts(props) {
    console.log(props)
    const data = props.props.values;
    return (
        data.map((i, index) => {
            return < tr key={`key-tr-${index}`
            }><td key={`key-td-number-${index}`}>{index + 1}</td>
                <td key={`key-td-country${i.Country}`}><button key={i.Country} id={i.Country}
                    className="countryBtn">{i.Country}</button></td>
                <td key={`key-td-total-confirmed${i.TotalConfirmed}`}>{i.TotalConfirmed}</td></tr >
        })
    );
}