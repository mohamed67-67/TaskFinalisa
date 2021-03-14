
const AuthREducer = (state = {"user" : []}, action) => {
    switch (action.type) {
        case 'ADD_NAME' : 
            return{
                user : action.payload
            }
        default: return state
    }
}
 
export default AuthREducer;