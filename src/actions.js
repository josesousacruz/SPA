import { nav } from "./elements.js";
import { redirect } from "./routs.js";


export const registerControls =() => {
    nav.addEventListener('click', (event) => {
        event.preventDefault()
        window.history.pushState("","",event.target.href)
      redirect(window.location.pathname);
    })
}
