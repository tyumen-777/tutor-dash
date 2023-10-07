import { SVGProps } from 'react'
import { ICONS } from './icons'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: keyof typeof ICONS
}

export const Icon = ({name} : IconProps) => {
  const Icon = ICONS[name]

  //Render
  return (
    <Icon.type {...Icon.props}/>
  )
}