import { Switch } from '@material-tailwind/react'

export function SwitchDefault ({ complete, fn }: { complete: boolean, fn: () => void }) {
  return <Switch onChange={fn} color='blue' checked={complete} />
}
