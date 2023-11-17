import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ErrorMessage from "../ErrorMessage";
import GoBackButton from "../GoBackButton";

function SingleBlog() {
	const { blogId } = useParams();
	const [markdownContent, setMarkdownContent] = useState<string | null>(null);

	useEffect(() => {
		const fetchMarkdownContent = async () => {
			try {
				// Assuming the Markdown files are named the same as blogId with ".md" extension
				const response = await fetch(`/assets/markdown-blogs/${blogId}.md`);
				const content = await response.text();
				setMarkdownContent(content);
			} catch (error) {
				console.error("Error fetching Markdown content:", error);
				setMarkdownContent(null);
			}
		};

		fetchMarkdownContent();
	}, [blogId]);

	return (
		<>
			<GoBackButton />
			{markdownContent !== null ? (
				<div className="single-blog-container">
					<ReactMarkdown className={"single-blog-markdown"}>{markdownContent}</ReactMarkdown>
				</div>
			) : (
				<ErrorMessage message="Error loading blog content. Please try again later." />
			)}
		</>
	);
}

export default SingleBlog;
