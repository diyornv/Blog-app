/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        container: {
          center: true, // Har doim o‘rtaga joylash
          screens: {
            xl: "1440px", // Katta ekranlar (Desktop)
            lg: "834px", // Planshetlar
            sm: "390px", // Telefonlar
          },
          padding: {
            DEFAULT: "112px", // Odatiy holatda 112px (katta ekranlar)
            lg: "20px", // Planshetlarda 20px padding
            sm: "32px", // Telefonlarda 32px padding
          },
        },
      },
    },
    plugins: [],
  };
  