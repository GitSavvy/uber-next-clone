
https://stackoverflow.com/questions/43181606/nextjs-url-params-like-react-router

import { useRouter } from 'next/router'

const User = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>User: {id}</p>
}

export default User

  <Link href={{ pathname:'/confirm',  query: {pickUp:'California',dropOff:'Texas'}}}>

git push <remote> <branch with new changes>:<branch you are pushing to> 


git push origin main:uber-branch2
