import React from 'react'
import {Title} from './title'
import Image from './image'
import Desc from './desc'
import Pic from './images.png'


class Simplecard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <Image image={Pic}/>
            <Title title={'Simple React Card'}/>
            <Desc desc={'This is a simple React Card'}/>
            </div>
        )
    }

}
export default Simplecard;
