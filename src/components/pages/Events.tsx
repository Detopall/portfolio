import { IEvent } from "../../App";
import jsonEvents from "../events-data.json";
import { Link } from "react-router-dom";

function Events() {
	return (
		<>
			<div className="events-container">
				<h2> Events </h2>
				<div className="events-content">
					{jsonEvents.map((event: IEvent) => {
						return (
							<Link to={`/events/${event.id}`} key={event.id}>
								<div className="event">
									<div className="event-description">
										<h3>{event.name}</h3>
										<p>{event.descriptionShort}</p>
										<span className="event-date">{event.date}</span>
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

			</div>
		</>
	);
}

export default Events;
