import React, {Component} from "react";

class Phonebookdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            isEdit : false,
            name : "",
            phone : ""
        }
        this._click = this._click.bind(this);
        this._change = this._change.bind(this);
    }

    _click(){
        if(!this.state.isEdit){
            this.setState({
                name : this.props.contact.name,
                phone : this.props.contact.phone
            })}
        else{
            this._edit()
        }
        this.setState({
            isEdit : !this.state.isEdit 
        })
    }

    _change(e){
        var a = {};
        a[e.target.name] = e.target.value;
        this.setState(a)
    }

    _edit(){
        this.props.edit(this.state.name,this.state.phone)
    }

    render(){
        
        const mo=(<div>
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
        </div>
        );

        const de = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        return(
            <div>
                <h3>Detail</h3>
                {this.state.isEdit?mo:de}
                <button onClick = {()=>{this.props.onRemove()}}>Delete</button>
                <button onClick = {this._click}>{this.state.isEdit?"OK":"Modify"}</button>
            </div>
        );
    }
}

Phonebookdetail.defaultProps = {
    contact : {
        name : "",
        phone : ""
    }
}

export default Phonebookdetail;