import styles from './styles.module.sass'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props
  return <button className={`${className} ${styles.button}`} {...restProps} />
}