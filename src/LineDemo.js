import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

export default class LineDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            month:"",
            dataok:Number,
            data : {
                labels: [ 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [ 24,56, 55, 40]
                  }
                ]
              }
        };
    }
     setstate=(e)=>{
        let name=e.target.name;
        let value=e.target.value
        this.setState({[name]:value});
        console.log(name,value);
    }
    
     set=()=>{
         const newdata={...this.state.data}
         console.log(newdata)
        //  data.datasets[0].data.push(this.state.data)
        // data.labels.push(this.state.month)
        newdata.labels.push(this.state.month);
        newdata.datasets[0].data.push(parseInt(this.state.dataok))
        this.setState({data:newdata});
    //    console.log() 
    }
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line  width={100}
  height={20} ref="chart" data={this.state.data} />
  <div>
      <h2>Enter your data</h2>
      <input name="month"  value={this.state.month} onChange={this.setstate} placeholder="Enter Month Name"></input>
      <input name="dataok" value={this.state.dataok} onChange={this.setstate} placeholder="Enter Month Sale"></input>
      <button onClick={this.set}>Add to Graph</button>
      
       </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}