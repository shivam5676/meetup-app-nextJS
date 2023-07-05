import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://techking08:gFQUmENkWxnmNVHR@cluster0.0mtrgnx.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetupsArray = await meetupCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetupsArray.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id:meetup._id.toString()
      })),
    },
    revalidate:1
  };
}

export default HomePage;
