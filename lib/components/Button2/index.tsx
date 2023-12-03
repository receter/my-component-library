import { useCounter } from 'usehooks-ts';
import styles from './styles.module.css'

export function Button2(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, onClick, children, ...restProps } = props;
  const { count, increment } = useCounter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    onClick && onClick(e);
    increment();
  }

  return <button
    onClick={handleClick}
    className={`${className} ${styles.button}`}
    {...restProps}
  >
    <span>{count}</span>
    {children}
  </button>
}