const Client = ({name,description,img}) => {
    return ( 
    <div className="client">
        <div className="card-head">
            <div className="avatar">
                <img src={img} alt="" />
            </div>
            <div className="side">
                <h1>{name}</h1>
                <ul>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                </ul>
            </div>

        </div>
        <div className="card-body">
            {description}
        </div>
    </div>);
}
 
export default Client;