import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'

import Button from '../../components/Button'
import List from '../List'

import { NewListWrapper } from './style'
import AnimateOpacity from '../../components/AnimateOpacity'
import NewListForm from './NewListForm'

const addListAdditionalStyle = {
  main: {
    width: '150px',
    height: '100px',
  },
  hover: {
    transform: 'scale(1.05)',
  },
}

function NewList({ theme }) {
  const [showList, setShowList] = useState(true)
  const [showButton, setShowButton] = useState(false)

  return (
    <NewListWrapper>
      <AnimateOpacity
        _in={showButton}
        onEntering={() => setShowList(false)}
        onExited={() => setShowList(true)}
        timeout={50}
      >
        <Button
          buttonContent="Add a list"
          additionalStyle={addListAdditionalStyle.main}
          hover={addListAdditionalStyle.hover}
          onClick={() => setShowList(true)}
        />
      </AnimateOpacity>
      <AnimateOpacity
        _in={showList}
        onExited={() => setShowButton(true)}
        onEntering={() => setShowButton(false)}
        timeout={50}
      >
        <List closeList={() => setShowList(false)}>
          <NewListForm />
        </List>
      </AnimateOpacity>
    </NewListWrapper>
  )
}

NewList.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string,
      primary: PropTypes.string,
    }),
  }).isRequired,
}

export default withTheme(NewList)
