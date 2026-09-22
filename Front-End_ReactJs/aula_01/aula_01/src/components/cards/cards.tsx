import "./cards.style.css"

export function Cards({title, imgUrl, content, date}:any){
    return(
        <div className="card">
            <div className="div-img"><img className="img" src={imgUrl} alt="" /></div>
            <div className="card-text"><span className="card-title">{title}</span> <span className="card-content">{content}</span><span>{date}</span></div>
            
        </div>
    )
}