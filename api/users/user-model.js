const users = [{name: "jose mercado", password: "merjos"}]
    
const find = () => {
    return Promise.resolve(users)
}

const addNewUser = ({name, password}) => {
    const  newUser = {name, password}
    users.push(newUser)
    return Promise.resolve(newUser)
}

module.exports = {find, addNewUser}