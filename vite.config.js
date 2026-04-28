import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT:
// If your GitHub repository is named differently, change '/mohamed-portfolio/'
// to '/your-repository-name/'. If using a custom domain later, change it to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/mohamed-portfolio/',
});
