import { useState, useEffect } from 'react'
import RequestTabsContainer from './RequestTabsContainer'
import axios from 'axios'

const Form = () => {
    const [requestMethod, setRequestMethod] = useState('GET')
    const [formEntry, setFormEntry] = useState("https://jsonplaceholder.typicode.com/posts/1")
    const [responseData, setResponseData] = useState()


    const handleApiCall = async (e) => {
        e.preventDefault()

        try {
            let response = await axios({
                url: formEntry,
                method: requestMethod,
            })
            if (response) {
                setResponseData(response)
                console.log(response)
            } 

        } catch (e) {
            alert("There was an error making the API call")
        }
    }


    useEffect(()=> {

    })

    return (
            <div class="p-4">
            <form data-form>
                <div class="input-group mb-4">
                    <select class="form-select flex-grow-0 w-auto" data-method>
                        <option value="GET" selected>GET</option>
                        <option value="POST">POST</option>
                        <option value="PUT">PUT</option>
                        <option value="PATCH">PATCH</option>
                        <option value="DELETE">DELETE</option>
                    </select>
                    <input required class="form-control" type="url" placeholder="https://jsonplaceholder.typicode.com/posts/1" 
                    value={formEntry} 
                    onChange={(e) => setFormEntry(e.target.value)}
                    />
                    <button type="submit" class="btn btn-primary"
                    onClick={(e) => handleApiCall(e)}
                    >Send</button>
                </div>
                <RequestTabsContainer/>
            </form>
        </div>
    )
}

export default Form
