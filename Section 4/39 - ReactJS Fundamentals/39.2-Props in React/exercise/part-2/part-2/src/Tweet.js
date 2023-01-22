const Tweet = (props) => {
   return( <div>
        <h1>{props.username}</h1>
        <h4>{props.name}</h4>
        <h4>{props.date}</h4>
        <p>{props.message}</p>
    </div>
   )
}


export default Tweet;