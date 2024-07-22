import '../ContainerCards/styles.css'

export const ContainerCards = ({children}) =>{
    return(
        <div className='cards-container'>
            {children}
        </div>
    )
}