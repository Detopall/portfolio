import { useParams } from "react-router-dom";

function SingleEvent() {
	const { eventId } = useParams();
	return <div>SingleEvent using this eventId: {eventId}</div>;
}

export default SingleEvent;
