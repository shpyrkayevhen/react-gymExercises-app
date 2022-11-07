import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercieses from '../components/SearchExercieses';
import Exercieses from '../components/Exercieses';



const Home = () => {

    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    return (
        <Box>
            <HeroBanner />
            <SearchExercieses setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercieses setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
        </Box>
    )
}

export default Home
