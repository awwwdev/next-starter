import { useTheme } from "next-themes";
import type { } from "next-themes";
import { HTMLAttributes, useEffect, useState } from "react";
import Icon from "@/components/Icon";
type RenderProp = (theme: string) => React.ReactNode;
type Props = ClassName & HTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode | RenderProp;
  onClick?: () => void;
}

const ThemeToggler = ({ children, onClick, ...props }: Props) => {

  const clickHandler = () => {
    toggleTheme();
    onClick?.();
  }
  const { theme, setTheme } = useTheme()
  const [hasMountedClientSide, setHasMountedClientSide] = useState(false)
  useEffect(() => setHasMountedClientSide(true), []);
  const toggleTheme = () => {
    if (!hasMountedClientSide) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  }

  if (children) {
    return (
      <button onClick={clickHandler} {...props}>
        {hasMountedClientSide &&
          <>
            {typeof children === "function" ? children(theme ?? "system") : children}
          </>
        }
      </button>
    )
  }
  return (
    <button onClick={clickHandler}  {...props}>
      {hasMountedClientSide && (
        <div className="flex ac gap-2 ">
          <Icon name={theme === "dark" ? "i-ph-moon" : theme === "light" ? "i-ph-sun" : "i-ph-circle-half"} className="c-gray11" />
          <span className="sr-only sm:not-sr-only capitalize">{theme !== "system" ? theme : 'Auto'}</span>
        </div>
      )}
    </button>
  )
}

export default ThemeToggler;