import classes from "./Page4.module.css";
function Parrot({ image, icon, two }) {
  console.log(two);
  return (
    <div className={classes.maincontainer}>
      <div className={classes.parrotDiv}>
        <img className={classes.pa} src={image} />
        <div className={`${classes.icon} ${two ? `${classes.itwo}` : ""}`}>
          <i className={icon}></i>
        </div>
      </div>
    </div>
  );
}

export default Parrot;
