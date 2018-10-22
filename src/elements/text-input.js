import React from "react";
import TextField from "@material-ui/core/TextField";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isValid: true,
      minLength: 0,
      maxLength: 0,
      errormessage: ""
    };
  }
  handleChange = e => {
    this.validate(e);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };
  validate = e => {
    
    this.setState({
      isValid: true
    });
    if (this.props.required && e.target.value == "") {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} is required`
      });
    } else if (
      this.props.minLength &&
      e.target.value.length < parseInt(this.props.minLength, 10)
    ) {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} lenth should be grater than ${
          this.props.minLength
        }`
      });
    } else if (
      this.props.maxLength &&
      e.target.value.length > parseInt(this.props.maxLength, 10)
    ) {
      this.setState({
        isValid: false,
        errormessage: `${e.target.placeholder} lenth should be less than ${
          this.props.maxLength
        }`
      }); 
    }
  };
  render() {
    const { value } = this.props;
    return (
      <div>
        <TextField
          error={!this.state.isValid}          
          name={this.props.name}
          value={value}
          label={this.props.label}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        {this.state.isValid == false && (
          <div>
            <span className="error-message">{this.state.errormessage} </span>
          </div>
        )}
      </div>
    );
  }
}

export default TextInput;
