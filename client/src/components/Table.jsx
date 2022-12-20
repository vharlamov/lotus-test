import React from 'react'
import Timer from './Timer.jsx'

const Table = ({ current, time, users }) => {
	return (
		<>
			<table>
				<tr>
					<td className='cell'></td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							{i === current && <Timer time={time} />}
						</td>
					))}
				</tr>
				<tr>
					<td className='cell'></td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP'>Участник №{i + 1}</p>
						</td>
					))}
				</tr>
				<tr className='bgGrey'>
					<td className='cell'></td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP bold'>{u.name}</p>
						</td>
					))}
				</tr>
				<tr>
					<td className='cell'>
						Наличие комплекса мероприятий, повышающих стандарты качества
						изготовления
					</td>
					{users.map((u, i) => (
						<td key={i} className='cell '>
							<p className='cellP'>{u.standard}</p>
						</td>
					))}
				</tr>
				<tr className='bgGrey'>
					<td className='cell'>Срок изготовления лота, дней</td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP'>{u.delivery}</p>
						</td>
					))}
				</tr>
				<tr>
					<td className='cell'>Гарантийные обязательства, мес</td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP'>{u.guarantee}</p>
						</td>
					))}
				</tr>
				<tr className='bgGrey'>
					<td className='cell'>Условия оплаты</td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP'>{u.prepayment}</p>
						</td>
					))}
				</tr>
				<tr>
					<td rowSpan='3' className='cell lowrow'>
						Стоимость изготовления лота, руб (без НДС)
					</td>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP blue'>{u.cost.initial}</p>
						</td>
					))}{' '}
				</tr>

				<tr className='bgGrey'>
					{users.map((u, i) => (
						<td key={i} className='cell'>
							<p className='cellP red'>{u.cost.diff}</p>
						</td>
					))}
				</tr>
				<tr className='lowrow'>
					{users.map((u, i) => (
						<td key={i} className='cell lowrow'>
							<p className='cellP green'>{u.cost.result}</p>
						</td>
					))}
				</tr>
			</table>
		</>
	)
}

export default Table
