import { deleteRequest, getRequests } from "./dataAccess.js"

container.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
}
)

export const Requests = () => {
    const requests = getRequests() // grab the local state of the requests data
    
   const requestHTML =  `<ul> ${requests.map(
       (request) => 
    `<li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>`
       ).join("")}</ul>`
       return requestHTML
    }
