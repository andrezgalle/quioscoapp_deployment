import Layout from "@/layout/Layout"
import { use, useEffect, useCallback } from "react"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"

const total = () => {

  const {pedido,nombre,setNombre,colocarOrden,total} = useQuiosco()

  const comprobarFormulario = useCallback(() =>{
    return pedido.length === 0 || nombre === '' || nombre.length < 3
  },[pedido, nombre])

  useEffect(()=>{
    comprobarFormulario()
  },[pedido,comprobarFormulario])

  
  return (
    <Layout pagina='Total y Confirmar Pedido'>
        <h1 className="text-4xl font-black">
            Total y Confirmar Pedido
        </h1>
        <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

        <form onSubmit={colocarOrden}>
          <div>
            <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
            <input type="text" id="nombre" className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md" value={nombre} onChange={e=> setNombre(e.target.value)}/>
          </div>

          <div className="mt-10">
            <p className="text-2xl">Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span></p>
          </div>

          <div>
            <input type="submit" value="Confirmar Pedido" className={` ${comprobarFormulario() ? 'bg-indigo-100':'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto py-2 px-4 rounded uppercase font-bold text-white text-center mt-5`} disabled={comprobarFormulario()}/>
          </div>
        </form>
    </Layout>
  )
}

export default total