import React, {Component} from "react";

class Phonebookcreate extends Component{

    constructor(props){
        super(props);
        this.state={
            name : "",
            phone : ""
        }
        this._change = this._change.bind(this);
    }

    _change(e){
        var a = {};
        a[e.target.name] = e.target.value;
        this.setState(a)
    }

    render(){
        return(
            <div>
                <h3>전화번호 추가</h3>
                <p><input type = "text" 
                        placeholder = "이름" 
                        name = "name"
                        value = {this.state.name}
                        onChange = {this._change}/></p>
                <p><input type = "text" 
                        placeholder = "전화번호" 
                        name = "phone"
                        value = {this.state.phone}
                        onChange = {this._change}/></p>
                <button onClick = {()=>{this.props.func(this.state)}}>Create</button>
            </div>
        );
    }
}

export default Phonebookcreate;