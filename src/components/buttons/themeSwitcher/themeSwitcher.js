import React from "react"
import { ReactDOM } from "react"
import { render } from "react-dom"

export function ThemeSwitcher () {
    input = document.querySelector('.theme-switcher input');
    render(
        input.addEventListener('change', (e)=> {
            if(e.target.checked){
                document.body.setAttribute('data-theme', 'dark');
            } else {
                document.body.setAttribute('data-theme', 'light');
            }
        })
    );
}
