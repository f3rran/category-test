const categories = [
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

  type Category = {
    name: string;
    subcategories: Category[];
  };

  // TO-DO: Implement this function
  const getCategoryPath = (categories: Category[], categoryName: string): string | null => {
    for (const category of categories) {
      if (category.name === categoryName) {
        return `/${category.name}`;
      }

      if (category.subcategories.length > 0) {
        const subPath = getCategoryPath(category.subcategories, categoryName);
        if (subPath) {
          return `/${category.name}${subPath}`;
        }
      }
    }

    return null; // Not found
  };


  // OUTPUT SAMPLES
  console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
  console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
  console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
