export const IconButton  = ({children, onClick}) =>{

    return(
        <div style={{cursor:"pointer"}} onClick={onClick} aria-label={"kekv"}>
            {children}
        </div>
    )
}