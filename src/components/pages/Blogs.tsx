import { IBlog } from "../../App";
import jsonBlogs from "../blogs-data.json";
import { Link } from "react-router-dom";

function Blogs() {
	return (
		<>
			<div className="blogs-container">
				<h2> Blogs </h2>
				<div className="blogs-content">
					{jsonBlogs.map((blog: IBlog) => {
						return (
							<Link to={`/blogs/${blog.id}`} key={blog.id}>
								<div className="blog">
									<div className="blog-description">
										<h3>{blog.name}</h3>
										<p>{blog.descriptionShort}</p>
										<span className="blog-date">{blog.date}</span>
									</div>
									<div className="blog-img">
										<img
											src={blog.imageSrc}
											alt={blog.name}
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

export default Blogs;
