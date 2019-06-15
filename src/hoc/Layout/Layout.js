import React, {Component} from 'react';
import Quiz from "../../containers/Quiz";

class Layout extends Component {
    render() {
        debugger;
        return (
            <div className="Layout">
               <h1>test</h1>
                {this.props.children}
                <Quiz/>
            </div>
        );
    }

}

export default Layout;
