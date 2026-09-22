import "./input.style.css"

export function Input({type, name, id, className}:any){
   return( <input type={type} name={name} id={id} className={className}/>)
}