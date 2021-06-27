import { Router } from 'express'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos'
import { getAuth, putAuth } from '../controllers/auth'

const router: Router = Router()

router.get('/todos', getTodos)

router.post('/add-todo', addTodo)

router.put('/edit-todo/:id', updateTodo)

router.delete('/delete-todo/:id', deleteTodo)

router.get('/login', getAuth)

router.put('/signup', putAuth)

export default router
