import { useState } from 'react'
import JSONTab from './Tabs/JSONTab'
import QueryParamsTab from './Tabs/QueryParamsTab'
import RequestHeadersTab from './Tabs/RequestHeadersTab'

const RequestTabsContainer = () => {
    const [selectedTab, setSelectedTab] = useState('Query Params')

    return (
        <div>
            <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
                    <button className={selectedTab === 'Query Params' ? "nav-link active" : "nav-link"} type="button" 
                    onClick={() => setSelectedTab("Query Params")}>Query Params</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={selectedTab === 'Request Headers' ? "nav-link active" : "nav-link"}  
                        type="button" 
                        onClick={() => setSelectedTab("Request Headers")}>Request Headers</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={selectedTab === 'JSON' ? "nav-link active" : "nav-link"} type="button"
                    onClick={() => setSelectedTab("JSON")}
                        >JSON</button>
                </li>
            </ul>
            <div className="tab-content p-3 border-top-0 border">
                {
                selectedTab === 'Query Params' ? <QueryParamsTab/> 
                : 
                selectedTab === 'Request Headers' ? <RequestHeadersTab/> 
                : 
                <JSONTab/>
                }
            </div>
        </div>
    )
}

export default RequestTabsContainer
