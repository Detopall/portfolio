import { useNavigate } from "react-router-dom";

function GoBackButton() {
	const navigate = useNavigate();

	function handleGoBack() {
		navigate(-1);
	}

	return (
		<button onClick={handleGoBack} className="go-back-button">
			Go Back
		</button>
	);
}

export default GoBackButton;
