import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
    className,
    post: { id, title, imageUrl, content, publishedAt },
}) => {
    return (
        <div className={className}>
            {imageUrl ? <img src={imageUrl} alt={title} /> : <></>}
            <H2>{title}</H2>
            <div className="special-panel">
                <div className="published-at">
                    <Icon id="fa-calendar-o" margin="0px 7px 0px 0px" size="18px" />
                    {publishedAt}
                </div>
                <div className="buttons-panel">
                    <Icon
                        id="fa-pencil-square-o"
                        margin="0px 10px 0px 0px"
                        size="21px"
                    />
                    <Icon id="fa-trash-o" size="21px" />
                </div>
            </div>
            <div>{content}</div>
        </div>
    );
};

export const PostContent = styled(PostContentContainer)`
    & img {
        float: left;
        margin: 0 20px 8px 0;
    }
    & .special-panel {
        display: flex;
        justify-content: space-between;
        margin: -10px 0 20px;
        font-size: 20px;
    }
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
    & .post-text {
        font-size: 18px;
    }
`;
