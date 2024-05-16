import styles from './styles.module.css'
import capitalize from 'lodash/capitalize'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...restProps } = props

  return (
    <button className={`${className} ${styles.button}`} {...restProps}>
      {typeof children === 'string' ? capitalize(children) : children}
    </button>
  )
}