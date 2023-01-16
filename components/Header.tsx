import ThemeToggler from './ThemeToggler';

const Header = ({ children, ...props }: Children & Attrs<"header">) => {

  return (
    <header {...props} className='flex gap-2 '>
      <a className='fw-900'>Hi</a>
      <nav></nav>
      <ThemeToggler className='' />
    </header>
  )
};

export default Header;