import React, {Component} from "react";
import Phonebookdetail from "./Phonebookdetail.js";
import Phonebookcreate from "./Phonebookcreate.js";

class Phonebook extends Component{

    constructor(props){
        super(props);
        this.state={
            select : -1,
            contact : [{
                name : "김뚜삐",
                phone : "123"
            },
            {
                name : "김가네",
                phone : "02-407-7086"
            },
            {
                name : "히히",
                phone : "123"
            },
            {
                name : "쨔랑해",
                phone : "1004"
            }
        ]}
        this._click = this._click.bind(this);
        this._create = this._create.bind(this);
        this._remove = this._remove.bind(this);
        this._modify = this._modify.bind(this);
    }

    componentWillMount(){
        if(localStorage.contact){
            this.setState({
                ...this.state,
                contact : JSON.parse(localStorage.contact)
            })
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(JSON.stringify(prevState.contact) != JSON.stringify(this.state.contact)){
            localStorage.contact = JSON.stringify(this.state.contact);
        }
    }

    _click(key){
        this.setState({
            ...this.state,
            select : key
        })
        console.log(this.state.select + "is selected");
    }

    _create(data){
        this.setState({
            ...this.state,
            contact : [...this.state.contact,
                data
            ]
        })
    }

    _remove(){
        if(this.state.select <0){
            return;
        }
        this.state.contact.splice(this.state.select,1);  
        this.setState({
            ...this.state,
            select : -1
        })
    }

    _modify(newname,newphone){
        this.state.contact.splice(this.state.select,1)
        this.state.contact.splice(this.state.select,0,{name : newname, phone:newphone})
        this.setState({
            ...this.state,
        })
    }

    render(){
        var mapping = this.state.contact.map((a, i)=>{
           return <div key = {i} onClick = {()=>{this._click(i)}}>{a.name}</div> 
        });

        return(
            <div>
                <h3>전화번호부 목록</h3>
                {mapping}
                <Phonebookdetail contact = {this.state.contact[this.state.select]} 
                                onRemove = {this._remove}
                                edit = {this._modify}/>
                <Phonebookcreate func = {this._create}/>
            </div>
        );
    }
}

export default Phonebook;