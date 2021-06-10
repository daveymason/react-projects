import React, {Component} from 'react';

class Result extends Component {

    render () {
        let {result} = this.props;
        return(
            <div className="result">
                <h2>{result}</h2>
            </div>
        )
    }
} 

export default Result;