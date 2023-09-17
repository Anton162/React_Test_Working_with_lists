import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: 'Anton',
          lastname: 'Petukh',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, numquam?',
          age: 30,
          isHappy: true
        },
        {
          id: 2,
          firstname: 'Andrey',
          lastname: 'Alc',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, numquam?',
          age: 26,
          isHappy: false
        }
      ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)

}
  

  render () {
    return (<div>
    <Header title="Список пользователей" />
    <main>
      <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
    </main>
    <aside>
      <AddUser onAdd={this.addUser}/>
    </aside>
  
</div>)
}

deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
}

editUser(user) {
  console.log(user)
}

addUser(user) {
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}]})
  }

}

export default App