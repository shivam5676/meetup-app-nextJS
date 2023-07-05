import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetUpViewer from "../../components/meetups/MeetupViewer";

function MeetUpDetails(props) {
  const router = useRouter();
  const userId = router.query.meetid;
  console.log(props.meetupdata.meetupdata);

  return <MeetUpViewer meetups={props.meetupdata.meetupdata}></MeetUpViewer>;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://techking08:gFQUmENkWxnmNVHR@cluster0.0mtrgnx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const result = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: result.map((currentMeetup) => ({
      params: { meetid: currentMeetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetid;
  console.log(meetupid);
  const client = await MongoClient.connect(
    "mongodb+srv://techking08:gFQUmENkWxnmNVHR@cluster0.0mtrgnx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupid),
  });
  client.close();
  return {
    props: {
      meetupdata: {
        meetupdata: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
        },
      },
    },
  };
}
export default MeetUpDetails;
