import '../ContainerCards/styles.css'

export const ContainerCards = ({children}) =>{
    return(
        <div className='products-container'>
            {children}
        </div>
    )
}