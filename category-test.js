var categories = [
    {
        name: "category1",
        subcategories: [
            {
                name: "category2",
                subcategories: [],
            },
            {
                name: "category3",
                subcategories: [
                    {
                        name: "category4",
                        subcategories: [],
                    },
                ],
            },
        ],
    },
    {
        name: "category5",
        subcategories: [],
    },
];
// TO-DO: Implement this function
var getCategoryPath = function (categories, categoryName) {
    for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
        var category = categories_1[_i];
        if (category.name === categoryName) {
            return "/".concat(category.name);
        }
        if (category.subcategories.length > 0) {
            var subPath = getCategoryPath(category.subcategories, categoryName);
            if (subPath) {
                return "/".concat(category.name).concat(subPath);
            }
        }
    }
    return null; // Not found
};
// OUTPUT SAMPLES
console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
