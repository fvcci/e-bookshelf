import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
// Images
import AddBook from "../images/add_book_button.png";
import EditBooks from "../images/edit_books_button.png";
import Caret from "../images/caret.png";
import NoImage from "../images/no_image.png";
// Components
import Bookmark from "../components/Bookmark";
import SearchBar from "../components/SearchBar";
import BookCover from "../components/BookCover";
import Grid from "../components/Grid";
// Styles
import { Wrapper, Content } from "./Bookshelf.styles";
import { ButtonWrapper, Button } from "../components/Bookmark/Bookmark.styles";

const Bookshelf = () => {
	const [selectedSortingOption, setSelectedSortingOption] =
		useState("MANUALLY");
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<Wrapper>
			<Bookmark>
				<h1>Bookshelf</h1>
				<hr />
				<h3>5 books</h3>
				<hr />
				<h3>
					Sort by
					<Dropdown className="drop-down">
						<Dropdown.Toggle
							className="drop-down-toggle"
							variant="success"
						>
							{selectedSortingOption}
							<img src={Caret} alt="caret" />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{["MANUALLY", "AUTHOR", "TITLE"].map(
								(sortingOption, index) => (
									<span key={sortingOption}>
										<Dropdown.Item
											className="drop-down-item"
											key={sortingOption}
											as="button"
											onClick={() =>
												setSelectedSortingOption(
													sortingOption
												)
											}
										>
											{sortingOption}
										</Dropdown.Item>
										{index !== 2 && <Dropdown.Divider />}
									</span>
								)
							)}
						</Dropdown.Menu>
					</Dropdown>
				</h3>
				{/* TODO make them default to home when they are pressed */}
				<ButtonWrapper>
					<Link to="/add">
						<Button src={AddBook} alt="add_book_button" />
					</Link>
					<Link to="/edit">
						<Button src={EditBooks} alt="edit_books_button" />
					</Link>
				</ButtonWrapper>
			</Bookmark>
			<Content>
				<SearchBar setSearchTerm={setSearchTerm} />
				<hr />
				<Grid>
					{/* Place holder value for now */}
					{[...Array(20).keys()].map((num) => (
						<BookCover key={num} image={NoImage} clickable />
					))}
				</Grid>
			</Content>
		</Wrapper>
	);
};

export default Bookshelf;
