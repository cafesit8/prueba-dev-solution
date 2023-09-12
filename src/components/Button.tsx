import { Button } from '@material-tailwind/react'

export function ButtonDefault ({ text }: { text: string }) {
  return <Button color='blue' className='h-[40px]' type='submit'>{ text }</Button>
}
