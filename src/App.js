import { Outlet } from 'react-router-dom'
import AugmentedImage from './components/AugmentedImage/AugmentedImage'
import { Header } from './layout/Header'
import CustomTypography from './components/UA/Typography/Typography'

function App() {
  return (
    <div className="App">
      <Header />
      <CustomTypography variant='h2'>
        Hello
      </CustomTypography>
      <AugmentedImage />
      <Outlet />
    </div>
  )
}

export default App
