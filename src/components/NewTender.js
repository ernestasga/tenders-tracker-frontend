import { Card, Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const NewTender = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        if(!title || !comment){
            alert('Please enter title and a comment')
            return
        }
        onAdd({title, comment}, history)
        setTitle('')
        setComment('')
    }
    return (
        <div>
            <Card className="mt-5">
                <Card.Header>
                    <h1>Create new tender</h1>
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

export default NewTender

