import { type FC, useState } from 'react';
import Box from '@mui/material/Box';
import { Dialog, DialogContent, DialogTitle, Slider } from '@mui/material';
import Button from '@mui/material/Button';

interface Image360Props {
  cover: string;

  images360: string[];

  images: string[];

  alt: string;
}

export const Image360: FC<Image360Props> = ({ cover, images360, images, alt }) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [show360, setShow360] = useState(false);
  const [index360, setIndex360] = useState(0);

  const handelShow360 = () => {
    setShow360(true);
  };

  const handleClose360 = () => {
    setShow360(false);
  };

  const handelShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange360 = (_event: unknown, value: number | number[]) => {
    setIndex360(value as number);
  };

  const handleChange = (_event: unknown, value: number | number[]) => {
    setIndex(value as number);
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <img width="200px" src={cover} alt={alt} />

        {images360.length > 0 && (
          <Button
            variant="contained"
            color="success"
            sx={{ position: 'absolute', bottom: 0, left: 0 }}
            onClick={handelShow360}
          >
            360
          </Button>
        )}

        {images.length > 0 && (
          <Button
            variant="contained"
            color="success"
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
            onClick={handelShow}
          >
            ...
          </Button>
        )}
      </Box>

      <Dialog open={show360} onClose={handleClose360}>
        <DialogTitle>360 preview</DialogTitle>

        <DialogContent>
          <img width="200px" src={images360[index360]} alt={alt} />

          <Slider value={index360} onChange={handleChange360} max={images360.length - 1} />
        </DialogContent>
      </Dialog>

      <Dialog open={show} onClose={handleClose}>
        <DialogTitle>Preview</DialogTitle>

        <DialogContent>
          <Box
            sx={{
              width: '400px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img width="200px" src={images[index]} alt={alt} style={{ display: 'block' }} />
          </Box>

          <Slider value={index} onChange={handleChange} max={images.length - 1} />
        </DialogContent>
      </Dialog>
    </>
  );
};
