import React from 'react';
import './ResultList.css';
import ResultItem from './ResultItem';

class ResultList extends React.Component{
    render(){
        return(
            <div className="rl">
                THIS IS RESULT LIST
                <ResultItem />
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        );
    }
}

export default ResultList;