import React, {useState} from 'react'
import { GridColDef, DataGrid } from '@material-ui/data-grid'
import { useCarGet } from '../../custom-hooks'
import { car_calls } from '../../api'
import {Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle} from '@material-ui/core'
import { CarForm } from '../CarForm'

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
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<gridData>({data:{}})
    const [selectionModel, setSelectionModel] = useState<any>([])

    let handleOpen = () => setOpen(true)
    let handleClose = () => setOpen(false)

    let deleteData = () => {
        car_calls.delete(selectionModel)
        getData()
        setTimeout( () => {window.location.reload()}, 1000)
    }

    return (
        <div style={{height: '35vh', width: '100%'}}>
            <h2 className='text-center'>My Cars</h2>

            <DataGrid rows={carData} columns={columns}  checkboxSelection={true} onSelectionModelChange={ (item) => {
                setSelectionModel(item)
            }}/>

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id='form-dialog-title'>Update Car {selectionModel}</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Contact</DialogContentText>
                        <CarForm id={selectionModel!}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Cancel</Button>
                    <Button onClick={handleClose} color='primary'>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}