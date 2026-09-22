import { Input } from "../input/input"


export function Form(props:any){
  const name = "Joãozin Pneu"
  return (
    <div className='div-form'>
      <h2>{name}, {props.children}</h2>
      <form action="" className='form'>
        <label htmlFor="name">Nome</label>
        <Input type="text" name="name" id="" className="inputFiuld"/>
        <label htmlFor="email">Email</label>
        <Input type="text" name="email" id="" className="inputFiuld" />
        <label htmlFor="phone">Telefone</label>
        <Input type="text" name="phone" id="" className="inputFiuld"/>
        <button className='btn-submit'>Enviar</button>
      </form>
    </div>
  )
}