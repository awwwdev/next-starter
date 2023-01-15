import ThemeToggler from './ThemeToggler';

const Header = ({ children, ...props }: Children & ClassName) => {

  return (
    <header {...props} className='flex gap-2 '>
      <a className='fw-900'>Hi</a>
      <nav></nav>
      <ThemeToggler className='mis-auto' />
    </header>
  )
};

export default Header;