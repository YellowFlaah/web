import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import ServiceTwo from "./ServiceTwo";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles({
  service: {
    marginTop: "1.6rem",
  },
  tabhead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    background: "#1f568e",
    borderRadius: "100vw",

    "& .MuiTab-root.Mui-selected": {
      color: "#bd1e1e !important",
      fontWeight: "600",
      background: "white",
      borderRadius: "100vw",
      margin: "0.3rem",
    },
  },
  box: {
    display: "flex",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  middle: {
    display: "none",
  },
});
function Service() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const images = ["./images/chat.png"];
  const imagesTwo = ["./images/chat.png", "./images/phone-call.png"];
  const imagesThree = [
    "./images/chat.png",
    "./images/phone-call.png",
    "./images/email.png",
  ];
  return (
    <Box className={classes.service} sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className={classes.tabhead}>
          <Tabs
            // TabIndicatorProps={{
            //   style: {
            //     background: "white",
            //     borderWidth: "100vw",
            //     height: "100px",
            //     color: "black",
            //   },
            // }}

            value={value}
            onChange={handleChange}
            className={classes.tab}
            aria-label="basic tabs example"
          >
            <Tab disableRipple label="Pay As You Go" {...a11yProps(0)} />
            <Tab disableRipple label="Enterprise" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={classes.box}>
          <FirstBox />
          <SecondBox
            title="1 TOKEN"
            upf="Single User License"
            user="1 Free! Token*"
            amount="$15.00"
            maincolor="#0284c7"
            review="3000"
            width="25%"
            index="1"
            show={false}
            side={false}
            image={images}
          />
          <div
            style={{
              width: "25%",
              position: "relative",
              zIndex: "3",
              transform: "scale(1.1)",
              background: "white",
            }}
          >
            <SecondBox
              className={classes.middle}
              title="10 TOKENS"
              upf="Instant Business"
              user="2 Free! Tokens*"
              amount="$120.00"
              maincolor="#0284c7"
              review="7090"
              width="100%"
              index="3"
              show={true}
              side={false}
              image={imagesTwo}
              label="./images/booklet.png"
            />
          </div>

          <SecondBox
            title="50 TOKENS"
            upf="Instant Professional"
            user="4 Free! Tokens*"
            amount="$500.00"
            maincolor="#0284c7"
            review="9640"
            width="27%"
            index="1"
            side={true}
            show={true}
            label="./images/booklet.png"
            image={imagesThree}
          />
          <div
            style={{
              width: "25%",
              position: "relative",
              zIndex: "3",
              transform: "scale(1.1)",
              background: "white",
            }}
          >
            <SecondBox
              className={classes.middle}
              title="100 TOKENS"
              upf="Instant Premium"
              user="6 Free! Tokens*"
              amount="$750.00"
              maincolor="#0284c7"
              review="7090"
              width="100%"
              side={false}
              index="3"
              show={true}
              image={imagesThree}
              label="./images/booklet.png"
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ServiceTwo />
      </TabPanel>
    </Box>
  );
}

export default Service;
