import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
type Props = {
  className?: string;
  children: (theme: string) => React.ReactNode;
}

const ThemeToggler = ({ className, children }: Props) => {

  const { theme, setTheme } = useTheme()
  const [hasMountedClientSide, setHasMountedClientSide] = useState(false)
  useEffect(() => setHasMountedClientSide(true), []);
  const toggleTheme = () => {
    if (!hasMountedClientSide) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  }
  return (
    // <select value={theme} onChange={e => setTheme(e.target.value)} data-test-id='theme-selector'>
    //   <option value="system">System</option>
    //   {mounted && (
    //     <>
    //       <option value="dark">Dark</option>
    //       <option value="light">Light</option>
    //     </>
    //   )}
    // </select>
    <button onClick={toggleTheme} className={`${className}`}>
      {hasMountedClientSide && children(theme)}
    </button>
  )

}

export default ThemeToggler;