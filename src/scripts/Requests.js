import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data

    let html = `
        <ul>
            ${
                requests.map( request  => {
                    return `<li>${request.description} Needed by ${request.neededBy}. Location is ${request.address}. Budget is $${request.budget.toFixed(2)} </li>`
                }
                )}
        </ul>
    `

    return html
            }