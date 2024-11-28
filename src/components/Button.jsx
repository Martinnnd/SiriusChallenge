

const Button = ({variant, size, text, onClick}) => {

  const variants = {
    primary: 'bg-black rounded-2xl text-white h-8 w-16 mt-7 text-sm font-bold',
    secondary: 'bg-gray-200 rounded-2xl text-black h-8 w-16 mt-7 text-sm font-bold'

  }

  const sizes = {
    sm: 'h-8 w-16',
    md: 'h-10 w-20',
    lg: 'h-12 w-24'
  }

  return (
    <button className={variants[variant] + ' ' + sizes[size]} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
