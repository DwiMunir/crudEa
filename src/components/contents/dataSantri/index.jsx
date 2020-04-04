import React, { useState, Component } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  Modal,
  ModalHeader,
  ModalFooter,
  Form,
  ModalBody
} from 'reactstrap'
import { ActionButton, ActionGroupInput, ActionModal } from '../../Action'

let isIdUser
let modalVisible
const DataSantri = (props) => {
  return (
    <Table style={{ color: 'white' }}>
      <Thead />
      <Tbody {...props} />
    </Table>
  )
}

const Thead = () => {
  return (
    <thead>
      <tr>
        <th className='col-lg-3' scope='col'>ID</th>
        <th className='col-lg-3' scope='col'>Nama</th>
        <th className='col-lg-3' scope='col'>Jurusan</th>
        <th className='col-lg-3 text-center' scope='col'>Action</th>
      </tr>
    </thead>
  )
}

class Tbody extends Component {
  render () {
    // const [isModalVisible, setModal] = useState(false)
    // const onToggleModal = () => setModal(!isModalVisible)

    // const isEditModalVisible = isModalVisible && modalVisible === 'edit'
    // const isDeleteModalVisible = isModalVisible && modalVisible === 'delete'
    return (
      <tbody>
        {renderDataSantri(this.props).map((item, id) => (
          <tr key={id}>
            <th className='col-3' scope='row'>{item.id}</th>
            <td className='col-3'>{item.name}</td>
            <td className='col-3'>{item.studyProgram}</td>
            <td className='col-3'>
              <div className='row justify-content-center'>
                <ActionButton
                  tittle='Hapus'
                  color='danger'
                  className='mr-2'
                  onClick={() => {
                    this.actionModal.onToggle()
                    isIdUser = item.id
                    modalVisible = 'delete'
                  }}
                />

                <ActionButton
                  tittle='Ubah'
                  color='warning'
                  onClick={() => {
                    this.props.onDataUpdate(item)
                    this.actionModal.onToggle()
                    modalVisible = 'edit'
                  }}
                />

              </div>

            </td>
          </tr>
        ))}
        <ActionModal
          ref={ref => { this.actionModal = ref }}
          postDataSantri={this.props.postDataSantri}
        />
        {/* <ActionModal
        postDataSantri={props.postDataSantri}
        onHandleUpdate={props.onHandleUpdate}
        onHandleInput={props.onHandleInput}
        onToggleModal={onToggleModal}
        isModalVisible={isEditModalVisible}
      />

      <ActionModal
        isModalVisible={isDeleteModalVisible}
        onToggleModal={onToggleModal}
        onHandleDelete={props.onHandleDelete}
        postDataSantri={props.postDataSantri}
      /> */}

      </tbody>
    )
  }
}

const renderDataSantri = (props) => {
  return props.value
    ? props.newDataSantri
    : props.dataSantri
}
// const ActionModal = (props) => {
//   const EditModal = modalVisible === 'edit'
//   const DeleteModal = modalVisible === 'delete'

//   const titleHeader = EditModal
//     ? 'Update Data Santri'
//     : DeleteModal
//       ? 'Yakin Hapus Data ini?'
//       : 'Salah passing modalVisible'

//   const onToggleHeader = EditModal
//     ? props.onToggleModal
//     : DeleteModal
//       ? null
//       : () => {}
//   const titleButton = EditModal
//     ? 'Ubah'
//     : DeleteModal
//       ? 'Hapus'
//       : 'Salah Button'
//   const colorButtonLeft = DeleteModal
//     ? 'secondary'
//     : EditModal
//       ? 'info'
//       : 'success'
//   const colorButtonRight = DeleteModal
//     ? 'info'
//     : EditModal
//       ? 'secondary'
//       : 'success'
//   const onClick = DeleteModal
//     ? () => {
//       props.onHandleDelete(isIdUser)
//       props.onToggleModal()
//     }
//     : EditModal
//       ? () => {
//         props.onToggleModal()
//         props.onHandleUpdate(props.postDataSantri.id)
//       }
//       : () => {}
//   const classNameHeader = DeleteModal ? 'justify-content-center border-0' : ''
//   const classNameFooter = DeleteModal ? 'justify-content-center border-0' : ''

//   return (
//     <Modal
//       isOpen={props.isModalVisible}
//       toggle={() => props.onToggleModal()}
//     >
//       <ActionModalHeader
//         onToggleHeader={onToggleHeader}
//         classNameHeader={classNameHeader}
//         titleHeader={titleHeader}
//       />
//       <ActionModalBody
//         isModalBody={EditModal}
//         postDataSantri={props.postDataSantri}
//         onHandleInput={props.onHandleInput}
//       />
//       <ActionModalFooter
//         titleButton={titleButton}
//         colorButtonLeft={colorButtonLeft}
//         colorButtonRight={colorButtonRight}
//         DeleteModal={DeleteModal}
//         onClick={onClick}
//         EditModal={EditModal}
//         onToggleModal={props.onToggleModal}
//         classNameFooter={classNameFooter}
//       />
//     </Modal>
//   )
// }

const ActionModalHeader = (props) => {
  const onToggleHeader = props.onToggleHeader
  return (
    <ModalHeader
      toggle={onToggleHeader}
      className={props.classNameHeader}
    >
      {props.titleHeader}
    </ModalHeader>
  )
}
const ActionModalBody = (props) => {
  if (props.isModalBody) {
    return (
      <ModalBody>
        <Form>
          <ActionGroupInput
            name='name'
            tittleInput='Update Nama Santri'
            value={props.postDataSantri.name}
            onChange={(e) => props.onHandleInput(e)}
          />
          <ActionGroupInput
            name='studyProgram'
            tittleInput='Update Study Program Santri'
            value={props.postDataSantri.studyProgram}
            onChange={(e) => props.onHandleInput(e)}
          />
        </Form>
      </ModalBody>
    )
  } else {
    return null
  }
}

const ActionModalFooter = (props) => {
  return (
    <ModalFooter
      className={props.classNameFooter}
    >
      <ActionButton
        tittle={props.titleButton}
        color={props.colorButtonLeft}
        outline={props.DeleteModal}
        onClick={props.onClick}
        className='px-5'
      />

      <ActionButton
        tittle='Batal'
        color={props.colorButtonRight}
        outline={props.EditModal}
        className='px-5'
        onClick={() => props.onToggleModal()}
      />
    </ModalFooter>
  )
}
Tbody.propTypes = {
  onDataUpdate: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func,
  onHandleInput: PropTypes.func,
  postDataSantri: PropTypes.object
}
// ActionModal.propTypes = {
//   isModalVisible: PropTypes.bool,
//   postDataSantri: PropTypes.object,
//   onToggleModal: PropTypes.func,
//   onHandleDelete: PropTypes.func,
//   onHandleUpdate: PropTypes.func,
//   onHandleInput: PropTypes.func

// }
ActionModalHeader.propTypes = {
  onToggleHeader: PropTypes.func,
  classNameHeader: PropTypes.string,
  titleHeader: PropTypes.string
}
ActionModalBody.propTypes = {
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func
}
ActionModalFooter.propTypes = {
  classNameFooter: PropTypes.string,
  titleButton: PropTypes.string,
  colorButtonLeft: PropTypes.string,
  DeleteModal: PropTypes.bool,
  onClick: PropTypes.func,
  colorButtonRight: PropTypes.string,
  EditModal: PropTypes.bool,
  onToggleModal: PropTypes.func
}
export default DataSantri
