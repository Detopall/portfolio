import { useParams } from "react-router-dom";
import blogsData from "../blogs-data.json";
import ErrorMessage from "../ErrorMessage";
import GoBackButton from "../GoBackButton";

function convertMarkdownToHTML(text: string) {
	return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function SingleBlog() {
	const { blogId } = useParams();
	const singleBlog = blogsData.find((blog) => blog.id === blogId);

	return (
		<>
			<GoBackButton />
			{(singleBlog && (
				<div className="single-blog-container">
					<h2>{singleBlog.name}</h2>
					<span className="single-blog-date">{singleBlog.date}</span>
					<div className="single-blog-image-container">
						<img src={singleBlog.imageSrc} alt={singleBlog.name} />
					</div>
					<div className="single-blog-content">
						{singleBlog.content.map((section, index) => (
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
					<ErrorMessage message="This blogId doesn't exist. Try again with another blog." />
				)}
		</>
	);
}

export default SingleBlog;
