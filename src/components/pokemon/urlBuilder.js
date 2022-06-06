
function UrlBuilder(props) {

    const data = props.linkData

    var startUrl = "https://api.pokemontcg.io/v2/cards?q="
    var stringArray = []
    
    Object.entries(data).map(([key,value])=> { 
        switch (key) {
            case 'name':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`name:${value}*`)
                }
            case 'type':
                if(value === "Select Card Type") {
                    return ""
                } else {
                    return stringArray.push(`types:"${value}"`)
                }

            case 'rarity':
                if(value === "Select Card Rarity") {
                    return ""
                } else {
                    return stringArray.push(`rarity:"${value}"`)
                }

            case 'set':
                    if(value === "Select Card Set") {
                        return ""
                    } else {
                        return stringArray.push(`set.name:"${value}"`)
                    }
            case 'subtypes':
                    if(value === "Select Card Subtypes") {
                        return ""
                    } else {
                        return stringArray.push(`subtypes:"${value}"`)
                    }
             case 'supertypes':
                    if(value === "Select Card Supertypes") {
                        return ""
                    } else {
                        return stringArray.push(`supertypes:"${value}"`)
                    }
            default:
              return ""
          }
        
   })


        return startUrl + stringArray.join(" ")
}

export default UrlBuilder