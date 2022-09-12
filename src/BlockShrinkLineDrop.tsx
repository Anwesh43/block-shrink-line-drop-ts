import React, { Fragment } from "react";
import {useStyle} from './hooks'
import withContext from "./withContext";
interface BSLDProps {
    w : number, 
    h : number ,
    scale : number, 
    onClick : () => void
}

const BlockShrinkLineDrop : React.FC<BSLDProps> = (props : BSLDProps) => {
    const {barStyle, lineStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <Fragment>
            <div style = {barStyle()} onClick = {() => props.onClick()}/>
            <div style= {lineStyle()}/>
        </Fragment>
    )
}

export default withContext(BlockShrinkLineDrop)