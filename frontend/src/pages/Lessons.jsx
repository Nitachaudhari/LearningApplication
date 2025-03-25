import { Box,Text,Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Lesson = () => {
    const [lessons,setLessons] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/lessons')
        .then((res)=>setLessons(res.data))
    },[])
    return (
        <Box>
            <Text>Lessons</Text>
            {lessons.map((lesson)=>(
                <Box key={lesson.id}>
                    <Text>{lesson.title}</Text>
                    <Button>Start Lesson</Button>
                </Box> 
            ))}
        </Box>
    )
}

export default Lesson