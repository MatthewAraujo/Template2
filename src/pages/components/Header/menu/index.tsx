import styles from './styles.module.scss'

interface MenuProps {
  id: number
  href: string
  children: string
  isActive: boolean
  setIsActve: (id: number) => void
  setModal: (modal: boolean) => void
}

export default function Menu({
  id,
  href,
  children,
  isActive,
  setIsActve,
  setModal,
}: MenuProps) {
  return (
    <a
      className={`${isActive ? styles.active : ''} ${styles.link}`}
      onClick={() => {
        setIsActve(id)
        setModal(false)
      }}
      href={href}
    >
      {children}
    </a>
  )
}
