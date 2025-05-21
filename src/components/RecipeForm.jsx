import { useEffect, useState } from "react";

export function RecipeForm({ mode, recipe = {}, onSubmit }) {
  //States (all-in-one)
  const [formData, setFormData] = useState({
    name: "",
    author: "", //userId
    //image
    imageUrl:
      "https://images.unsplash.com/photo-1645802734096-07f97fcd8bf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [],
    instructions: [],
    prepTime: 0, //prepTimeMinutes
    cookingTime: 0, //cookTimeMinutes
    servings: 0,
    calories: 0, //caloriesPerServing
    difficulty: "Easy",
  });

  // Logic to pre-populate form in edit mode
  useEffect(() => {
    if (mode === "edit" && recipe) {
      setFormData({
        name: recipe.name || "",
        author: recipe.author || "",
        imageUrl:
          recipe.imageUrl ||
          "https://images.unsplash.com/photo-1645802734096-07f97fcd8bf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ingredients: recipe.ingredients || [],
        instructions: recipe.instructions || [],
        prepTime: recipe.prepTime || 0,
        cookingTime: recipe.cookingTime || 0,
        servings: recipe.servings || 0,
        calories: recipe.calories || 0,
        difficulty: recipe.difficulty || "Easy",
      });
    }
  }, [mode, recipe]);

  // Generic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); //call parent provided onSubmit handler, POST for add, PUT/PATCH for edit
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">
          {mode === "add" ? "Add a new recipe" : "Edit this recipe"}
        </legend>
        <label className="label">Name</label>
        <input
          type="text"
          required
          className="input"
          placeholder="Your recipe's name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label className="label">Author</label>
        <input
          type="text"
          className="input"
          placeholder="Name"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <label className="label">Image</label>
        <input
          type="url"
          className="input validator"
          required
          pattern="https?://.*"
          title="Must be valid URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
        <p className="validator-hint">Must be valid URL</p>
        <label className="label">Ingredients</label>
        <textarea
          className="textarea"
          required
          placeholder="List ingredients separated by commas (e.g., flour, sugar, eggs)"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInputChange}
        ></textarea>
        <label className="label">Instructions</label>
        <textarea
          className="textarea"
          required
          placeholder="List required steps separated by commas (e.g. boil water, add salt, ...)"
          name="instructions"
          value={formData.instructions}
          onChange={handleInputChange}
        ></textarea>
        <label className="label">Preparation Time (minutes)</label>
        <input
          type="number"
          className="input"
          placeholder="Preparation time in minutes"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleInputChange}
        />

        <label className="label">Cook Time (minutes)</label>
        <input
          type="number"
          className="input"
          placeholder="Cooking time in minutes"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleInputChange}
        />
        <label className="label">Servings</label>
        <input
          type="number"
          className="input"
          placeholder="Number of servings"
          name="servings"
          value={formData.servings}
          onChange={handleInputChange}
        />
        <label className="label">Calories per Serving</label>
        <input
          type="number"
          className="input"
          placeholder="Calories per serving"
          name="calories"
          value={formData.calories}
          onChange={handleInputChange}
        />
        <label className="label">Difficulty</label>
        <select
          className="select"
          value={formData.difficulty}
          onChange={handleInputChange}
          name="difficulty"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit" className="btn btn-soft btn-primary">
          Save
        </button>
      </fieldset>
    </form>
  );
}
