import type { } from "next-themes";
import { HTMLAttributes } from "react";
import useColorScheme from '@/hooks/useColorScheme';

const ThemeToggler = ({ ...props }: HTMLAttributes<HTMLButtonElement>) => {

  const { theme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  if (!hasMountedInBrowser) return (<button  {...props} >
    <span className="bf-i-ph-circle-half sr-only sm:not-sr-only capitalize">Auto</span>
 </button>)

  return (
    <button onClick={e => toggleTheme()}  className='bg-red3' {...props} >
      {theme === "system" && <span className="bf-i-ph-circle-half sr-only sm:not-sr-only capitalize flex gap-1 ac jc">Auto</span>}
      {theme === "dark" && <span className="bf-i-ph-moon sr-only sm:not-sr-only capitalize flex gap-1 ac jc">Dark</span>}
      {theme === "light" && <span className="bf-i-ph-sun sr-only sm:not-sr-only capitalize flex gap-1 ac jc">Light</span>}
    </button>
  )
}

export default ThemeToggler;
