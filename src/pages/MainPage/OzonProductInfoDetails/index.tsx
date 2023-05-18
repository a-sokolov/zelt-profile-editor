import { type FC } from 'react';
import type { OzonProductInfo } from '@src/api/ozon';
import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Image360 } from './Image360';

interface OzonProductInfoDetailsProps {
  product: OzonProductInfo;
}

export const OzonProductInfoDetails: FC<OzonProductInfoDetailsProps> = ({ product }) => (
  <Card variant="outlined" sx={{ display: 'flex', gap: '16px', width: '100%', padding: '8px', borderRadius: '8px' }}>
    <Image360
      cover={product.primary_image}
      images360={product.images360}
      images={product.images}
      alt={product.barcode}
    />

    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Typography variant="h5" sx={{ mb: 0.5 }}>
        {product.name}
      </Typography>

      <Box>
        <Box>
          <Typography variant="body2">Barcode:</Typography>

          <Typography fontSize="lg" fontWeight="lg">
            {product.barcode}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography variant="body2">Total price:</Typography>

            <Typography fontSize="lg" fontWeight="lg">
              ₽{product.price}
            </Typography>
          </Box>

          <Button variant="contained" color="warning" size="small" sx={{ ml: 'auto', fontWeight: 600 }}>
            Explore
          </Button>
        </Box>
      </Box>
    </Box>
  </Card>
);
