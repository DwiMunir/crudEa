import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarToggler, Collapse } from 'reactstrap'
import { ActionButton, ActionModal, ActionCollapse } from '../Action'

class NavbarT extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCollapse: false
    }
  }

  onToggle = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  onToggleCollapse = () => {
    this.setState({
      showCollapse: !this.state.showCollapse
    })
  }

  render () {
    const button = {
      color: 'info',
      onClick: () => this.actionModal.onToggle(),
      tittle: 'Tambah Santri'
    }
    const modal = {
      toggleModal: () => this.actionModal.onToggle(),
      isOpen: this.state.showModal,
      tittleHeader: 'Tambah Data Santri',
      inputName: 'name',
      tittleName: 'Nama Santri',
      tittleStudy: 'Jurusan Santri',
      inputStudy: 'studyProgram',
      ref: ref => { this.actionModal = ref }
    }
    const collapse = {
      onSearchSantri: this.props.onSearchSantri,
      isOpen: this.state.showCollapse
    }
    return (
      <div className='continer'>
        <Navbar
          color='light'
          light
          expand='md'
          className='rounded'
        >
          <ActionButton {...button} />
          <ActionModal {...modal} {...this.props} />
          <NavbarToggler onClick={() => this.onToggleCollapse()} />
          <Collapse isOpen={this.state.showCollapse} navbar>
            <ActionCollapse {...collapse} />
          </Collapse>

        </Navbar>
      </div>
    )
  }
}

NavbarT.propTypes = {
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func,
  onSearchSantri: PropTypes.func
}
export default NavbarT
