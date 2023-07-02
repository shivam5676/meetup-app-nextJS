import { useRouter } from "next/router"

function meetUpDetails(){
    const router=useRouter()
  const userId=router.query["meetup-details"]
    return <h1>{userId}</h1>
}
export default meetUpDetails