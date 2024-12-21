import React from 'react'
import css from "./style.module.css"

const System = () => {
  return (
    <section className={css.system}>
        <div className={css.container}>
            <p className={css.system__subtitle}>Can My Computer Run this game?</p>
            <h2 className={css.system__title}>system requirements</h2>
            <ul className={css.system__list}>
            </ul>
        </div>
    </section>
  )
}

export default System