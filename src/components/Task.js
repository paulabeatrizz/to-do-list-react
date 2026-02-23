import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export const Task = (props) => {
    return (
        <div className="Task" style={{backgroundColor: props.completed ? "green" : "white"}}>
            <h1>{props.taskName}</h1>
            <Button onClick={() => props.completeTask(props.id)}>Done</Button>
            <Button onClick={() => props.deleteTask(props.id)}>X</Button>

        </div>
    )
}