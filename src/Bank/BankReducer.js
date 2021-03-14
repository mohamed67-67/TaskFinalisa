

const banks= {"banks" :
    [{ code : '5523asd83' , name: 'Bank Misr', active : false},
    { code : '552387413' , name: 'Bank Alexandria', active : true},
    { code : '552454383' , name: 'Qatar national Bank', active : false},
    { code : '54561268' , name: 'Albank Alahly', active : true}]}
    



const BankReducer = (state = banks, action) => {
    switch(action.type) {
        case 'ADD_BANK':
            return{
                banks : action.payload
            }
            
        case 'DELETE_BANK' :
            return{
                banks: action.payload
            }
        case 'EDIT_BANK' :
            return{
                banks: action.payload
            }
        default : return state
    }
}
 
export default BankReducer;