var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'Do not enter your name and then press the button'
        };
    },

    getInitialState: function () {
      return {
        name: this.props.name
      };
    },

    onButtonClick: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;

        this.setState ({
          name: name
        });
        // alert('I said don\'t press the fucking button '+name+', what is the matter with you.');
    },
    render: function () {
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
            <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        </div>

        );
    }
});

var firstName = 'Matt';
var message = 'This is from the variable';

ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);
