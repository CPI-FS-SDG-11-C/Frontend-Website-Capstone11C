# HIJAUSANTARA

<div align="center">

   ![Thumbnail1](https://github.com/CPI-FS-SDG-11-C/Frontend-Website-Capstone11C/assets/67674667/596009e1-fb2f-4de4-90bc-a1cd9e0bbdb8)
   
</div>

A user-friendly map that highlights all the Green Spaces in Surabaya, providing detailed information about each green space location, including size, facilities, and accessibility.

---

<div align="center">
   <p>Click on the image to redirect to our web application.</p>
   <a href="http://34.128.85.199:5173/login">

![Screenshot 2023-11-19 220324](https://github.com/CPI-FS-SDG-11-C/Frontend-Website-Capstone11C/assets/67674667/aef52959-d418-4c1d-94df-c49c27a8f2d5)

      
   </a>
</div>

## Technologies Used

- [ReactJS](https://react.dev/) : A JavaScript library for building user interfaces.
- [MaterialUI](https://mui.com/): A React UI component library that follows the principles of Material Design.
- [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for rapidly designing responsive web pages.
- [Maps API](https://developers.google.com/maps/documentation/javascript): Used for rendering the interactive maps.
- [GeoCoding API](https://developers.google.com/maps/documentation/geocoding): Integrated for location search functionality.
- [Vite](https://vitejs.dev/) : A fast and efficient build tool for modern web development.
- [Back End API](https://enchanting-laced-raisin.glitch.me/api/): An API to use in Front End Side.

## Features

- ViewMaps
- List of Sub-Districts that contain percentage of Green Space
- Green Space Area Detail, Ratings & Comments allowed
- Article
- Profile
  
## Getting Started

To get started with Gatere Maps locally, follow these steps:

1. Clone the repository:
   ```bash
   https://github.com/CPI-FS-SDG-11-C/Frontend-Website-Capstone11C.git
   ```
2. Install the dependencies:
   ```bash
   cd Frontend-Website-Capstone11C
   ```
   ```bash
   pnpm install
   ```
3. Register for a Maps API via Google Cloud

   - Create a `.env.local` / `.env` file in the root directory of the project.
   - Register for a Maps JavaScript API key via the Google Cloud platform and enable the GeoCoding API. You can follow the official documentation to obtain the API key.
   - Open the `.env.local` file and add the following line:

     ```env
     VITE_REACT_APP_API_KEY=YOUR_API_KEY
     VITE_API_URL=https://enchanting-laced-raisin.glitch.me/api/ (BACK_END_API_KEY)
     ```

     Replace `YOUR_API_KEY` with the actual API key you obtained from Google Cloud. By setting up the .env.local file with the appropriate API key, the application will be able to access the geocoding API and provide accurate property locations.

4. Start the development server:

   ```javascript
   pnpm run dev
   ```

5. Open your browser and visit specified local host port to view the app eg. `http://localhost:5173`

## Docker Image

1. To run this project using Docker, make sure the docker engine is running, then open your terminal and run this command:

```sh
docker pull adanngrha/capstone-sgd-11c:frontend-capstone-11c
```

2. Run the container using the docker image:

```sh
docker run -it frontend-capstone-11c
```

3. Go to this url to check if the website is running. If it's blank, go to the route '/login'.

```sh
http://localhost:5173/
```

## Deployment

Hijausantara is deployed using Compute Engine from Google Cloud Platform. Any changes pushed to the main branch will trigger an automatic deployment.
You can visit the live version of HomeTopia at http://34.128.85.199:5173/login.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to the branch.
5. Submit a pull request.
