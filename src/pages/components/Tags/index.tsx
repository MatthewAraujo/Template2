import styles from './styles.module.scss'

interface TagProps {
  pfist?: string
  psecond: string
  strong: string
  icon: any
}

export default function Tag({ pfist, psecond, icon, strong }: TagProps) {
  return (
    <div className={styles.tag}>
      <div className={styles.background}>
        <div className={styles.icon}> {icon} </div>
        <div className={styles.text}>
          <p>
            {pfist}
            <strong> {strong} </strong>
            {psecond}
          </p>
        </div>
      </div>
    </div>
  )
}
