import React, { useEffect } from 'react';
import { Container } from "@mui/material";
import { Statistics } from './statistics';
import { TopRestaurant } from './topRestaurant';
import { BestRestaurants } from './bestRestaurant';
import { BestDishes } from './bestDishes';
import { Advertisements } from './advertisements';
import { Events } from './events';
import { Recommendations } from './recommendations';
import '../../../css/home.css';

export function HomePage() {
useEffect(() => {
    console.log('componentDidMount => Data fetch');

    return () => {
      console.log("componentWillUnmount process");   
    }
}, []);

    return <div className='homepage'>
        <Statistics/>
        <TopRestaurant/>
        <BestRestaurants/>
        <BestDishes/>
        <Advertisements/>
        <Events/>
        <Recommendations/>
    </div>
}