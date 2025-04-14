import * as styles from './styles.css'

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  const { className, ...restProps } = props
  return <label className={`${className} ${styles.label}`} {...restProps} />
}