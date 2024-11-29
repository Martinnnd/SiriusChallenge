

const Button = ({variant, size, text, onClick}) => {

  const variants = {
    light: 'invisible sm:visible sm:bg-blue-300 sm:rounded-2xl sm:text-white sm:mt-8 sm:mb-2 sm:mr-4 sm:text-sm sm:font-bold sm:cursor-not-allowed',
    main: 'bg-blue-400 rounded-2xl text-white sm:mt-8 sm:mb-2 sm:mr-4 sm:ml-16 text-sm font-bold ',
    dark: 'bg-gray-200 rounded-2xl text-black h-8 w-16 mt-7 text-sm font-bold',
    black: 'bg-black rounded-2xl text-white h-8 w-16 mt-7 text-sm font-bold',
    modal: 'sm:invisible bg-blue-300 rounded-2xl text-white mt-5 mr-4 text-sm font-bold'

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
