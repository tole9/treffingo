import styled from '@emotion/styled'

// eslint-disable-next-line
export const NewListWrapper = styled.div(props => ({
  ...props.theme.flexRow,
  width: '100%',
  '& input': {
    marginTop: '10px',
  },
}))
