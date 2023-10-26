import { useParams } from "react-router-dom";
import jsonEvents from "./events-data.json";
import ErrorMessage from "./ErrorMessage";
import GoBackButton from "./GoBackButton";

function SingleEvent() {
	const { eventId } = useParams();
	const singleEvent = jsonEvents.find((event) => event.id === eventId);
	return (
		<>
			<GoBackButton />
			{(singleEvent && (
				<div className="single-event-container">
					<h2>{singleEvent.name}</h2>
					<span className="single-event-date">
						{singleEvent.date}
					</span>
					<div className="single-event-image-container">
						<img
							src={singleEvent.imageSrc}
							alt={singleEvent.name}
						/>
					</div>
					<div className="single-event-content">
						<p>{singleEvent.descriptionShort}</p>
						<p>{singleEvent.descriptionLong}</p>
					</div>
				</div>
			)) || (
				<ErrorMessage message="This eventId doesn't exist. Try again with another event." />
			)}
		</>
	);
}

export default SingleEvent;
