import { useState, useEffect } from 'react'
import prettyBytes from 'pretty-bytes'

const ResponseSectionContainer = ({ responseData, responseTime }) => {
  

    const [responseDataExists, setResponseDataExists] = useState(false)
    const [responseSize, setResponseSize] = useState("0 B")

    useEffect(() => {
        if(responseData && responseData.status === 200) {
            setResponseDataExists(true)
            let size = prettyBytes(
                JSON.stringify(responseData.data).length + JSON.stringify(responseData.headers).length
            )
            setResponseSize(size)
        } 
        else if (responseData && responseData.status === 404) {

            setResponseDataExists(true)
            let size = prettyBytes(
                JSON.stringify(responseData).length
            )
            setResponseSize(size)
        } 
    }, [responseData])



    return (
        <div className="mt-5" style={{padding: "20px"}}>
            { responseDataExists &&
                <>
                <h3>Response:</h3>
            <div>
                <div >
                    Status: <span>{responseData.status}</span>
                </div>
                <div >
                    Time: <span>{responseTime}</span>
                </div>
                <div >
                    Size: <span>{responseSize}</span>
                </div>
            </div>
            </>
            }
            
        </div>
    )
}

export default ResponseSectionContainer
