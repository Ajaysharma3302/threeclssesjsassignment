# threeclssesjsassignment

Features
Add Big Cats, Dogs, or Big Fish: The user can add new animals to the list by entering their details through a prompt-based interface.
Delete Last Animal: Allows the user to remove the last added animal (either Big Cat, Dog, or Big Fish).
Image Support: Displays an image of each animal alongside its details in the table.
Dynamic Table Generation: For each animal, a table is created dynamically showing its species, size, location, and an image

Technologies Used
HTML: Basic structure of the webpage.
CSS: Basic styling (classes like Container, Dogcontainer, Bigfishcontainer for containers).
JavaScript: Used to create classes, handle user input, generate tables, and dynamically render content.



Classes Overview
1. BigCatTable
This class represents a big cat with properties like species, size, location, and an image URL. It creates a table to display these properties.

Methods:
createTable(): Generates a table displaying the cat’s details.
2. BigCatManager
This class manages a list of big cats. It allows the user to add or delete cats and displays them dynamically on the page.

Methods:
addCat(): Prompts the user to input the details for a new big cat and adds it to the list.
deleteCat(): Removes the last added cat from the list.
renderCats(): Renders the list of cats on the page.
createButtons(): Creates the "Add Big Cat" and "Delete Last Cat" buttons.
initialize(): Initializes the interface by creating buttons and rendering any existing cats.
3. Dog
This class represents a dog with properties like species, name, size, location, and an image URL. It creates a table to display these details.

Methods:
createTable(): Generates a table displaying the dog's details.
4. BigFish
This class represents a big fish with properties like species, name, size, location, and an image URL. It creates a table to display these details.

Methods:
createTable(): Generates a table displaying the fish's details.
How to Use
Open the webpage.
Add Big Cat, Dog, or Big Fish:
Click on the "Add Big Cat" button to add a big cat.
Similarly, you can add a Dog or Big Fish by following the prompts for each animal type.
Delete Last Added Animal: Click on "Delete Last Cat" to remove the most recently added cat from the page.
Each animal (big cat, dog, or fish) will be displayed in a table with its species, size, location, and image.

# How to Run the Project

 git clone https://github.com/Ajaysharma3302/threeclssesjsassignment.git 
