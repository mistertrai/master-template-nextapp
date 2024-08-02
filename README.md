# Next.js & NextUI Template with Authentication

This is a modern, feature-rich template for creating applications using Next.js 14 (app directory), NextUI (v2), and Supabase authentication.

## Features

- 🚀 Built with [Next.js 14](https://nextjs.org/) (App Router)
- 💅 UI components by [NextUI v2](https://nextui.org/)
- 🎨 Styling with [Tailwind CSS](https://tailwindcss.com/)
- 🌓 Dark and Light mode support
- 🔒 Authentication with [Supabase](https://supabase.com/)
- 📱 Responsive design
- 🔤 Type-safe with [TypeScript](https://www.typescriptlang.org/)
- 🎭 Icons from [Iconify](https://iconify.design/)

## Demo

[Live Demo](https://your-demo-link.com) (Replace with your actual demo link)

## Quick Start

### Prerequisites

- Node.js 14.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/your-repo-name.git](https://github.com/mistertrai/next-app-template-v2)
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
.
├── app/
│   ├── about/
│   ├── app/
│   ├── login/
│   ├── signup/
│   ├── error.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
├── config/
├── lib/
├── public/
├── styles/
└── types/
```

## Key Features

- **Authentication**: Login, Signup, and OAuth support with Supabase
- **Dashboard**: Protected route with sidebar navigation
- **Theme Switching**: Toggle between light and dark modes
- **Responsive Design**: Looks great on both desktop and mobile

## Customization

- Update site configuration in `config/site.ts`
- Modify theme settings in `tailwind.config.js`
- Add or edit components in the `components/` directory

## Deployment

This template is ready for deployment on platforms like Vercel, Netlify, or your preferred hosting service.

For Vercel:
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Iconify](https://iconify.design/)

---

Made with ❤️ by Trai
