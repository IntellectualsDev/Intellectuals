# Intellectuals Engineering React Web App

Welcome to the official repository for the `Intellectuals Engineering React Web App`. The Intellectauls are a group of college friends at the University of Iowa who have a collective love for all things engineering. Our group consists of Electrical Engineers and Computer Science Engineers, and our skills range from Web/App Development, Embedded Systems, Game Development, Power Systems, Circuit Design, and much more! We are highly motivated students and soon-to-be engineers! Below you'll find detailed information about the technical aspects of our webapp. Click this [link](https://intellectuals-webpage.web.app) to visit the current release of our deployed website!

### Or go visit: [Intellectuals-webpage.web.app](https://intellectuals-webpage.web.app)

## Table of Contents:
### Home Page
* Animated Homepage Hero Section
* Global Nav Bar
* Timeline Component
### Projects Page
* Animated Projects Page Hero Section
* "Netflix style" Projects Sliders
### Profile Page
* Starry Night Hero Section
* Profile Information Section
* Profile Comment Section w/ Firebase Realtime DB
### Login Page
* Form Frontend & Firebase Auth


# Homepage
<img width="2545" alt="Screenshot 2023-12-03 at 2 50 34 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/d2032f21-acea-47fd-bc15-5c357015c927">

## Animated Homepage Hero Section:
The Homepage serves as the hook for visitors of our page, and it was designed to be intricate and exciting, while still providing an air of sophitication. As a result, a grid of multicolor squares, with animated circles within creates a soothing but stunning visual effect. This was a technical and design challenge for our team. This design was repurposed from Okazz on Open Processing from project "231024a" and is being used through the CreativeCommons Attribution NonCommerical License. Attribution:
“231024a” by Okazzhttp://openprocessing.org/sketch/2058264License CreativeCommons Attribution NonCommercial ShareAlikehttps://creativecommons.org/licenses/by-nc-sa/3.0

In the AnimatedHomePageHero.js file, the visual effect is achieved by incorporating mathematical calculations to dynamically render circles within squares, resulting in an animated and visually engaging hero section. The key mathematical elements revolve around the grid-based layout, dynamic circle expansion, randomization for diversity, and rotation with clipping.

The canvas is structured into a grid, with each square housing a dynamically expanding circle. The grid's size is defined by the variables c and w, representing the number of columns and the width of each square, respectively. This organized grid serves as the base layer.

Within the OBJ class, responsible for individual square-circle elements, circles are initialized with varying sizes (this.d1 and this.d2) and colors. The move method within this class orchestrates the dynamic expansion of the circles over time, generating the visual effect of expandin circles. The easeInOutQuad function contributes to smooth transitions in circle size, adding to a smooth animation timeline.

To ensure a visually diverse composition, colors, angles, and initial sizes of circles are randomized during the creation of each OBJ. This randomization introduces variety, making each square-circle element unique within the grid.

Rotation is applied to the circles within squares using the p.rotate function, allowing for circles to combine into half, 3/4, and full circles. Furthermore, the p.drawingContext.clip() function is utilized to clip the circles within the boundaries of the squares.\\

## Global Nav Bar:
The GlobalNav component serves as the navigation bar for the React web app, incorporating essential features such as links to different pages, a dropdown menu for team members, and user authentication.

Implemented using the Bootstrap Navbar component, it offers a responsive design with links to "Team," "Projects," and "Contact." The team section features a dynamic dropdown menu with links to individual team members' pages using React Router.

User authentication is handled through Firebase Authentication. The component sets up event listeners using the useEffect hook, including one for clicks outside the user dropdown to facilitate closing. The onAuthStateChanged function from Firebase tracks the user's authentication state, updating the user state accordingly.

The handleSignOut function allows users to sign out using Firebase Authentication's auth.signOut() method. The user dropdown displays the user's email and a "Sign Out" button, toggled by clicking the user circle. Conditional rendering displays a loading message while the authentication state is determined.

If authenticated, the user dropdown is shown; otherwise, a "Login / Sign Up" button is displayed, linking to the login page. The component provides the navigation experience using React Router, Bootstrap components, and Firebase Authentication.


## Timeline Component
<img width="2542" alt="Screenshot 2023-12-03 at 2 51 45 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/ef94669b-9dd2-44ca-be98-befeb7c9cbb6">

