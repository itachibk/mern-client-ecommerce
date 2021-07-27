import React from 'react'
import Layout from '../../components/Layout'
import TodoForm from '../../features/Todo/components/TodoForm'

const Home = (props) => {
    const handleTodoFormSubmit = (value) => {
        console.log('FormSubmit', value)
    }

    return (
        <div>
            <Layout>
                <TodoForm onSubmit={handleTodoFormSubmit} />
            </Layout>
        </div>
    )
}

export default Home
