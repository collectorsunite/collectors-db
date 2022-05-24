import axios from "axios";

function getUrl(props) {
    const getResponse = () => {
        axios.get(props.url)
        .then(response => {
            console.log(response.data.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return getResponse
}

export default getUrl