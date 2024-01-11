// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faq-details">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqList={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
