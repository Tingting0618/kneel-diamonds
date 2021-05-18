import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getStyles  } from "./database.js"
import { getSizes } from "./database.js"



const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()



const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const metalCost = foundMetal.price


    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const sizeCost = foundSize.price


    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const styleCost = foundStyle.price

    let totalCost = metalCost+sizeCost+styleCost

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and it costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

