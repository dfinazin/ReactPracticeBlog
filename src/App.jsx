import './App.css';
import styled from 'styled-components';

const Div = styled.div`
    text-align: left;
`;

export const App = () => {
    return (
        <div className="card">
            <i className="fa fa-map"></i>
            <div>Ghbdtn</div>
            <Div>456</Div>
        </div>
    );
};
