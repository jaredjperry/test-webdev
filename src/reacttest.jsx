/* global React ReactDOM */

(function() {

    var HelloWorld = React.createClass({
        propTypes: {
            date: React.PropTypes.instanceOf(Date)
        },
        getInitialState: function() {
            return {name: "somebody"};
        },
        updateName: function(e) {
            this.setState({name: e.target.value});
        },
        render: function() {
            return (
                <div>
                    <form>
                        <input type="text" placeholder="What is your name?" onChange={this.updateName} />
                    </form>
                    <p>
                        Hello, {this.state.name}! It is {this.props.date.toTimeString()}
                    </p>
                </div>
            );
        }
    });

    setInterval(function() {
        ReactDOM.render(
            <HelloWorld date={new Date()} />,
            document.getElementById("example")
        );
    }, 500);

    var TodoList = React.createClass({
        propTypes: {
            items: React.PropTypes.array
        },
        render: function() {
            var createItem = function(item) {
                return <li key={item.id}>{item.text}</li>;
            };
            return <ul>{this.props.items.map(createItem)}</ul>;
        }
    });
    var TodoApp = React.createClass({
        getInitialState: function() {
            return {items: [], text: ""};
        },
        onChange: function(e) {
            this.setState({text: e.target.value});
        },
        handleSubmit: function(e) {
            e.preventDefault();
            var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
            var nextText = "";
            this.setState({items: nextItems, text: nextText});
        },
        render: function() {
            return (
                <div>
                    <h3>TODO</h3>
                    <TodoList items={this.state.items} />
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.onChange} value={this.state.text} />
                        <button>{"Add #" + (this.state.items.length + 1)}</button>
                    </form>
                </div>
            );
        }
    });

    ReactDOM.render(<TodoApp />, document.getElementById("example2"));

})();
