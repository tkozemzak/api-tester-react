import { useState } from 'react'
import Form from './Form'
import ResponseSectionContainer from './ResponseSection/ResponseSectionContainer'

const Main = () => {
    const [responseData, setResponseData] = useState()
    const [responseTime, setResponseTime] = useState("0 ms")


    return (
        <div>
            <Form setResponseData={setResponseData} setResponseTime={setResponseTime}/>
            <ResponseSectionContainer responseData={responseData} responseTime={responseTime}/>
        </div>
    )
}

export default Main
