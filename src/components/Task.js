import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export const Task = (props) => {
    return (
        <div className={`d-flex justify-content-between align-items-center p-3 rounded shadow-sm 
        ${props.completed ? "bg-success text-white" : "bg-light"}`}>

            <h5 className={`m-0 ${props.completed ? "text-decoration-line-through" : ""}`} >
            {props.taskName}
            </h5>

            <div className="d-flex gap-2">
                <Button variant="success" size="sm" onClick={() => props.completeTask(props.id)}>
                    Done
                </Button>

                <Button variant="danger" size="sm" onClick={() => props.deleteTask(props.id)} >
                    X
                </Button>
            </div>
        </div>
    );
}