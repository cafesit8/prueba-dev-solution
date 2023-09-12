import { Form } from './components/Input'
import { Table } from './components/Table'
import { useTask } from './store/taskStore'

function App () {
  const { tasks } = useTask()
  return (
    <main className="w-full text-black h-screen flex flex-col items-center justify-center">
      <section className='m-auto lg:w-[900px] w-[90%]'>
        <header className='mb-4'>
          <h1 className='text-2xl font-semibold mb-3'>Lista de Tareas</h1>
          <Form />
        </header>
        {tasks.length === 0 ? <div className='w-full text-center'>No hay tareas</div> : <Table />}
      </section>
    </main>
  )
}

export default App
