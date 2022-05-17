import React from 'react';
import { useStyleConfig } from '@chakra-ui/react'

//Td component used to override Chakra Td component styles
const Box = props => {
    const { variant, ...rest } = props

    const styles = useStyleConfig('Box', { variant })
  
    return <div __css={styles} {...rest} />
}

export default Box;