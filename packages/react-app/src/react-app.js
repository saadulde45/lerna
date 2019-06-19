import React from 'react';
import './react-app.scss';

class ReactApp extends React.Component {
    render() {
        return (
            <div className="parent-wrapper">
                <span className="title">
                    React Child
                </span>
            </div>
        );
    }
}

export default ReactApp;