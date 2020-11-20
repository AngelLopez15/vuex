import { createStore } from 'vuex'

export default createStore({
  // El state es un objeto unico que contiene todo el estado de la aplicación 
  // y sirve como fuente unica de la verdad (Es parecido a la data de cada uno de los componentes)
  // La idea es cada dato que este dentro de state pueda ser accedida por cada componente
  // o por los componentes de las vistas 
  state: {
    contador:0
  },
  // Las mutaciones son las unicas que pueden modificar el state. El state no se puede modificar
  // de las vistas por que state es global. Si el state se modifica debe modificarse para todas
  // las vistas. Entoces el unico objetivo de las mutaciones es modificar el state.
  mutations: {
    // NOTA: Recordar que si el incremento es fijo no es necesario el payload
    // incrementar(state){
    //   state.contador = state.contador + 10
    // },
    incrementar(state, payload){
      state.contador = state.contador + payload
    },
    // El parametro debe ponerse dentro de la mutacion generalmente se llama payload
    // y mas abajo en accion se llama numero pero son el mismo dato
    decrementar(state, payload){
      // state.contador = state.contador - 10
      state.contador = state.contador - payload
    },
    reset(state){
      state.contador = 0
    }
  },
  // Las acciones nos sirven  para ejecutar una mutación ya que no se recomienda ejecutar 
  // una mutación directamente. Para ejecutar una mutacion se debe de hacer uso de las acciones. 
  // Las acciones tambien son de gran ayuda cuando se hacen llamados a API´s o bases de datos.
  actions: {
      // Una forma de acceder a una mutación es con el commit
      // Commit recibe el nombre de nuestra mutación
      accionIncrementar({commit}, numero){
      commit('incrementar', numero)
      },
      // En la accion debemos de pasar el parametro en este caso se llama numero
      // Por lo general se llama payload
      // Accion pude recibir un parametro que venga externo por ejemplo desde una api 
      accionDecremetar({commit}, numero){
        // Ejemplo de un dato que viene externo
        // const datoDeUnaAPI = 1000
        // commit('decrementar', datoDeUnaAPI)
        commit('decrementar', numero)
      },
      accionReset({commit}){
        commit('reset')
      },
      // Accion del boton que es Aumentar y disminuir al mismo tiempo
      // Como no podemos recibir más dos parametros en una accion lo que debemos hacer es 
      // recibir un objeto
      accionBoton({commit}, objeto){
        if (objeto.estado) {
          commit('incrementar', objeto.numero)
        } else {
          commit('decrementar', objeto.numero)
        }
      }
  },
  modules: {
  }
})
