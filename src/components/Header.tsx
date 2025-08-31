'use client'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Timo</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#about" style={styles.navItem}>About</a></li>
          <li><a href="#projects" style={styles.navItem}>Projects</a></li>
          <li><a href="#contact" style={styles.navItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#666',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px'
  }
}

export default Header
