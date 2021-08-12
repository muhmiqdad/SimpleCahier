import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {cl: 'bg-green-500 hover:bg-green-400', data:['QZtext', 'QZimage', 'QZbarcode', 'QZQR']}, 
        {cl: 'bg-blue-500 hover:bg-blue-400', data: ['rawtext', 'rawimage', 'rawbarcode', 'rawQR']}
        ]
      }
    }

  render() {
    let data = this.state.data.map((d) => {
      return d.data.map((pr) => {
        return (
          <button className={d.cl + " flex w-32 rounded-lg shadow-md focus:shadow-none"}>
            <span className="m-auto">{pr}</span>
          </button>
          )
        })
      })

    return (
      <React.Fragment>
        <div className="text-7xl font-extrabold pb-2 bg-gray-50">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Print Examples</span>
        </div>
        <div className="flex mt-5 mx-5 space-x-5 h-14 justify-items-stretch">
          {data}
        </div>
      </React.Fragment>
      );
    }
  }

export default App;
