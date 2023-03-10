import React, { FC } from 'react'
import style from './TableList.module.scss'
import tourSvg from '@/assets/images/tourSvg.svg'
import Button from '@/components/ui/button/Button'

const TableList: FC<any> = ({ offerList, sendOrder }) => {
	console.log(offerList)

	return (
		<div className={`${style.tableList} container-xxl`}>
			<ul className={style.externalUl}>
				<li>
					<ul className={style.insideUl}>
						<li>Дата вылета</li>
						<li>Кол-во мест в самолёте</li>
						<li>Тип номера</li>
						<li>Питание </li>
						<li>Цена на всех</li>
					</ul>
				</li>
				{offerList.map((el: any, key: any) => (
					<li key={key}>
						<ul className={style.insideUlList}>
							<li>
								<div className='flex justify-center'>
									<img src={tourSvg} alt='tour' />
									<div className='pl-1'>
										<p>{el.checkIn}</p>
										<p className='text-left'>
											{el.checkOut.substring(5, 10)}
										</p>
										<p className='text-left'>
											{' '}
											{el.nights} ночей
										</p>
									</div>
								</div>
							</li>
							<li>10+</li>
							<li>{el.room}</li>
							<li>{el.meal}</li>
							<li className={style.order}>
								{el.price}{' '}
								<Button
									onClick={() =>{
										sendOrder({
											checkIn: el.checkIn,
											checkOut: el.checkOut,
											hotelName: el.hotelName,
											meal: el.meal,
											price: el.price,
											room: el.room
										})
									}
									
								}
								>
									Заказать
								</Button>
							</li>
						</ul>
					</li>
				))}
			</ul>
			<ul className={style.externalUl2}>
				{offerList.map((el: any, key: any) => (
					<li key={key}>
						<ul className={style.insideUlList2}>
							<li>
								<div className='flex'>
									<img src={tourSvg} alt='tour' />
									<div className='pl-1'>
										<p>{el.checkIn}</p>
										<p className='text-left'>
											{el.checkOut.substring(5, 10)}
										</p>
										<p className='text-left'>
											{' '}
											{el.nights} ночей
										</p>
									</div>
								</div>
							</li>
							<li className={style.order}>
								{el.price}
								<Button
									onClick={() =>
										sendOrder({
											checkIn: el.checkIn,
											checkOut: el.checkOut,
											hotelName: el.hotelName,
											meal: el.meal,
											price: el.price,
											room: el.room
										})
									}
								>
									Заказать
								</Button>
							</li>
							<li>{el.meal}</li>
							<li>{el.room}</li>
							
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}
export default TableList
