import MeetupList from "../components/meetups/MeetupList";
const dummy_item = [
  {
    id: "a1",

    image:
      "https://en.wikipedia.org/wiki/Hampi#/media/File:Hampi_virupaksha_temple.jpg",
    title: "my first meet up",
    address: "the famous hampi cave",
    description: "this is our first meetup",
  },
  {
    id: "a2",

    image:
      "https://www.istockphoto.com/photo/the-india-gate-in-delhi-gm898467608-247930024?phrase=delhi",
    title: "my second meet up",
    address: "india gate ,new delhi",
    description: "this is our second meetup",
  },
  {
    id: "a3",

    image:
      "https://www.istockphoto.com/photo/the-india-gate-in-delhi-gm898467608-247930024?phrase=delhi",
    title: "my third meet up",
    address: "green park statium,kanpur",
    description: "this is our third meetup",
  },
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

export function getStaticProps() {
  return {
    props: 
      {
        meetups: dummy_item,
      },
    
  };
}

export default HomePage;
