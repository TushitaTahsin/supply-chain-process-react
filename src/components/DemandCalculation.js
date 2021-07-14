import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./DemandCalculation.css"

class DemandCalculation extends Component {
    render(){
        return(
            <div>
                <h3>Calculating Demand for each small category for each shop</h3>
                <input class="form-control basicAutoComplete" type="text"
        data-url="myurl"
        autocomplete="off" placeholder="Filter by shop name"></input>
        <table className={classes.table}>
            <tr>
                <th>Small Categories</th>
                <th>Growth</th>
                <th>Demand</th>
            </tr>
            <tr>
                <td>Spice Packet</td>
                <td><input></input></td>
                <td></td>
            </tr>
            <tr>
                <td>Ice Cream</td>
                <td><input></input></td>
                <td></td>
            </tr>
            <tr>
                <td>Noodles</td>
                <td><input></input></td>
                <td></td>
            </tr>
            
            </table>
            </div>
        );
    }
}

export default DemandCalculation;

