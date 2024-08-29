//@ts-nocheck
'use client';
import React, { useState } from 'react'

import "./faqItem.scss";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      key={item.idx + item.createDate}
      className={`faqList-item`}>
      <button
        className={`faq-btn ${isOpen ? " on" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='q-mark'>Q</span>
        {item.title}
      </button>
      <article
        dangerouslySetInnerHTML={{
          __html: item.content,
        }}
      />
    </li>
  )
}

export default FaqItem