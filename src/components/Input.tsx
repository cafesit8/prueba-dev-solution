import { Input } from '@material-tailwind/react'
import { ButtonDefault } from '../components/Button'
import { useForm } from 'react-hook-form'
import type { Task } from '../types'
import { useTask } from '../store/taskStore'
import { useEffect } from 'react'

export function Form () {
  const { addTask, taskSelected, updateTask, addTaskSelected } = useTask()
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<Task>()
  function handleSubmitForm (data: Task) {
    if (taskSelected.task) {
      updateTask({
        ...data,
        id: taskSelected.id,
        complete: taskSelected.complete
      })
      addTaskSelected({
        id: 0,
        task: '',
        complete: false
      })
      return
    }
    addTask(data)
    reset()
  }
  useEffect(() => {
    setValue('task', taskSelected.task)
  }, [taskSelected])
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className='w-full flex gap-4'>
      <div className='w-full'>
        <Input color='blue' label="task" {...register('task', {
          required: true,
          minLength: 5
        })} />
        {errors.task?.type === 'required' && <span className='text-red-500 text-sm'>Este campo es requerido</span>}
        {errors.task?.type === 'minLength' && <span className='text-red-500 text-sm'>Mínimo 5 caracteres</span>}
      </div>
      <ButtonDefault text={taskSelected.task ? 'Actualizar' : 'Agregar'} />
    </form>
  )
}
