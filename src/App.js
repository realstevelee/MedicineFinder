import React, { Component } from 'react';
import MedicineList from './MedicineList';
import { medicine } from './Medicine';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            medicine: medicine,
            searchfield: ''
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    
    }

    render() {
        const filterMedicine = this.state.medicine.filter(medicine => {
            return medicine.symptom.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filterMedicine);

        return (
            <div>
                <h1 className='tc white'>Medicine Finder</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <MedicineList medicine={filterMedicine} />
            </div>
        );        
    }
}

export default App;