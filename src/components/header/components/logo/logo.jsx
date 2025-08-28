import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const IconContainer = ({ className }) => (
    <div className={className}>
        <i className="fa fa-code" aria-hidden="true"></i>
    </div>
);

const LargeText = styled.div`
    font-size: 48px;
    font-weight: 600;
    line-height: 48px;
    margin-top: 17px;
`;

const SmallText = styled.div`
    font-size: 18px;
    font-weigth: bold;
`;

const logoContainer = ({ className }) => (
    <Link className={className} to="/">
        <Icon id="fa-code" size="70px" margin="0 10 0 0" />
        <div>
            <LargeText>Блог</LargeText>
            <SmallText>Веб-разработчика</SmallText>
        </div>
    </Link>
);

export const Logo = styled(logoContainer)`
    display: flex;
    margin-top: -21px;
`;
