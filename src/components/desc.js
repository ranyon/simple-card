
import React from 'react'

class Desc extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='description'>
            <p>{this.props.desc}</p>
            </div>
        )
    }

}
export default Desc;
