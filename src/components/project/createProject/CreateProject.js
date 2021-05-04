import React from 'react'
import {Divider, Tab, Tabs,} from '@material-ui/core';
import TerrainIcon from '@material-ui/icons/Terrain';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import RawCreateProject from "./RawCreateProject";
import GeoTIFFCreateProject from "./GeoTIFFCreateProject";
import Box from "@material-ui/core/Box";

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
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default function CreateProject() {


  function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          centered={true}
          aria-label="scrollable force tabs example"
        >
        <Tab label="Raw Imagery" icon={<BrokenImageIcon />} {...a11yProps(0)} />
        <Tab label="GeoTIFF" icon={<TerrainIcon />} {...a11yProps(1)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        <RawCreateProject/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <GeoTIFFCreateProject/>
      </TabPanel>
      <Divider/>
      </div>
  )
}
