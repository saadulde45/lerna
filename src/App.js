import React from "react";
import WCReactApp from "wc-react-app";
import WCNestedReactComponent from "wc-nested-react-component";

function bootstrapApp() {
  import(/* webpackChunkName: "angularApp" */ 'wc-angular-app/dist/wc-angular-app/main.js');
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'start'
    };
  }

  render() {
    return (
      <div id="test">
        Test parent
        <WCReactApp></WCReactApp>
        <angular-app></angular-app>
        <WCNestedReactComponent></WCNestedReactComponent>
      </div>
    );
  }

  componentDidMount() {
    bootstrapApp();
  }

};

export default App;
