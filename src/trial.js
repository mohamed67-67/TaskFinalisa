import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import {AddBank} from './Bank/BankActions'

const Trial = () => {

    const alo = {id: '1', code : '5523asd83' , name: 'Bank Misr', active : false}
    const Banks = useSelector(state => state.Banks)
    const {banks} = Banks
    const dispatch = useDispatch()
    console.log(Banks);
    
    
    return ( 
        <div>
            <h1>
                trial
            </h1>
            {banks.map(bank => {
                return(
                    <h5> {bank.name} </h5>
                )
            })}
            <button onClick={ () =>  dispatch(AddBank(alo))}>add alo</button>
        </div>
     );
}

//  const mapStateToProps = (state) => {
//     return{
//         banks : state.Banks
//     }
//  }
//  const mapDispatchToProps = (dispatch) => {
//     return{
//         AddBank : (alo) => dispatch(AddBank(alo))
//     }
//  }
 
export default Trial;