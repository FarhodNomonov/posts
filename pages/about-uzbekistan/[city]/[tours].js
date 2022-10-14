import React from 'react'
import TashkentTours from '../../../components/AboutUzbPage/Tours/TashkentTours';
import { useRouter } from 'next/router';
import SamarkandTours from '../../../components/AboutUzbPage/Tours/SamarkandTours';
import BukharaTours from '../../../components/AboutUzbPage/Tours/BukharaTours';
import KhivaTours from '../../../components/AboutUzbPage/Tours/KhivaTours';
import AndijanTours from '../../../components/AboutUzbPage/Tours/AndijanTours';
import AralSea from '../../../components/AboutUzbPage/Cities/AralSea';
import AralSeaTours from '../../../components/AboutUzbPage/Tours/AralSeaTours';
import FerganaTours from '../../../components/AboutUzbPage/Tours/FerganaTours';
import JizzakhTours from '../../../components/AboutUzbPage/Tours/JizzakhTours';


const CityTours = () => {
    const router = useRouter()
    const city = router.query.city

    if (city === "tashkent") {
        return <TashkentTours />
    }
    if (city === "samarkand") {
        return <SamarkandTours />
    }
    if (city === "bukhara") {
        return <BukharaTours />
    }
    if (city === "khiva") {
        return <KhivaTours />
    }
    if (city === "andijan") {
		return <AndijanTours />
	}
    if (city === "aral-sea") {
		return <AralSeaTours />
	}
    if (city === "fergana") {
		return <FerganaTours />
	}
    if (city === "jizzakh") {
		return <JizzakhTours />
	}

    return (
        <div>
            <h1>Cities</h1>
        </div>
    )
    return (
        <>

            <TashkentTours />
        </>
    )
}

export default CityTours