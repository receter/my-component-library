import * as styles from './styles.css'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props
  return <input className={`${className} ${styles.input}`} {...restProps} />
}