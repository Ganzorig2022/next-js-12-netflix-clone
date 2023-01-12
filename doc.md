## Add local repo to remote using terminal

https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

1. git add . git commit -m "msg"
2. git remote add origin https://github.com/Ganzorig2022/next-js-12-netflix-clone.git
3. git remote -v (for checking)
4. git push --set-upstream origin main

## 1 - Creating new project with tailwindcss & typescript

```bash
npx create-next-app -e with-tailwindcss
```

## 2 - Install heroicons

```bash
npm i @heroicons/react
```

## 3 - Get movie data

1. https://www.themoviedb.org/
2. https://www.themoviedb.org/settings/api --> Create Api Key
   --api key-gee awna.
3. ".env.local" dotor key-gee oruulna. NEXT_PUBLIC_API_KEY
4. restart "yarn dev"
5. "/utils/requests.ts" file uusgene.
6.

## 4 - Text shadow package

https://www.npmjs.com/package/tailwindcss-textshadow

```bash
npm i -D tailwindcss-textshadow
```

2. "/tailwind.config.js" "plugins dotor "require('tailwindcss-textshadow')" gej bichne.

## 5 - Install tailwind scroll bar hide

```bash
npm i tailwind-scrollbar
```

```bash
npm i -D tailwind-scrollbar
```

1. "/tailwind.config.js" dotor require hiine.
2.

## 6 - Using Firebase (AUTHENTICATION)

1. Create firebase project
2. Web-iig songood "register" hiine.
3. Install firebase
4. https://console.firebase.google.com/u/0/project/netflix-clone-7a3ea/authentication/providers -luu "Email/Password-iig idewhjvvlne.

```bash
npm install firebase
```

4. "/firebase.ts" dotor "configuration" file-aa copy hiine. 4.

## 7 - React Hook Form

https://react-hook-form.com/

```bash
npm install react-hook-form
```

## 8 - Custom hook (useAuth)

1. "/hooks/useAuth.tsx"
2. "/pages/\_app.tsx" AuthProvider-aa WRAP hiine.

## 9 - Recoil (global state management)

```bash
npm i recoil
```

https://recoiljs.org/docs/introduction/getting-started

## 10 - MUI

```bash
npm install @mui/material @emotion/react @emotion/styled
```

## 11 - React Player (for youtube videos)

https://www.npmjs.com/package/react-player

```bash
npm i react-player
```

## 12 - Toaster (custom alert)

https://react-hot-toast.com/docs/toaster

```bash
npm i react-hot-toast
```
