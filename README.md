# Angular Authentication and Film App

This project is a simple **Angular application** that implements a **login system** and displays a **film list**. The app uses **JSON Server** as a mock backend to simulate user authentication and fetch film data. The application demonstrates the use of various **Angular features**, such as components, services, routing, forms, and Angular Material for UI components.

![homepage](https://github.com/user-attachments/assets/11d3d223-4f15-4001-a625-cfcb5d566992)

## Project Overview

The app provides the following functionality:

- **User Authentication:** Users can log in with a valid username and password.
- **Film List:** Once logged in, users are redirected to the home page, where they can view a list of films.
- **Responsive UI:** The UI is styled using **Angular Material**, providing a modern, clean design.

The project uses **JSON Server** to simulate a backend, providing RESTful API endpoints to manage user authentication and film data.

## Key Angular Features Used

### 1. Components

Components are the building blocks of an Angular application. In this project, the following components are used:

- **AppComponent:** The root component that bootstraps the Angular app and holds the overall structure, including the `<app-header>` and `<router-outlet>`.
- **HeaderComponent:** The header section, which displays the logged-in user's username and provides a logout functionality.
- **LoginComponent:** Handles user authentication, including a form to enter the username and password, and communicates with the backend to verify credentials.
- **HomeComponent:** Displays after a successful login, showing a list of films fetched from the mock backend.
- **FilmListComponent:** Responsible for displaying the list of films once the user is logged in.

### 2. Services

Services in Angular are used for handling business logic, data fetching, and communication with external APIs. The following services are used in this project:

- **UsersService:** Communicates with the JSON Server to retrieve user data. It contains methods like `getUserByUsername()` to fetch user information based on the username entered in the login form.
- **FilmService:** A service (optional for expansion) that can handle fetching and managing film data from the backend.

Services are injected into components using Angular's **dependency injection** system, making the components modular and reusable.

### 3. Forms

Angular supports two types of forms: **template-driven forms** and **reactive forms**. This project uses **template-driven forms** to manage form inputs for user login.

- **Login Form:** The `LoginComponent` contains a form with username and password fields, bound to properties in the component using Angular’s `ngModel` directive.
- **Form Validation:** Validation is handled using Angular's built-in mechanisms. The form is only enabled when the fields are valid, and error messages are displayed when the fields are invalid or touched.

The form uses **Angular Material** components (`mat-form-field`, `mat-error`, `mat-raised-button`) to create the user interface and handle form validation.

### 4. Routing

The **Angular Router** is used to manage navigation between views (pages) in the application:

- **Login Route:** The `/login` route displays the login page, where users enter their credentials.
- **Home Route:** The `/home` route displays after a successful login, showing a list of films.

The router enables seamless navigation between pages, and Angular’s **RouterLink** directive and **Router** service are used to handle navigation.

### 5. Angular Material

This project uses **Angular Material** for UI components, which provides modern, responsive, and accessible elements out of the box. Key components used are:

- **mat-card:** Wraps the login form inside a material card for a clean, modern look.
- **mat-form-field:** Used to create the input fields for the username and password.
- **mat-error:** Displays error messages if the form fields are invalid or touched.
- **mat-raised-button:** Creates a styled login button with a primary color.

Angular Material ensures the app has a polished and consistent look without requiring extensive custom styling.

### 6. Dependency Injection

Angular’s **dependency injection (DI)** system allows components and services to be injected with dependencies (such as services), making the code more modular, maintainable, and testable.

## Conclusion
This project demonstrates the integration of Angular with Material Design components and a mock backend powered by JSON Server. The application allows users to log in, view films, and manage authentication with the help of services and components.

The primary features used include:

Angular Components: Organized into reusable components such as HeaderComponent, LoginComponent, FilmListComponent, and HomeComponent.
Angular Services: The UsersService provides HTTP-based data fetching, while the FilmsService is used for interacting with the backend data.
Angular Material: Components like mat-card, mat-form-field, and mat-button are used to enhance the UI/UX of the login screen and film listings.
Routing: Angular's routing system enables navigation between different parts of the application.
JSON Server: A simple backend mock API to simulate a database for storing user and film information.

