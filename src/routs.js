class Router {
    routs = {}

    registerControls = () => {
        document.getElementsByTagName('nav')[0].addEventListener('click', (event) => {
            event.preventDefault()
            window.history.pushState("", "", event.target.href)
            this.redirect(window.location.pathname);
        })

        window.onpopstate = () => { 
            this.redirect(window.location.pathname)
        } 

    }

    add(routeName, page) {
        this.routs[routeName] = page
    }

    redirect = (rota) => {
        let url = this.routs[rota]
        this.fetch(url)
    }
    
    fetch = (url) => {
        window.fetch(url)
            .then(data => data.text())
            .then(html => app.innerHTML = html);
    }


}

export default new Router()



