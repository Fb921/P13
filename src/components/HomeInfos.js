
function HomeInfos({icon, text, title}){
    return (
            
        <div className="feature-item">
            <img src={icon} alt="Home Icon" className="feature-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
        )
}

export default HomeInfos;