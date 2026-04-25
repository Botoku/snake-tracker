'use client'
import React from 'react'
import { useParams } from 'next/navigation'

const SnakePage = () => {
    const params = useParams<{ 'snake-id': string[];  }>()
  return (
    <div>SnakePage</div>
  )
}

export default SnakePage