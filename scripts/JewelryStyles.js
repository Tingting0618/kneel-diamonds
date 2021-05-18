import { getStyles,setStyle  } from "./database.js"


const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            //window.alert(event.target.value )
           // const price_style = styles[event.target.value-1].price
           // window.alert(price_style)
            setStyle (parseInt(event.target.value))
            }
            
        }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems =styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

