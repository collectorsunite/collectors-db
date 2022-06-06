
function UrlBuilder(props) {

    const data = props.linkData


    var startUrl = "https://api.magicthegathering.io/v1/cards"    
    var stringArray = []
    
    Object.entries(data).map(([key,value])=> { 
        switch (key) {
            case 'name':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`name=${value}`)
                }
            case 'type':
                if(value === "Select Card Type") {
                    return ""
                } else {
                    return stringArray.push(`type=${value}`)
                }

            case 'colors':
                if(value === "Select Card Color") {
                    return ""
                } else {
                    return stringArray.push(`colors=${value}`)
                }
                case 'rarity':
                if(value === "Select Card Rarity") {
                    return ""
                } else {
                    return stringArray.push(`rarity=${value}`)
                }
                case 'supertypes':
                    if(value === "Select Card Supertypes") {
                        return ""
                    } else {
                        return stringArray.push(`superTypes=${value}`)
                    }


            case 'setName':
                    if(value === "Select Card Set") {
                        return ""
                    } else {
                        return stringArray.push(`setName=${value}`)
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