import React, {Component} from 'react';

class Condition1 extends Component{
constructor() {
    super();
    this.state={
        login:false,
    }
}

    render() {
        // if(this.state.login==true){
        // return (
        //     <div>
        //         <button>Logout</button>
        //     </div>
        // );
        // }else{
        //     return (
        //         <div>
        //             <button>Login Now</button>
        //         </div>
        //     );
        // }

        return (
            this.state.login? 
            (
                <hi>I am 1st</hi>
            ) : (
                <h1>I am 2nd</h1>
            )
        );
    }
}

export default Condition1;