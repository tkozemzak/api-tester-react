import { useState, useEffect } from 'react'
import RequestTabsContainer from './RequestTabsContainer'
import axios from 'axios'

const Form = ({setResponseData, setResponseTime}) => {
    const [requestMethod, setRequestMethod] = useState('GET')
    const [formEntry, setFormEntry] = useState("https://jsonplaceholder.typicode.com/posts")


    const handleApiCall = async (e) => {
        e.preventDefault()

        axios({
            url: formEntry,
            method: requestMethod,
            
          })
            .catch((e) => e)
            .then((response) => {
              if(response.status) {
                  setResponseData(response)
              } else {
                  setResponseData(response.request)
              }
            });

    }

    return (
            <div className="p-4">
            <form>
                <div className="input-group mb-4">
                    <select className="form-select flex-grow-0 w-auto" defaultValue="GET" onChange={(e) => setRequestMethod(e.target.value)}>
                        <option value="GET" >GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="PATCH">PATCH</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                    <input required className="form-control" type="url" placeholder="https://jsonplaceholder.typicode.com/posts/1" 
                    value={formEntry} 
                    onChange={(e) => setFormEntry(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary"
                    onClick={(e) => handleApiCall(e)}
                    >Send</button>
                </div>
                <RequestTabsContainer/>
            </form>
        </div>
    )
}

export default Form
