import { useRouter } from 'next/router'
import React from 'react'
import Tashkent from '../../../components/AboutUzbPage/Cities/Tashkent'
import Samarkand from '../../../components/AboutUzbPage/Cities/Samarkand'
import Bukhara from '../../../components/AboutUzbPage/Cities/Bukhara'
import Khiva from '../../../components/AboutUzbPage/Cities/Khiva'
import Andijan from '../../../components/AboutUzbPage/Cities/Andijan'
import AralSea from '../../../components/AboutUzbPage/Cities/AralSea'
import Fergana from '../../../components/AboutUzbPage/Cities/Fergana'
import Jizzakh from '../../../components/AboutUzbPage/Cities/Jizzakh'
import Namangan from '../../../components/AboutUzbPage/Cities/Namangan'
import Navoi from '../../../components/AboutUzbPage/Cities/Navoi'

const Cities = () => {

	const router = useRouter()
	const city = router.query.city
	// console.log(city)

	if (city === "tashkent") {
		return <Tashkent />
	}
	if (city === "samarkand") {
		return <Samarkand />
	}
	if (city === "bukhara") {
		return <Bukhara />
	}
	if (city === "khiva") {
		return <Khiva />
	}
	if (city === "andijan") {
		return <Andijan />
	}
	if (city === "aral-sea") {
		return <AralSea />
	}
	if (city === "fergana") {
		return <Fergana />
	}
	if (city === "jizzakh") {
		return <Jizzakh />
	}
	if (city === "namangan") {
		return <Namangan />
	}
	if (city === "navoi") {
		return <Navoi />
	}

	return (
		<div>
			<h1>Cities</h1>
		</div>
	)
}

export default Cities