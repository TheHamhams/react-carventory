import React, {useState} from 'react'
import { GridColDef, DataGrid } from '@material-ui/data-grid'
import { useCarGet } from '../../custom-hooks'
import { car_calls } from '../../api'

export * from './DataTable'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'make', headerName: 'Make', flex: 1},
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { field: 'color', headerName: 'Color', flex: 1},
    { field: 'accident_on_record', headerName: 'Accident on Record', flex: 1 }
]

interface gridData {
    data: {
        id?:string
    }
}

export const CarDataTable = () => {

    let {carData, getData} = useCarGet()
    let [gridData, setData] = useState<gridData>({data:{}})
    const [selectionModel, setSelectionModel] = useState<any>([])

    return (
        <div style={{height: 400, width: '100%'}}>
            <h2 className='text-center'>My Cars</h2>

            <DataGrid rows={carData} columns={columns}  onSelectionModelChange={ (item) => {
                setSelectionModel(item)
            }}/>
        </div>
    )
}