import {CSSProperties} from "react";

export function verifyUsername(username: string):boolean {
    return username.trim().length > 4;
}

export function verifyPassword(password: string){
    return password.trim().length >= 8;
}

export const fr = [
    `Nom d'utilisateur`,
    `Mot de passe`,
    `Se connecter`
]

export const en = [
    `Username`,
    `Password`,
    `Sign In`
]