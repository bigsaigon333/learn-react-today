import React from "react";

export default function RecipeIngredientEdit({ name, amount }) {
	return (
		<>
			<input
				type="text"
				name="name"
				className="recipe-edit__input"
				value={name}
			/>
			<input
				type="text"
				name="amount"
				className="recipe-edit__input"
				value={amount}
			/>
			<button className="btn btn--danger">&times;</button>
		</>
	);
}
