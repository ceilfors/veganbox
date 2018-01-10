import React, { Component } from 'react';
import {PageHeader, Col, Form, FormControl, FormGroup, ControlLabel, Checkbox, Button} from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Col componentClass={ControlLabel} sm={5}>
        {label}
      </Col>
      <Col sm={2}>
        <FormControl {...props} />
      </Col>
    </FormGroup>
  );
}

class AddFood extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: '',
      isVegan: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const divStyle={float: 'right', marginTop: '11px'}
    const divStyleFood={marginTop: '50px'}

    return (
      <div className="AddFood">
        <PageHeader style={{display: 'flex', justifyContent: 'center'}}>Vegan Box Backoffice</PageHeader>
        <Form horizontal style={divStyleFood}>
          <FieldGroup
            id="food"
            type="text"
            label="Food"
            placeholder="Enter food"
            food={ this.state.food }
            onChange={this.handleInputChange}
          />
          <Col componentClass={ControlLabel} sm={5}>
            Is Vegan?
          </Col>
          <Col sm={2}>
            <Checkbox
              id='isVegan'
              name="isVegan"
              checked={this.state.isVegan}
              onChange={this.handleInputChange}
            />
          </Col>
          <FormGroup>
            <Col sm={7} style={divStyle}>
              <Button
                bsStyle="primary"
                type='submit'
                id='submit'
                onClick={ this.props.submitFn }
              >
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddFood;
