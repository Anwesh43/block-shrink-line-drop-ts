import {useState, useEffect} from 'react'

const delay : number = 20 
const scGap : number = 0.02 

export const useAnimatedScale = () => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) : number =>  {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        },
        scale 
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        setW(window.innerWidth)
        setH(window.innerHeight)
    }, [])
    return {
        w, h
    }
}