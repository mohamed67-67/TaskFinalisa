

const AuthAction = (name) => (dispatch,getState) => {

    const {
        Auth : {user},
    } = getState()
    dispatch({
        type: 'ADD_NAME',
        payload: [name,...user]
    })
}
 
export default AuthAction;

