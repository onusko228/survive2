import React from 'react'
import css from './style.module.css'
const Feautures = () => {
	return (
		<section className={css.feautures}>
			<div className='container'>
				<div className={css.feautures__wrapper}>
				<div className={css.feautures__inner}>
				<p className={css.feautures__title}> What’s so special?</p>
				<p className={css.feautures__subtitle}> features</p>
				
					<ul className={css.feautures__list}>
						<li className={css.feautures__item}>
							<p className={css.feautures__takes}>SURVIVE AT ALL COSTS</p>
							<p className={css.feautures__text}>
								You have 30 minutes to find a relic, signal for extraction, and
								grab one of three spots on the rescue chopper.
							</p>
						</li>
						<li className={`${css.feautures__takes} ${css.black__circle}`}>
							<p>CREATE ALLIES & ENEMIES</p>
						</li>
						<li className={`${css.feautures__takes} ${css.black__circle}`}>
							<p>IMPRESS THE AUDIENCE</p>
						</li>
					</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feautures