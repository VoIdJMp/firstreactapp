import React, {Component} from 'react';
import Car from "./Car/Car";
import './App.css';

class App extends Component{
    state = {
        cars: [
            {name: 'Audi', year: 2020},
            {name: 'Mazda', year: 2000},
            {name: 'Ford', year: 2016}
        ],
        pageTitle: 'MyAppTitle',
        showCars: false
    };

    toogleToPage = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    changePageTitle = (val, idx) => {
        let cars = [...this.state.cars];
        cars[idx].name = val;
        this.setState({ cars });
    };

    delateCar(idx) {
        let cars = [...this.state.cars];
        cars.splice(idx, 1);
        this.setState({cars});
    }

    render() {
      const car = this.state.cars;
      return (
          <div className="App">
              <h1> {this.state.pageTitle} </h1>
              <button onClick={this.toogleToPage}>change</button>
              {this.state.showCars
                  ?car.map( (data, index) => {
                      return (
                          <Car
                              key={index}
                              name={data.name}
                              year={data.year}
                              onChageCar={(event) => this.changePageTitle(event.target.value, index)}
                              onDelateCar={this.delateCar.bind(this, index)}
                              />
                      )})
                  : null
              }
          </div>
      )
    }
}

export default App;
