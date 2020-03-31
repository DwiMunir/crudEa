import React from 'react'
import DataSantri from './dataSantri'
import PageNotFound from './page404'
import PropTypes from 'prop-types'

const Contents = (props) => {
  return (
    <div className='container-fluid'>
      {props.dataSantri
        ? (
          <DataSantri
            value={props.value}
            newDataSantri={props.newDataSantri}
            postDataSantri={props.postDataSantri}
            dataSantri={props.dataSantri}
            onDataUpdate={props.onDataUpdate}
            onHandleInput={props.onHandleInput}
            onHandleUpdate={props.onHandleUpdate}
            onHandleDelete={props.onHandleDelete}
          />
        )
        : <PageNotFound />}
    </div>
  )
}
Contents.propTypes = {
  dataSantri: PropTypes.array,
  onDataUpdate: PropTypes.func,
  value: PropTypes.string,
  newDataSantri: PropTypes.array,
  postDataSantri: PropTypes.object,
  onHandleInput: PropTypes.func,
  onHandleUpdate: PropTypes.func,
  onHandleDelete: PropTypes.func
}
export default Contents
