
const router = require('express').Router();

router.get('/new', (req, res) => {
	res.render('places/new')
  })  

router.get('/', (req, res) => {
	let places = [
		{
			name: "Meroni Eats",
    city: "Henderson",
    state: "NV",
    cuisines: "seafood",
    pic: "https://www.google.com/aclk?sa=l&ai=DChcSEwi-ncDuypb9AhVtD60GHeS0B_8YABADGgJwdg&sig=AOD64_2dNStxILM650sbQEakkMVf5HvLEA&adurl&ctype=5&ved=2ahUKEwjCrLPuypb9AhUvLUQIHY42DncQvhd6BAgBEHQ",
		},
		{
            name: "Larky Drinks",
            city: "Henderson",
            state: "NV",
            cuisines: "mexican cafe",
            pic: "https://www.mexicoinmykitchen.com/wp-content/uploads/2012/11/cafe-de-olla-recipe-mexican-coffee-1.jpg"
		},
	];

	res.render('places/index', {places});
});

module.exports = router;
  
  
