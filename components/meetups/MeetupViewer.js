
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetUpViewer(props) {
 console.log(props)

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.meetups.image} alt={props.meetups.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetups.title}</h3>
          <address>{props.meetups.address}</address>
        <h2>{props.meetups.description}</h2>
        </div>
        
        
      </Card>
    </li>
  );
}

export default MeetUpViewer;
