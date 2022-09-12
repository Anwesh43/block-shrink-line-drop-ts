import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 
const sizeFactor : number = 6.9 

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

export const useStyle = (w : number, h : number, scale : number) => {
    
    const background = 'indigo'
    const position = 'absolute'
    const size : number = Math.min(w, h) / sizeFactor
    const barH : number = size / 3 
    const sf = Math.sin(scale * Math.PI)
    return {
        barStyle()  : CSSProperties {
            const width = `${size - size * sf}px`
            const height = `${barH}px`
            const left = `${w / 2 - size / 2}px`
            const top = `${h / 2 - barH / 2}px`
            return {
                position,
                width, 
                height, 
                background,
                borderRadius: '4px',
                left, 
                top 
            }
        },
        lineStyle() : CSSProperties {
            const left = `${w * 0.75}px`
            const top = `${-size + (h / 2) * sf}px`
            const height = `${size}px`
            const width = `${Math.min(w, h) / 90}px`
            return {
                position, 
                left, 
                top, 
                height,
                background, 
                width,
                borderRadius: '4px'
            }
        }
    }
}