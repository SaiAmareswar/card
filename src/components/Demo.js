function Demo(props){
    return(
        <div className="card">
            <div className="card-header">
            <img className='card-img' src={'https://source.unsplash.com/1600x1000/?'+props.img}></img>
            <div className={props.rating > 4.4 ? "best" : "d-none"}>Best Seller</div>
            <div className={props.votes>100?"must":"d-none"}>Must Try</div>
            </div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}
export default Demo;