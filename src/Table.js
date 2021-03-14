import React, {  useState } from 'react'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from 'react-redux'
import {AddBank, DeleteBank, EditBank} from './Bank/BankActions'

import Component from './Components'
import { Redirect } from 'react-router-dom'



const Table = () => {

    const Auth = useSelector(state => state.Auth)
    const {user} = Auth


    const Banks = useSelector(state => state.Banks)
    const {banks} = Banks
    
    console.log(Banks);
    const dispatch = useDispatch()
    
    const [data, setData] = useState(banks)
    
    const bool ={true: <input type='checkbox' checked />, false: <input type='checkbox' />}
    const columns = [
        {title: 'Code', field: 'code',},
        {title : 'Name', field: 'name', editable: 'onAdd' },
        {title : 'Active', field: 'active', lookup : bool},
    ]

    if(user.length === 0 ) return <Redirect to='login' />
    return ( 
            <div >
                <h1 style={{color: 'white', fontSize : '3rem', fontWeight: '500', textAlign: 'center'}} > Banks </h1>
                <MaterialTable

             detailPanel={rowData => {
                 console.log(rowData);
                return (
                
                <Component rowData={rowData}/>

                )}}
            

            editable={{
                
                onRowAdd: newData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        setData([...data, newData]); 
                        dispatch(AddBank(newData))
                        resolve();
                    }, 1000);
                }),
                
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const dataUpdate = [...data];
                        console.log(dataUpdate);
                        console.log(oldData.id);
                        const index = oldData.tableData.id;
                        
                        dataUpdate[index] = newData;
                        setData([...dataUpdate]);
                        console.log(index);
                        dispatch( EditBank(newData,index) )
                        resolve();
                    }, 1000);
                }),

                onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
                        dispatch(DeleteBank(oldData))
                        console.log(oldData);

                        resolve();
                    }, 1000);
                    
                })
            }}

            data ={data}
            columns={ columns}
            style={{color: 'black', fontWeight: '500', fontSize: '1.2rem'}}
            title=''
            />
            
            </div>
        );
    }
 
export default Table;









    // <MaterialTable
    //     style={{color: 'green', fontWeight: '500', fontSize: '1.2rem'}}
    //      title='MAtreria Table'
    //     data={data}
    //     columns={columns}
    // />
    // <div>
    //     <MaterialTable
           
    //     // editable={{
    //     //     // onRowAdd : (newData) =>  dispatch(AddBank(newData)),
    //     //     onRowAdd: newData =>
    //     //         new Promise((resolve, reject) => {
    //     //             setTimeout(() => {
    //     //                 setData([...data, newData]); 
    //     //                 // dispatch(AddBank(newData))
    //     //                 reject();
    //     //             }, 1000);
    //     //         }),
    //     //     onRowUpdate: (newData, oldData) =>
    //     //         new Promise((resolve, reject) => {
    //     //             setTimeout(() => {
    //     //                 const dataUpdate = [...data];
    //     //                 const index = oldData.tableData.id;
    //     //                 dataUpdate[index] = newData;
    //     //                 setData([...dataUpdate]);
    
    //     //                 reject();
    //     //             }, 1000);
    //     //         }),
    //     //     onRowDelete: oldData =>
                
    //     //         new Promise((resolve, reject) => {
    //     //             setTimeout(() => {
    //     //                 const dataDelete = [...data];
    //     //                 const index = oldData.tableData.id;
    //     //                 dataDelete.splice(index, 1);
    //     //                 setData([...dataDelete]);
    
    //     //                 reject();
    //     //             }, 1000);
    //     //             console.log(oldData)
    //     //         })
    //     // }}

        
        
        
    //     style={{color: 'green', fontWeight: '500', fontSize: '1.2rem'}}
    //      title='MAtreria Table'
    //     data={data}
    //     columns={columns}
    //     options={{
    //         exportButton: true,
    //     }}
    //      />
    // </div>