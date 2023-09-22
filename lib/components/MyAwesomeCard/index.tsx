import styles from './styles.module.css'

interface MyAwesomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: MyImageType
}

export function MyAwesomeCard(props: MyAwesomeCardProps) {
  const { className, image, ...restProps } = props
  return <div className={`${className} ${styles.myAwesomeCard}`} {...restProps}>
    <img className={styles.image} src={image.src} alt={image.alt} />
    <p>My Awesome Card is awesome!</p>
  </div>
}