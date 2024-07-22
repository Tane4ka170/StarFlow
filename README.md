# StarFlow

StarFlow is a React-based application that displays Star Wars heroes and their details, including associated films and starships, using data fetched from an external API. The application leverages Next.js, Chakra UI, and React Flow Renderer for the user interface and visualization.

## Features

- **Hero Listing**: View a list of Star Wars heroes.
- **Hero Details**: View detailed information about a specific hero, including films and starships.
- **Interactive Graph**: Visualize relationships between heroes, films, and starships using React Flow.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/starflow.git
   ```

2. Navigate to the project directory:

   ```sh
   cd starflow
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

### Running the Application

- Start the development server:

  ```sh
  npm run dev
  ```

  or

  ```sh
  yarn dev
  ```

- Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- **`/api`**: API functions for fetching data.
- **`/components`**: React components for rendering the UI.
- **`/pages`**: Next.js pages.
- **`/styles`**: Custom Chakra UI theme.

## API Endpoints

- **Fetch Heroes**: `/people/?page={page}`
- **Fetch Hero Details**: `/people/{id}/`
- **Fetch Film Details**: `/films/{id}/`
- **Fetch Starship Details**: `/starships/{id}/`

## Dependencies

- `@chakra-ui/react`
- `axios`
- `next`
- `react`
- `react-dom`
- `react-flow-renderer`

## License

This project is licensed under the MIT License.
