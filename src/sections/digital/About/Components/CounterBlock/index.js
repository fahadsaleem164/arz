import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
    // console.log(rest)
    const data = rest.data

return(
<Counter {...rest}>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">{data.projects_done}</span></Counter.Title>
        <Counter.Text>Successful<br className="d-none d-xs-block" /> projects done</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">{data.conservation_rate}</span>%</Counter.Title>
        <Counter.Text>Increased<br className="d-none d-xs-block" /> conversion rate</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3"><span className="counter">{data.return_happy_customer}</span>+</Counter.Title>
        <Counter.Text>Returning Happy<br className="d-none d-xs-block" /> customer</Counter.Text>
    </Counter.Single>
</Counter>

)
}