import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Other: React.FC = () => {
    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // 设置高度为整个视口高度
            width: '100%',   // 设置宽度为整个视口宽度
        }}>
            <CircularProgress />
        </Box>
    );
};

export default Other;
