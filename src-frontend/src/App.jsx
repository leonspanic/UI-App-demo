import React from 'react';

import Header from './components/header';
import BodyComponent from './components/body-component';

class App extends React.Component {

    render() {
        return (
            <div className="cs-app-wrapper">
                <Header />
                <BodyComponent />
            </div>
        );
    }
}

export default App;
