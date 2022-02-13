import React, { useState } from 'react'
import ImageData from './ImageData'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ImageSlider = () => {
	const [current, setCurrent] = useState(0)

	const prevSlide = () => {
		if (current === 0) {
			setCurrent(ImageData.length - 1)
		} else {
			setCurrent((prevState) => prevState - 1)
		}
	}

	const nextSlide = () => {
		if (current === ImageData.length - 1) {
			setCurrent(0)
		} else {
			setCurrent((prevState) => prevState + 1)
		}
	}

	console.log(ImageData.length)
	return (
		<section className='slider'>
			<AiOutlineArrowLeft className='leftArrow' onClick={prevSlide} />
			<AiOutlineArrowRight className='rightArrow' onClick={nextSlide} />
			{ImageData.map((data, index) => {
				return (
					<div key={index}>
						{current === index && (
							<div>
								<img src={data.image} alt={data.title} />
								<p>{data.title}</p>
							</div>
						)}
					</div>
				)
			})}
		</section>
	)
}

export default ImageSlider
