import classes from "./Page2.module.css";
function Image({ title, description, image }) {
  return (
    <div className={classes.first_image}>
      <img width={50} src={image} className={classes.img} alt="" />
      <p className={classes.firstp}>{title}</p>
      <p className={classes.secondp}>{description}</p>
    </div>
  );
}

export default Image;
