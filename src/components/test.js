import React from "react"
class Bike extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Royal Enfield",
            model:"RE-Classical",
            color:"black",
            years:"2022"
    };
}
changeColor = ()=>{
    this.setState({color:"Red"})
}
changeModel = ()=>{
    this.setState({model:"Himalayan"})
}
render(){
    return(
        <div>
            <h1>My -{this.state.brand}</h1>
            <p>
                It is {this.state.model}&nbsp; 
                {this.state.color}&nbsp;
                from {this.state.years}.
            </p>
            <button type='button' onClick={this.changeColor}>COLOR</button>    
            <button type='button' onClick={this.changeModel}>MODEL</button>     
        </div>
    )
}
}
export default Bike;


