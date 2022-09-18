import Image from 'next/image'
import type { NextPage } from 'next'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material'
import { useTheme, makeStyles} from '@mui/material/styles'

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}> 
      <Container maxWidth="lg">
        <Box
            minHeight='95vh'
            display = 'flex'
            flexDirection= 'column'
            justifyContent= 'center'
            textAlign='center'
            alignItems= 'center'
        >
          <Image src="/waiting.svg" alt="just wait bitch" width={240} height={240} />
          <Typography variant='h5' fontWeight='bold'>
              olaaa its still in-work progress just wait...
          </Typography>
          <Typography variant='subtitle1'>
            @rigmarole
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  )
  
}

export default Home
