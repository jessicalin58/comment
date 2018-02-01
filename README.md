<!-- Name -->
<h1 align="center"> Comment.me </h1>

<!-- App Description -->
<div align="center"> Comment.me makes it easier for designers and clients to communicate back-to-back using note annotation and quick image upload. By adding 'hotspots' directly into the picture, the client/designer can visually identify which element is being referenced it to. No software hassle and complications, <em>it's completely free with, web-based and with no installation required.</em> </div>

## Contents
    - [Contents](#contents)
        -[Deployed Application](#deployed-application)
        -[Technologies Used](#technologies-used)
        -[Mockup and User Navigation](#mock-user-navigation)
        -[Challenges](#challenges)
        -[Future Features](#future-features)
        -[Credits](#credits)

## Deployed Application
[Heroku] https://guarded-citadel-85004.herokuapp.com/

## Video Instruction 
[Vimeo] 

## Technologies Used 
Node, React, Laravel & MySQL
Libraries: Cloudinary-React, Boostrap, FullPage, Html2Canvas, Moment, React-Draggable, React-Dropzone, React-Modal, React-Router-Dom, ReactStrap, Superagent.


## Mock-up and User Navigation 
![](screenshot/mockupnav.gif)

## Challenges 
    * 1. Import User Image into the web
    * 2. Receive the user information and generate an unique id for it
    * 3. Grab the id and let user annotate over it
    * 4. Generate a new image with user annotation and text input
    * 5. Export the file generated and save it into their computers

Many of these challenges involved using external API's such as Cloudinary to store the uploaded images, and other issues were solved using plain javascript logic. Personally, I'd say that the most challenging part was to generate the new url query <em> with </em> the user's image, and pass it into a new route with different components of React. Since they couldn't be passed using regular props method, it was solved by passing it into the router, then the component parent, and then into the new child. 

## Future Features



