import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const renderDataSantri = (props) => {
  return props.searchedSantri && props.value
    ? props.newDataSantri
    : props.dataSantri
}
let isIdUser
const DataSantri = (props) => {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const [deletModal, setDeleteModal] = useState(false)
  const toggleDelete = () => setDeleteModal(!deletModal)

  return (
    <Table style={{ color: 'white' }}>
      <thead>
        <tr>
          <th className='col-lg-3' scope='col'>ID</th>
          <th className='col-lg-3' scope='col'>Nama</th>
          <th className='col-lg-3' scope='col'>Jurusan</th>
          <th className='col-lg-3 text-center' scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {renderDataSantri(props).map((item, id) => (
          <tr key={id}>
            <th className='col-3' scope='row'>{item.id}</th>
            <td className='col-3'>{item.name}</td>
            <td className='col-3'>{item.studyProgram}</td>
            <td className='col-3'>
              <div className='row justify-content-center'>
                <Button
                  color='danger'
                  className='mr-2'
                  onClick={() => {
                    toggleDelete()
                    isIdUser = item.id
                  }}
                >
                  Delete
                </Button>
                <Button
                  color='warning'
                  onClick={() => {
                    toggle()
                    props.onDataUpdate(item)
                  }}
                >
                  Edit
                </Button>

              </div>

            </td>
          </tr>
        ))}
        <Modal isOpen={deletModal} toggle={toggleDelete}>
          <ModalHeader toggle={toggleDelete}>Delete Data Santri</ModalHeader>
          <ModalBody>
            <h2>Yakin Mau Menghapus?</h2>
          </ModalBody>
          <ModalFooter>
            <Button
              color='danger'
              onClick={() => {
                toggleDelete()
                props.onHandleDelete(isIdUser)
              }}
            >
              Delete
            </Button>
            <Button
              color='secondary'
              outline
              onClick={toggleDelete}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update data santri</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for='name'>Update Nama Santri</Label>
                <Input
                  type='text'
                  name='name'
                  placeholder='Nama Santri'
                  id='name'
                  value={props.postDataSantri.name}
                  onChange={(e) => props.onHandleInput(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for='username'>Update Jurusan Santri</Label>
                <Input
                  type='text'
                  name='studyProgram'
                  id='studyProgram'
                  value={props.postDataSantri.studyProgram}
                  onChange={(e) => props.onHandleInput(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color='primary'
              onClick={() => {
                toggle()
                props.onHandleUpdate(props.postDataSantri.id)
              }}
            >
              Update
            </Button>
            <Button
              color='secondary'
              outline
              onClick={toggle}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </tbody>
    </Table>
  )
}

DataSantri.propTypes = {
  onDataUpdate: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func,
  postDataSantri: PropTypes.object

}
export default DataSantri
