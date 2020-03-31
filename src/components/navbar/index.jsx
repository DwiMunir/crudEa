import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap'

const NavbarT = (props) => {
  const [isNavbarVisible, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isNavbarVisible)

  const [isCreateModalVisible, setCreateModal] = useState(false)
  const modalToggle = () => setCreateModal(!isCreateModalVisible)

  return (
    <div className='continer'>

      <Navbar
        color='light'
        light
        expand='md'
        className='rounded'
      >
        <Button
          color='info'
          onClick={modalToggle}
        >
          <i className='fa fa-user-plus' aria-hidden='true' />
          Tambah Santri
        </Button>

        {/* MODAL */}
        <Modal isOpen={isCreateModalVisible} toggle={modalToggle}>
          <ModalHeader toggle={modalToggle}>Tambah Santri</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='nama'>Nama Santri</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Nama Santri'
                  onChange={(e) => props.onHandleInput(e)}
                  value={props.postDataSantri.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for='nama'>Jurusan Santri</Label>
                <Input
                  type='text'
                  name='studyProgram'
                  id='studyProgram'
                  placeholder='Nama Santri'
                  onChange={props.onHandleInput}
                  value={props.postDataSantri.studyProgram}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color='primary'
              onClick={() => {
                modalToggle()
                props.onHandlePost()
              }}
            >
              Simpan
            </Button>
            <Button
              color='secondary'
              onClick={modalToggle}
            >
              Batal
            </Button>
          </ModalFooter>
        </Modal>

        {/* FORM INPUT */}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isNavbarVisible} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                value={props.value}
                onChange={(e) => props.onSearchSantri(e)}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

NavbarT.propTypes = {
  postDataSantri: PropTypes.object,
  value: PropTypes.string,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func,
  onSearchSantri: PropTypes.func
}
export default NavbarT
