
import './App.css'
import { Form } from './components/form/form'
import { Main } from './components/main/main'

function ListMenu (){
 return (<ul className='list-menu'>
    <li> <button className='list-iten onlines'>Onlines</button></li>
    <li> <button className='list-iten offline'>Offline</button></li>
    <li> <button className='list-iten deleted'>Excluidos</button></li>
    <li> <button className='list-iten group'>Grupo</button></li>
  </ul>)
}

function App() {

  return (
    <div className='app'>
      <img className='img' src="/public/Iseelogopng.png" alt="logo isee replay" />
      <section className='main'>
          <Main></Main>
      </section>
    <section className='content'>
      <Form> venha fazer parte da equipe!!</Form>
      <ListMenu></ListMenu>
    </section>
    </div>
  )
}

export default App
