'use client'

import { useState } from 'react'
import styles from './links.module.css'
import NavLink from "./navLink/navLink"
import Image from 'next/image'
import { handleLogout } from '@/lib/action'

const links = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About Us',
        path: '/about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    // {
    //     title: 'Portfolio',
    //     path: '/portfolio',
    // },
]

const Links = ({session}) => {
    const [open, setOpen] = useState(false)

    //TEMPORARY
    // const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title} />
                )))}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
                <Image src="/menu.png" alt='' width={30} height={30} />
            </button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link)=>(
                        <NavLink item={link} key={link.title} onClick={() => setOpen(false)} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Links