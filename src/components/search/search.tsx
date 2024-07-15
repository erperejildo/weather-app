import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  useContext,
  useState,
} from 'react';
import { GoSearch } from 'react-icons/go';
import { ForecastContext } from '../../ForecastContext';
import './search.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef<HTMLInputElement>(() => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const context = useContext(ForecastContext);

  if (!context) return null;

  const { setLocation } = context;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      search();
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      search();
    }
  };

  const handleOptionSelect = (_event: any, newValue: string | null) => {
    if (newValue) {
      search(newValue);
    }
  };

  const search = (value = inputValue) => {
    setLocation(value);
    updateSearchHistory(value);
    setInputValue('');
  };

  const updateSearchHistory = (searchTerm: string) => {
    setSearchHistory((prevHistory) => {
      const newHistory = [...new Set([searchTerm, ...prevHistory])];
      // NOTE: in case we wanted to limit it
      // return newHistory.slice(0, 10);
      return newHistory;
    });
  };

  const filteredHistory = searchHistory.filter((term) =>
    term.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="search">
      <Autocomplete
        freeSolo
        disablePortal
        disableClearable={true}
        options={filteredHistory}
        inputValue={inputValue}
        onInputChange={(_event, newValue) => setInputValue(newValue)}
        onChange={handleOptionSelect}
        classes={{ clearIndicator: 'hide-clear-indicator' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            variant="standard"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleSearchClick}
                      disabled={!inputValue.trim()}
                    >
                      <GoSearch />
                    </IconButton>
                  </InputAdornment>
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
});

Search.displayName = 'Search';

export { Search };
