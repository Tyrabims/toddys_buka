import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MenuBtn = () => {
  return (
    <div>
      <Link to='/menu'>
        <Button type='button' className='btn btn-success btn-lg'> Our Full Menu</Button>
      </Link>
    </div>
  )
}

export default MenuBtn