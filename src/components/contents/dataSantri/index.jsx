import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActionButton, ActionModal } from '../../Action'
import { Table } from 'reactstrap'

let isIdUser
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
  constructor (props) {
    super(props)
    this.state = {
      identityModal: ''
    }
  }

  render () {
    const editModal = this.state.identityModal === 'edit'
    const deleteModal = this.state.identityModal === 'delete'

    const tittleHeader = editModal
      ? 'Update Data Santri'
      : deleteModal
        ? 'Yakin Hapus Data ini?'
        : 'Salah passing modalVisible'

    const tittleButton = editModal
      ? 'Ubah'
      : deleteModal
        ? 'Hapus'
        : 'Salah Button'
    const colorButtonLeft = deleteModal
      ? 'secondary'
      : editModal
        ? 'info'
        : 'success'
    const colorButtonRight = deleteModal
      ? 'info'
      : editModal
        ? 'secondary'
        : 'success'
    const onClick = deleteModal
      ? () => this.props.onHandleDelete(isIdUser)
      : editModal
        ? () => this.props.onHandleUpdate(this.props.postDataSantri.id)
        : null
    const classNameHeader = deleteModal ? 'justify-content-center border-0' : ''
    const classNameBody = deleteModal ? 'd-none' : ''
    const classNameFooter = deleteModal ? 'justify-content-center border-0' : ''

    const multiInput = [
      {
        name: 'name',
        tittleInput: 'Update Nama Santri',
        onChange: this.props.onHandleInput,
        placeholder: 'masukkan nama',
        value: this.props.postDataSantri.name
      },
      {
        name: 'studyProgram',
        tittleInput: 'Update Jurusan Santri',
        onChange: this.props.onHandleInput,
        placeholder: 'masukkan jurusan',
        value: this.props.postDataSantri.studyProgram
      }
    ]
    const multipleButton = [
      {
        color: colorButtonLeft,
        className: 'px-5',
        onClick: () => {
          onClick()
          this.actionModal.onToggle()
        },
        tittleButton: tittleButton,
        outline: deleteModal
      },
      {
        color: colorButtonRight,
        className: 'px-5',
        onClick: () => this.actionModal.onToggle(),
        tittleButton: 'batal',
        outline: editModal
      }
    ]
    const actionButtonModal = (item) => (
      [
        {
          color: 'danger',
          className: 'mr-2',
          onClick: () => {
            this.setState({
              identityModal: 'delete'
            })
            this.actionModal.onToggle()
            isIdUser = item.id
          },
          tittleButton: 'Hapus',
          outline: false
        },
        {
          color: 'warning',
          className: '',
          onClick: () => {
            this.setState({
              identityModal: 'edit'
            })
            this.actionModal.onToggle()
            isIdUser = item.id
            this.props.onDataUpdate(item)
          },
          tittleButton: 'Edit',
          outline: false
        }
      ]
    )
    return (
      <tbody>
        {renderDataSantri(this.props).map((item, id) => (
          <tr key={id}>
            <th className='col-3' scope='row'>{item.id}</th>
            <td className='col-3'>{item.name}</td>
            <td className='col-3'>{item.studyProgram}</td>
            <td className='col-3'>
              <div className='row justify-content-center'>
                {actionButtonModal(item).map((itemBtn, index) => (
                  <ActionButton
                    key={index}
                    {...itemBtn}
                  />
                ))}

              </div>

            </td>
          </tr>
        ))}

        <ActionModal
          ref={ref => { this.actionModal = ref }}
          tittleHeader={tittleHeader}
          editModal={editModal}
          deleteModal={deleteModal}
          classNameHeader={classNameHeader}
          classNameBody={classNameBody}
          classNameFooter={classNameFooter}
          onClick={onClick}
          multiInput={multiInput}
          onHandleInput={this.props.onHandleInput}
          buttonModal={multipleButton}
        />

      </tbody>
    )
  }
}

const renderDataSantri = (props) => {
  return props.value
    ? props.newDataSantri
    : props.dataSantri
}

Tbody.propTypes = {
  postDataSantri: PropTypes.object,
  onDataUpdate: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func,
  onHandleInput: PropTypes.func,
  onHandlePost: PropTypes.func
}
export default DataSantri
