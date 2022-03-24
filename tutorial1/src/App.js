import { Container } from 'react-bootstrap'
import HelloWorldComponent from './components/HelloWorld'
import Layout from './components/Layout'
export default function App() {
    return (
        <Layout>
            <Container>
                <h1>Hello react.js</h1>
                <HelloWorldComponent message={'Hello, world!'} test={'another example'} Detail={Test} />
            </Container>
        </Layout>
    )
}


function Test() {
    return (
        <h1>Another Test</h1>
    )
}