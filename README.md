# CS-465-fullstack
SNHU CS-465 Full Stack Development with MEAN

# Architecture
## Comparing Express HTML, JavaScript and Single-Page Application
Using Express HTML allowed us to use the Handlebars templating engine to generate HTML content dynamically based on user needs. JavaScript is the code behind our application, both through the Node.js framework in the back-end where it handles the API and route functionalities it also is the basis for our Angular driven SPA with the TypeScript framework. The SPA uses TypeScript to dynamically serve content on demand and the structure of an Angular web-app allows us to dynamically update the content on the page in real time without requring a refresh of the browser. All three of these technologies have strenghts and weaknesses which is why a good web-app using a combination of technologies to achieve the goals it sets out to.

## Why MongoDB over SQL
I used MongoDB due to it's scalability and flexability. This is especially helpful in handling various different types of data with various structures which is somehting SQL just cannot handle easily.

# Functionality
## How is JSON different than JavaScript and how is JSON used in the development process
JSON(JavaScript Object Notation) is a data format that is derived from JavaScripts object syntax. It's used to transfer data between the backend, database, and frontend as well as inside of the frontend and backend. JSON is a text format using key-value pairs to store the data which can then be read by the application. This differes from JavaScript which is a full programmin language that runs in all modern web browsers allowing programmers to create dynamic and performant web applications.

## Refactoring
A good example of refactoring was taking HTML templates for the trip cards on the public facing site and turning that into JSON files which could be driven and distrubted by Handlebars instead. This then led to refactoring that into loading the data into MongoDB and storing it there to be retrieved without having to pass the JSON around multiple times or distrubute it everytime the page loads. Making resuable UI elements cuts down on development time and complexity as instead of reinventing the wheel each time you just need to plug in the template and maybe modify it a bit to fit your specific needs. This gives developers time to focus on other things, such as debugging or optimzing.

# Testing
In order to test the API for this web application I made extensive use of Postman. This allowed to to send the approriate GET, POST, and PUT HTTP requests and verify that I was recieving the correct reponse code. Once I added authenication I had to make sure to include the authorization token which added a layer of complexity to my testing but I was able to verify that I was correctly recieving an "unauhtorized" response whem I failed to do so. Using this I was able to create a RESTful API that is fully tested and functional.

# Reflection
This course has been a big help in reaching my professional goals. Learning how web development works and the pros and cons of various technologies is a good boon as there is a lot of work in this field and even if I don't work in web development its always good to add tools to the toolbox. I have learned how to integrate a database into an existing application and refacotr the program accordingly, learnd the different HTTP request methods and how and when they are used, and got a good understanding of JavaScript and HTML.
