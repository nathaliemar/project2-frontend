export function RecipeDetails({
  image,
  name,
  prepTimeMinutes,
  cookTimeMinutes,
  servings,
  difficulty,
  caloriesPerServing,
  ingredients,
  instructions,
}) {
  return (
    <div className="recipe-details max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Recipe Image */}
      <div className="mb-6">
        <img
          src={image}
          alt={`Photo of ${name}`}
          className="w-full h-64 object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

      {/* Key Facts Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Key Facts</h2>
        <ul className="list-none space-y-2 text-gray-600">
          <li>
            <span className="font-medium">Preparation time:</span>{" "}
            {prepTimeMinutes} min
          </li>
          <li>
            <span className="font-medium">Cooking time:</span> {cookTimeMinutes}{" "}
            min
          </li>
          <li>
            <span className="font-medium">Difficulty:</span> {difficulty}
          </li>
          <li>
            <span className="font-medium">Serves:</span> {servings}
          </li>
          <li>
            <span className="font-medium">Calories per serving:</span>{" "}
            {caloriesPerServing} kcal
          </li>
        </ul>
      </div>

      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-600">
          {ingredients &&
            ingredients.length > 0 &&
            ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
        </ul>
      </div>

      {/* Instructions Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-600">
          {instructions &&
            instructions.length > 0 &&
            instructions.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
    </div>
  );
}
