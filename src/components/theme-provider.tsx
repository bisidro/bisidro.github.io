import React from "react";
   import { useDarkMode } from "usehooks-ts";

   export default function ThemeProvider({ children }: { children: React.ReactNode }) {
     const { isDarkMode, toggle } = useDarkMode();

     React.useEffect(() => {
       document.body.className = isDarkMode ? "dark" : "";
     }, [isDarkMode]);

     return (
       <div>
         <button onClick={toggle}>
           Toggle {isDarkMode ? "Light" : "Dark"} Mode
         </button>
         {children}
       </div>
     );
   }