One the Hero Section a bobbing icon tells the user to "Scroll Down", where they are met with the Timeline component. The Timeline component serves as a first introduction for the user to our team. It provides member's names, featured project history, and a profile image as a personal touch. When viewing a member's section of the Timeline their name, and projects section are expanded with the following member in the minimized state but still visible. In this minimized state only a minimized profile image is visible, and as the user scrolls down this member enters a maximized state where their profile image expands and their name and projects become visible. This component tested our efficient software design and animation skills.

The dynamic calculation for timeline animations involves precise tracking of the user's scroll position within the Timeline.js component. This process is facilitated through the implementation of a scroll listener within the `useEffect` hook. As the user scrolls, the bounding client rectangle of each TimelineItem is obtained using the getBoundingClientRect method. This rectangle encapsulates vital information about the element's position relative to the viewport, including its top position.

The vertical offset of each TimelineItem is then calculated by determining the absolute value of its top position within the viewport. This offset represents the distance between the top of the viewport and the top of the respective timeline item. By comparing these offsets, the closest timeline item is identified, with the item having the smallest offset considered the closest to the top of the viewport.

Upon identifying the closest timeline item, the component updates its state to reflect the focused item dynamically. This update triggers the application of specific Framer Motion variants tailored for the focused item, leading to a transition between different animation states.

The Framer Motion variants play define the animation behaviors for various components within each TimelineItem. These variants encompass properties such as scale, opacity, and position, specifying how elements should transition between minimized and maximized states. As mentioned earlier, the profile image and text containers have variants that determine how they scale, become opaque, and reposition during these transitions.

The purpose of these variants is to ensure consistency and coherence in the animation sequence, contributing to a polished and visually engaging user experience. The switching between these variants is dynamically triggered based on the focused item, resulting in a responsive and dynamic timeline component in Timeline.js.

# Projects Page

