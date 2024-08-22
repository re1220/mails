import { Link } from "react-router-dom";
import { RobotPreview } from "./RobotPreview";

export function RobotList({ robots, onRemove }) {
    return <section className="robot-list">
        <ul>
            {robots.map(robot => <li key={robot.id}>
                <RobotPreview robot={robot}/>
                <button onClick={() => onRemove(robot.id)}>x</button>
                <Link to={`/robot/${robot.id}`} >Details</Link>
            </li>)}
        </ul>
    </section>
}