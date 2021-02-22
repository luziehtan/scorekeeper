import React from 'react'
import './Navigation.css'

export default function Navigation({onNavigate, activeIndex}) {
    const pages = ['Play', 'History']

    return (
    <section className="Navigation">
      <nav>
        {pages.map((page, index) => (
          <button 
            key={page}
            onClick={() => onNavigate(index)}
            disabled={index === activeIndex}
            className="Navigation__button">
            {page}
          </button>
        ))}
      </nav>
  </section>
    )
}