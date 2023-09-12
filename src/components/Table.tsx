import { Card, Typography } from '@material-tailwind/react'
import { useTask } from '../store/taskStore'
import { SwitchDefault } from './Switch'
import { MdModeEditOutline, MdDelete } from 'react-icons/md'

const TABLE_HEAD = ['id', 'Descripción', 'Estado', '']

export function Table () {
  const { tasks, deleteTask, addTaskSelected, taskCompleted } = useTask()
  return (
    <Card className="max-h-[400px] overflow-y-scroll w-full pc:overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead className='sticky top-0 left-0 z-10'>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.task} className="even:bg-blue-gray-50/50">
              <td className="p-3">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {task.id}
                </Typography>
              </td>
              <td className="p-3 max-w-md">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {task.task}
                </Typography>
              </td>
              <td className="p-3">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  <SwitchDefault fn={() => taskCompleted(task)} complete={task.complete!} />
                </Typography>
              </td>
              <td className="p-3 flex justify-between items-center gap-3">
                <MdModeEditOutline onClick={() => addTaskSelected(task)} className='text-[25px] text-blue-500 cursor-pointer' />
                <button onClick={() => taskCompleted(task)} className='bg-yellow-800 py-1 px-4 rounded-md'>Completar</button>
                <MdDelete onClick={() => deleteTask(task.id!)} className='text-[25px] cursor-pointer text-red-500' />
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </Card >
  )
}
