
export const AddAccount = (account) => (dispatch, getState) => {

    const {
        Accounts : {accounts},
    } = getState()

    dispatch({
        type: 'AAD_ACCOUNT',
        payload : [...accounts, account]
    })
}

export const RemoveAccount = (account) => (dispatch, getState) => {
    const {
        Accounts : {accounts},
    } = getState()

    dispatch({
        type: 'DELETE_ACCOUNT',
        payload : accounts.filter(acc => acc.id !== account.id)
    })
}

export const EditAccount = (newacc, index) => (dispatch, getState) => {
    const {
        Accounts : {accounts},
    } = getState();

    accounts[index] = newacc
    dispatch({
        type: 'EDIT_BANK',
        payload: accounts
    })
}