import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
    return (
        <div className={className}>
            <div className="published-at">
                <Icon
                    id="fa-calendar-o"
                    margin="0px 7px 0px 0px"
                    size="18px"
                    onClick={() => {}}
                />
                {publishedAt}
            </div>
            <div className="buttons-panel">
                {editButton}
                <Icon id="fa-trash-o" size="21px" onClick={() => {}} />
            </div>
        </div>
    );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
    display: flex;
    justify-content: space-between;
    margin: ${(margin) => margin};
    font-size: 20px;

    & .published-at {
        display: flex;
        font-size: 18px;
    }

    & i {
        position: relative;
        top: -1px;
    }
    & .buttons-panel {
        display: flex;
    }
`;
