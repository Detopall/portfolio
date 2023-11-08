import { IEvent } from "../../App";
import jsonEvents from "../events-data.json";
import { Link } from "react-router-dom";

function Events() {
	return (
		<>
			<div className="events-container">
				{jsonEvents.map((event: IEvent) => {
					return (
						<Link to={`/events/${event.id}`} key={event.id}>
							<div className="event">
								<div className="event-description">
									<h3>{event.name}</h3>
									<p>{event.descriptionShort}</p>
								</div>
								<div className="event-img">
									<img
										src={event.imageSrc}
										alt={event.name}
									/>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Events;
