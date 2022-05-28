
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


    //array of items
    //if there is one then ?
    // if there is more than one ? first one & for re
    
//     if(data.length === 0) {
//        return startUrl
//     } else if(data.length === 1) {
//         return startUrl + `?${data[0]}`
//     } else {
//         var endUrl = ""
//         for (var i = 0; i < data.length; i++) {
//             if(i = 0) {
                
//             }
//         }

//         return startUrl
//     }

// }

export default UrlBuilder