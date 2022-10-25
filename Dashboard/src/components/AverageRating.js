export default function AverageRating (props) {
    return(
        <div className="rating">
            <p> Average Rating </p>
            <h2>{props.number}</h2>
        </div>

    )
}