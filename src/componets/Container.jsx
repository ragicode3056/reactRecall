export const Container = (props) =>{
    return(
        <div className="container">
            <div>Welcome {props.name}</div>
            <div>My age is {props.age}</div>
        </div>
    )
}