'use client'

import Link from "next/link"
import styles from './navLink.module.css'
import { usePathname } from "next/navigation"

const NavLink = ({item, onClick}) => {
    const pathName = usePathname()

    return (
        <Link 
            href={item.path} 
            onClick={onClick} 
            className={`
                ${styles.container} 
                ${pathName === item.path && styles.active}
            `}
        >
            {item.title}
        </Link>
    )
}

export default NavLink