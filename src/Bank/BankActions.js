

export const AddBank = (bank) => (dispatch, getState) => {

    const {
        Banks : {banks},
    } = getState();

    
    dispatch({
        type: 'ADD_BANK',
        payload: [ bank,...banks]
    })
}

export const DeleteBank = bank => (dispatch, getState) => {
    const {
        Banks : {banks},
    } =getState();

    dispatch({
        type : 'DELETE_BANK',
        payload : banks.filter(bk => bk.name !== bank.name)
    })
}



export const EditBank = (newBank, index) => (dispatch, getState) => {
    const {
        Banks : {banks},
    } = getState()
    
    banks[index] = newBank

    dispatch({
        type: 'EDIT_BANK',
        payload : banks
    })
}
