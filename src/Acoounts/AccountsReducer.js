
const accounts = {accounts: []}


const AccountReducer = (state= accounts, action) => {
    
    switch(action.type){
        case 'AAD_ACCOUNT' :
            return {
                accounts : action.payload
            }
        case 'DELETE_ACCOUNT' :
            return{
                accounts :action.payload
            }
        case 'EDIT_BANK' :
            return{
                accounts: action.payload
            }
        default: return state
    }
}
 
export default AccountReducer;

