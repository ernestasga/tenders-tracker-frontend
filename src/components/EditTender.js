import { Card, Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

const EditTender = ({onEdit}) => {
    const location = useLocation()
    const tender = location.state.tender
    const id = tender.id
    const [title, setTitle] = useState(tender.title)
    const [comment, setComment] = useState(tender.comment)
    const history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !comment){
            alert('Please enter title and a comment')
            return
        }
        onEdit({id, title, comment}, history)
    }
    return (
        <div>
            <Card className="mt-5">
                <Card.Header>
                    <h1>Edit tender #{id}</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Title..." 
                                name="title" 
                                required 
                                max="255"
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Comment..." 
                                name="comment" 
                                required
                                max="10000"
                                value={comment} 
                                onChange={(e) => setComment(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>                    
                </Card.Body>
            </Card>

        </div>
    )
}

export default EditTender

