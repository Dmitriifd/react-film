import React from 'react'

class FormWithRef extends React.Component {
	constructor(props) {
		super()
		this.state = {
			card: '',
			email: '',
		}
		this.firsNameRef = React.createRef()
		this.emailRef = React.createRef()
	}

	handleChange = (event) => {
		this.setState(() => ({[event.target.name]: event.target.value }), () => {
			if (this.state.card.length === 16) {
				this.emailRef.current.focus();
			}
		})
	}

	componentDidMount() {
		console.log(this.firsNameRef)
		this.firsNameRef.current.focus();
	}

	render() {
		const { card, email } = this.state

		return (
			<div>
				<input
					type='text'
					name='card'
					placeholder='firstName'
					value={card}
					onChange={this.handleChange}
					ref={this.firsNameRef}
				/>
				<input
					type='email'
					name='email'
					placeholder='email'
					value={email}
					onChange={this.handleChange}
					ref={this.emailRef}
				/>

				<br />
				<button onClick={this.handleSubmit}>Send</button>
			</div>
		)
	}
}

export { FormWithRef }
