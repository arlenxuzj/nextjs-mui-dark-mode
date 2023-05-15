import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
  useColorScheme
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function Home() {
  const { mode, setMode, systemMode } = useColorScheme();
  const [currentMode, setCurrentMode] = useState<
    'light' | 'dark' | 'system' | undefined
  >(undefined);
  const [resolvedMode, setResolvedMode] = useState<string | undefined>(
    undefined
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentMode(mode);
    setResolvedMode(systemMode || mode);
  }, [mode]);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItem: 'center',
        p: 3
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4
        }}
      >
        <svg
          width={200}
          height={200}
          fill='var(--mui-palette-text-primary)'
          viewBox='0 0 128 128'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z'></path>
        </svg>
        <Typography
          variant='h1'
          fontWeight='400'
          sx={{
            alignSelf: 'center'
          }}
        >
          +
        </Typography>
        <svg
          width={120}
          height={120}
          viewBox='0 0 128 128'
          style={{
            alignSelf: 'center'
          }}
        >
          <path
            fill='#1FA6CA'
            d='M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z'
          ></path>
          <path
            fill='#1C7FB6'
            d='M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z'
          ></path>
          <path fill='#1FA6CA' d='M48 77.8v18.4l32 18.4V96.2L48 77.8z'></path>
          <path
            fill='#1C7FB6'
            d='M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z'
          ></path>
        </svg>
      </Box>
      <Stack spacing={2}>
        <Typography variant='h4'>
          Persisted {currentMode}
          {currentMode === 'system' && ` (${resolvedMode})`} mode
        </Typography>
        <Select
          value={currentMode || ''}
          fullWidth
          onChange={e => {
            setMode(e.target.value as 'light' | 'dark' | 'system');
          }}
        >
          <MenuItem value='system'>System</MenuItem>
          <MenuItem value='light'>Light</MenuItem>
          <MenuItem value='dark'>Dark</MenuItem>
        </Select>
        <Button
          variant='contained'
          endIcon={
            resolvedMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />
          }
          sx={theme => ({
            textTransform: 'none',
            background: `linear-gradient(to top right, #0a7ffe 0%, ${theme.vars.palette.primary.main} 100%)`
          })}
          onClick={() => {
            setMode(resolvedMode === 'dark' ? 'light' : 'dark');
          }}
        >
          Toggle {resolvedMode === 'dark' ? 'Light' : 'Dark'} Mode
        </Button>
      </Stack>
    </Box>
  );
}
