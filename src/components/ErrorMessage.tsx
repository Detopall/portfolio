interface ErrorMessageProps {
	message: string;
}


function ErrorMessage({ message}: ErrorMessageProps) {
	return (
		<div className="error-message-container">
			<div className="error-message">{message}</div>
		</div>
	);
}

export default ErrorMessage;
