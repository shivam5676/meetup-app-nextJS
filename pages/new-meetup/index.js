import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function AddMeetUp(){
    const meetupHAndler=async (formData)=>{
        const response=await fetch("/api/new-meetup",{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{"Content-Type":"application/json"}
        })
        const result=await response.json()
        console.log(result)
    }
return <NewMeetupForm onAddMeetup={meetupHAndler}></NewMeetupForm>
}
export default AddMeetUp