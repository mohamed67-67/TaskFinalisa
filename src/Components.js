import React, { useState } from 'react'
import MaterialTable from 'material-table'
import { useDispatch, useSelector } from 'react-redux'
import { AddAccount, EditAccount, RemoveAccount } from './Acoounts/AccountActions'



const Component = (rowData) => {

    console.log(rowData);
    
    const Accounts = useSelector(state => state.Accounts)
    const {accounts} = Accounts;
    console.log('accounts' , accounts);
    const dispatch = useDispatch()

    const name = rowData.rowData.name
    const RealAccounts = accounts.filter(acc => acc.Bank === name)


    const bool ={true: <input type='checkbox' checked />, false: <input type='checkbox' />}
    console.log(name);
    const [data, setData] = useState(RealAccounts)
    const columns = [
        {title: 'Code', field: 'code',},
        {title : 'Account Number', field: 'accountNumber' },
        {title : 'Active', field: 'active', lookup: bool},
        {title: 'Bank', field: 'Bank',  initialEditValue : name, editable: 'never' }
    ]
    console.log('data' ,data);
    return ( 
            <div className='acc'>
                <h1 style={{color: 'white', fontSize : '2rem', fontWeight: '500', textAlign: 'center', marginTop: '1rem'}} > {name} Accounts </h1>
             <MaterialTable

                editable={{
                                
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]); 
                            dispatch(AddAccount(newData));
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
                            dispatch( EditAccount(newData, index) )
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
                            dispatch(RemoveAccount(oldData))
                            resolve();
                        }, 1000);
                        
                    })
                }}

                    data ={data}
                    columns={ columns}
                    style={{color: 'darkblue', fontWeight: '500', fontSize: '1.2rem'}}
                    title= ''
            />
            
            </div>
     );
}
 
export default Component;