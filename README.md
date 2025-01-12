# Boldo Landing Page

Boldo is a modern and responsive landing page built with **Next.js 15** and styled using **Tailwind CSS**. It is designed to be fast, SEO-friendly, and easily customizable, making it a perfect solution for showcasing products or services.

## Features

- **Next.js 15**: Utilizes the latest version of Next.js for server-side rendering and optimized performance.
- **TypeScript**: Ensures type safety and better developer experience.
- **ESLint**: Enforces code quality and consistency.
- **Tailwind CSS**: Fully responsive and customizable design using utility-first CSS.
- **SEO Optimized**: Built with SEO best practices to improve search engine rankings.
- **Fast and Lightweight**: Designed to load quickly and perform well on all devices.
- **PWA Ready**: Includes a `manifest.json` file for Progressive Web App functionality.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/boldo-landing-page.git
   cd boldo-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the project for production:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
├── public          # Static files (e.g., images)
├── src
│   ├── components  # Reusable UI components
│   ├── app         # Next.js app router
│   ├── sections    # Landing page sections
│   ├── lib         # Utility functions
├── .eslint.config.mjs # ESLint configuration
├── tsconfig.json   # TypeScript configuration
├── .env.local      # Environment variables
├── next.config.ts  # Next.js configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/)

---

Feel free to reach out if you have any questions or suggestions!
