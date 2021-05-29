import React from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';

class App extends React.Component{
    render(){
        return( 
            
            <div style={{backgroundColor: '#ccc'}}>
                Nav Placeholder
                <div>
                    <SearchBar />
                </div>
                <div>
                    <ResultList />
                </div>
            </div>
            
        );
    }
};

export default App;