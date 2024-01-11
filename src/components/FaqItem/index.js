// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isClicked: false}

  buttonClicked = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderAnswer = () => {
    const {isClicked} = this.state
    const renderImage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button
        type="button"
        onClick={this.buttonClicked}
        className="plus-minus-image"
      >
        <img src={renderImage} alt={altText} />
      </button>
    )
  }

  renderBelowAnswer = () => {
    const {faqList} = this.props
    const {answerText} = faqList
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqList} = this.props
    const {questionText} = faqList

    return (
      <li className="faq-item">
        <div className="faq-inside">
          <h1 className="faq-question">{questionText}</h1>
          {this.renderAnswer()}
        </div>
        {this.renderBelowAnswer()}
      </li>
    )
  }
}
export default FaqItem
