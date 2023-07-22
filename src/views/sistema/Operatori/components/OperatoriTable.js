import React, { useEffect, useCallback, useMemo, useRef } from 'react'
import { Tooltip } from 'components/ui'
import { DataTable } from 'components/shared'
import { HiOutlineEye, HiOutlineTrash } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getOperatori, setTableData } from '../store/dataSlice'
import {
    setSelectedRows,
    addRowItem,
    removeRowItem,
    setDeleteMode,
    setSelectedRow,
} from '../store/stateSlice'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useNavigate } from 'react-router-dom'
import cloneDeep from 'lodash/cloneDeep'

const OperatoriColumn = ({ row }) => {
  const { textTheme } = useThemeClass()
  const navigate = useNavigate()

  const onView = useCallback(() => {
      navigate(`/app/sistema/operatori-details/${row.id}`)
  }, [navigate, row])

  return (
      <span
          className={`cursor-pointer select-none font-semibold hover:${textTheme}`}
          onClick={onView}
      >
          #{row.id}
      </span>
  )
}

const ActionColumn = ({ row }) => {

  const dispatch = useDispatch()
  const { textTheme } = useThemeClass()
  const navigate = useNavigate()

  const onDelete = () => {
      dispatch(setDeleteMode('single'))
      dispatch(setSelectedRow(row.id_operatore))
  }

  const onView = useCallback(() => {
      navigate(`/app/sistema/operatori-details/${row.id_operatore}`)
  }, [navigate, row])

  return (
      <div className="flex justify-end text-lg">
          <Tooltip title="View">
              <span
                  className={`cursor-pointer p-2 hover:${textTheme}`}
                  onClick={onView}
              >
                  <HiOutlineEye />
              </span>
          </Tooltip>
          <Tooltip title="Delete">
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


const OperatoriTable = () => {

  const tableRef = useRef(null)

  const dispatch = useDispatch()

  const { pageIndex, pageSize, sort, query, total } = useSelector(
      (state) => state.sistemaOperatore.data.tableData
  )
  const loading = useSelector((state) => state.sistemaOperatore.data.loading)

  const data = useSelector((state) => state.sistemaOperatore.data.orderList)

  const fetchData = useCallback(() => {
      dispatch(getOperatori({ pageIndex, pageSize, sort, query }))
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
              accessorKey: 'id_operatore',
              cell: (props) => <OperatoriColumn row={props.row.original} />,
          },
          {
              header: 'Operatore',
              accessorKey: 'operatore',
          },
          {
            header: 'Email',
            accessorKey: 'email',
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
          selectable
      />
  )
}

export default OperatoriTable