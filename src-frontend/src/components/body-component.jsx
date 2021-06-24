import React from 'react';
import {
    CSButton,
    CSModal,
} from '@cloudsense/cs-ui-components';

class BodyComponent extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <CSButton
                    label="I do nothing"
                />
            </div>
        );
    }
}

export default BodyComponent;
