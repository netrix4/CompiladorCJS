/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{html,js,css,ts,jsx,tsx,mdx}',
  ],
  //Aqui me habai dado un error con No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
  //asi que agregue todas las extensiones delos archivos de  mi carpeta app
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
