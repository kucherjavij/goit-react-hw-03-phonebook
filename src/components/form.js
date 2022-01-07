import React, {Component} from "react";
import PropTypes from "prop-types";
import {Input} from "./input.styled"
import {DeleteBtn } from "./contactList.styled"


class Form extends Component{
state = {
    name: '',
    number: ''
}

hendleInputChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
    }

    handleSubmit = e=> {
        
        e.preventDefault();
    this.props.onSubmit(this.state)  
    this.setState({name:'', number:''})
    }
    

render(){
    return(
        <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <br/>
      <Input
  type="text"
  value={this.state.name}
  onChange={this.hendleInputChange}
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/></label><br/>
<label>
    Number<br/>
<Input
  type="tel"
  value={this.state.number}
  onChange={this.hendleInputChange}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
<br/>
<DeleteBtn type="submit" >Add contact</DeleteBtn>
</form>
    )
}

}
Form.propTypes={
    onSubmit:  PropTypes.func
}

export default Form