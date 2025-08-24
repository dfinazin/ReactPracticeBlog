import './App.css';
import styled from 'styled-components';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

const Div = styled.div`
    text-align: left;
`;

export const App = () => {
    return (
        <div className="card">
            <LayersTwoToneIcon color="primary" sx={{ letterSpacing: '-0.05em' }} />
            <AddTwoToneIcon
                color="primary"
                sx={{ fontSize: 15, letterSpacing: '-0.05em' }}
            />
            +<i className="fa fa-map"></i>
            <div>Ghbdtn</div>
            <Div>456</Div>
        </div>
    );
};
