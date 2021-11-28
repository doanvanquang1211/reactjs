const app = document.querySelector(".root");
const timer = document.querySelector(".main");
const list = document.querySelector(".list");




class HelloMessage extends React.Component {





    render() {
        return (
            <div>
                <p>Xin chào: {this.props.name}</p>
            </div>
        );
    }
}




ReactDOM.render(<HelloMessage name="Quang" />, app)



class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }

    }
    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }
    componentDidMount() {
        this.time = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillunmount() {
        clearInterval(this.time)
    }

    render() {
        return (
            <div>
                Giây: {this.state.seconds}

            </div>
        );
    }
}
ReactDOM.render(<Timer />, timer)




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render() {
        return (
            <div>
                <h3>Danh sách công việc</h3>
                <TodoApp items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label>Bạn cần làm gì</label>
                    <input type="text" value={this.state.text} onChange={this.handleChange} />
                    <button>Thêm #{this.state.items.length + 1}</button>
                </form>
            </div>
        );
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem), text: ''
        }))
    }

}


class TodoApp extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}



ReactDOM.render(<App />, list)

