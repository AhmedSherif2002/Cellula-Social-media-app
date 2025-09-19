import BackwardButton from './BackwardButton'

interface PropsInterface {
    children: React.ReactNode
}

const Header: React.FC<PropsInterface> = ({ children }) => {
  return (
    <div className="header flex flex-row justify-between items-center border-b-1 border-gray-200 p-5">
        <BackwardButton/>
        { children }
    </div>
  )
}

export default Header
