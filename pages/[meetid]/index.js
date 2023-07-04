import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";

function MeetUpDetails() {
  const router = useRouter();
  const userId = router.query.meetid;
  return <h1>{userId}</h1>;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetid:'a1',
        },
      },
      {
        params: {
          meetid:'a2',
        },
      },
      {
        params: {
          meetid:'a3',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetid;
  console.log(meetupid);
  return {
    props: {
      meetupdata: {
        id: meetupid,
      },
    },
  };
}
export default MeetUpDetails;
