import { getSizes } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            //window.alert(event.target.value )
            const price_size = sizes[event.target.value-1].price
            window.alert(price_size)
            }
        }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// for (const size of sizes) {
//     if (size.id === event.target.value) {
//         window.alert(`${size.carets} costs ${size.price}`)
//     }