## Animated Projects Page Hero Section
![Projpagehero](https://github.com/anshuljg07/Intellectuals/assets/72891464/7ec0f76a-3f0b-473f-9386-e9e4909f5d4d)

Once the user has naviagted from the Home Page to the Projects page they are met with an animated Hero section similar to the Home Page's hero section. However, this hero section's design consists of a captivating visual effect by generating a collage of rhomboid shapes within rhomboid shpae that, with rotation, create the illusion of rotating cubes. This design was repurposed from Rubén Medellín from on Open Processing from project “Cubed” and is being used through the CreativeCommons Attribution NonCommerical License, Attribution:
“Cubed” by Rubén Medellín <chubas>http://openprocessing.org/sketch/2044889License CreativeCommons Attribution NonCommercial ShareAlikehttps://creativecommons.org/licenses/by-nc-sa/3.0

The technical details of this animation are as follows:

The canvas is initialized using the p5.js library, and the animation relies on several parameters such as hexSize, h, w, and hexWeight to control the size, height, width, and weight of the hexagonal shapes.

The palette of colors is defined from which the shapes will be colored. The colors are selected randomly from predefined palettes, providing visual variety.

The animation involves two types of hexagonal shapes: background hexagons `(drawBgHex)` and foreground hexagons `(drawFgHex)`. The shapes rotate and create a dynamic pattern through their interaction.

The rotation of each hexagon is influenced by its distance from the center of the canvas, creating a sense of depth and perspective. The rotation is controlled by the getRotation function, which considers the current frame count and applies easing for smooth transitions.

The animation includes a granulated texture in the background, contributing to a visually rich and textured output. The texture is created using the granulate function, introducing a level of detail and complexity.

Keyboard interaction is implemented, allowing users to pause and resume the animation using the space bar (keyCode === 32). Additionally, pressing 'R' resets the animation, and 'P' toggles the pause state. The keyPressed function handles user input, enabling color palette changes when the space bar is pressed (keyCode === 32).

## "Netflix style" Projects Sliders
<img width="2542" alt="Screenshot 2023-12-03 at 2 57 13 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/29549cd4-3d42-4a79-889a-5663b19168e2">
<br />
<br />
<br />

![netflixslidexpand](https://github.com/anshuljg07/Intellectuals/assets/72891464/f4253489-2219-4217-a51b-27f09949152c)



The Netflix Slider component's foundation lies in the Slider component, a React-based UI module that encapsulates the entire slider functionality. The SliderContext manages the state of the slider, including the currently selected slide, enabling communication between various components. Leveraging the context, the Item component represents an individual slide with an image and a button, while the Content component provides an immersive view of the selected movie's details.

Navigational elements, such as the 'prev' and 'next' buttons, are implemented by the SlideButton component, offering an interface for users to navigate through the slider. The responsive design of the slider is ensured by the useSizeElement hook, which dynamically calculates the width of a DOM element, adapting to different screen sizes.

The dynamic sliding behavior is orchestrated by the useSliding hook, which calculates the number of visible elements in the viewport and adjusts the translation distance accordingly. This ensures a smooth sliding experience, taking into account the varying screen sizes and the need for an adaptable user interface.

The SliderWrapper component serves as a structural container, providing an organized layout for the slider's main content. Together, these components and hooks create Netflix Slider, demonstrating a blend of React components, hooks, and context to deliver an engaging and interactive user experience for exploring proejct content in a familar but intriguing way.


# Profile Page
## Starry Night Hero Section
<img width="2544" alt="Screenshot 2023-12-03 at 2 57 48 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/f4208f72-07b6-4445-bc65-906fba271275">

When the user navigates to an individual team member's profile page they are met with yet another beautiful hero section. This hero section mimics that of the night sky with twinkling stars serving as the backdrop as we introduce the team member's name and fun title. 

The starry night background on our profile member pages is implemented in-house through a set of React components and accompanying styles. The core building block is the Star component, a simple div rendered with a specified style representing an individual star. The StarHero component orchestrates the creation of a starry background by generating a specified number of stars using the generateStars function. Each star is given random positions, scales, animation durations, and delays to create a dynamic and twinkling effect.

The StarsHero component, in turn, integrates this star generation logic, rendering a specified count of stars as the background for the hero section. The stars are positioned absolutely within the hero section, creating a visually appealing celestial atmosphere. This component provides a versatile and customizable background for hero sections, and the count of stars can be adjusted based on design preferences.

The accompanying CSS in StarsHero.css defines the styles for both the hero section and individual stars. The hero section is fixed to cover the entire viewport and is given a z-index to ensure it appears behind other content, allowing for further content to cascade on top in such a way that the stars are always the backdrop The stars themselves are styled as small circles with a twinkle animation, achieved through a @keyframes rule named twinkle. This animation alters the opacity and scale of each star, creating the twinkling effect. Additionally, a ::before pseudo-element adds a subtle box-shadow and opacity to enhance the visual richness of each star.

In summary, the starry night background components leverage React components and CSS animations to dynamically generate and animate stars, resulting in an aesthetically pleasing and customizable celestial backdrop for profile member pages.

## Profile Information Section
<img width="2542" alt="Screenshot 2023-12-03 at 2 58 23 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/1d31ac56-1240-48e3-b8d6-498b3d770af6">
<img width="2543" alt="Screenshot 2023-12-03 at 2 59 10 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/9da4ccf9-744f-4acc-a0e8-2f9ab0b36878">

As the user scrolls down past the starry night hero section, they begin to see the information contained and organized within the profile page. The profile page consists of a general profile.js component, which we will discuss in technical detail:

The profile component is responsible for rendering the user's profile page with a focus on dynamic content and a clean, organized layout. It harnesses the power of React and integrates Bootstrap components to achieve a structured design. The component receives dynamic data through props, making it adaptable to different user profiles. This data includes the user's name, an about section, an image, educational and professional experiences, skills, and a trajectory section. The header of the profile is sticky, featuring a fade-in and fade-out animation effect triggered by a scroll event listener. This animation contributes to an engaging and visually appealing user experience.

In terms of structure, the trajectory section neatly presents the user's educational and professional experiences, each enclosed within rounded boxes for a polished appearance. The skills section is categorized into technical and personal skills, further organized into professional and personal subcategories. Bootstrap classes are utilized for responsiveness and basic styling, while custom CSS, found in the accompanying Profile.css file, enhances the visual aesthetics of the profile.

The Profile.css file complements the technical aspects of Profile.js by providing additional styling details. It sets the global styling for the main container, ensuring it spans 305 viewport heights with full viewport width. The chosen font, "Plus Jakarta Sans," is imported from Google Fonts and consistently applied throughout the profile and the website, contributing to a professional typography style. The layout structure employs flex properties extensively, offering a flexible and responsive design. The color scheme primarily consists of black and white, maintaining a visually cohesive appearance. Subtle yet engaging visual elements, such as the bobbing animation on the scroll-down arrow and opacity transitions via the fade-element class, contribute to an overall user interface.

## Profile Comment Section w/ Firebase Realtime DB
<img width="2542" alt="Screenshot 2023-12-03 at 3 01 31 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/c129390f-4003-40b4-bf91-ac0f33a22c46">


Since this project is largely frontend, we wanted to show our understanding and comfort with implementing backend features, so unique comment sections for each team member's profile page were created at the bottom of each profile page. They were designd withas reusable components following software design best practices and made use of Firebase's realtime database for ease of use. This comment section is composed of two main react components, which we discuss in technical detail:

The CommentModule and CommentsModule components, along with the associated styling in `CommentSection.css`, collectively provide a dynamic comment section for user interaction. The CommentModule handles individual comments, while the CommentsModule orchestrates the display and submission of comments for a specific page.

The CommentModule component serves as a foundational building block for handling comments. It uses Firebase authentication to identify the user and Firebase Realtime Database to manage the comment data. The `initDb` function initializes the database with a test comment, including the user's email and the timestamp. The initializaiton process is automatically triggered. The component includes a simple UI displaying the user's email, placeholder text, and a button for manually updating the database with a comment.

The CommentsModule component operates as the primary comment section for a specific page. It dynamically fetches comments from the Firebase Realtime Database and renders them in a visually appealing manner. The comments are presented in a flex column layout with individual comment containers for each user's comment. The user's comment input is displayed using a Form from React Bootstrap. The component ensures real-time updates, and a user can submit a new comment, which updates the database and triggers a refresh of the displayed comments.

The associated `CommentSection.css` stylesheet provides a cohesive and aesthetically pleasing design for the comment section. Styles such as `.comment-user-circle` define the circular user avatars, while `.comments-container` and `.comment-container` set up the overall layout for displaying comments. The color scheme is consistent, with a white font color against dark backgrounds for readability. The comment submission form is styled to have a textured background and visually distinct buttons. The use of flex properties ensures responsive and organized layouts.

# Login Page

## Login Module & Firebase Auth
<img width="2544" alt="Screenshot 2023-12-03 at 3 00 05 PM" src="https://github.com/anshuljg07/Intellectuals/assets/72891464/8f5a31c7-30c4-4f72-84eb-419a8fd61c18">


In the navbar the user is prompted to sign in if they are already not signd in. Signing in allows the user to leave comments on profile member's comment sections, as mentioned earlier. This login state is global to the site, and as a result is carried between pages and the architecture was designed to support the implementation of other login baed features. 

The LoginModule component, along with its associated styling in LoginModule.css, constitutes a user authentication system seamlessly integrated with Firebase, and we will discuss their technical details:

The LoginModule component facilitates user login and sign-up functionalities. It employs the Firebase authentication service to handle user credentials. Noteworthy is the integration of the React Bootstrap library for consistent and responsive UI elements. The component incorporates state management for email, password, and password visibility toggle. Additionally, it utilizes the useNavigate hook from React Router to redirect users upon successful authentication.

The component includes an email input field and a password input field, both with corresponding labels. Real-time validation is applied to provide user-friendly feedback. The tryLogin function orchestrates the authentication process, ensuring proper error handling for different scenarios, such as invalid email format, weak password, existing email, and temporary account disablement. Specific error messages are displayed for each case.

The LoginModule.css stylesheet defines the visual styling for the LoginModule. The styling ensures a consistent color scheme with white text on a dark background for optimal readability. The login-button class sets the styling for the login and sign-up button, emphasizing a vibrant color and smooth transition effect.

Furthermore, the stylesheet introduces a dynamic password visibility toggle button, allowing users to reveal or hide their entered password. The error messages are styled to appear in red for enhanced visibility and clarity. The layout is designed to be responsive, making effective use of flex properties and font choices.




