import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Form, Input, NavItem, Nav } from 'reactstrap'

const ActionButton = (props) => {
  return (
    <Button
      color={props.color}
      onClick={props.onClick}
      className={props.className}
      outline={props.outline}
    >
      {props.tittleButton}
    </Button>
  )
}

const ActionGroupInput = (props) => {
  return (
    <FormGroup>
      <Label for={props.name}>{props.tittleInput}</Label>
      <ActionInput {...props} />
    </FormGroup>
  )
}

const ActionInput = (props) => {
  return (
    <Input
      type={props.type}
      name={props.name}
      className={props.className}
      id={props.name}
      placeholder={props.placeholder}
      onChange={(e) => props.onChange(e)}
      value={props.value}
    />
  )
}

class ActionModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  onToggle = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render () {
    return (
      <Modal
        isOpen={this.state.showModal}
        toggle={this.toggleVisible}
      >
        {this.ActionHeader()}
        {this.ActionBody()}
        {this.ActionFooter()}

      </Modal>
    )
  }

  ActionHeader () {
    return (
      <ModalHeader
        className={this.props.classNameHeader}
        toggle={this.props.deleteModal ? null : this.onToggle}
      >
        {this.props.tittleHeader}
      </ModalHeader>
    )
  }

  ActionBody () {
    return (
      <ModalBody className={this.props.classNameBody}>
        <Form>
          {this.props.multiInput.map((item, index) => (
            <ActionGroupInput
              key={index}
              {...item}
            />
          ))}
        </Form>
      </ModalBody>
    )
  }

  ActionGroupInput (props) {
    return (
      <FormGroup>
        <Label for={props.name}>{props.tittleInput}</Label>
        <ActionInput {...props} />
      </FormGroup>
    )
  }

  ActionFooter () {
    return (
      <ModalFooter
        className={this.props.classNameFooter}
      >
        {this.props.buttonModal.map((item, index) => (
          <ActionButton
            onClick={() => {
              item.onClick()
            }}
            key={index}
            {...item}
          />
        ))}
      </ModalFooter>
    )
  }
}

const ActionCollapse = (props) => {
  const search = {
    className: 'form-control mr-sm-2',
    type: 'search',
    placeholder: 'Search',
    onChange: props.onSearchSantri
  }
  return (
    <Nav className='ml-auto' navbar>
      <NavItem>
        <ActionInput {...search} />
      </NavItem>
    </Nav>
  )
}

ActionButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  tittleButton: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

ActionButton.defaultProps = {
  className: '',
  tittle: 'custom button',
  color: 'success',
  outline: false
}

ActionModal.propTypes = {
  isOpen: PropTypes.bool,
  inputName: PropTypes.string,
  inputStudy: PropTypes.string,
  tittleName: PropTypes.string,
  tittleStudy: PropTypes.string,
  tittleHeader: PropTypes.string,
  className: PropTypes.string,
  postDataSantri: PropTypes.object,
  classNameBody: PropTypes.string,
  classNameHeader: PropTypes.string,
  classNameFooter: PropTypes.string,
  colorButtonLeft: PropTypes.string,
  colorButtonRight: PropTypes.string,
  tittleButton: PropTypes.string,
  multiInput: PropTypes.array,
  editModal: PropTypes.bool,
  deleteModal: PropTypes.bool,
  buttonModal: PropTypes.array,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func,
  onClick: PropTypes.func
}
ActionGroupInput.propTypes = {
  name: PropTypes.string,
  tittleInput: PropTypes.string
}
ActionInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}
ActionCollapse.propTypes = {
  onSearchSantri: PropTypes.func,
  isOpen: PropTypes.bool
}

export {
  ActionButton,
  ActionInput,
  ActionModal,
  ActionCollapse,
  ActionGroupInput
}
