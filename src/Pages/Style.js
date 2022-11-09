import { styled } from "@mui/material/styles";

const useStyles = styled(() => ({
    newsfont: {
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '19px',
        letterSpacing: '-0.165px',
    },
    highlightCard: {
        borderWidth: '1px 1px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgba(39, 39, 39, 0.2)',
        borderRadius: '0px 4px 4px 0px',
    },
}));

export { useStyles };