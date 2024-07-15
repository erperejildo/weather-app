# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# BONUS POINTS

1. Ensure the app looks good on, desktop, tablet, and mobile screens: DONE
2. Display appropriate error messages for invalid city names or API errors.: DONE (using Toast)
3. Use Vite as the build tool, Tailwind CSS for styling, and TanStack Query for data fetching/caching.: (DONE, except for TanStack, just using fetch)
4. Load a different background image depending on the weather (hot/cold/cloudy/rain/etc).: DONE
5. For dark backgrounds, the app switches to a dark mode.: DONE
6. Add a dropdown with the recent places searched.: DONE
7. Use any additional library/package/UI toolkit if you think it helps achieve a better result. We recommend using the components from Shadcn.: DONE

## FINAL LOOK

Light:

![image](https://github.com/user-attachments/assets/08269ade-e106-4374-a35c-11d2a67e35c7) ![image](https://github.com/user-attachments/assets/c5f7b66d-dd01-44c4-aa11-6e63098529a2)

![image](https://github.com/user-attachments/assets/eddd3fd6-6e3f-4d58-9643-e2dd3011031d) ![image](https://github.com/user-attachments/assets/81929277-1033-4da5-a1e5-cd7941827c21)


![image](https://github.com/user-attachments/assets/6fe31a73-21e9-4e5c-840d-51f6b207ae3c)

Dark:

![image](https://github.com/user-attachments/assets/247af6b0-c0e8-4f22-9967-cf63b8d78b86) ![image](https://github.com/user-attachments/assets/c71ddf18-5dc1-4731-9d74-124a547d4099)

![image](https://github.com/user-attachments/assets/69402d8c-03a5-492d-bc92-63eae2afe58a) ![image](https://github.com/user-attachments/assets/ac2004e2-49e6-462d-8f66-d8ec4a208fff)

![image](https://github.com/user-attachments/assets/351fecfa-104a-42fa-9722-7cd4dc7aa280)




## DESIGN CHANGES

- Forecast API: it was asking for credit card when creating account so I used https://weather.visualcrossing.com instead
- This API doesn't proved for example min and max temp so I used something else to be displayed
- I can't tell from design what do we want to do with the header while scrolling apart from making it smaller, so I used a background for this
- For further explanations search for "NOTE:"
