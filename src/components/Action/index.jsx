import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Form, Input, Collapse, NavItem, Nav } from 'reactstrap'

const ActionButton = (props) => {
  return (
    <Button
      color={props.color}
      onClick={props.onClick}
      className={props.className}
      outline={props.outline}
    >
      {props.tittle}
    </Button>
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
        toggle={this.toggleModal}
      >
        {this.ActionHeader()}
        {this.ActionBody()}
        {this.ActionFooter()}

      </Modal>
    )
  }

  ActionHeader () {
    return (
      <ModalHeader>
        {this.props.tittleHeader}
      </ModalHeader>
    )
  }

  ActionBody () {
    const nameSantri = {
      name: this.props.inputName,
      tittleInput: this.props.tittleName,
      placeholder: this.props.tittleName,
      onChange: (e) => this.props.onHandleInput(e),
      value: this.props.postDataSantri.name
    }
    const studySantri = {
      name: this.props.inputStudy,
      tittleInput: this.props.tittleStudy,
      onChange: this.props.onHandleInput,
      placeholder: this.props.tittleStudy,
      value: this.props.postDataSantri.studyProgram
    }
    return (
      <ModalBody className={this.props.className}>
        <Form>
          <ActionGroupInput {...nameSantri} />
          <ActionGroupInput {...studySantri} />
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
    const saveButton = {
      color: 'primary',
      onClick: () => {
        this.props.onHandlePost()
        this.onToggle()
      },
      tittle: 'Simpan'
    }

    const cancelButton = {
      color: 'secondary',
      onClick: () => this.onToggle(),
      tittle: 'Batal'
    }
    return (
      <ModalFooter>
        <ActionButton {...saveButton} />
        <ActionButton {...cancelButton} />
      </ModalFooter>
    )
  }
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
      onChange={props.onChange}
      value={props.value}
    />
  )
}

const ActionCollapse = (props) => {
  const search = {
    className: 'form-control mr-sm-2',
    type: 'search',
    placeholder: 'Search',
    onChange: (e) => props.onSearchSantri(e)
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
  tittle: PropTypes.string,
  className: PropTypes.string,
  outline: PropTypes.bool
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
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func,
  toggleModal: PropTypes.func
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
