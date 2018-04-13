import React  from 'react';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
    
    if(props.warn){
      const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      return element;
    }
    
   }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
    
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning}/>
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  
  export default Page;