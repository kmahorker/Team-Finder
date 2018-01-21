class RabbitShow extends React.Component {
    propTypes: {
        name: React.PropTypes.string,
        age: React.PropTypes.number
    }

    render() {
        return (
            <div>
                Hello World
                <h2>{this.props.name}</h2>
                <p>This Rabbit is {this.props.age} years old</p>
            </div>
        )
    }
}