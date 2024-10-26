export default function WayToTeach({title, description}){
    return (
        <li>
            <p>
                <strong>{title}</strong>
                <span>{description}</span>
            </p>
        </li>
    )
}