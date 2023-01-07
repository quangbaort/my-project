import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel(['resources/js/my_love.js', 'resources/js/my_love.css'])
    ],
});
