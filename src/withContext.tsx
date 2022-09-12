import React from "react";
import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick} = useAnimatedScale()
        const newProps = {
            scale, 
            onClick, 
            w,
            h 
        }
        const allProps = {...props, ...newProps}
        return (
            <MainComponent {...allProps}></MainComponent>
        )
    }
}

export default withContext 