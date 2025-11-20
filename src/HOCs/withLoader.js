import React, { useState } from 'react'
import { Loader, LoaderLogo } from './withLoaderStyles'

const withLoader = (WrappedComponent) => {
  return () => {
    const [loading, setLoading] = useState(false)

    return (
        <>
            {loading && 
                <Loader>
                    <LoaderLogo src='' />
                </Loader>   
            }
        </>
    )
  }
}

export default withLoader
