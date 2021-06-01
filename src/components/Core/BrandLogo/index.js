import React from 'react'
// import darklogo from '../../../assets/image/logo/logo-black.png'
// import lightLogo from '../../../assets/image/logo/logo-white.png'
import darklogo from '../../../assets/image/logo/logo-black.svg'
import lightLogo from '../../../assets/image/logo/logo-white.svg'
export default function BrandLogo({logoWhite=false,...rest}){
return(
<>
    <img src={logoWhite ? lightLogo : darklogo } alt="brand logo" {...rest}/>
</>
)
}