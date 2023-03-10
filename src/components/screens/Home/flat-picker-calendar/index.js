import 'flatpickr/dist/themes/material_blue.css'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

import Flatpickr from 'react-flatpickr'

import icon from '@/assets/images/3.svg'
import rightArrow from '@/assets/images/right-arrow.svg'
import leftArrow from '@/assets/images/left-arrow.svg'

import React from 'react'
import './FlatPicker.scss'

const CustomInput = ({
	value,
	defaultValue,
	inputRef,
	date,
	openCalendar,
	setOpenCalendar,
	calendarRef,
	error,
	setError,
	...props
}) => {
	const errorReset = {
		fromTownCode: false,
		countryCode: false,
		meal_types: false,
		date: false
	}
	return (
		<div
			className='search-box flatpickr-custom-input'
			ref={inputRef}
			onClick={() => {
				setOpenCalendar(true)
				setError(error => ({ ...error, ...errorReset }))
			}}
		>
			<p className='search-box-title' ref={calendarRef}>
				Вылет
			</p>
			<div className='search-box-wrapper d-flex'>
				<img src={icon} alt='' />
				{date !== null ? (
					<p className='search-box-input'>{date}</p>
				) : (
					<p className='search-box-input'>Дата</p>
				)}
			</div>
			{error?.date && <span className='error'>Заполните поле</span>}
		</div>
	)
}

const FlatPicker = ({
	array = [],
	openCalendar,
	setOpenCalendar,
	calendarRef,
	date,
	setDate,
	error,
	setError
}) => {
	console.log(array);
	return (
		<>
			<Flatpickr
				data-enable-time
				value={date}
				// onOpen={onOpen}
				onChange={(a, value) => setDate(value)}
				locale={Russian}
				showMonths={1}
				shorthandCurrentMonth={false}
				position='below'
				static={true}
				// clickOpens={false}

				// allowInpuе={true}
				options={{
					enable: array,
					enableTime: false,
					locale: Russian,
					showMonths: 1,
					weekNumbers: false,
					shorthandCurrentMonth: false,
					static: true,
					nextArrow: `<img src=${rightArrow} />`,
					prevArrow: `<img src=${leftArrow} />`,
					minDate: 'today'
					//position: 'below',
					// clickOpens: false,
				}}
				render={({ defaultValue, value, ...props }, ref) => {
					return (
						<CustomInput
							defaultValue={defaultValue}
							inputRef={ref}
							date={date}
							openCalendar={openCalendar}
							setOpenCalendar={setOpenCalendar}
							calendarRef={calendarRef}
							error={error}
							setError={setError}
						/>
					)
				}}
			/>
			<div className='box_vert_line'></div>
		</>
	)
}

export default FlatPicker
