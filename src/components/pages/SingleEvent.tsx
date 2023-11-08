import { useParams } from "react-router-dom";
import eventsData from "../events-data.json";
import ErrorMessage from "../ErrorMessage";
import GoBackButton from "../GoBackButton";

function convertMarkdownToHTML(text: string) {
	return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function SingleEvent() {
	const { eventId } = useParams();
	const singleEvent = eventsData.find((event) => event.id === eventId);

	return (
		<>
			<GoBackButton />
			{(singleEvent && (
				<div className="single-event-container">
					<h2>{singleEvent.name}</h2>
					<span className="single-event-date">{singleEvent.date}</span>
					<div className="single-event-image-container">
						<img src={singleEvent.imageSrc} alt={singleEvent.name} />
					</div>
					<div className="single-event-content">
						{singleEvent.content.map((section, index) => (
							<div key={index}>
								{section.type === "section" && (
									<>
										<h3>{section.title}</h3>
										{section.body.map((paragraph, pIndex) => (
											<p key={pIndex} dangerouslySetInnerHTML={{ __html: convertMarkdownToHTML(paragraph) }} />
										))}
									</>
								)}
							</div>
						))}
					</div>
				</div>
			)) || (
					<ErrorMessage message="This eventId doesn't exist. Try again with another event." />
				)}
		</>
	);
}

export default SingleEvent;
