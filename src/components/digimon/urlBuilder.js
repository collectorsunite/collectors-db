
function UrlBuilder(props) {

    const data = props.linkData

    var startUrl = "https://digimoncard.io/api-public/search.php"
    var stringArray = []
    
    Object.entries(data).map(([key,value])=> { 
        switch (key) {
            case 'name':
                if(value === "") {
                    return ""
                } else {
                    return stringArray.push(`n=${value}`)
                }
            case 'type':
                if(value === "Select Card Type") {
                    return ""
                } else {
                    return stringArray.push(`type=${value}`)
                }

            case 'color':
                if(value === "Select Card Color") {
                    return ""
                } else {
                    return stringArray.push(`color=${value}`)
                }

            case 'set':
                    if(value === "Select Card Set") {
                        return ""
                    } else {
                        return stringArray.push(`pack=${value}`)
                    }
            case 'attribute':
                    if(value === "") {
                        return ""
                    } else {
                        return stringArray.push(`attribute=${value}`)
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
    

        return startUrl + "& sort=name&series=Digimon Card Game"
}

export default UrlBuilder