export default function FormularioContato(){
        function enviarFormulario(event){
            event.preventDefault()
            const nome = event.target[0].value
            const mensagem = event.target[1].value
            alert(`Formulario enviado por ${nome}: ${mensagem}`)
     
    }
   
    return (
      <form onSubmit={enviarFormulario}>
      <input type="text" placeholder="nome" />
      <input type="text" placeholder="mensagem" />
      <button type="submit">enviar</button>
  
     </form>
    )
  }