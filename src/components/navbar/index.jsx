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
      tittleButton: 'Tambah Santri',
      outline: null,
      className: ''
    }

    const modal = {
      toggleModal: () => this.actionModal.onToggle(),
      isOpen: this.state.showModal,
      tittleHeader: 'Tambah Data Santri',
      tittleButton: 'Simpan',
      colorButtonLeft: 'primary',
      colorButtonRight: 'secondary',
      ref: ref => { this.actionModal = ref },
      multiInput: [
        {
          name: 'name',
          tittleInput: 'Nama Santri',
          onChange: this.props.onHandleInput,
          placeholder: 'masukkan nama',
          value: this.props.postDataSantri.name
        },
        {
          name: 'studyProgram',
          tittleInput: 'Jurusan Santri',
          onChange: this.props.onHandleInput,
          placeholder: 'masukkan jurusan',
          value: this.props.postDataSantri.studyProgram
        }
      ],
      buttonModal: [
        {
          color: 'primary',
          className: '',
          onClick: () => {
            this.actionModal.onToggle()
            this.props.onHandlePost()
          },
          tittleButton: 'Simpan',
          outline: ''
        },
        {
          color: 'secondary',
          className: '',
          onClick: () => this.actionModal.onToggle(),
          tittleButton: 'Batal',
          outline: true
        }
      ]
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
