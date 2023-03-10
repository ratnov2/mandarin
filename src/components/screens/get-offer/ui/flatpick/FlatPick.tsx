import React from 'react'
//@ts-ignore
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import './FlatPicker.scss'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
import icon from '@/assets/images/3.svg'
const CustomInput = ({
	value,
	defaultValue,
	inputRef,
	date,
	openCalendar,
	setOpenCalendar,
	calendarRef,
	...props
}:any) => {
	return (
		<div
			className='search-box flatpickr-custom-input'
			ref={inputRef}
			// onClick={() => {
			// 	setOpenCalendar(true)
			// }}
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
		</div>
	)
}
const FlatPick = () => {
  return (
    <Flatpickr
    data-enable-time
    // value={date}
    // onOpen={onOpen}
    // onChange={(a, value) => setDate(value)}
    locale={Russian}
    showMonths={1}
    shorthandCurrentMonth={false}
    position='below'
    static={true}
    // clickOpens={false}

    allowInput={true}
    options={{
      // enable: array,
      enableTime: false,
      // locale: Russian,
      showMonths: 1,
      weekNumbers: false,
      shorthandCurrentMonth: false,
      static: true,
      // nextArrow: `<img src=${rightArrow} />`,
      // prevArrow: `<img src=${leftArrow} />`,
      minDate: 'today',
      position: 'below',
      clickOpens: false,
    }}
    render={({ defaultValue, value, ...props }:any, ref:any) => {
      return (
        <CustomInput
          defaultValue={defaultValue}
          inputRef={ref}
          // date={date}
          // openCalendar={openCalendar}
          // setOpenCalendar={setOpenCalendar}
          // calendarRef={calendarRef}
        />
      )
    }}
  />
  )
}
export default FlatPick