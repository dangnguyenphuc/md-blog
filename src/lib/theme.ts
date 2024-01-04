import { browser } from "$app/environment"
import { writable } from "svelte/store"

type Theme = 'Light' | 'Dark'

const userTheme = browser && localStorage.getItem("color-scheme");
const theme = writable(userTheme ?? 'dark')

export function toggleTheme(){
    
}

export function setTheme(){

}
