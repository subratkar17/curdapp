import React from 'react';

function employee(x){
    return x.firstName + '\n' + x.lastName ;
}
  const x={
      firstName:'subrat',
      lastName:'kar',
  }


  class Check extends React.Component{
      render(){
        return(
            <div>
                <h1>Hello, {employee(x)}!</h1>
                </div>
        )
    }
  }
  
  export default Check;