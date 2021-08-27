import { Card } from "react-bootstrap"
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tender = ({tender, onDelete, onEdit}) => {
    return (
        <div className="tender mb-3">
            <Card border="primary">
                <Card.Header>
                    <h5 className="d-flex justify-content-between align-items-center">
                        {tender.title}
                        <div>
                            <Link to={{pathname: "/edit", state: {tender}}}><FaPen color="blue" cursor="pointer" className="m-2"/></Link>
                            <FaTrashAlt color="red" cursor="pointer" className="m-2" onClick={() => onDelete(tender.id)}/>
                        </div>
                    </h5>                    
                </Card.Header>
                <Card.Body>
                    <Card.Text>{tender.comment}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tender

