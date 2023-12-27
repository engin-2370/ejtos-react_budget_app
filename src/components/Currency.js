import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div>
            <select className="custom-select" style={{ color: 'white', backgroundColor:"lightgreen", borderColor:"green"}} id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option defaultValue value="£" name="pound">£ Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
                <option value="₺" name="tl">₺ Turkish Lira</option>
            </select>
        </div>
    );
};
export default Currency;