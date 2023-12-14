import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Export from "../products/Export";
import Coir from "../products/Coir";
import Image from "../../assets/images/background.svg";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="main"
    >
      {value === index && <Typography component={"div"}>{children}</Typography>}
    </div>
  );
};

const ItemsList = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <div className="news_title">
        <h1 className="h1_gray">
          Best Coir<>&nbsp;</>
          <span className="span_green">and Exports</span>
        </h1>
      </div>
      <Box
        className="items_lists"
        sx={{
          display: "grid",
          width: "100%",
          background: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundAttachment: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Coir Products" />
            <Tab label="Exports" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Coir />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Export />
        </TabPanel>
      </Box>
    </React.Fragment>
  );
};

export default ItemsList;
