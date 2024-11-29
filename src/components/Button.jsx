

const Button = ({variant, size, text, onClick}) => {

  const variants = {
    light: 'bg-blue-300 rounded-2xl text-white mt-8 mb-2 mr-4 text-sm font-bold',
    main: 'bg-blue-400 rounded-2xl text-white mt-7 ml-16 text-sm font-bold',
    dark: 'bg-gray-200 rounded-2xl text-black h-8 w-16 mt-7 text-sm font-bold',
    black: 'bg-black rounded-2xl text-white h-8 w-16 mt-7 text-sm font-bold'

  }

  const sizes = {
    sm: 'h-8 w-16',
    md: 'h-8 w-3/4',
    lg: 'h-12 w-24'
  }

  return (
    <button className={variants[variant] + ' ' + sizes[size]} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
