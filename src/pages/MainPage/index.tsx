import { type FC, ChangeEvent, useState } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Progress } from '@src/components/Progress';

import { OzonProductInfoDetails } from './OzonProductInfoDetails';
import { useGetData } from './hooks/useGetData';
import { restoreAuthData } from './utils/restoreAuthData';
import { saveAuthData } from './utils/saveAuthData';

const ProfilePage: FC = () => {
  const [auth, setAuth] = useState(restoreAuthData());
  const [limit, setLimit] = useState(10);

  const { fetch, loading, error, ozonProductInfoList } = useGetData(auth);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setAuth((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {
      setLimit(parseInt(event.target.value, 10));
  }

    const handeGetData = () => {
    saveAuthData(auth);
    fetch(limit).then();
  };

  const getDataDisabled = loading || !auth.clientId || !auth.apiKey || !auth.token;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '350px' }}>
        <Input value={auth.clientId} name="clientId" placeholder="Ozon Client-Id" onChange={handleChange} />

        <Input value={auth.apiKey} name="apiKey" placeholder="Ozon Api-Key" onChange={handleChange} />

        <Input value={auth.token} name="token" placeholder="Ampika Token" onChange={handleChange} />

        <Input value={limit} name="limit" type="number" placeholder="Limit" onChange={handleChangeLimit} />
      </Box>

      <Button variant="contained" onClick={handeGetData} disabled={getDataDisabled}>
        Get data
      </Button>

      <Typography>Result:</Typography>

      <Progress loading={loading} error={error}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {ozonProductInfoList.map((ozonProduct) => (
            <OzonProductInfoDetails key={ozonProduct.id} product={ozonProduct} />
          ))}
        </Box>
      </Progress>
    </Box>
  );
};

export default ProfilePage;
