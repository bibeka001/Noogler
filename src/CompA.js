import React, {Component} from 'react'

class CompA extends Component{
    
    render(props){
        return(
            <>
                <h1>Welcome {this.props.name} and you've mastered props </h1>
                
            </>
        )
    }
}
export default CompA;
