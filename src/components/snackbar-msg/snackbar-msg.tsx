import Alert from '@mui/material/Alert/Alert';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import { forwardRef, useContext } from 'react';
import { ForecastContext } from '../../ForecastContext';

const SnackbarMsg = forwardRef<HTMLInputElement>(() => {
  const context = useContext(ForecastContext);

  if (!context) return;

  const handleClose = () => {
    context.setError(null);
  };

  return (
    <Snackbar
      open={!!context.error}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert severity="error">{context.error}</Alert>
    </Snackbar>
  );
});

SnackbarMsg.displayName = 'Snackbar Message';

export { SnackbarMsg };
