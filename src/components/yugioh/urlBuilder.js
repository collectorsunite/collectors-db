
function UrlBuilder(props) {

    const data = props.linkData

    var startUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    var stringArray = []
    
    Object.entries(data).map(([key,value])=> { 
        switch (key) {
            case 'name':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`fname=${value}`)
                }
            case 'type':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`type=${value}`)
                }

            case 'race':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`race=${value}`)
                }

            case 'set':
                    if(value === "Select Card Set") {
                        return ""
                    } else {
                        return stringArray.push(`cardset=${value}`)
                    }
            default:
              return ""
          }
        
   })

    for(var i = 0; i < stringArray.length; i++){
                if(i === 0) {
                    startUrl += `?${stringArray[i]}`
                } else {
                     startUrl += `&${stringArray[i]}`
                }
    }
    

        return startUrl
}

export default UrlBuilder