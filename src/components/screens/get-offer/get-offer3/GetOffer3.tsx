import SearchBox from '@/templates/main-form/SearchBox'
import React, { FC, useState } from 'react'
import GetOfferButton from '../ui/get-offer-button/GetOfferButton'
import GetOfferSearchBox from '../ui/get-offer-search-box/GetOfferSearchBox'
import GetOffer3Item from './get-offer3-item/GetOffer3Item'
import { PropsGetOfferState } from './get-offer3.interface'
import style from './GetOffer3.module.scss'

const GetOffer3: FC<PropsGetOfferState> = ({ state, setState }) => {
	// const [error, setError] = useState(false)
	const handlerClick = () => {
		// if (!state.countryCode) return setError(true)
		setState(state => ({ ...state, step: state.step + 1 }))
	}
	const handleClickCountry = (code: string) => {
		setState(state => ({ ...state, countryCode: code }))
	}

	const handleChangePlusChild = () => {
		const newChildsAge = state.chidls_age
		newChildsAge.push(2)
		setState(state => ({
			...state,
			childs: state.childs + 1,
			chidls_age: newChildsAge
		}))
	}
	const handleChangeMinusChild = () => {
		const newChildsAge = state.chidls_age
		newChildsAge.pop()
		setState(state => ({
			...state,
			childs: state.childs - 1,
			chidls_age: newChildsAge
		}))
	}
	const handleChangePlusChildAge = (index: number) => {
		const newChildsAge = state.chidls_age
		newChildsAge[index] += 1
		setState(state => ({ ...state, chidls_age: newChildsAge }))
	}
	const handleChangeMinusChildAge = (index: number) => {
		const newChildsAge = state.chidls_age
		newChildsAge[index] -= 1
		setState(state => ({ ...state, chidls_age: newChildsAge }))
	}

	return (
		<div className={style.getOffer3}>
			<div className={style.header}>
				<h1>Выберите количество человек</h1>
			</div>
			<div className={style.people}>
				<GetOffer3Item
					handleChangePlus={() =>
						setState(state => ({
							...state,
							adults: state.adults + 1
						}))
					}
					handleChangeMinus={() =>
						setState(state => ({
							...state,
							adults: state.adults - 1
						}))
					}
					title='Взрослые'
					number={state.adults}
					disabledTop={state.adults === 1}
					disabledBottom={state.adults === 4}
				/>
				<GetOffer3Item
					handleChangePlus={() => handleChangePlusChild()}
					handleChangeMinus={() => handleChangeMinusChild()}
					disabledTop={state.childs === 0}
					disabledBottom={state.childs === 3}
					number={state.childs}
					title='Дети'
				/>
				{state.chidls_age.length !== 0 &&
					state.chidls_age.map((el, key) => (
						<GetOffer3Item
							key={key}
							disabledTop={state.chidls_age[key]===2}
							disabledBottom={state.chidls_age[key]===14}
							handleChangePlus={handleChangePlusChildAge}
							handleChangeMinus={handleChangeMinusChildAge}
							title='Количество лет'
							number={el}
							index={key}
						/>
					))}
			</div>
			<GetOfferButton onClick={() => handlerClick()}>
				Следующий шаг
			</GetOfferButton>
		</div>
	)
}

export default GetOffer3
