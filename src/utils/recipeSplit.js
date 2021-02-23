
const recipeSplit = (allRecipes) => {
    const row1 = [];
    const row2 = [];
    
        if (allRecipes.length) {
            var half = allRecipes.length / 2;
            var firstRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) <= (half - 1));
            var secondRow = allRecipes.filter(recipe => allRecipes.indexOf(recipe) > (half - 1));
            row1.push(firstRow)
            row2.push(secondRow)
        } else {
            console.log('Unable to use helper function')
        }

    return { row1, row2 };
}

export default recipeSplit