DIGIBASERA WEBSITE - CHANGED FILES ONLY
=========================================

Ye zip sirf UN files ki he jo update/add ki gayi he. Isi folder structure
ke hisab se apne project (project-lovable-archive) me copy-paste kardo,
same path pe replace kar dena (overwrite).

1) HOME PAGE HERO - VIDEO PAR TEXT CLEAR
   File: src/components/Hero.tsx
   Kya kiya: Background video ke upar white/cream overlay ki opacity
   badhai + headline aur subtitle par soft text-shadow add kiya, taaki
   text hamesha clearly visible rahe, video kaisa bhi frame ho.

2) CAREERS PAGE HERO - IMAGE PAR TEXT CLEAR
   File: src/pages/CareersPage.tsx
   Kya kiya: Background image ke upar white wash/overlay strong kiya +
   heading aur paragraph par text-shadow add kiya, taaki text image ke
   upar bhi clearly readable rahe.

3) FAVICON = HEADER KA SAME LOGO
   Files: public/favicon.png, public/favicon.ico, public/favicon.svg,
          public/apple-touch-icon.png
   Kya kiya: Header me jo "DB" monogram logo use ho raha he, usi se
   favicon regenerate kiya (pehle favicon.svg alag design tha). Ab
   browser tab, bookmark, aur mobile home-screen icon sab jagah same
   logo dikhega.

4) ABOUT PAGE - TEAM MEMBERS KI REAL PHOTOS
   Files: src/data/teamData.ts
          src/assets/team/arman-ali.jpg
          src/assets/team/arbaj-saifi.jpg
          src/assets/team/mohd-danish.jpg
          src/assets/team/mohasin-ahmed.jpg
   Kya kiya: Pehle stock/Unsplash photos lagi thi, ab aapki diya hui
   real photos map kar di he:
     - 1st image  -> Arman Ali
     - 2nd image  -> Arbaj Saifi
     - 3rd image  -> Moh. Danish
     - 4th image  -> Mohasin Ahmed

NOTE: Design/layout me koi aur change nahi kiya he, sirf upar wale
4 fixes hi kiye he jo aapne bataye the. Build test (npm run build)
successfully pass ho gaya he, koi error nahi he.
