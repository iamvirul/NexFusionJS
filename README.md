# NexFusion

NexFusion is a modern framework that combines the power of Next.js and NestJS, aiming to provide a seamless integration of frontend and backend development.

## Getting Started

Follow these steps to start using NexFusion:

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

```bash
npm install nexfusion
# or
yarn add nexfusion
```

### Cloning from GitHub (Temporary)

Until our CLI tools and project file structure template are updated, you can clone the project directly from GitHub:

```bash
git clone https://github.com/iamvirul/NexFusionJS
```

### Usage

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   ```

2. **Start both the client-side (Next.js) and server-side (NestJS) applications:**

   ```bash
   npm run start
   # or
   yarn start
   ```

   This command will concurrently start both the Next.js client-side application on port `3000` and the NestJS server-side application on port `3001`.

3. **Open your browser:**

   - Next.js (client-side): `http://localhost:3000`
   - NestJS (server-side): `http://localhost:3001`

### Configuration

#### Tailwind CSS

To customize Tailwind CSS, modify the `tailwind.config.js` file. You can adjust colors, typography, and other design elements.

#### TypeScript

NexFusion uses TypeScript for enhanced type safety. Configure `tsconfig.json` as needed for your project requirements.

### Contributing

Contributions are welcome! Please fork this repository and create a pull request with your improvements.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Author

NexFusion is developed by [Virul Nirmala Wickramasinghe](https://virul.me).

### Acknowledgments

- Next.js and NestJS communities for their powerful frameworks.
- Tailwind CSS for styling flexibility.
- Framer Motion for animations.

---

This updated version instructs users to start both the client-side (Next.js) and server-side (NestJS) applications concurrently using a single command (`npm run start` or `yarn start`). This approach simplifies the process and ensures that both parts of NexFusion are running and accessible for development. Adjust the instructions further based on any specific configurations or updates to your project.
