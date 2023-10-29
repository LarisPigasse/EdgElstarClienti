import React, { useEffect, useCallback, useMemo, useRef } from 'react'
import { Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getSpedizioni, setTableData } from '../store/dataSlice'
import {
    setSelectedRows,
    addRowItem,
    removeRowItem,
    setDeleteMode,
    setSelectedRow,
    toggleModalUpdateSpedizioni,
    toggleModalViewSpedizioni,
    setDataSpedizioni
} from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'

const SpedizioniColumn = ({ row }) => {
  const dispatch = useDispatch()
  const { textTheme } = useThemeClass()

  const onView = () => {
    dispatch(setDataSpedizioni(row))
    dispatch(toggleModalViewSpedizioni(true))
  }
  return (
      <span
          className={`cursor-pointer select-none hover:${textTheme}`}
          onClick={onView}
      >
          <span className=' text-sky-500 font-semibold '>{row.id_spedizione}</span>
      </span>
  )
}

const SpedizioniData = ({ row }) => {
    return (
        <span>{dayjs(row.data_spedizione).format('DD/MM/YYYY')}</span>
    )
}

const ActionColumn = ({ row }) => {

  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch(toggleModalUpdateSpedizioni(true))
    dispatch(setDataSpedizioni(row))
  }

  const onDelete = () => {
      dispatch(setDeleteMode('single'))
      dispatch(setSelectedRow(row.id_spedizione))
  }
 
  return (
      <div className="flex justify-end text-lg">

          <Tooltip title="Modifica">
              <span
                  className="cursor-pointer p-2 hover:text-blue-500"
                  onClick={onUpdate}
              >
                  <HiOutlinePencil />
              </span>
          </Tooltip>
          <Tooltip title="Elimina">
              <span
                  className="cursor-pointer p-2 hover:text-red-500"
                  onClick={onDelete}
              >
                  <HiOutlineTrash />
              </span>
          </Tooltip>
      </div>
  )
}


const SpedizioniTable = () => {

  const tableRef = useRef(null)

  const dispatch = useDispatch()

  const { pageIndex, pageSize, sort, query, total } = useSelector(
      (state) => state.trackingSpedizioni.data.tableData
  )
  const loading = useSelector((state) => state.trackingSpedizioni.data.loading)

  const data = useSelector((state) => state.trackingSpedizioni.data.orderList)

  const fetchData = useCallback(() => {
      dispatch(getSpedizioni({ pageIndex, pageSize, sort, query }))
  }, [dispatch, pageIndex, pageSize, sort, query])

  useEffect(() => {
      dispatch(setSelectedRows([]))
      fetchData()
  }, [dispatch, fetchData, pageIndex, pageSize, sort])

  useEffect(() => {
      if (tableRef) {
          tableRef.current?.resetSelected()
      }
  }, [data])

  const tableData = useMemo(
      () => ({ pageIndex, pageSize, sort, query, total }),
      [pageIndex, pageSize, sort, query, total]
  )

  const columns = useMemo(
      () => [
          {
              header: 'Id',
              accessorKey: 'id_spedizione',
              cell: (props) => <SpedizioniColumn row={props.row.original} />,
          },
          {
              header: 'Data',
              accessorKey: 'data_spedizione',
              cell: (props) => <SpedizioniData row={props.row.original} />,
          },
          {
            header: 'Cliente',
            accessorKey: 'cliente',
          },
          {
            header: 'Corriere',
            accessorKey: 'corriere',
          },                    
          {
            header: 'Destinazione',
            accessorKey: 'destinazione',
          },
          {
            header: 'Destinatario',
            accessorKey: 'destinatario',
          },
          {
            header: 'Stato',
            accessorKey: 'stato',
          },                    
          {
              header: '',
              id: 'action',
              cell: (props) => <ActionColumn row={props.row.original} />,
          },
      ],
      []
  )

  const onPaginationChange = (page) => {
      const newTableData = cloneDeep(tableData)
      newTableData.pageIndex = page
      dispatch(setTableData(newTableData))
  }

  const onSelectChange = (value) => {
      const newTableData = cloneDeep(tableData)
      newTableData.pageSize = Number(value)
      newTableData.pageIndex = 1
      dispatch(setTableData(newTableData))
  }

  const onSort = (sort) => {
      const newTableData = cloneDeep(tableData)
      newTableData.sort = sort
      dispatch(setTableData(newTableData))
  }

  const onRowSelect = (checked, row) => {
      if (checked) {
          dispatch(addRowItem([row.id]))
      } else {
          dispatch(removeRowItem(row.id))
      }
  }

  const onAllRowSelect = useCallback(
      (checked, rows) => {
          if (checked) {
              const originalRows = rows.map((row) => row.original)
              const selectedIds = []
              originalRows.forEach((row) => {
                  selectedIds.push(row.id)
              })
              dispatch(setSelectedRows(selectedIds))
          } else {
              dispatch(setSelectedRows([]))
          }
      },
      [dispatch]
  )

  return (
      <DataTable
          ref={tableRef}
          columns={columns}
          data={data}
          loading={loading}
          pagingData={tableData}
          onPaginationChange={onPaginationChange}
          onSelectChange={onSelectChange}
          onSort={onSort}
          onCheckBoxChange={onRowSelect}
          onIndeterminateCheckBoxChange={onAllRowSelect}

      />
  )
}

export default SpedizioniTable