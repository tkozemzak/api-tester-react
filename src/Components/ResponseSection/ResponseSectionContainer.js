import React from 'react'

const ResponseSectionContainer = () => {
    return (
        <div className="mt-5">
            <h3>Response:</h3>
            <div className="d-flex my-2">
                <div className="me-3">
                    Status: <span>code</span>
                </div>
                <div className="me-3">
                    Time: <span>time</span>ms
                </div>
                <div className="me-3">
                    Size: <span>size</span>
                </div>
            </div>
        </div>
    )
}

export default ResponseSectionContainer
