import { Box } from '@mui/material';
import gridPattern from '../../assets/grid-pattern.svg';
import logo from '../../assets/logo.svg';
import '../../assets/css/Loader.css';

const Loader = () => {
  return (
    <>
      <Box
        className='loader-container'
        sx={{ backgroundImage: `url("${gridPattern}")`, backgroundSize: `70px` }}
      >
        <Box className='loader'>
          <Box className='loader-square'>
            <Box className='loader-animation-bg-square' />
            <Box className='internal-loader-square'>
              <img src={logo} style={{ position: 'relative', transform: `rotate(-45deg)` }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export { Loader };
