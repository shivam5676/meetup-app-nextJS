import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function AddMeetUp(){
    const meetupHAndler=(formData)=>{
        console.log(formData)
    }
return <NewMeetupForm onAddMeetup={meetupHAndler}></NewMeetupForm>
}
export default AddMeetUp