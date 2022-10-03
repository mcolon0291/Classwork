const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component{
    render() {
        const {logs} = this.props
        return(
            <DefaultLayout title="Captain's Log" group="Logs">
                <div>
                    <h1>Captain's Log Index Page</h1>
                    <ul id="logs-index">
                        {logs.map((log) => {
                            return (
                                <li key={log._id}>
                                    Log: <a href={`/logs/${log._id}`}>{log.title}  {log.entry}</a>
                                    {}
                                </li>
                                
                            )
                        })}
                    </ul>

                    <nav id="creating">
                        <a href="logs/new">Create a new a log </a>
                    </nav>
                </div>
                </DefaultLayout>
        )
    }
}

module.exports = Index;