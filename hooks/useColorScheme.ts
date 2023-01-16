import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

 const useColorScheme = () => {

  const { theme, setTheme } = useTheme()
  const [hasMountedClientSide, setHasMountedClientSide] = useState(false)
  useEffect(() => {
    setHasMountedClientSide(true)
  }, []);
  const toggleTheme = () => {
    if (!hasMountedClientSide) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  }

  return { theme: theme ?? 'system', toggleTheme, setTheme }
}


export default useColorScheme;