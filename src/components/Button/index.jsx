import { ContainerButton } from "./styles";
import Proptypes from "proptypes"

export function Button({children}){
    return <ContainerButton>{children}</ContainerButton>
}


Button.prototype = {
    children: Proptypes.string
}