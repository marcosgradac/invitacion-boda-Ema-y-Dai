import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  palette: { mode: 'light', primary: { main: '#a88743', contrastText: '#fffdf7' }, secondary: { main: '#6a3039' }, background: { default: '#151b16', paper: '#fbf5e9' }, text: { primary: '#28241f', secondary: '#6c6458' } },
  typography: { fontFamily: 'Montserrat, sans-serif', h1: { fontFamily: 'Cormorant Garamond, serif' }, h2: { fontFamily: 'Cormorant Garamond, serif' }, h3: { fontFamily: 'Cormorant Garamond, serif' }, button: { textTransform: 'none', letterSpacing: '.04em', fontWeight: 500 } },
  shape: { borderRadius: 4 },
  components: { MuiButton: { styleOverrides: { root: { minHeight: 48, paddingInline: 24, borderRadius: 999 } } }, MuiTextField:{defaultProps:{variant:'outlined'}},MuiDialog:{styleOverrides:{paper:{background:'#fbf5e9'}}} }
})
