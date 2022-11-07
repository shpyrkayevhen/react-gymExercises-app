import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' // use to get particular data in url
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            // First API call 
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            // Set to our current State 
            setExerciseDetail(exerciseDetailData)

            // Second API call
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents)

            // Thirdth API call (Similar Exercises)
            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetMuscleExercises(targetMuscleExercisesData)

            // Fourth API call (Similar Equipment Exercises)
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExercisesData)
        }

        fetchExercisesData()

    }, [id]) // We will recall this func when id will changes

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail
